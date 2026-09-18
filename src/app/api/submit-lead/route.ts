import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
  getLeadWebhookUrl,
  notifyLeadWebhook,
} from "@/lib/leadNotification";
import { appendLeadToSheet, parseLeadBody } from "@/lib/lead-submission";

/**
 * POST /api/submit-lead — webhook primary.
 * Optional Google Sheets: one shared tab + Form Type; soft-fail only.
 */
export async function POST(request: Request) {
  const webhookUrl = getLeadWebhookUrl();
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!sheetsConfigured && !webhookUrl) {
    console.error(
      "Lead submission not configured: missing Google Sheets env vars and Lead_notification_url"
    );
    return NextResponse.json(
      { error: "Lead submission is not configured" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const lead = parseLeadBody(body);
  if (!lead) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 }
    );
  }

  // Webhook primary — hard-fail only when configured and delivery fails.
  if (webhookUrl) {
    const webhookOk = await notifyLeadWebhook(
      {
        fullName: lead.fullName,
        email: lead.email,
        phone: lead.phone,
        message: lead.message ?? "",
      },
      webhookUrl
    );
    if (!webhookOk) {
      return NextResponse.json({ error: "Failed to deliver lead" }, { status: 502 });
    }
  }

  // Soft-fail Sheets — never block a successful webhook.
  if (sheetsConfigured) {
    try {
      await appendLeadToSheet(lead);
    } catch (err) {
      console.error("Google Sheets error (soft-fail):", {
        message: err instanceof Error ? err.message : "Unknown error",
        sheetId: process.env.GOOGLE_SHEET_ID?.trim().slice(0, 8) + "...",
        tab: process.env.GOOGLE_SHEET_TAB_NAME?.trim(),
      });
      if (!webhookUrl) {
        return NextResponse.json(
          { error: "Failed to save submission" },
          { status: 502 }
        );
      }
    }
  }

  return NextResponse.json({ ok: true });
}
