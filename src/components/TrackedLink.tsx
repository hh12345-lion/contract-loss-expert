"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackConversionEvent } from "@/lib/analytics";

/** Link that records a CTA click; the only client part of the call-to-action section. */
export function TrackedLink({
  href,
  location,
  className,
  children,
}: {
  href: string;
  location: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackConversionEvent("cta_click", { location })}
    >
      {children}
    </Link>
  );
}
