import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";

export const metadata = createMetadata({
  title: "How to Instruct a Contract Loss Expert Witness | Step-by-Step Guide",
  description:
    "Step-by-step guide for legal teams on finding, vetting, and instructing the right contract loss expert witness. SJE and party-appointed expert explained.",
  path: "/how-to-instruct",
});

const steps = [
  {
    title: "Identify Loss Type",
    content:
      "Lost profits? Wasted expenditure? Construction quantum? Professional negligence? Each determines which expert profile you need, forensic accountant, quantity surveyor, or economic damages specialist.",
  },
  {
    title: "Identify Sector",
    content:
      "Construction? Technology? Supply chain? Financial services? Sector expertise matters, industry comparables and sector economics are central to loss quantification.",
  },
  {
    title: "Civil or Arbitration?",
    content:
      "CPR Part 35 (civil courts) or LCIA/ICC/UNCITRAL rules (international arbitration)? Different procedural requirements apply to expert reports, disclosure, and joint expert meetings.",
  },
  {
    title: "SJE or Party-Appointed?",
    content:
      "Has the court directed a Single Joint Expert? Or will each party appoint their own expert? SJE instructions require joint letters; party-appointed experts require separate engagement.",
  },
  {
    title: "Check Credentials",
    content:
      "ACA/FCA for financial losses; MRICS/FRICS for construction quantum; sector experience verified; CPR Part 35 report history; professional indemnity insurance confirmed.",
  },
  {
    title: "Letter of Instruction",
    content:
      "Scope, specific questions, documents to provide, fee agreement, and timetable. See our guide on drafting a letter of instruction.",
  },
  {
    title: "Provide Documents",
    content:
      "Contracts, financial statements, management accounts, correspondence, and any prior quantum assessments. Early document provision reduces costs and improves report quality.",
  },
];

const timeline = [
  "Day 1: Submit case details via our contact form",
  "Day 1–2: We identify suitable experts by loss type and sector",
  "Day 2–3: Expert CVs and availability provided for your review",
  "Day 3–5: Letter of instruction agreed and engagement confirmed",
  "Week 2+: Expert commences analysis and report preparation",
];

const redFlags = [
  "Expert who does not understand Hadley v Baxendale remoteness",
  "No sector experience relevant to the dispute",
  "Cannot articulate the but-for methodology clearly",
  "Prior adverse judicial comments on their quantum methodology",
  "Full-time expert witness with no active practice",
];

export default function HowToInstructPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How to Instruct", path: "/how-to-instruct" },
        ])}
      />
      <PageHero
        image="clipboardContract"
        title="How to Instruct a Contract Loss Expert Witness"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How to Instruct" },
        ]}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <span className="text-sm font-semibold text-accent">
                Step {i + 1}
              </span>
              <h2 className="mt-2 text-lg font-bold text-heading">
                {step.title}
              </h2>
              <p className="mt-2 text-body">{step.content}</p>
            </div>
          ))}
        </div>
        {steps[5] && (
          <p className="mt-6 text-center">
            <Link
              href="/guides/instructing-quantum-expert-letter"
              className="font-medium text-accent hover:underline"
            >
              Read our full letter of instruction guide →
            </Link>
          </p>
        )}
      </Section>

      <Section alt>
        <h2 className="text-2xl font-bold text-heading">
          Single Joint Expert (SJE) vs Party-Appointed Expert (PAE)
        </h2>
        <p className="mt-4 max-w-3xl text-body leading-relaxed">
          Under CPR Part 35, both SJE and party-appointed experts owe their primary duty to the court. The choice affects cost, timetable, and how disagreements are resolved before trial.
        </p>
        <ResponsiveTable className="mt-6">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-white">
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Factor
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Single Joint Expert (SJE)
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Party-Appointed Expert (PAE)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-3 font-medium text-heading">
                  Appointment
                </td>
                <td className="border border-border px-4 py-3 text-body">
                  Directed by the court; joint letter of instruction from both parties
                </td>
                <td className="border border-border px-4 py-3 text-body">
                  Each party instructs their own expert separately
                </td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3 font-medium text-heading">
                  Cost
                </td>
                <td className="border border-border px-4 py-3 text-body">
                  Shared between parties, typically lower total cost
                </td>
                <td className="border border-border px-4 py-3 text-body">
                  Each party bears own expert&apos;s fees, higher in aggregate
                </td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3 font-medium text-heading">
                  Report
                </td>
                <td className="border border-border px-4 py-3 text-body">
                  One report for the court; limited scope for competing models
                </td>
                <td className="border border-border px-4 py-3 text-body">
                  Separate reports; joint statement narrows issues
                </td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3 font-medium text-heading">
                  Best for
                </td>
                <td className="border border-border px-4 py-3 text-body">
                  Straightforward quantum; proportionate disputes; court-directed
                </td>
                <td className="border border-border px-4 py-3 text-body">
                  High-value commercial claims; complex multi-head loss analysis
                </td>
              </tr>
            </tbody>
          </table>
        </ResponsiveTable>
        <p className="mt-4 text-sm text-body">
          See also:{" "}
          <Link href="/glossary#party-appointed-expert" className="text-accent hover:underline">
            Party-Appointed Expert (glossary)
          </Link>
          ,{" "}
          <Link href="/qualifications" className="text-accent hover:underline">
            CPR Part 35 qualifications
          </Link>
          ,{" "}
          <Link href="/how-to-instruct" className="text-accent hover:underline">
            how to instruct an expert
          </Link>
          .
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold text-heading">Matching Timeline</h2>
        <ol className="mt-6 max-w-2xl space-y-3">
          {timeline.map((item, i) => (
            <li key={i} className="flex gap-3 text-body">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </Section>

      <Section alt>
        <h2 className="text-2xl font-bold text-heading">Red Flags</h2>
        <ul className="mt-6 space-y-2">
          {redFlags.map((flag) => (
            <li key={flag} className="flex items-start gap-2 text-body">
              <span className="text-highlight" aria-hidden>
                ⚠
              </span>
              {flag}
            </li>
          ))}
        </ul>
      </Section>
      <CTASection />
    </>
  );
}
