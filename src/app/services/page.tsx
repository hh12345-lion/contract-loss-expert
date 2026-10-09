import Image from "next/image";
import Link from "next/link";
import { photos, serviceImage } from "@/lib/images";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  organizationSchema,
  serviceNode,
} from "@/lib/schema";
import { services } from "@/data/services";
import { ServiceSectionFooter } from "@/components/ServiceSectionFooter";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { ServiceFAQs } from "@/components/ServiceFAQs";
import { faqPageSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Contract Loss Expert Witness Services | Full Service List",
  description:
    "Contract loss expert witness services: lost profits analysis, wasted expenditure, construction quantum, consequential loss, and professional negligence damages.",
  path: "/services",
});

export default function ServicesPage() {
  const allServiceFaqs = services.flatMap((s) => s.faqs);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      ...services.map((s) => serviceNode(s.id, s.name, s.description)),
    ],
  };

  return (
    <>
      <JsonLd
        data={[
          schema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqPageSchema(allServiceFaqs),
        ]}
      />
      <PageHero
        image="analysisDesk"
        title="Contract Loss Expert Witness Services"
        subtitle="From lost profits quantification and wasted expenditure analysis to construction quantum claims and professional negligence damages, our experts produce court-ready expert reports for every type of contract loss dispute."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      {services.map((service, idx) => (
        <Section key={service.id} alt={idx % 2 === 1} id={service.id}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">
                {service.name}
              </h2>
              <p className="mt-4 max-w-3xl text-body leading-relaxed">
                {service.content}
              </p>
            </div>
            {serviceImage[service.id] ? (
              <div className="dog-ear relative aspect-[3/2] bg-section-alt">
                <Image
                  src={photos[serviceImage[service.id]].src}
                  alt={photos[serviceImage[service.id]].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
          {service.methodology && (
            <ResponsiveTable className="mt-8">
              <table className="w-full min-w-[600px] border-collapse text-sm">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                      Phase
                    </th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                      What We Do
                    </th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                      Deliverable
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {service.methodology.map((row) => (
                    <tr key={row.phase}>
                      <td className="border border-border px-4 py-3 font-medium text-heading">
                        {row.phase}
                      </td>
                      <td className="border border-border px-4 py-3 text-body">
                        {row.whatWeDo}
                      </td>
                      <td className="border border-border px-4 py-3 text-body">
                        {row.deliverable}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ResponsiveTable>
          )}
          <ServiceFAQs faqs={service.faqs} />
          <ServiceSectionFooter serviceId={service.id} />
        </Section>
      ))}
      <Section alt>
        <p className="text-body">
          All services are delivered by CPR Part 35 compliant experts. See{" "}
          <Link href="/loss-types" className="text-accent hover:underline">
            types of contract loss
          </Link>
          ,{" "}
          <Link href="/case-types" className="text-accent hover:underline">
            case types
          </Link>, and{" "}
          <Link href="/contact" className="text-accent hover:underline">
            instruct an expert
          </Link>
          .
        </p>
      </Section>
      <CTASection />
    </>
  );
}
