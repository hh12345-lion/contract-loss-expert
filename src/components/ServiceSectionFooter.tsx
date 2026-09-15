import Link from "next/link";

interface ServiceSectionFooterProps {
  serviceId: string;
}

const FOOTER_BY_SERVICE: Record<
  string,
  { href: string; label: string }[]
> = {
  "lost-profits": [
    { href: "/loss-types#expectation-loss", label: "Expectation loss explained" },
    { href: "/guides/lost-profits-but-for-methodology", label: "But-for methodology guide" },
    {
      href: "/guides/what-financial-evidence-needed-to-support-claim",
      label: "Financial evidence for claims",
    },
    { href: "/case-types/commercial-contract-breach", label: "Commercial contract breach" },
  ],
  "wasted-expenditure": [
    { href: "/loss-types#reliance-loss", label: "Reliance loss explained" },
    { href: "/guides/wasted-expenditure-reliance-loss", label: "Wasted expenditure guide" },
  ],
  "consequential-loss": [
    { href: "/loss-types#consequential-loss", label: "Consequential loss explained" },
    { href: "/guides/hadley-v-baxendale-remoteness-guide", label: "Hadley v Baxendale guide" },
  ],
  "construction-quantum": [
    { href: "/case-types/construction-quantum-disputes", label: "Construction quantum disputes" },
    { href: "/sectors/construction-engineering", label: "Construction sector experts" },
    { href: "/guides/construction-quantum-expert-guide", label: "Construction quantum guide" },
  ],
  "supply-chain-loss": [
    { href: "/case-types/supply-chain-failure", label: "Supply chain failure cases" },
    { href: "/sectors/supply-chain-manufacturing", label: "Manufacturing sector" },
  ],
  "professional-negligence-damages": [
    { href: "/case-types/professional-negligence-loss", label: "Professional negligence cases" },
    {
      href: "/guides/professional-negligence-loss-quantification",
      label: "Negligence loss quantification guide",
    },
  ],
  "ip-licensing-loss": [
    { href: "/case-types/ip-licence-breach", label: "IP licence breach cases" },
    { href: "/sectors/media-entertainment-ip", label: "Media & IP sector" },
  ],
  "expert-determination": [
    { href: "/how-to-instruct", label: "How to instruct an expert" },
    { href: "/qualifications", label: "Expert qualifications" },
  ],
};

export function ServiceSectionFooter({ serviceId }: ServiceSectionFooterProps) {
  const links = FOOTER_BY_SERVICE[serviceId] ?? [
    { href: "/loss-types", label: "Types of contract loss" },
    { href: "/case-types", label: "Case types" },
  ];

  return (
    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 text-sm">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-accent hover:underline">
          {link.label}
        </Link>
      ))}
      <Link href="/contact" className="font-medium text-accent hover:underline">
        Instruct an expert →
      </Link>
    </div>
  );
}
