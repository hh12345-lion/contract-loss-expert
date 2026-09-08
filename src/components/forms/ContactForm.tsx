"use client";

import { useState, FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { PhoneField, formatPhoneFromFormData } from "./PhoneField";
import { trackConversionEvent } from "@/lib/analytics";
import { submitNetlifyForm } from "@/lib/submitNetlifyForm";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const formStarted = useRef(false);

  function markFormStarted() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackConversionEvent("contact_form_start");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = formatPhoneFromFormData(data);

    if (!fullName || !email) {
      setStatus("error");
      return;
    }

    const payload = {
      fullName,
      email,
      phone: phone || "",
      formType: "contact" as const,
      organisation: String(data.get("organisation") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        try {
          await submitNetlifyForm("contact", {
            name: fullName,
            email,
            phone: phone || undefined,
            organisation: payload.organisation || undefined,
            message: payload.message || undefined,
          });
        } catch {
          // Webhook already stored the enquiry; don't block the visitor.
        }
        trackConversionEvent("form_submit_success");
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full min-h-[44px] min-w-0 rounded-sm border border-border bg-white px-3 py-2 text-base text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:text-sm";
  const labelClass = "mb-1 block text-sm font-medium text-heading";

  return (
    <form
      name="contact"
      method="POST"
      action="/__forms.html"
      onSubmit={handleSubmit}
      onFocus={markFormStarted}
      className="min-w-0 space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <PhoneField inputClass={inputClass} labelClass={labelClass} />
        </div>
        <div className="min-w-0">
          <label htmlFor="organisation" className={labelClass}>
            Law Firm / Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </div>
      </div>

      <div className="min-w-0">
        <label htmlFor="message" className={labelClass}>
          Brief case summary
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Loss type, forum, and timeline if known"
          className={`${inputClass} min-h-[100px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please try again or email{" "}
          <SiteEmailLink className="underline" />.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex min-h-[44px] w-full items-center justify-center rounded-sm bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#a34a32] disabled:opacity-60 sm:w-auto sm:text-sm"
      >
        {status === "loading" ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
