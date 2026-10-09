const DEFAULT_SITE_URL = "https://contractlossexpert.com";

/** Canonical origin for SEO: strips www; ignores localhost/netlify preview env. */
export function getPublicSiteUrl(): string {
  const fallback = DEFAULT_SITE_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname.endsWith(".netlify.app")
    ) {
      return fallback;
    }
    u.hostname = u.hostname.replace(/^www\./i, "");
    return u.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = getPublicSiteUrl();

export const SITE_NAME = "ContractLossExpert";
export const SITE_EMAIL = "contact@contractlossexpert.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/contract-loss-expert";

/** Hostname for n8n webhook `domain` field: no protocol, no www */
export function getSiteDomain(): string {
  try {
    return new URL(SITE_URL).hostname.replace(/^www\./i, "");
  } catch {
    return "contractlossexpert.com";
  }
}

export const COLORS = {
  primary: "#19291A",
  accent: "#BC543A",
  highlight: "#CE9F53",
  background: "#F9F6F0",
  sectionAlt: "#F3EEE5",
  border: "#E2DACB",
  heading: "#19291A",
  body: "#3D3D3D",
} as const;
