import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { photos, type PhotoKey } from "@/lib/images";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  /** Photograph shown behind the right-hand side of the hero. */
  image?: PhotoKey;
  children?: ReactNode;
}

/** Dark page hero: title first, photograph cut on the monogram's diagonal, breadcrumbs below the copy. */
export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  image = "contractPen",
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full md:w-1/2 md:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
        aria-hidden
      >
        <Image
          src={photos[image].src}
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85 md:bg-primary/55 lg:bg-primary/40" />
      </div>
      {/* The tick's stroke, running along the cut edge of the photograph. */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-accent [clip-path:polygon(18%_0,19.4%_0,1.4%_100%,0_100%)] md:block"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <h1 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children ? <div className="mt-8">{children}</div> : null}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mt-10">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/60">
              {breadcrumbs.map((item, i) => (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && <span aria-hidden>/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-highlight"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-highlight">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
      <div className="h-1 bg-highlight" aria-hidden />
    </section>
  );
}
