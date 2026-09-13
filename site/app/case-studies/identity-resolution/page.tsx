import { Metadata } from "next";
import CaseStudyTagBar from "../../components/CaseStudyTagBar";
import CaseStudyHero, { MetaItem, MetricItem } from "../../components/CaseStudyHero";
import SectionBlock from "../../components/SectionBlock";
import CTAButton from "../../components/CTAButton";

export const metadata: Metadata = {
  title: "Identity Resolution",
  description: "Deterministic identity resolution across email, device, cookie, and phone IDs — merging 15%+ of contacts into an existing identity.",
  alternates: {
    canonical: "https://udhayakumar.com/case-studies/identity-resolution/",
  },
  openGraph: {
    title: "Identity Resolution",
    description: "Deterministic identity resolution across email, device, cookie, and phone IDs — merging 15%+ of contacts into an existing identity.",
    url: "https://udhayakumar.com/case-studies/identity-resolution/",
  },
};

const metaStrip: MetaItem[] = [
  { label: "IDENTIFIERS", value: "Email, Device ID, Cookie, Phone, Push Token, Platform ID" },
  { label: "MATCHING", value: "Deterministic, key-based" },
  { label: "RESOLVED AT", value: "Read-time, across legacy distributed DBs" },
  { label: "STATUS", value: "Live · Profile renovation v2 planned", accent: "sage" },
];

const metrics: MetricItem[] = [
  { label: "MERCHANTS", value: "200-300", suffix: "+", note: "" },
  { label: "CONTACT MERGE RATE", value: "~15", suffix: "%+", note: "Matched into existing identity vs. new user" },
  { label: "IDENTIFIERS UNIFIED", value: "6", suffix: "", note: "" },
  { label: "RENOVATION V2", value: "Architected", suffix: ", not shipped", note: "", isText: true },
];

