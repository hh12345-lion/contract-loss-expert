import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { GuidePageTemplate } from "@/components/GuidePageTemplate";
import { getGuide, guideSlugs } from "@/data/guides";
import { mergeGuideLinks } from "@/lib/seo-internal-links";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${slug}`,
    ogImage: guide.image,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <GuidePageTemplate
      guide={guide}
      relatedLinks={mergeGuideLinks(guide.relatedLinks)}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: guide.title },
      ]}
    />
  );
}
