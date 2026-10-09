import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "@/components/forms/ContactForm";
import { SiteEmailLink } from "@/components/SiteEmailLink";

export const metadata = createMetadata({
  title: "Contact | Contract Loss Expert Witness",
  description:
    "Submit your case details to be matched with a qualified contract loss expert witness. Response within one business day.",
  path: "/contact",
});

const trustPoints = [
  "Court-admissible expert reports under applicable procedural rules",
  "Forensic accountants and economic damages specialists",
  "Commercial and construction specialists",
  "Response within one business day",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        image="dealTable"
        title="Contact Us"
        subtitle="Share a brief summary of your matter and we will connect you with a qualified contract loss expert witness. All enquiries are confidential."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Section>
        <div className="grid min-w-0 gap-10 lg:grid-cols-5">
          <div className="min-w-0 lg:col-span-3">
            <ContactForm />
          </div>
          <aside className="border border-border border-l-4 border-l-accent bg-white p-6 lg:col-span-2">
            <h2 className="font-display text-lg font-semibold text-heading">
              Why Instruct Through Us
            </h2>
            <ul className="mt-4 space-y-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-body">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-body">
              Email us directly:{" "}
              <SiteEmailLink className="font-medium text-accent hover:underline" />
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
