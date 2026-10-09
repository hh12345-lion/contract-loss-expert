"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";
import { CookiePreferencesPanel } from "./CookiePreferencesPanel";

/**
 * Fixed bottom banner, does not affect document flow (no CLS).
 * Rendered only after hydration when consent is still pending.
 */
export function CookieBanner() {
  const {
    status,
    isReady,
    showPreferences,
    acceptAll,
    rejectNonEssential,
    openPreferences,
    closePreferences,
  } = useCookieConsent();

  if (!isReady || status === "granted") return null;

  return (
    <>
      <div
        role="region"
        aria-label="Cookie consent"
        className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/10 bg-primary shadow-[0_-8px_32px_rgba(0,0,0,0.2)] motion-safe:animate-[slideUp_320ms_ease-out]"
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-highlight">
                Your privacy matters
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-base">
                We use cookies to improve your experience, analyse site traffic, and
                support our marketing. You can accept all cookies, reject
                non-essential cookies, or customise your preferences. Read our{" "}
                <Link
                  href="/cookies"
                  className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white"
                >
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap lg:w-auto lg:max-w-xl lg:shrink-0 lg:justify-end xl:max-w-none">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="min-h-[44px] w-full rounded border border-white/30 bg-transparent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-5"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={openPreferences}
                className="min-h-[44px] w-full rounded border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20 sm:w-auto sm:px-5"
              >
                Customize Preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="min-h-[44px] w-full rounded bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#a2452f] sm:w-auto sm:px-5"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPreferences && (
        <CookiePreferencesPanel onClose={closePreferences} />
      )}
    </>
  );
}
