import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "What Is a Contract Loss Expert Witness? | Role & Definition",
  description:
    "A contract loss expert witness quantifies financial losses from breach of contract for courts. Expectation damages, reliance loss, but-for methodology and CPR Part 35 explained.",
  path: "/what-is-a-contract-loss-expert-witness",
});

export default function WhatIsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "What Is a Contract Loss Expert Witness",
            path: "/what-is-a-contract-loss-expert-witness",
          },
        ])}
      />
      <PageHero
        image="analysisDesk"
        title="What Is a Contract Loss Expert Witness?"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What Is a Contract Loss Expert Witness" },
        ]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>Definition</h2>
          <p>
            A contract loss expert witness is a qualified financial professional, typically a forensic accountant, chartered quantity surveyor, or
            economic damages specialist, retained to provide an independent,
            court-admissible opinion on the financial losses suffered as a result
            of a breach of contract. Their role is to quantify the loss in a way
            that can withstand scrutiny, cross-examination, and the legal tests of
            causation, remoteness, and mitigation.
          </p>

          <h2>What They Do</h2>
          <ul>
            <li>
              Analyse financial records, contracts, and trading data to establish
              the pre-breach position
            </li>
            <li>
              Build a but-for model showing what would have happened absent the
              breach
            </li>
            <li>
              Quantify expectation loss (lost profits) or reliance loss (wasted
              expenditure) as appropriate
            </li>
            <li>Apply Hadley v Baxendale remoteness principles to the loss claimed</li>
            <li>Address the claimant&apos;s duty to mitigate</li>
            <li>Prepare CPR Part 35 compliant expert reports</li>
            <li>Attend court, arbitration, or tribunal to give oral evidence</li>
            <li>
              Participate in joint expert meetings and produce joint statements
            </li>
          </ul>

          <h2>The Core Legal Framework, Hadley v Baxendale</h2>
          <p>
            The recoverable loss for breach of contract is governed by the
            two-limb rule in <em>Hadley v Baxendale</em> [1854]:
          </p>
          <p>
            <strong>Limb 1, Direct Loss:</strong> losses arising naturally from
            the breach in the ordinary course of things.
          </p>
          <p>
            <strong>Limb 2, Consequential Loss:</strong> losses within the
            reasonable contemplation of both parties at the time of contracting
            as the probable result of the breach.
          </p>
          <p>
            Expert witnesses must structure their loss analysis to address which
            limb each category of loss falls under and whether it passes the
            remoteness test. See our{" "}
            <Link href="/guides/hadley-v-baxendale-remoteness-guide">
              Hadley v Baxendale guide
            </Link>
            .
          </p>

          <h2>Three Types of Loss, What Expert Witnesses Quantify</h2>
          <h3>Expectation Loss (most common)</h3>
          <p>
            Places the claimant in the position they would have been in had the
            contract been performed. Typically quantified as lost profits using
            the but-for methodology, comparing actual financial performance with
            the projected performance had the contract been honoured. See{" "}
            <Link href="/loss-types">types of contract loss</Link>.
          </p>
          <h3>Reliance Loss (wasted expenditure)</h3>
          <p>
            Returns the claimant to the position they would have been in had the
            contract never been made. Recovers expenditure incurred in reliance
            on the contract. Used where expectation loss cannot be calculated or
            where the claimant made a bad bargain.
          </p>
          <h3>Consequential Loss</h3>
          <p>
            Additional losses beyond the direct loss of bargain, such as loss of
            a third-party contract caused by the breach. Must pass the Hadley v
            Baxendale remoteness test. Expert witnesses assess and quantify each
            head of consequential loss separately.
          </p>

          <h2>The But-For Methodology</h2>
          <p>
            The but-for test asks: but for the breach, what would the financial
            position of the claimant have been? Expert witnesses construct a
            counterfactual financial model using pre-breach data, market
            conditions, and management projections to establish this baseline, 
            then compare it to the actual post-breach performance. Read our{" "}
            <Link href="/guides/lost-profits-but-for-methodology">
              but-for methodology guide
            </Link>
            .
          </p>

          <h2>CPR Part 35 & Expert Duties</h2>
          <p>
            A contract loss expert witness owes their primary duty to the court
            under CPR Part 35, not to the instructing solicitor or their client.
            This is particularly important in quantum disputes where the
            expert&apos;s credibility in presenting an objective, well-reasoned
            loss analysis is the foundation of the court&apos;s assessment. The
            duties were articulated in <em>The Ikarian Reefer</em> [1993] 2
            Lloyd&apos;s Rep 68: independence, objectivity, and assistance to the
            tribunal. See our{" "}
            <Link href="/qualifications">qualifications page</Link>.
          </p>

          <h2>When Do You Need a Contract Loss Expert Witness?</h2>
          <ul>
            <li>
              A business has suffered lost profits from a supplier or customer
              breach of contract
            </li>
            <li>
              A construction contract dispute requires quantum evidence
            </li>
            <li>
              Consequential losses need to be quantified for a commercial claim
            </li>
            <li>
              A professional negligence claim requires loss causation analysis
            </li>
            <li>An earn-out or M&A dispute requires loss quantification</li>
            <li>
              An IP licence has been breached and royalty losses need quantifying
            </li>
            <li>
              A supply chain failure has caused downstream financial losses
            </li>
            <li>An arbitration requires an independent quantum expert</li>
          </ul>
        </article>
      </Section>
      <CTASection />
    </>
  );
}
