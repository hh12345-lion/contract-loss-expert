"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** After each navigation: close the CSS-driven menus and mark the current nav link. */
export function MobileNavReset() {
  const pathname = usePathname();

  useEffect(() => {
    const toggle = document.getElementById("mobile-nav-toggle");
    if (toggle instanceof HTMLInputElement) toggle.checked = false;
    document
      .querySelectorAll<HTMLDetailsElement>("#mobile-menu details[open]")
      .forEach((d) => (d.open = false));
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    document.querySelectorAll<HTMLAnchorElement>("a[data-nav]").forEach((a) => {
      const href = (a.getAttribute("href") ?? "").split("#")[0];
      const active =
        href !== "/" && (pathname === href || pathname.startsWith(`${href}/`));
      a.dataset.active = active ? "true" : "false";
    });
  }, [pathname]);

  return null;
}
