SEO Gap-Closure Plan: contractlossexpert.com

Feed this file to Cursor as a task list. Repo snapshot audited: commit 33e2099.
Read section 0 first: same strategic tension as commercialdisputeexpert.com
(worldwide marketing vs UK-rooted legal substance), and it's more acute here because the
schema is actively self-contradictory right now, not just thin.

After every batch of changes, run:

npm run seo:generate && npm run seo:verify && npm run build


P0.0: Strategic decision required before P0.1, P1.6, P2.4 below

The Organization schema says areaServed: Worldwide, but every single Service schema
node (all 8) still says areaServed: "United Kingdom": this is a live contradiction
within the same site's structured data, not just a marketing/content mismatch. Combined
with deep, genuine UK-law content (CPR Part 35, TCC, Hadley v Baxendale, JCT/NEC/FIDIC,
Commercial Agents Regulations 1993, ACA/RICS credentials), you have the same choice as
the commercial-dispute-expert site:


Option A: genuinely global: broaden legal content to name equivalent doctrines in
other jurisdictions where feasible (US: UCC/Restatement remoteness principles; keep
named English cases as illustrative authority rather than the only framework), and make
every Service node's areaServed match the Organization's Worldwide claim.
Option B: UK/England-Wales focused: change Organization areaServed to match the
Service nodes (United Kingdom or England and Wales), and adjust "worldwide" hero
copy to something accurate, e.g. "English-law expert witnesses, available for
international arbitration and cross-border instructions."


Decide before touching schema: this changes the direction of the P0.1 fix below, not
just its presence.

**Decision (17 Jul 2026): Option B.** Substantive content is English-law rooted; align
Organization schema and marketing copy with United Kingdom service area while retaining
international arbitration availability in hero/subtitle copy. Guide H1s may keep
"Solicitor's Guide" under this option; P1.6 focuses on CPR Part 35 / "applicable
jurisdictions" inaccuracies, not retitling guides.


P0.1: Resolve the Organization vs Service areaServed contradiction

File: src/lib/schema.ts
Fix: once P0.0 is decided, make Organization.areaServed and every Service.areaServed
consistent. This is the single highest-priority schema fix on this site: a crawler or
AI system reading this structured data currently gets contradictory geographic claims
from the same entity.
Verify: grep -n "areaServed" src/lib/schema.ts: all values match the P0.0 decision.

P0.2: Add redirects for removed routes /fees, /faq, /experts

File: middleware.ts or next.config.ts (whichever already handles the apex→www
redirect: add rules there for consistency)
Problem: these three routes were deleted with no 301/410 in place; they currently
404. Any external links or previously indexed URLs pointing at them lose their equity
instead of passing it forward.
Fix: add permanent redirects:

/fees     → /how-to-instruct   (fees content is now covered there, or /contact)
/faq      → /glossary          (or a new consolidated location if you rebuild FAQ content: see P3.2)
/experts  → /qualifications    (closest surviving page describing expert credentials)

Confirm these destinations make sense for your actual current content before committing , 
adjust targets if a better-matching page exists.
Verify: curl -I https://www.contractlossexpert.com/fees (and /faq, /experts)
each return a 301/308 to a real, relevant page: not a 404.

P0.3: Fix homepage sitemap trailing-slash mismatch

File: scripts/generate-seo.ts
Problem: the sitemap's homepage <loc> is https://www.contractlossexpert.com/
(trailing slash), while the rendered canonical tag is
https://www.contractlossexpert.com (no trailing slash): a same-page canonical/sitemap
mismatch, which is a soft signal inconsistency search engines may flag.
Fix: normalize the homepage sitemap entry to match the canonical exactly (no trailing
slash), consistent with how every other URL in the sitemap is already generated.
Verify: public/sitemap.xml's first <loc> has no trailing slash.

P0.4: Fix live content-quality defects

