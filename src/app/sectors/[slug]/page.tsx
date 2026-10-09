import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { ContentPageTemplate } from "@/components/ContentPageTemplate";
import { sectorImage } from "@/lib/images";
import { getSector } from "@/data/sectors";
import { mergeSectorLinks } from "@/lib/seo-internal-links";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSector(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/sectors/${slug}`,
  });
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSector(slug);
  if (!page) notFound();

  return (
    <ContentPageTemplate
      page={page}
      image={sectorImage[slug]}
      hubPath="/sectors"
      relatedLinks={mergeSectorLinks(slug, page.relatedLinks)}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors" },
        { label: page.title },
      ]}
    />
  );
}
