import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { imageCredits } from "@/lib/image-credits";

export const metadata = createMetadata({
  title: "Image Credits | ContractLossExpert.com",
  description:
    "Photographers and licences for the photographs used on ContractLossExpert.com.",
  path: "/image-credits",
  noindex: true,
  nofollow: false,
});

export default function ImageCreditsPage() {
  return (
    <>
      <PageHero
        title="Image Credits"
        image="chartsPaper"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Image Credits" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="leading-relaxed text-body">
            Photographs on this site are used under Creative Commons licences or
            public-domain dedications. Images have been cropped and resized.
            Photographs are illustrative and do not depict clients, experts or
            cases.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {imageCredits.map((credit) => (
              <li key={credit.file} className="py-4 text-sm text-body">
                <p className="font-semibold text-heading">
                  {credit.source ? (
                    <a
                      href={credit.source}
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      {credit.title}
                    </a>
                  ) : (
                    credit.title
                  )}
                </p>
                <p className="mt-1">
                  {credit.creator} ·{" "}
                  {credit.licenseUrl ? (
                    <a
                      href={credit.licenseUrl}
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {credit.license}
                    </a>
                  ) : (
                    credit.license
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
