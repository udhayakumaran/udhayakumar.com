import { Metadata } from "next";
import CaseStudyTagBar from "../../components/CaseStudyTagBar";
import CaseStudyHero, { MetaItem, MetricItem } from "../../components/CaseStudyHero";
import SectionBlock from "../../components/SectionBlock";
import CTAButton from "../../components/CTAButton";

export const metadata: Metadata = {
  title: "Recommendation Blocks",
  description: "Built product recommendations from zero to 80% adoption across five regions by designing a trust-building three-tier ladder: Manual → Automated → Smart.",
  alternates: {
    canonical: "https://udhayakumar.com/case-studies/recommendations/",
  },
  openGraph: {
    title: "Recommendation Blocks",
    description: "Built product recommendations from zero to 80% adoption across five regions by designing a trust-building three-tier ladder: Manual → Automated → Smart.",
    url: "https://udhayakumar.com/case-studies/recommendations/",
  },
};

const metaStrip: MetaItem[] = [
  { label: "SERVING", value: "MongoDB Atlas (multi-region)" },
  { label: "RANKING CACHE", value: "Redis" },
  { label: "REGIONS", value: "US, EU, APAC, India, Brazil" },
  { label: "LATENCY SLA", value: "200ms p99", accent: "sage" },
];

const metrics: MetricItem[] = [
  { label: "MERCHANT ADOPTION", value: "80", suffix: "%", note: "Of all merchants, from launch", accentValue: "sage" },
  { label: "REGIONS SERVED", value: "5", suffix: "", note: "Under one latency SLA" },
  { label: "P99 LATENCY", value: "200-400", suffix: "ms", note: "Across all five regions" },
  { label: "DAY-1 DATA REQUIRED", value: "0", suffix: "", note: "Curated tier ships with zero data" },
];

