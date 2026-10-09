import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { LOSS_TYPES_RELATED_LINKS } from "@/lib/seo-internal-links";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title:
    "Types of Contract Loss | Expectation, Reliance & Wasted Expenditure Explained",
  description:
    "The main types of loss recoverable for breach of contract in litigation: expectation damages, reliance loss, wasted expenditure, and consequential loss, explained for legal practitioners.",
  path: "/loss-types",
});

const pageDescription =
  "The main types of loss recoverable for breach of contract in litigation: expectation damages, reliance loss, wasted expenditure, and consequential loss, explained for legal practitioners.";

export default function LossTypesPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Loss Types", path: "/loss-types" },
    ]),
    articleSchema({
      headline:
        "Types of Contract Loss: What Courts Allow You to Recover",
      description: pageDescription,
      path: "/loss-types",
      aboutServiceId: "lost-profits",
    }),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PageHero
        image="coinsChart"
        title="Types of Contract Loss: What Courts Allow You to Recover"
        subtitle="The definitive guide to expectation damages, reliance loss, wasted expenditure, consequential loss, and the but-for methodology, for legal practitioners instructing contract loss expert witnesses."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Loss Types" },
        ]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <p>
            When a contract is breached, the innocent party&apos;s recoverable
            loss is not a single figure, it is a legal construct built from
            distinct categories of damage, each with its own case law,
            quantification methodology, and defences. This guide explains the
            main types of contract loss recoverable in litigation and how{" "}
            <Link href="/what-is-a-contract-loss-expert-witness">
              contract loss expert witnesses
            </Link>{" "}
            quantify them for courts, tribunals, and arbitration.
          </p>

          <h2>The Compensatory Principle</h2>
          <p>
            The overarching goal of contract damages in law is to put the
            innocent party in the position they would have been in had the
            contract been performed, as stated in{" "}
            <em>Robinson v Harman</em> [1848] 1 Ex 850. This is the expectation
            interest. Every head of loss claimed must ultimately serve this
            compensatory principle, subject to the limits of remoteness (
            <Link href="/guides/hadley-v-baxendale-remoteness-guide">
              Hadley v Baxendale
            </Link>
            ), mitigation, and any contractual exclusion clauses.
          </p>

          <h2>The Three Main Types of Recoverable Loss</h2>
          <ResponsiveTable>
          <table className="min-w-[32rem]">
            <thead>
              <tr>
                <th>Type</th>
                <th>Legal Basis</th>
                <th>Aim</th>
                <th>When Used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Expectation Loss</td>
                <td>Robinson v Harman [1848]</td>
                <td>Position if contract performed</td>
                <td>Default, where profits can be calculated</td>
              </tr>
              <tr>
                <td>Reliance Loss</td>
                <td>Anglia TV v Reed [1972]</td>
                <td>Position if contract never made</td>
                <td>Where profits cannot be calculated or bad bargain</td>
              </tr>
              <tr>
                <td>Restitution</td>
                <td>Fibrosa [1943]</td>
                <td>Reverse unjust enrichment</td>
                <td>Failure of consideration</td>
              </tr>
            </tbody>
          </table>
          </ResponsiveTable>

          <h2 id="expectation-loss">1. Expectation Loss (Lost Profits)</h2>
          <p>
            Expectation loss is the primary measure of contract damages, what
            the claimant would have earned had the contract been performed,
            minus what they actually earned (or will earn) following the
            breach. It represents the net loss of expected profit on the
            contract itself.
          </p>
          <p>
            <strong>Quantification methodology:</strong> Expert witnesses
            follow a three-step process. Step 1, establish the but-for
            position (projected performance had the contract been performed).
            Step 2, establish the actual position (actual financial
            performance post-breach). Step 3, calculate the difference (the
            net loss of expected profit). See our guide on{" "}
            <Link href="/guides/lost-profits-but-for-methodology">
              lost profits and the but-for methodology
            </Link>{" "}
            and our{" "}
            <Link href="/services#lost-profits">
              lost profits quantification service
            </Link>
            .
          </p>
          <p>
            Financial models address growth rate assumptions, variable versus
            fixed cost treatment, and sensitivity analysis on key assumptions, 
            essential where the defendant challenges the counterfactual
            projection under cross-examination.
          </p>

          <h2 id="reliance-loss">2. Reliance Loss (Wasted Expenditure)</h2>
          <p>
            Reliance loss covers expenditure incurred by the claimant in reliance
            on the contract being performed that has been wasted as a result of
            the breach. It returns the claimant to the position they would have
            been in had the contract never been made, an alternative to
            expectation damages where profits cannot be calculated or where the
            claimant made a bad bargain.
          </p>
          <p>
            Key authorities include <em>Anglia Television Ltd v Reed</em>{" "}
            [1972], where pre-contractual expenditure was recoverable if within
            the contemplation of the parties, and <em>CCC Films v Impact
            Quadrant</em> [1985], where the claimant may elect reliance damages
            where profits cannot be proved. Read our{" "}
            <Link href="/guides/wasted-expenditure-reliance-loss">
              wasted expenditure and reliance loss guide
            </Link>
            .
          </p>
          <p>
            <strong>Defence, Bad Bargain:</strong> The defendant may argue that
            even if the contract had been performed, the claimant would not have
            recovered its expenditure. The burden of proof is on the defendant
            to establish this. Expert witnesses must address the bad bargain
            defence where reliance loss is claimed.
          </p>

          <h2 id="consequential-loss">3. Consequential Loss</h2>
          <p>
            Consequential loss comprises losses beyond the direct loss of
            bargain, additional losses that flow from the breach. Each head
            must pass the Hadley v Baxendale two-limb test: Limb 1 (loss arising
            naturally from the breach) or Limb 2 (loss within the reasonable
            contemplation of both parties at contract formation).
          </p>
          <ResponsiveTable>
          <table className="min-w-[32rem]">
            <thead>
              <tr>
                <th>Loss Type</th>
                <th>Example</th>
                <th>Limb</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Direct loss of profit on contract</td>
                <td>£500k contract not performed</td>
                <td>Limb 1</td>
              </tr>
              <tr>
                <td>Loss of follow-on contract (known)</td>
                <td>Defendant knew of sub-contract</td>
                <td>Limb 2</td>
              </tr>
              <tr>
                <td>Loss of follow-on contract (unknown)</td>
                <td>Defendant unaware of sub-contract</td>
                <td>Not recoverable</td>
              </tr>
              <tr>
                <td>Reputational damage</td>
                <td>Loss of future customers</td>
                <td>Rarely recoverable</td>
              </tr>
            </tbody>
          </table>
          </ResponsiveTable>
          <p>
            Our{" "}
            <Link href="/services#consequential-loss">
              consequential loss assessment service
            </Link>{" "}
            addresses remoteness for each head separately.
          </p>

          <h2>The Duty to Mitigate</h2>
          <p>
            The claimant must take reasonable steps to minimise their loss.
            Failure to mitigate reduces the recoverable damages. Expert
            witnesses assess: what steps were available to the claimant to
            mitigate; whether those steps were taken; and what loss would have
            been avoided by proper mitigation. See{" "}
            <Link href="/glossary#duty-to-mitigate">duty to mitigate</Link> in our glossary and
            our <Link href="/guides">legal guides</Link>.
          </p>

          <h2>Interest and the Time Value of Money</h2>
          <p>
            Courts award interest on damages from the date of loss to judgment
            under section 35A of the Senior Courts Act 1981. Expert witnesses
            address the appropriate interest rate and compounding approach, 
            particularly important in long-running disputes where the loss
            occurred years before trial.
          </p>

          <h2>Limitations on Recovery</h2>
          <ul>
            <li>
              <strong>Remoteness</strong>, {" "}
              <Link href="/guides/hadley-v-baxendale-remoteness-guide">
                Hadley v Baxendale
              </Link>
            </li>
            <li>
              <strong>Mitigation duty</strong>, claimant must minimise loss
            </li>
            <li>
              <strong>Contributory negligence</strong>, rare in pure contract
              claims
            </li>
            <li>
              <strong>Contractual limitation and exclusion clauses</strong>
            </li>
            <li>
              <strong>Penalty clause rule</strong>, {" "}
              <em>Cavendish Square</em> [2015] UKSC 67
            </li>
          </ul>

          <p className="mt-8">
            For sector-specific loss issues, see our{" "}
            <Link href="/case-types">case types</Link> and{" "}
            <Link href="/sectors">sectors</Link> pages.
          </p>

          <RelatedLinks links={LOSS_TYPES_RELATED_LINKS} />
        </article>
      </Section>
      <CTASection />
    </>
  );
}
