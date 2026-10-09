"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { COOKIE_CATEGORY_LABELS } from "@/lib/cookies/constants";
import type { CategoryConsent } from "@/lib/cookies/types";
import { useCookieConsent } from "./CookieConsentContext";

interface CookiePreferencesPanelProps {
  onClose: () => void;
}

export function CookiePreferencesPanel({ onClose }: CookiePreferencesPanelProps) {
  const { consent, savePreferences } = useCookieConsent();
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const [draft, setDraft] = useState({
    analytics: consent.analytics,
    marketing: consent.marketing,
    preferences: consent.preferences,
  });

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  function handleSave() {
    savePreferences(draft);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm motion-safe:animate-[fadeIn_200ms_ease-out]"
        aria-label="Close cookie preferences"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-t-[12px] border border-border bg-white shadow-2xl motion-safe:animate-[slideUp_280ms_ease-out] sm:rounded-[12px]"
      >
        <div className="border-b border-border bg-primary px-5 py-4 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id={titleId} className="text-lg font-bold text-white">
                Cookie Preferences
              </h2>
              <p id={descId} className="mt-1 text-sm text-white/75">
                Manage how we use cookies. Necessary cookies are always active.
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded text-white/80 hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          <ul className="space-y-4">
            {/* Necessary, locked on */}
            <li className="rounded-[8px] border border-border bg-section-alt p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-heading">
                    {COOKIE_CATEGORY_LABELS.necessary.title}
                  </p>
                  <p className="mt-1 text-sm text-body leading-relaxed">
                    {COOKIE_CATEGORY_LABELS.necessary.description}
                  </p>
                </div>
                <span className="shrink-0 rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Always on
                </span>
              </div>
            </li>

            {(
              [
                ["analytics", "analytics"],
                ["marketing", "marketing"],
                ["preferences", "preferences"],
              ] as const
            ).map(([key, field]) => {
              const meta = COOKIE_CATEGORY_LABELS[key];
              const checked = draft[field];
              return (
                <li
                  key={key}
                  className="rounded-[8px] border border-border p-4 transition-colors hover:border-accent/30"
                >
                  <label className="flex cursor-pointer items-start justify-between gap-3">
                    <div className="pr-2">
                      <span className="font-semibold text-heading">{meta.title}</span>
                      <p className="mt-1 text-sm text-body leading-relaxed">
                        {meta.description}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      role="switch"
                      aria-checked={checked}
                      checked={checked}
                      onChange={(e) =>
                        setDraft((d) => ({ ...d, [field]: e.target.checked }))
                      }
                      className="mt-1 h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full bg-border transition-colors checked:bg-accent focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2"
                      style={{
                        backgroundImage: checked
                          ? "radial-gradient(circle at 18px 50%, white 10px, transparent 11px)"
                          : "radial-gradient(circle at 6px 50%, white 10px, transparent 11px)",
                      }}
                    />
                  </label>
                </li>
              );
            })}
          </ul>

          <p className="mt-4 text-xs text-body/80">
            See our{" "}
            <Link href="/cookies" className="text-accent underline" onClick={onClose}>
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-accent underline" onClick={onClose}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-border bg-section-alt p-4 sm:flex-row sm:justify-end sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] rounded border border-border bg-white px-5 py-2.5 text-sm font-semibold text-heading hover:bg-white/90"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="min-h-[44px] rounded bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#a2452f]"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