Files: src/data/case-types.ts, src/data/sectors.ts, src/app/cookies/page.tsx
(or wherever cookie policy copy lives), src/app/privacy/page.tsx
Problems (verbatim from current source):


Construction quantum case copy: "Construction contract disputes in the are
governed...": missing word, reads as broken/auto-generated.
Distribution/agency case meta description: "...exclusivity breach quantification
under law": "under law" is meaninglessly vague; should specify what law (ties to the
P0.0 decision: likely "under English law" or "under applicable commercial agency
law" depending on your answer there).
Energy sector copy: "experts produce quantum schedules...": sentence starts
lowercase, reads as a template/concatenation error.
Cookie policy: "Data may be processed in the, EEA, or United States...": broken
punctuation/missing word.
Privacy policy: still names Formspree as the form processor, but the actual
implementation writes to Google Sheets with an optional webhook: this is a factual
misstatement in a legal/compliance document, not just a typo.
Privacy and terms both still say May 2025 as the effective date despite this being
a much later snapshot.
Fix: correct all six in place. For #5 specifically, this is a genuine data-processing
accuracy issue: confirm the actual current form-processing vendor before rewriting the
clause, and update the effective date alongside it.
Verify: grep -rn "Formspree\|are governed\|the, EEA\|under law" src/ returns clean
results (aside from any deliberately-kept instances you've reviewed).


P0.5: Fix the broken glossary SearchAction

Files: src/lib/schema.ts (WebSite schema declares the SearchAction),
glossary search component (likely src/components/GlossarySearch.tsx or similar)
Problem: WebSite JSON-LD advertises a sitelinks search box targeting
/glossary?q={search_term_string}, but the glossary search component doesn't read the
q query parameter on load: so a user (or Google testing the declared search action)
arriving via that URL gets an unfiltered glossary, not the searched term. This is a
functional bug and a structured-data accuracy problem, since you're telling Google
your site does something it doesn't.
Fix: on mount, read q from useSearchParams() (or equivalent) and initialize the
glossary search/filter state with it.
Verify: manually visit /glossary?q=hadley: the glossary should load pre-filtered
to matching terms, not show the full unfiltered list.

P0.6: Render the dormant guide FAQs

File: src/components/GuidePageTemplate.tsx
Problem: 12 FAQ entries exist in src/data/guides.ts (2 per guide × 6 guides) but
GuidePageTemplate never renders them or emits FAQPage schema for them: this is
content you've already written sitting unused.
Fix: add a visible FAQ section (matching the pattern already used in
ContentPageTemplate for case-types/sectors) to GuidePageTemplate, and emit FAQPage
JSON-LD alongside the existing Article/BreadcrumbList schema on each guide page.
Verify: each of the 6 /guides/[slug] pages now visibly shows its 2 FAQs, and Rich
Results Test shows FAQPage on those routes.


P1: High value, do next

P1.1: Fix Article schema hardcoded dates

File: src/lib/schema.ts (articleSchema())
Problem: every guide's Article schema uses hardcoded defaults , 
datePublished: 2025-01-15, dateModified: 2025-05-26: regardless of when that guide
was actually written or last changed.
Fix: add real publishedDate/modifiedDate fields to each guide entry in
src/data/guides.ts (best-effort real dates, or at minimum distinct dates matching when
each guide was actually added to the repo), and have articleSchema() read from there
instead of a shared default.
Verify: the 6 guide pages show distinct, plausible dates in their Article schema , 
not identical defaults on every one.

P1.2: Add unique OG/Twitter images

File (new): src/app/opengraph-image.tsx, plus optionally per-route-type variants
Problem: no Open Graph image is configured anywhere on this site: social shares and
some search surfaces get no preview image at all, which is a bigger gap than "generic
image" (the other three sites at least have a shared image).
Fix: build a src/app/opengraph-image.tsx using Next's ImageResponse (same pattern
as your other three repos: reuse a similar navy/gold or brand-appropriate palette), wire
it into createMetadata() in src/lib/metadata.ts as the default openGraph.images /
twitter.images entry. Once that baseline exists, consider per-guide and per-case-type
variants as a P2 follow-up (lower priority than just having an image).
Verify: Facebook Sharing Debugger / LinkedIn Post Inspector show an image on / and
one /guides/[slug] URL.

