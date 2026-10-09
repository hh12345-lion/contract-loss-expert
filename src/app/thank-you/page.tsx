import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ThankYouAnalytics } from "./ThankYouAnalytics";

export const metadata = createMetadata({
  title: "Thank You | ContractLossExpert.com",
  description: "Your enquiry has been received.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

export default function ThankYouPage() {
  return (
    <>
      <ThankYouAnalytics />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Thank You", path: "/thank-you" },
        ])}
      />
      <PageHero
        image="handshakeSuits"
        title="Thank You"
        subtitle="Your enquiry has been received. We will respond within 1 business day with suitable contract loss expert witness options for your case."
        breadcrumbs={[{ label: "Thank You" }]}
      />
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-body">
            Questions? Email{" "}
            <SiteEmailLink className="font-medium text-accent hover:underline" />.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded bg-accent px-8 py-3 font-semibold text-white hover:bg-[#a2452f]"
          >
            Return to Homepage
          </Link>
        </div>
      </Section>
    </>
  );
}
