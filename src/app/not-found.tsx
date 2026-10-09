import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Page Not Found | ContractLossExpert.com",
  description: "The page you requested could not be found.",
  path: "/404",
  noindex: true,
  nofollow: true,
});

export default function NotFound() {
  return (
    <>
      <PageHero
        image="chartsPaper"
        title="Page Not Found"
        subtitle="The page you are looking for does not exist or has been moved."
        breadcrumbs={[{ label: "404" }]}
      />
      <Section>
        <div className="text-center">
          <p className="text-6xl font-bold text-highlight" aria-hidden>
            404
          </p>
          <p className="mt-4 text-body">
            Try one of these pages or return to the homepage.
          </p>
          <nav className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-accent hover:underline">
              Services
            </Link>
            <Link href="/loss-types" className="text-accent hover:underline">
              Loss Types
            </Link>
            <Link href="/case-types" className="text-accent hover:underline">
              Case Types
            </Link>
            <Link href="/contact" className="text-accent hover:underline">
              Contact
            </Link>
          </nav>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded bg-accent px-8 py-3 font-semibold text-white hover:bg-[#a2452f]"
          >
            Return to Homepage
          </Link>
        </div>
      </Section>
    </>
  );
}
