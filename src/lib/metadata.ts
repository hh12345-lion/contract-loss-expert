import type { Metadata } from "next";
import { SITE_URL } from "./site";

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "ContractLossExpert: contract loss expert witness services",
};

/** Neutral English + x-default */
export function buildHreflangAlternates(path: string = "") {
  const url = `${SITE_URL}${path}`;
  return {
    canonical: url,
    languages: {
      en: url,
      "x-default": url,
    },
  };
}

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  nofollow = false,
  ogImage,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogImage?: string;
}): Metadata {
  const robots =
    noindex || nofollow
      ? { index: !noindex, follow: !nofollow }
      : { index: true, follow: true };

  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.BING_SITE_VERIFICATION;
  const image = ogImage
    ? {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      }
    : { ...OG_IMAGE, alt: "ContractLossExpert: contract loss expert witness services" };

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: buildHreflangAlternates(path),
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "ContractLossExpert",
      locale: "en_US",
      type: path.startsWith("/guides/") ? "article" : "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
    robots,
    ...(googleVerification && {
      verification: { google: googleVerification },
    }),
    ...(bingVerification && {
      other: { "msvalidate.01": bingVerification },
    }),
  };
}
