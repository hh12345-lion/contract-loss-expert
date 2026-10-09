import Image from "next/image";
import Link from "next/link";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";

const navigateLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-types", label: "Case Types" },
  { href: "/sectors", label: "Sectors" },
  { href: "/contact", label: "Contact" },
];

const referenceLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/loss-types", label: "Loss Types" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="h-1 bg-highlight" aria-hidden />

      <div className="bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <Image
                src="/brand/logo-light.svg"
                alt="Contract Loss Expert"
                width={973}
                height={219}
                unoptimized
                className="h-12! w-auto"
              />
              <h2 className="font-display mt-8 text-2xl font-semibold leading-snug sm:text-3xl">
                Independent contract loss expert witnesses for legal teams worldwide.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70">
                We match enquiries with qualified forensic accountants, quantum
                specialists, and economic damages experts for litigation,
                tribunals, and arbitration.
              </p>
              <p className="mt-8">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/45">
                  Direct enquiry
                </span>
                <SiteEmailLink className="mt-1 inline-block font-display text-lg text-highlight transition-colors hover:text-white sm:text-xl" />
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:gap-6">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/45">
                  Navigate
                </p>
                <ul className="space-y-2.5">
                  {navigateLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
                      >
                        <span
                          className="h-px w-3 bg-accent transition-all group-hover:w-5"
                          aria-hidden
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/45">
                  Reference
                </p>
                <ul className="space-y-2.5">
                  {referenceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
                      >
                        <span
                          className="h-px w-3 bg-accent transition-all group-hover:w-5"
                          aria-hidden
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-sm border border-white/10 bg-white/5 p-5 sm:p-6">
            <p className="text-xs leading-relaxed text-white/60">
              ContractLossExpert.com is not a law firm and does not provide legal
              advice. Expert engagements are arranged directly between the instructing
              party and the expert witness.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#111D12]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-white/50 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-highlight">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-highlight">
              Cookies
            </Link>
            <Link href="/terms" className="hover:text-highlight">
              Terms
            </Link>
            <Link href="/image-credits" className="hover:text-highlight">
              Image Credits
            </Link>
            <CookieSettingsButton />
          </div>
          <p>© 2025 ContractLossExpert</p>
        </div>
      </div>
    </footer>
  );
}
