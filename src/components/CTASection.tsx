import Image from "next/image";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { TrackedLink } from "@/components/TrackedLink";
import { photos } from "@/lib/images";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Need a Contract Loss Expert Witness?",
  description = "Share your case details and we will connect you with a qualified forensic accountant or economic damages specialist. Response within one business day.",
}: CTASectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-16 md:py-20">
      <Image
        src={photos.agreement.src}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/55"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl border-l-4 border-accent pl-6">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-white/80">{description}</p>
          <TrackedLink
            href="/contact"
            location="cta_section"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-sm bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-[#A2452F]"
          >
            Get Started
          </TrackedLink>
          <p className="mt-6 text-sm text-white/70">
            Or email{" "}
            <SiteEmailLink className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white" />
          </p>
        </div>
      </div>
    </section>
  );
}
