/** Map site-specific free-text field names to universal `message`. */
function resolveLeadMessage(body) {
  if (!body || typeof body !== "object") return "";
  const keys = [
    "message",
    "Message",
    "description",
    "enquiry",
    "details",
    "summary",
    "notes",
    "matter",
    "caseSummary",
    "additionalInfo",
    "additional_info",
    "caseDetails",
    "enquiryDetails",
    "caseBrief",
    "case_summary",
    "matterDescription",
    "additionalNotes",
    "caseBackground",
    "specificQuestions",
    "briefSummary",
    "conflict_info",
    "brief",
  ];
  for (const key of keys) {
    if (body[key] != null && String(body[key]).trim()) {
      return String(body[key]).trim();
    }
  }
  return "";
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const webhookUrl =
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim();

  if (!webhookUrl) {
    console.error("Lead_notification_url is not configured");
    return json(500, { error: "Lead notification is not configured" });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone =
    body.phone != null && body.phone !== undefined ? String(body.phone).trim() : "";
  const message = resolveLeadMessage(body);

  if (!fullName || !email) {
    return json(400, { error: "fullName and email are required" });
  }

  const outbound = {
    "Full Name": fullName,
    Email: email,
    "Phone Number": phone,
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
    message,
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outbound),
    });

    if (!res.ok) {
      console.error("Webhook responded with", res.status, await res.text());
      return json(502, { error: "Failed to deliver lead" });
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error("Webhook request failed", err);
    return json(502, { error: "Failed to deliver lead" });
  }
};

function json(statusCode, data) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
}