export default function RecommendationsCaseStudy() {
  return (
    <article className="flex flex-col w-full">
      <CaseStudyTagBar caseStudyLabel="CASE STUDY 03 // PRODUCT SYSTEM // NODE.JS & REDIS" />

      <CaseStudyHero
        badge="PRODUCT SYSTEM · ZERO TO ONE"
        publishedDate="2026-09-03"
        title="Recommendation Blocks"
        intro="Built the company's product recommendation system from zero. Solved the cold-start problem with three independent engines under CSM-driven tier selection — Curated (day 1, zero risk), Automated (pattern rules), Smart (live behavioral ranking) — served across five regions under a 200ms p99 latency SLA."
        metaStrip={metaStrip}
        metrics={metrics}
      />

      <SectionBlock index="01" eyebrow="ROLE & CONTEXT" title="My Role">
        <p className="font-body-md text-body-md text-ink-2">
          Designed the three-tier trust model (Manual/Automated/Smart) to reduce merchant risk and enable gradual adoption, architected multi-region serving with latency SLAs and the real-time ranking engine, and directed the Redis-backed live tier, MongoDB serving layer, and ranking algorithm implementation with a small team (2-3 engineers) while staying close to product tradeoffs.
        </p>
        <p className="font-body-md text-body-md text-ink-2">
          The platform serves 200+ merchants across five regions — SMBs with low transaction volume on day 1. Recommendation systems need behavioral data to produce quality results, so the architecture had to ship value on day one with zero data, then scale to algorithmic sophistication as data accumulated.
        </p>
      </SectionBlock>

      <SectionBlock index="02" eyebrow="THE PROBLEM" title="The Bootstrap Problem">
        <p className="font-body-md text-body-md text-ink-2">
          A new merchant has zero behavioral data on day 1. Live recommendation ranking needs statistical significance to produce quality results — ship live ranking immediately and recommendations are garbage, so merchants disable the feature. By day 30, when enough data exists, trust is already destroyed and can&apos;t be recovered. You need immediate value with zero data, but can&apos;t gather data unless merchants use recommendations first.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-1">
          <div className="p-4 bg-panel rounded">
            <div className="font-label-mono-sm text-label-mono-sm text-accent font-semibold mb-2">NAIVE APPROACH</div>
            <ul className="list-none space-y-1 font-body-sm text-body-sm text-ink-2">
              <li>Ship live ranking day 1</li>
              <li>Trains on zero data</li>
              <li>Produces noise → merchants distrust system</li>
            </ul>
          </div>
          <div className="p-4 bg-panel rounded">
            <div className="font-label-mono-sm text-label-mono-sm text-accent font-semibold mb-2">ARCHITECTURAL CHALLENGE</div>
            <ul className="list-none space-y-1 font-body-sm text-body-sm text-ink-2">
              <li>Immediate value, zero data required</li>
              <li>Bootstrap into sophisticated algorithms</li>
              <li>Serve multi-region under 200ms latency</li>
            </ul>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock index="03" eyebrow="ARCHITECTURE" title="Three Engines, CSM-Driven Tier Selection">
        <p className="font-body-md text-body-md text-ink-2">
          Three independent engines — Curated, Automated, Smart — with tier selection driven by CSM discretion, not data availability. CSMs choose which tier per merchant based on trust and use case. Data flows live to Redis, then migrates to BigQuery after 30 minutes of session inactivity or session close.
        </p>

        <div className="bg-panel p-4 sm:p-6 rounded overflow-hidden my-1">
          <div className="flex items-center justify-between pb-2 mb-4 bg-panel-2 p-2 rounded">
            <span className="font-label-mono-sm text-label-mono-sm text-ink font-semibold">TIER PROGRESSION → MULTI-REGION SERVING</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <div className="px-4 py-3 bg-panel-2 border border-rule rounded">
                <div className="font-label-mono-sm text-label-mono-sm text-ink font-semibold">Manual</div>
                <div className="font-caption-mono text-caption-mono text-ink-3">CSM hand-picks</div>
              </div>
              <span className="text-center text-accent font-caption-mono text-caption-mono">trust ↑</span>
              <div className="px-4 py-3 bg-panel-2 border border-rule rounded">
                <div className="font-label-mono-sm text-label-mono-sm text-ink font-semibold">Automated</div>
                <div className="font-caption-mono text-caption-mono text-ink-3">Rules · batch</div>
              </div>
              <span className="text-center text-accent font-caption-mono text-caption-mono">trust ↑</span>
              <div className="px-4 py-3 bg-sage-wash border border-sage rounded">
                <div className="font-label-mono-sm text-label-mono-sm text-sage font-semibold">Smart (80%+ merchants)</div>
                <div className="font-caption-mono text-caption-mono text-sage">Live ranking · Redis</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="px-4 py-3 bg-panel-2 border border-rule rounded">
                <div className="font-label-mono-sm text-label-mono-sm text-ink">US · EU · APAC</div>
              </div>
              <div className="px-4 py-3 bg-panel-2 border border-rule rounded">
                <div className="font-label-mono-sm text-label-mono-sm text-ink">India · Brazil</div>
              </div>
              <div className="px-4 py-3 bg-accent-wash border border-accent rounded">
                <div className="font-label-mono-sm text-label-mono-sm text-accent-ink font-semibold">200ms p99 latency SLA</div>
              </div>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-rule text-ink-3 font-caption-mono text-caption-mono">
            Latency-freshness tradeoff: regional read replicas lag 5-10s, acceptable for merchant UX. On slow replica, fallback to cached tier — prioritizes speed over freshness.
          </div>
        </div>
      </SectionBlock>

      <SectionBlock index="04" eyebrow="KEY DECISIONS" title="Decisions & Tradeoffs">
        <ul className="flex flex-col gap-2 list-none">
          <li className="p-4 bg-panel rounded">
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Tier Selection Driven by CSM Judgment</h3>
            <p className="font-body-sm text-body-sm text-ink-2">CSMs choose which tier per merchant — no automatic progression based on transaction thresholds. Puts control in the hands of customer success, not an algorithm.</p>
          </li>
          <li className="p-4 bg-panel rounded">
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Computation Matched to Data Maturity</h3>
            <p className="font-body-sm text-body-sm text-ink-2">Curated is static (no computation). Automated is batch rules. Smart is live ranking (statistical model). Computing live ranking on day-7 data would overfit.</p>
          </li>
          <li className="p-4 bg-panel rounded">
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Redis-First Serving, Accept Eventual Consistency</h3>
            <p className="font-body-sm text-body-sm text-ink-2">In-flight ranking state lost on Redis failure is acceptable for recommendations — would not accept this for transactional orders. The 200ms p99 requirement demands in-memory serving.</p>
          </li>
          <li className="p-4 bg-panel rounded">
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Read Replicas Trade Freshness for Latency</h3>
            <p className="font-body-sm text-body-sm text-ink-2">Regional replicas incur 5-10s replication lag — acceptable cost for 200ms p99 serving. A central Redis for all regions would mean 300-500ms network latency instead.</p>
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock index="05" eyebrow="EXECUTION" title="Validation, Monitoring, Rollback">
        <p className="font-body-md text-body-md text-ink-2">
          Smart ranking trained on historical data was validated against held-out test sets before serving live — checking for cardinality issues, signal stability, and tail behavior, rejecting models that failed validation. Built a canary deployment for the Smart tier: new models ran on 5% of traffic first, compared against the incumbent.
        </p>
        <p className="font-body-md text-body-md text-ink-2">
          Tracked block click-through rate and latency per tier. Anomalies (CTR drop &gt;10%, latency spike) paged on-call, and tiers could be disabled independently if quality degraded.
        </p>
      </SectionBlock>

      <SectionBlock index="06" eyebrow="RESULTS & RETROSPECTIVE" title="Impact" topPadding>
        <p className="font-body-md text-body-md text-ink-2">
          Cold-start was solved by CSM-driven tier selection across three independent engines, not algorithm-triggered progression. Multi-region serving with regional Redis and fallback caching hit 200ms p99 latency across five regions despite 5-10s replication lag, and the model validation gate prevented garbage output from ever reaching merchants and ruining trust.
        </p>
        <p className="font-body-md text-body-md text-ink-2 pt-2">
          <strong>What I&apos;d change today:</strong> canary deployments from day one rather than added later; a feature flag for the Smart tier per merchant instead of an all-or-nothing rollout; and separating model retraining from serving with an async cache layer, since the current design retrains synchronously and risks latency spikes.
        </p>
      </SectionBlock>

      <div className="mt-4 pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CTAButton href="/case-studies/" label="ALL CASE STUDIES" variant="panel" size="sm" icon="☰" />
        <CTAButton href="/case-studies/hard-problems/" label="NEXT: HARD PROBLEMS & LEARNINGS" variant="solid" size="sm" arrow="right" />
      </div>
    </article>
  );
}
