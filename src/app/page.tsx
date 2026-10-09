import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import {
  organizationSchema,
  professionalServiceSchema as buildProfessionalServiceSchema,
  serviceNode,
  websiteSchema,
} from "@/lib/schema";
import { services } from "@/data/services";
import { photos, serviceImage, type PhotoKey } from "@/lib/images";

const serviceCards = [
  { id: "lost-profits", title: "Lost Profits Quantification" },
  { id: "wasted-expenditure", title: "Wasted Expenditure Analysis" },
  { id: "consequential-loss", title: "Consequential Loss Assessment" },
  { id: "construction-quantum", title: "Construction Quantum Claims" },
  { id: "supply-chain-loss", title: "Supply Chain Loss Analysis" },
  { id: "professional-negligence-damages", title: "Professional Negligence Damages" },
  { id: "ip-licensing-loss", title: "IP & Licensing Loss Quantification" },
  { id: "expert-determination", title: "Expert Determination & ADR" },
];

const stats = [
  ["Governing rule, remoteness", "Hadley v Baxendale (1854)", "Contract law"],
  ["Primary damage measure", "Expectation loss (but-for)", "Common law"],
  ["Alternative measure", "Reliance loss / wasted expenditure", "Common law"],
  ["Expert evidence standard", "Independent, court-admissible reports", "Jurisdiction-specific rules"],
  ["Duty to mitigate", "Yes, claimant must minimise loss", "Contract law"],
  ["Common forums", "Courts, tribunals, and arbitration", "As applicable"],
];

const trustPoints = [
  "Forensic accountants: CPA, ACA, FCA, CFA, CFE credentialed",
  "Construction quantum specialists with MRICS, FRICS, and AACE experience",
  "Court-admissible expert reports under applicable procedural rules",
  "But-for methodology clearly explained",
  "Hadley v Baxendale remoteness analysis addressed",
  "Mitigation duty properly applied",
  "Available as court-appointed or party-retained expert",
  "Commercial, construction, and professional negligence specialists",
];

const resources: { title: string; description: string; href: string; photo: PhotoKey }[] = [
  {
    title: "Types of Contract Loss",
    description: "Expectation, reliance, and consequential loss: the pillar guide for legal practitioners.",
    href: "/loss-types",
    photo: "coinsChart",
  },
  {
    title: "Case Types",
    description: "Commercial breach, construction quantum, supply chain, professional negligence, and more.",
    href: "/case-types",
    photo: "clipboardContract",
  },
  {
    title: "Sector Specialists",
    description: "Construction, technology, financial services, retail, energy, and IP sectors.",
    href: "/sectors",
    photo: "towers",
  },
  {
    title: "Legal Guides",
    description: "Financial evidence for claims, Hadley v Baxendale, but-for methodology, construction quantum, and instruction letters.",
    href: "/guides",
    photo: "spreadsheetGlasses",
  },
  {
    title: "How to Instruct",
    description: "Step-by-step guidance on finding, vetting, and instructing the right quantum expert.",
    href: "/how-to-instruct",
    photo: "handshakeSuits",
  },
  {
    title: "Glossary",
    description: "30 definition-first terms for contract loss litigation.",
    href: "/glossary",
    photo: "analysisDesk",
  },
];

function Tick({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 12.5l5.2 5L20 6.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      buildProfessionalServiceSchema(services.map((s) => s.name)),
      websiteSchema,
      ...services.map((s) =>
        serviceNode(s.id, s.name, s.description)
      ),
    ],
  };

  return (
    <>
      <JsonLd data={homepageSchema} />

      <section className="relative isolate overflow-hidden bg-primary">
        <Image
          src={photos.contractPen.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/85 to-primary/45"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1fr_minmax(0,27rem)] lg:items-center">
          <div className="cle-rise">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Contract Loss Expert Witness Services
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              When a contract is breached, the financial loss must be quantified
              with precision and defended under cross-examination. We connect law
              firms and legal teams worldwide with qualified contract loss expert
              witnesses: forensic accountants, quantum experts, and economic
              damages specialists for litigation, tribunals, and international
              arbitration.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-[#A2452F]"
              >
                Submit an Enquiry
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:border-highlight hover:text-highlight"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* The key framework, set out as one page with the folded corner from the monogram. */}
          <div className="dog-ear bg-surface p-6 shadow-2xl [--ear:3rem] sm:p-8">
            <h2 className="pr-10 font-display text-xl font-semibold text-heading">
              Contract Loss Litigation: Key Framework
            </h2>
            <dl className="mt-5 border-t-2 border-primary">
              {stats.map(([metric, figure, source]) => (
                <div
                  key={metric}
                  className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-3 border-b border-border py-3"
                >
                  <Tick className="mt-1 h-4 w-4 text-accent" />
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-[0.12em] text-body/70">
                      {metric}
                    </dt>
                    <dd className="mt-0.5 font-medium text-heading">{figure}</dd>
                    <dd className="text-xs text-body/70">{source}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="h-1 bg-highlight" aria-hidden />
      </section>

      <Section alt>
        <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">
          What Our Contract Loss Expert Witnesses Cover
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              href={`/services#${card.id}`}
              photo={serviceImage[card.id]}
            />
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">
          Explore Contract Loss Expert Witness Resources
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <Card key={item.href} {...item} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="max-w-2xl font-display text-2xl font-semibold text-heading sm:text-3xl">
          Why Legal Teams Trust Our Contract Loss Expert Witnesses
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 border border-border bg-white p-4 text-body"
            >
              <Tick className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              {point}
            </li>
          ))}
        </ul>
        <div className="dog-ear mt-8 border-l-4 border-l-accent bg-white p-6">
          <p className="leading-relaxed text-body">
            A{" "}
            <strong className="text-heading">contract loss expert witness</strong>{" "}
            is a qualified financial professional retained to provide an
            independent, court-admissible opinion on financial losses arising
            from breach of contract, quantifying expectation damages, reliance
            loss, and consequential loss using but-for methodology and
            court-admissible expert reports under applicable procedural rules.
          </p>
          <Link
            href="/what-is-a-contract-loss-expert-witness"
            className="mt-3 inline-block font-medium text-accent hover:underline"
          >
            What is a contract loss expert witness? →
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