export default function IdentityResolutionCaseStudy() {
  return (
    <article className="flex flex-col w-full">
      <CaseStudyTagBar caseStudyLabel="CASE STUDY 02 // IDENTITY / CUSTOMER DATA // DETERMINISTIC MATCHING" />

      <CaseStudyHero
        badge="CROSS-DEVICE"
        badgeVariant="sage"
        publishedDate="2026-09-12"
        title="Identity Resolution"
        intro="Architected deterministic identity resolution across email, device ID, cookie, phone, push token, and platform customer IDs to unify pre-purchase sessions across devices and channels — so a customer leaving an email in a promotional popup on browser, then purchasing later on mobile, had all their prior activity correctly attributed to them."
        metaStrip={metaStrip}
        metrics={metrics}
      />

      <SectionBlock index="01" eyebrow="ROLE & CONTEXT" title="My Role">
        <p className="font-body-md text-body-md text-ink-2">
          Owned the architecture and rollout of identity resolution across a legacy, highly-distributed customer-profile system serving 200-300 merchants. Worked with data, product, and platform teams to surface unified customer identities at read-time across existing per-service databases — no migration, no single identity store, but a deterministic key-based join across email, device IDs, cookies, phone numbers, push tokens, and internal platform customer IDs (Shopify, BigCommerce, etc.).
        </p>
        <p className="font-body-md text-body-md text-ink-2">
          The problem: customers shopped across devices and channels, but merchant systems tracked them as separate individuals. A customer who left an email in a promotional popup on a browser, then purchased on mobile hours later, would show up as two different users — losing all signal from the browser session (pages viewed, cart adds, engagement) for downstream features like segmentation and recommendations.
        </p>
      </SectionBlock>

      <SectionBlock index="02" eyebrow="THE PROBLEM" title="Fragmented Customer Identity Across Devices">
        <p className="font-body-md text-body-md text-ink-2">
          The customer-profile system was legacy and highly-distributed: customer data lived across multiple databases maintained by different services, each storing its own subset of identifiers (email in one system, device ID in another, platform customer ID in a third). Matching a single customer across these systems required joining across database boundaries at query-time — expensive, slow, and unmaintained.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-1">
          <div className="p-4 bg-panel rounded">
            <div className="font-label-mono-sm text-label-mono-sm text-accent font-semibold mb-2">BEFORE</div>
            <ul className="list-none space-y-1 font-body-sm text-body-sm text-ink-2">
              <li>Customer email on browser session</li>
              <li>Same customer device ID on mobile purchase</li>
              <li>Two separate user profiles</li>
              <li>Signal from browser session lost</li>
            </ul>
          </div>
          <div className="p-4 bg-panel rounded">
            <div className="font-label-mono-sm text-label-mono-sm text-accent font-semibold mb-2">WHY IT MATTERED</div>
            <ul className="list-none space-y-1 font-body-sm text-body-sm text-ink-2">
              <li>Incomplete customer profiles</li>
              <li>Personalization based on false premises</li>
              <li>Segmentation and recommendations off-target</li>
              <li>~15%+ of customers unidentified as duplicates</li>
            </ul>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock index="03" eyebrow="ARCHITECTURE" title="Deterministic Matching at Read-Time">
        <p className="font-body-md text-body-md text-ink-2">
          Instead of migrating to a single identity store (a risky, expensive rewrite on legacy systems), identity resolution ran at read-time: when a customer was retrieved for segmentation, recommendations, or reporting, a deterministic join across six identifiers (email, device ID, cookie, phone, push token, platform customer ID) matched them against existing customer records. If any identifier matched, the records were unified in-memory, creating a single, merged customer profile.
        </p>

        <div className="bg-panel p-4 sm:p-6 rounded overflow-hidden my-1">
          <div className="flex items-center justify-between pb-2 mb-4 bg-panel-2 p-2 rounded">
            <span className="font-label-mono-sm text-label-mono-sm text-ink font-semibold">FRAGMENTED → UNIFIED: A CUSTOMER ACROSS DEVICES</span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="px-4 py-2 bg-panel-2 border border-rule rounded text-center w-full">
                <span className="font-label-mono-sm text-label-mono-sm text-ink">Browser Session</span>
              </div>
              <span className="text-ink-3 font-body-sm">Email: user@example.com</span>
              <span className="text-ink-3 font-body-sm">Device: iPhone (cookie)</span>
              <span className="text-accent-ink font-caption-mono text-caption-mono">3 pages viewed, cart add</span>
              <span className="text-ink-3 mt-2">↓ (no connection)</span>
              <div className="px-4 py-2 bg-panel-2 border border-rule rounded text-center w-full">
                <span className="font-label-mono-sm text-label-mono-sm text-ink">Mobile Purchase</span>
              </div>
              <span className="text-ink-3 font-body-sm">Same Email Detected</span>
              <span className="text-ink-3 font-body-sm">Same Device ID</span>
              <span className="text-accent-ink font-caption-mono text-caption-mono">Purchase: $45</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="px-4 py-2 bg-sage-wash border border-sage rounded text-center w-full">
                <span className="font-label-mono-sm text-label-mono-sm text-sage">Unified Identity</span>
              </div>
              <span className="text-sage font-body-sm">Email: user@example.com</span>
              <span className="text-sage font-body-sm">Device ID + Phone: 2 matches</span>
              <span className="text-sage font-caption-mono text-caption-mono">→ Same Person</span>
              <span className="text-ink-3 mt-4">Full Customer Profile</span>
              <span className="text-accent-ink font-caption-mono text-caption-mono">Browser: 3 pages, cart add</span>
              <span className="text-accent-ink font-caption-mono text-caption-mono">Mobile: purchase $45</span>
              <span className="text-sage font-caption-mono text-caption-mono">Now used for segmentation</span>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-rule text-ink-3 font-caption-mono text-caption-mono">
            POWERED BY: Customer retrieval → Deterministic identifier join (Email, Device ID, Cookie, Phone, Push Token, Platform ID) → Unified in-memory profile → Sent to segmentation, recommendations, analytics
          </div>
        </div>
      </SectionBlock>

      <SectionBlock index="04" eyebrow="KEY DECISIONS" title="Decisions & Tradeoffs">
        <ul className="flex flex-col gap-2 list-none">
          <li className="p-4 bg-panel rounded">
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Read-Time Join, Not Migrate-First</h3>
            <p className="font-body-sm text-body-sm text-ink-2">Legacy profile system was highly distributed across service databases. A full migration to a single identity store would have been expensive, slow, and risky — we would have shipped slower. Read-time deterministic join added latency per query but avoided the migration entirely, letting us ship identity resolution without blocking on infrastructure renovation.</p>
          </li>
          <li className="p-4 bg-panel rounded">
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Deterministic Matching Only</h3>
            <p className="font-body-sm text-body-sm text-ink-2">Scoped out probabilistic/fuzzy matching (e.g. email-similarity heuristics, ML-based clustering) to ship faster and keep resolution auditable — if two records matched, it was because an exact identifier was shared, not a guess. Probabilistic matching would have higher recall but lower precision, risking false merges that are hard to debug in production.</p>
          </li>
          <li className="p-4 bg-panel rounded">
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">No Conflict Resolution (v1)</h3>
            <p className="font-body-sm text-body-sm text-ink-2">Deterministic matching assumed clean data — a shared email meant the same person. In reality, email can be reused (e.g. a shared account, a person using a generic email across merchants). Handling conflicts (determining which identity wins, handling merges/splits) was designed for v2 (a full profile-system consolidation) but not shipped in v1 — the v2 renovation would have also unified schema, reduced read-time join complexity, and solved conflicts structurally.</p>
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock index="05" eyebrow="EXECUTION" title="Rollout & The Hard Part">
        <p className="font-body-md text-body-md text-ink-2">
          Started by adding identity resolution to the segmentation query engine — the most critical consumer of unified identity. Tested with a subset of merchants, measured merge rate (proportion of contacts resolved into an existing identity), and checked for correctness via spot-checks on known multi-device customers. Expanded to recommendations and analytics once confident, then rolled out to all 200-300 merchants.
        </p>
        <div className="p-4 bg-panel rounded">
          <h3 className="font-headline-sm text-headline-sm text-ink mb-2 flex items-center gap-2">
            <span className="text-accent text-[20px]">⚠</span>
            The Hard Part: Matching Across Distributed Databases
          </h3>
          <p className="font-body-sm text-body-sm text-ink-2">
            Each identifier lived in a different database: customer emails in MySQL (order records), device IDs in a time-series store (event log), cookies in an in-memory cache (session data), platform customer IDs in a MongoDB document (merchant sync). Matching a single customer required joining across these stores simultaneously — coordination overhead was high. A cache helped, but the join still happened at read-time for every customer retrieval until the identities were resolved. Later optimization: we added an identity cache that pre-warmed common identifier pairs, reducing the number of cross-DB joins per query. (Full cache to resolution would have required the profile-system renovation planned for v2.)
          </p>
        </div>
      </SectionBlock>

      <SectionBlock index="06" eyebrow="RESULTS & RETROSPECTIVE" title="Impact" topPadding>
        <p className="font-body-md text-body-md text-ink-2">
          Identity resolution lifted contact merge rate by ~15%+ &mdash; meaning ~15% of contacts that would have been counted as separate individuals were correctly resolved into an existing customer identity. Segmentation immediately got richer (audiences now included prior cross-device activity), recommendations improved (training data included a customer&apos;s full history, not a fragmented view), and analytics became more accurate.
        </p>
        <p className="font-body-md text-body-md text-ink-2 pt-2">
          <strong>What I&apos;d change today:</strong> The read-time join cost never went away &mdash; every customer retrieval paid the latency penalty until resolution was cached. The planned profile-system renovation (consolidating customer data into one store, handling conflicts structurally) would have solved this at the root, but was architected and scoped for v2, which didn&apos;t ship before the role transitioned. If building this again, I&apos;d either (a) invest in the infrastructure renovation upfront, or (b) build a smarter identity cache that handles edge cases (email reuse, account takeovers) earlier, rather than deferring to v2.
        </p>
      </SectionBlock>

      <div className="mt-4 pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CTAButton href="/case-studies/" label="ALL CASE STUDIES" variant="panel" size="sm" icon="☰" />
        <CTAButton href="/case-studies/segmentation/" label="NEXT: CUSTOMER SEGMENTATION" variant="solid" size="sm" arrow="right" />
      </div>
    </article>
  );
}
