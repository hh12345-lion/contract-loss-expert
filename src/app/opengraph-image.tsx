import { ImageResponse } from "next/og";
import { COLORS, SITE_NAME } from "@/lib/site";

export const runtime = "edge";
export const alt = "ContractLossExpert: contract loss expert witness services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
          background: COLORS.background,
          color: COLORS.primary,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            width: 80,
            height: 4,
            background: COLORS.accent,
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: COLORS.accent,
            marginBottom: 20,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Contract Loss Expert Witness
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            lineHeight: 1.4,
            maxWidth: 820,
            color: COLORS.body,
          }}
        >
          Lost profits, wasted expenditure, and breach of contract quantum
        </div>
      </div>
    ),
    { ...size }
  );
}
