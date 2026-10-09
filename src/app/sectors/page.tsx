import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { sectorImage } from "@/lib/images";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { sectors } from "@/data/sectors";

export const metadata = createMetadata({
  title: "Contract Loss Expert Witnesses by Sector | Industry Specialists",
  description:
    "Sector-specialist contract loss expert witnesses for litigation. Construction, technology, supply chain, financial services, retail, and professional services.",
  path: "/sectors",
});

export default function SectorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sectors", path: "/sectors" },
        ])}
      />
      <PageHero
        image="boardroom"
        title="Contract Loss Expert Witnesses by Sector"
        subtitle="Sector economics are central to contract loss quantification. We match legal teams with experts who understand industry-specific trading patterns, margin structures, and comparable benchmarks."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors" },
        ]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {sectors.map((s) => (
            <Card
              key={s.slug}
              title={s.title}
              description={s.paragraphs[0].slice(0, 160) + "…"}
              href={`/sectors/${s.slug}`}
              photo={sectorImage[s.slug]}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
