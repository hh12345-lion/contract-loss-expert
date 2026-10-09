import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentRoot } from "@/components/cookies/CookieConsentRoot";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

/** Every route is rendered on the server per request. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title:
    "Contract Loss Expert Witness | Lost Profits & Breach of Contract Damages",
  description:
    "Connect with qualified contract loss expert witnesses for courts, tribunals, arbitration, and mediation worldwide. Forensic accountants and economic damages specialists for lost profits, wasted expenditure, and breach of contract claims.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plex.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <CookieConsentRoot>
          <Header />
          <main className="min-w-0 flex-1">{children}</main>
          <Footer />
        </CookieConsentRoot>
      </body>
    </html>
  );
}
