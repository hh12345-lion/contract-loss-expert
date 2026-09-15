import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import type { RelatedLink } from "@/lib/seo-internal-links";
import type { GuidePage } from "@/data/types";
import type { BreadcrumbItem } from "@/components/PageHero";

interface GuidePageTemplateProps {
  guide: GuidePage;
  breadcrumbs: BreadcrumbItem[];
  relatedLinks: RelatedLink[];
}

export function GuidePageTemplate({
  guide,
  breadcrumbs,
  relatedLinks,
}: GuidePageTemplateProps) {
  const path = `/guides/${guide.slug}`;
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
      { name: guide.h1, path },
    ]),
    articleSchema({
      headline: guide.h1,
      description: guide.metaDescription,
      path,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      aboutServiceId: guide.aboutServiceId,
      image: guide.image,
    }),
    faqPageSchema(guide.faqs),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PageHero
        title={guide.h1}
        subtitle={guide.paragraphs[0]}
        breadcrumbs={breadcrumbs}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          {guide.image ? (
            <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#F5F0E8]">
              <Image
                src={guide.image}
                alt={guide.imageAlt ?? guide.h1}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>
          ) : null}
          {guide.paragraphs.slice(1).map((p, i) => (
            <p key={i} className="text-body leading-relaxed">
              {p}
            </p>
          ))}
          {guide.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.content.split("\n\n").map((para, i) => (
                <p key={i} className="text-body leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          ))}

          <h2 className="mt-10 text-xl font-bold text-heading">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-8">
            {guide.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-heading">
                  {faq.question}
                </h3>
                <p className="mt-2 text-body leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <RelatedLinks links={relatedLinks} />
        </article>
      </Section>
      <CTASection />
    </>
  );
}
