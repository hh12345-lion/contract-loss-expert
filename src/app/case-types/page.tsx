import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { caseTypeImage } from "@/lib/images";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Case Types Requiring a Contract Loss Expert Witness | Guide",
  description:
    "Which legal cases need a contract loss expert witness? Commercial disputes, construction claims, professional negligence, IP licensing, and more explained.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Types", path: "/case-types" },
        ])}
      />
      <PageHero
        image="gavelBooks"
        title="Case Types Requiring a Contract Loss Expert Witness"
        subtitle="Litigation spanning commercial contract breach, construction quantum, professional negligence, IP licensing, and supply chain failure each requires specialist loss quantification. Select your case type for sector-specific guidance and expert witness FAQs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types" },
        ]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {caseTypes.map((ct) => (
            <Card
              key={ct.slug}
              title={ct.title}
              description={ct.paragraphs[0].slice(0, 160) + "…"}
              href={`/case-types/${ct.slug}`}
              photo={caseTypeImage[ct.slug]}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