P1.3: Standardize noindex policy across legal pages

Files: page metadata for /cookies, /privacy, /terms
Problem: /cookies is indexable and in the sitemap (priority 0.60); /privacy and
/terms are noindex. No stated rationale for the split.
Fix: same recommendation as your other repos: pick one policy and apply it
consistently. Given /cookies likely has genuinely unique content (categories, consent
mechanism explanation) versus fairly generic privacy/terms boilerplate, keeping only
/cookies indexable is defensible: but document that reasoning somewhere (a code
comment in the metadata call is enough) so it doesn't look like an oversight to the next
person editing this.

P1.4: Fix real content defects flagged in the audit

Files: src/data/case-types.ts (earn-out entry)
Problem: the earn-out case type has a duplicate /how-to-instruct related link in
its data; runtime de-duplication currently hides the duplicate from rendering, but it's
still wrong at the source and wastes a related-link slot that could point somewhere more
specific.
Fix: remove the duplicate and replace it with a more specific related link (e.g. the
Qualifications page, or a relevant glossary anchor like Earn-Out Agreement) if one isn't
already present in that entry's link list.

P1.5: Reduce redundant crawl-blocking on /thank-you

File: scripts/generate-seo.ts
Problem: identical issue to the commercial-dispute-expert site: /thank-you is both
Disallow-ed in robots.txt and noindex, nofollow at the page level, meaning if it was
ever indexed, Google can't re-crawl it to learn to drop it.
Fix: remove /thank-you from Disallow, keep the page-level noindex only.
Verify: same as the sibling site's P0.2.

P1.6: Align jurisdiction-specific phrasing with the P0.0 decision

Files: src/data/glossary.ts, src/data/guides.ts, src/app/terms/page.tsx
Problem: several passages describe CPR Part 35 as applying in "applicable
jurisdictions," when it's specifically English and Welsh civil procedure: inaccurate
regardless of which way P0.0 is resolved. Terms governing-law clause uses the same
vague "applicable jurisdictions" wording.
Fix (Option B): scope CPR Part 35 and English contract-law references explicitly to
England and Wales; set terms governing law to England and Wales. Under Option B, guide
"Solicitor's Guide" H1s are acceptable and need not be retitled.
Verify: manual read-through of flagged pages; no unqualified claim that an
England/Wales-specific rule applies globally.

P1.7: Add /contact to sitemap (indexability mismatch)

File: src/lib/seo/publicUrlInventory.ts
Problem: `/contact` is index/follow in metadata but deliberately excluded from the
sitemap: a crawl/discovery inconsistency flagged in the SEO audit (§23 item 3).
Fix: include `/contact` in `APP_STATIC_PATHS` and remove it from
`SITEMAP_EXCLUDED_PATHS`; assign a sensible priority (e.g. 0.85).
Verify: `npm run seo:verify` passes with 36 URLs; `/contact` appears in
`public/sitemap.xml`.


P2: Cleanup, lower urgency but easy

P2.1: Add favicon / manifest

Same as the other three sites: none currently exists here.

P2.2: Add BreadcrumbList to legal/utility pages

Files: cookies, privacy, terms, thank-you page templates
Fix: these currently emit no JSON-LD at all. Adding BreadcrumbList is low effort and
closes a small consistency gap versus every other page type on the site.

P2.3: Remove dead personSchema() code

File: src/lib/schema.ts
Fix: personSchema() is unused after /experts removal: delete it, or keep it only
if you're planning to reintroduce expert profile pages soon (see P3 below).

P2.4: Add basic conversion event tracking

