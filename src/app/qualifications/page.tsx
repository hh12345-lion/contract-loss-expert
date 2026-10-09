import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title:
    "Contract Loss Expert Witness Qualifications | ACA, CFA & Quantum Credentials",
  description:
    "What credentials should a contract loss expert witness hold? ACA, CFA, CFE, quantum surveyor credentials, and CPR Part 35 compliance explained.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Qualifications", path: "/qualifications" },
        ])}
      />
      <PageHero
        image="boardroom"
        title="Contract Loss Expert Witness Qualifications & Credentials"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Qualifications" },
        ]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>Two Expert Profiles</h2>
          <h3>Financial / Forensic Accountants</h3>
          <ul>
            <li>ACA / FCA (ICAEW)</li>
            <li>ACCA / FCCA</li>
            <li>CFA (Chartered Financial Analyst)</li>
            <li>CFE (Certified Fraud Examiner)</li>
            <li>CVA (Certified Valuation Analyst)</li>
          </ul>
          <h3>Construction Quantum Experts</h3>
          <ul>
            <li>MRICS / FRICS (Royal Institution of Chartered Surveyors)</li>
            <li>FCIArb (Fellow, Chartered Institute of Arbitrators)</li>
            <li>PQS (Professional Quantity Surveyor)</li>
            <li>MCIArb (Member, Chartered Institute of Arbitrators)</li>
          </ul>

          <h2>Experience Requirements</h2>
          <p>
            A qualified contract loss expert witness should demonstrate active
            practice in the relevant field; 10+ years quantifying contract
            losses; a history of CPR Part 35 expert reports; prior court,
            arbitration, or adjudication testimony; and professional indemnity
            insurance at appropriate levels for the claim value.
          </p>

          <h2>CPR Part 35 Compliance</h2>
          <p>
            Under CPR Part 35 and the accompanying Practice Direction, an expert
            witness owes an overriding duty to help the court on matters within
            their expertise. This duty overrides any obligation to the party
            instructing them. The expert must provide independent, objective
            evidence, not act as an advocate for their client&apos;s case.
          </p>
          <p>
            In <em>The Ikarian Reefer</em> [1993], Cresswell J set out seven
            principles including: the expert&apos;s opinion must be unbiased;
            the expert should state all material facts and assumptions; and the
            expert should not omit to consider material facts that detract from
            their concluded opinion. Experts must distinguish between facts and
            opinion, and between matters within their expertise and matters
            requiring legal conclusion.
          </p>
          <p>
            Solicitors may instruct a Single Joint Expert (SJE) directed by the
            court, or each party may appoint their own party-appointed expert
            (PAE). In either case, the CPR Part 35 duties apply equally. Joint
            expert meetings and joint statements are common in quantum disputes
            to narrow the issues before trial.
          </p>

          <h2>Sector Expertise</h2>
          <p>
            The right contract loss expert must understand the sector&apos;s
            economics, a construction quantum expert is not interchangeable
            with a software contract loss expert. Industry comparables, margin
            structures, and trading patterns differ materially between sectors.
            We match experts to cases by sector as well as by loss type. Browse
            our <Link href="/sectors">sector specialists</Link> and{" "}
            <Link href="/qualifications">qualification requirements</Link>.
          </p>
        </article>
      </Section>
      <CTASection />
    </>
  );
}
