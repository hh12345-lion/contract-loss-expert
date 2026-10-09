import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { glossaryTerms, getGlossaryFaqs } from "@/data/glossary";
import { GlossarySearch } from "./GlossarySearch";

export const metadata = createMetadata({
  title: "Contract Loss Expert Witness Glossary | Key Legal & Finance Terms",
  description:
    "Definitions of key contract loss and expert witness terms for litigation, from but-for analysis to Hadley v Baxendale, wasted expenditure, and quantum.",
  path: "/glossary",
});

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Glossary", path: "/glossary" },
          ]),
          faqPageSchema(getGlossaryFaqs()),
        ]}
      />
      <PageHero
        image="gavelScales"
        title="Contract Loss Expert Witness Glossary"
        subtitle="Key legal and financial terms used in contract loss litigation and expert witness reports, from but-for analysis to Scott Schedules."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Glossary" }]}
      />
      <Section>
        <GlossarySearch terms={glossaryTerms} />
      </Section>
      <CTASection />
    </>
  );
}
