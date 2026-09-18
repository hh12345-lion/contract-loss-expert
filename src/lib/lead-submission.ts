import { appendRow, type CellValue } from "@/lib/google-sheets";
import { BRAND_NAME } from "@/lib/leadNotification";

export { BRAND_NAME };

/** Row 1 headers — one shared GOOGLE_SHEET_TAB_NAME; Form Type distinguishes rows. */
export const LEAD_SHEET_HEADERS = [
  "Timestamp",
  "Brand",
  "Form Type",
  "Full Name",
  "Email",
  "Phone Number",
  "Organisation",
  "Message",
] as const;

export interface LeadSubmission {
  fullName: string;
  email: string;
  phone: string;
  formType?: "contact" | "instruct";
  organisation?: string;
  message?: string;
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function opt(value: unknown): string {
  if (value == null) return "";
  return sanitize(String(value));
}

/** Prevent Sheets from treating +1… as a formula when using USER_ENTERED */
function formatPhoneForSheet(phone: string): string {
  if (!phone) return "";
  if (phone.startsWith("+") || phone.startsWith("=") || phone.startsWith("-")) {
    return `'${phone}`;
  }
  return phone;
}

export function resolveFormTypeLabel(formType?: string): "Contact" | "Instruct" {
  return formType === "instruct" ? "Instruct" : "Contact";
}

export function parseLeadBody(body: unknown): LeadSubmission | null {
  if (!body || typeof body !== "object") return null;

  const b = body as Record<string, unknown>;
  const fullName = opt(b.fullName);
  const email = opt(b.email).toLowerCase();

  if (!fullName || !email) return null;

  const formType = b.formType === "instruct" ? "instruct" : "contact";

  const freeText = opt(
    b.message ??
      b.Message ??
      b.description ??
      b.enquiry ??
      b.details ??
      b.summary ??
      b.notes ??
      b.matter
  );

  return {
    fullName,
    email,
    phone: b.phone != null ? String(b.phone).trim() : "",
    formType,
    organisation: opt(b.organisation),
    message: freeText,
  };
}

export function buildLeadSheetRow(lead: LeadSubmission): CellValue[] {
  return [
    new Date().toISOString(),
    BRAND_NAME,
    resolveFormTypeLabel(lead.formType),
    lead.fullName,
    lead.email,
    formatPhoneForSheet(lead.phone),
    lead.organisation ?? "",
    lead.message ?? "",
  ];
}

/**
 * Appends a lead row. Throws on API errors — callers soft-fail so webhook stays primary.
 */
export async function appendLeadToSheet(lead: LeadSubmission): Promise<void> {
  await appendRow(buildLeadSheetRow(lead));
}
