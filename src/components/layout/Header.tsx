import Image from "next/image";
import Link from "next/link";
import { MobileNavReset } from "@/components/layout/MobileNavReset";
import {
  navCaseTypeLinks,
  navSectorLinks,
  navServiceLinks,
} from "@/data/nav";

type NavLink = { href: string; label: string };

const referenceLinks: NavLink[] = [
  { href: "/guides", label: "Guides" },
  { href: "/loss-types", label: "Loss Types" },
  { href: "/glossary", label: "Glossary" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
];

const groups: { label: string; href: string; items: NavLink[]; wide?: boolean }[] = [
  { label: "Services", href: "/services", items: navServiceLinks, wide: true },
  { label: "Case Types", href: "/case-types", items: navCaseTypeLinks, wide: true },
  { label: "Sectors", href: "/sectors", items: navSectorLinks, wide: true },
  { label: "Reference", href: "/guides", items: referenceLinks },
];

const linkClass =
  "inline-flex min-h-[44px] items-center gap-1.5 px-3 text-sm font-medium text-body transition-colors hover:text-primary data-[active=true]:text-accent";

function Chevron() {
  return (
    <svg
      viewBox="0 0 10 6"
      className="h-1.5 w-2.5 text-accent transition-transform duration-200 group-hover/nav:rotate-180 group-focus-within/nav:rotate-180"
      aria-hidden
    >
      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Server-rendered header: dropdowns open on hover or keyboard focus, the mobile menu on a checkbox. */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-accent bg-surface/95 backdrop-blur-sm">
      <input
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-label="Toggle navigation menu"
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6 peer-checked:[&_[data-icon=close]]:block peer-checked:[&_[data-icon=open]]:hidden">
        <Link href="/" className="shrink-0" aria-label="Contract Loss Expert home">
          <Image
            src="/brand/logo-dark.svg"
            alt="Contract Loss Expert"
            width={973}
            height={219}
            priority
            unoptimized
            className="h-10! w-auto sm:h-11!"
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main">
          {groups.map((group, gi) => (
            <div key={group.label} className="group/nav relative">
              <Link
                href={group.href}
                data-nav={group.label === "Reference" ? undefined : ""}
                aria-haspopup="true"
                className={linkClass}
              >
                {group.label}
                <Chevron />
              </Link>
              <div
                className={`invisible absolute top-full z-50 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100 ${
                  group.wide ? "w-[34rem]" : "w-64"
                } ${gi >= 2 ? "right-0" : "left-0"}`}
              >
                <div className="dog-ear border-l-4 border-accent bg-white shadow-xl">
                  <ul className={`p-3 ${group.wide ? "grid grid-cols-2 gap-x-2" : ""}`}>
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          data-nav=""
                          className="group/item flex items-start gap-2 px-3 py-2 text-sm text-body transition-colors hover:bg-section-alt hover:text-primary"
                        >
                          <span
                            className="mt-[0.55rem] h-px w-3 shrink-0 bg-accent transition-all group-hover/item:w-5"
                            aria-hidden
                          />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={group.href}
                    className="flex items-center justify-between bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent"
                  >
                    {group.label === "Reference" ? "All guides" : `All ${group.label.toLowerCase()}`}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden min-h-[44px] items-center rounded-sm bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-[#A2452F] sm:inline-flex"
          >
            Submit Enquiry →
          </Link>
          <label
            htmlFor="mobile-nav-toggle"
            className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center text-primary lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg data-icon="open" viewBox="0 0 20 20" className="h-6 w-6" aria-hidden>
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <svg data-icon="close" viewBox="0 0 20 20" className="hidden h-6 w-6" aria-hidden>
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </label>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className="hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-section-alt peer-checked:block lg:!hidden"
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          {groups.map((group) => (
            <details key={group.label} className="group border-b border-border">
              <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between font-display text-base text-heading [&::-webkit-details-marker]:hidden">
                {group.label}
                <span className="text-accent transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <ul className="mb-3 border-l-2 border-accent pl-4">
                {group.label !== "Reference" && (
                  <li>
                    <Link href={group.href} className="flex min-h-[40px] items-center text-sm font-semibold text-accent">
                      All {group.label.toLowerCase()}
                    </Link>
                  </li>
                )}
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="flex min-h-[40px] items-center text-sm text-body">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <Link
            href="/contact"
            className="mt-4 flex min-h-[44px] items-center justify-center rounded-sm bg-accent text-sm font-semibold text-white"
          >
            Submit Enquiry
          </Link>
        </div>
      </nav>
      <MobileNavReset />
    </header>
  );
}
