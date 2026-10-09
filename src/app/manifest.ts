import type { MetadataRoute } from "next";
import { COLORS, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "Contract loss expert witness matching for law firms and legal teams worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: COLORS.background,
    theme_color: COLORS.primary,
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
