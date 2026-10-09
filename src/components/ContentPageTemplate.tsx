import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import type { RelatedLink } from "@/lib/seo-internal-links";
import type { ContentPage } from "@/data/types";
import type { BreadcrumbItem } from "@/components/PageHero";
import type { PhotoKey } from "@/lib/images";

interface ContentPageTemplateProps {
  page: ContentPage;
  breadcrumbs: BreadcrumbItem[];
  hubPath: string;
  relatedLinks?: RelatedLink[];
  image?: PhotoKey;
}

export function ContentPageTemplate({
  page,
  breadcrumbs,
  hubPath,
  relatedLinks,
  image,
}: ContentPageTemplateProps) {
  const links = relatedLinks ?? page.relatedLinks ?? [];
  const schemas = [
    breadcrumbSchema(
      breadcrumbs
        .filter((b) => b.href)
        .map((b) => ({ name: b.label, path: b.href! }))
        .concat([{ name: page.h1, path: `${hubPath}/${page.slug}` }])
    ),
    faqPageSchema(page.faqs),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PageHero title={page.h1} breadcrumbs={breadcrumbs} image={image} />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          {page.paragraphs.map((p, i) => (
            <p key={i} className="text-body leading-relaxed">
              {p}
            </p>
          ))}

          <h2 className="mt-10 text-xl font-bold text-heading">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-8">
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-heading">
                  {faq.question}
                </h3>
                <p className="mt-2 text-body leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <RelatedLinks links={links} />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