File: wherever GA4 is initialized (consent-gated analytics component)
Problem: no events fire for contact-form start, contact-form submit, thank-you page
view, or CTA clicks: you currently can't measure which SEO-driven pages actually
convert.
Fix: add GA4 event calls for at least form-submit-success (the /thank-you
redirect is a reliable proxy) and primary CTA clicks. Respect the existing consent gate , 
don't fire events before consent is granted.

P2.5: Add cache headers for static assets/sitemap/robots

File: netlify.toml
Fix: add explicit Cache-Control headers for /sitemap.xml, /robots.txt, and
static assets: currently only content-type is set. Not strictly an SEO ranking factor,
but affects crawl efficiency and Core Web Vitals scoring.

P2.6: Fix 404 page metadata inheritance

File: src/app/not-found.tsx
Problem: custom 404 sets title/description/robots, but Open Graph, Twitter, canonical,
and hreflang can still inherit homepage values from the root layout: metadata pollution
for soft 404s (audit §23 item 9).
Fix: use `createMetadata()` with an explicit non-indexable path (e.g. `/404`) so
canonical, OG url, and social tags do not point at the homepage.
Verify: view-source on a 404 response shows canonical/og:url distinct from `/`.

P2.7: Add Organization contactPoint in schema

File: src/lib/schema.ts
Problem: Organization schema has email in a non-standard field but no `contactPoint`
node: flagged in audit §23 content defects item 13 and metadata/schema gaps.
Fix: add `contactPoint` with `@type: ContactPoint`, `contactType: customer service`,
and `email: SITE_EMAIL`.
Verify: Rich Results / JSON-LD inspection shows contactPoint on homepage graph.

P2.8: Fix terms governing-law vagueness

File: src/app/terms/page.tsx
Problem: "laws of applicable jurisdictions" is as vague as the CPR Part 35 wording
fixed in P1.6: inconsistent with Option B positioning.
Fix: govern under the laws of England and Wales; exclusive jurisdiction of the courts
of England and Wales. Update effective date to July 2026 alongside privacy (P0.4).
Verify: no remaining "applicable jurisdictions" in terms copy.


P3: Strategic, larger lift

P3.1: E-E-A-T content gaps

No author bios, no reviewer credentials, no editorial policy statement, no citations to
primary legal sources, no "last reviewed" dates on guides, no case results or
testimonials, no organization address/phone in schema (mirrors the placeholder gap on
your commercial-dispute-expert site). This is the biggest lever for both trust and
long-tail informational rankings on a site this legally technical: scope as a dedicated
content/credibility project once P0.0's positioning question is settled, since the answer
affects whether you're sourcing UK or international credentials.

P3.2: Consider rebuilding a consolidated FAQ hub

/faq was removed and its content is now scattered across services/case-types/sectors/
glossary (64 FAQs total across the site, per the audit). That's actually reasonable
distributed-FAQ architecture for topical relevance, but if you want a single high-volume
FAQ page for broad "expert witness" query capture, consider rebuilding /faq as an
aggregator page that pulls from the same data sources rather than duplicating content , 
and redirect P0.2's /faq target there once it exists.


 Regression checklist (run after every task above)


 grep -n "areaServed" src/lib/schema.ts: Organization and all Service nodes agree (Option B: United Kingdom)
 curl -I on /fees, /faq, /experts all 301/308 to real pages, not 404
 /glossary?q=hadley actually filters results
 All 6 /guides/[slug] pages render visible FAQs + FAQPage schema
 grep -rn "Formspree\|are governed\|the, EEA\|under law\|applicable jurisdictions" clean (reviewed exceptions aside)
 npm run seo:verify passes (36 URLs including /contact)
 Sitemap homepage <loc> has no trailing slash, matches rendered canonical exactly
 /contact present in sitemap; /thank-you not Disallow-ed in robots.txt
 404 page canonical/og:url not homepage
 No new 404s via a full crawl