import { Metadata } from "next";
import CaseStudyTagBar from "../../components/CaseStudyTagBar";
import CaseStudyHero, { MetaItem, MetricItem } from "../../components/CaseStudyHero";
import SectionBlock from "../../components/SectionBlock";
import CTAButton from "../../components/CTAButton";

export const metadata: Metadata = {
  title: "The Data Platform",
  description: "Rebuilding customer and order data infrastructure across 200+ merchants with tiered freshness.",
  alternates: {
    canonical: "https://udhayakumar.com/case-studies/data-platform/",
  },
  openGraph: {
    title: "The Data Platform",
    description: "Rebuilding customer and order data infrastructure across 200+ merchants with tiered freshness.",
    url: "https://udhayakumar.com/case-studies/data-platform/",
  },
};

const metaStrip: MetaItem[] = [
  { label: "SOURCES", value: "Commerce, Click-tracking, Loyalty, CRM" },
  { label: "CDC PIPELINE", value: "Debezium" },
  { label: "TRANSPORT", value: "Google Pub/Sub" },
  { label: "MIGRATION", value: "3-Month Cutover", accent: "sage" },
];

const metrics: MetricItem[] = [
  { label: "MERCHANTS ONBOARDED", value: "200", suffix: "+", note: "Across 5 commerce platforms" },
  { label: "FASTEST TIER FRESHNESS", value: "<5", suffix: "min", note: "Webhook-capable platforms", suffixColor: "sage" },
  { label: "CLICKHOUSE COST CUT", value: "66", suffix: "%", note: "4× compute (BigQuery → ClickHouse)" },
  { label: "ROLLBACK WINDOW", value: "30", suffix: "days", note: "Old pipeline kept live, never invoked" },
];

const failurePoints = [
  { title: "6+ hour batch delays:", body: "Commerce webhooks provided near-real-time events, but custom platform integrations required a full data download every 6 hours — click-tracking and loyalty data were even slower." },
  { title: "Custom integrations per product:", body: "Every new downstream product needed to build its own integration instead of tapping a shared stream." },
  { title: "Expensive BigQuery reporting:", body: "Reporting was expensive because queries had to reprocess data constantly instead of reading from a purpose-built serving layer." },
  { title: "No unified data model:", body: "Customer data, orders, click-tracking, and loyalty data all flowed through separate systems with no unified schema." },
];

const architectureLayers = [
  { label: "01. Consolidation", body: "Four source systems (commerce, click-tracking, loyalty, CRM) land in a raw MySQL store, preserving original per-source schema." },
  { label: "02. CDC", body: "Debezium streams changes off the landing store through Google Pub/Sub, giving a replay boundary and per-tenant isolation." },
  { label: "03. Serving fan-out", body: "Three specialized stores: MongoDB for point lookups, ClickHouse for analytics, BigQuery for historical/audit data." },
];

const safeguards = [
  { title: "1. Dual-Write Validation Window", tag: "2-WEEK CANARY", tagVariant: "sage", body: "Dual-wrote to old and new landing layers for 2 weeks. Hourly validation compared row counts, key distributions, timestamp ranges, and checksums before each store's cutover." },
  { title: "2. 30-Day Rollback Window", tag: "SAFETY NET", tagVariant: "accent", body: "Kept the old pipeline running for 30 days after cutover so a broken migration could be reverted. Never had to use it, but it reduced risk both operationally and psychologically." },
  { title: "3. Freshness Monitoring & Paging", tag: "5-MIN ALERT · 15-MIN PAGE", tagVariant: "neutral", body: "Tracked freshness (source → landing → serving), lag per store, and checkpoint latency. Alerted on 5-minute latency deviation; paged on-call for delays over 15 minutes." },
];

const resultsTable = [
  { metric: "Data Freshness (webhook-capable platforms)", legacy: "Days-late (legacy cron)", now: "<5 minutes", gain: "Real-time unlocked" },
  { metric: "Data Freshness (full-resync platforms)", legacy: "Days-late (legacy cron)", now: "~6 hours", gain: "Tiered by capability" },
  { metric: "Segmentation Analytics Cost", legacy: "$2,470/mo (BigQuery)", now: "$850/mo (ClickHouse)", gain: "66% Cost Cut, 4× Compute" },
  { metric: "Reporting Cost Model", legacy: "Scaled with query volume", now: "Team-controlled, fixed", gain: "Cost Curve Owned" },
];

export default function DataPlatformCaseStudy() {
  return (
    <article className="flex flex-col w-full">
      <CaseStudyTagBar caseStudyLabel="CASE STUDY 01 // DATA PLATFORM // MYSQL & DEBEZIUM" />

      <CaseStudyHero
        badge="PRODUCTION MIGRATION ARCHIVE"
        badgeVariant="sage"
        publishedDate="2026-09-03"
        title="The Data Platform"
        intro="Owned the rebuild of customer and order data infrastructure across 200+ merchants on five commerce platforms — replacing a days-late legacy batch pipeline with a tiered-freshness system ranging from sub-5-minute webhooks to 6 hours for legacy integrations, migrated store-by-store over 3 months with a rollback path that was never used."
        metaStrip={metaStrip}
        metrics={metrics}
      />

      <SectionBlock index="01" eyebrow="ROLE & CONTEXT" title="My Role">
        <p className="font-body-md text-body-md text-ink-2">
          Owned architecture and technical direction — ingestion, CDC, and multi-layer serving design — plus CDC strategy, migration strategy, and production rollout across roughly five years of platform ownership. Directed the core implementation (CDC pipeline, landing store, warehouse consolidation) that the platform team, which I grew from 4 to 7 engineers, built and maintained.
        </p>
      </SectionBlock>

      <SectionBlock index="02" eyebrow="TOPOLOGY & FRESHNESS TIERS" meta="DEBEZIUM CDC TO WAREHOUSE" title="System Architecture">
        <div className="bg-panel p-4 sm:p-6 rounded overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-4 bg-panel-2 p-2 rounded">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
              <span className="font-label-mono-sm text-label-mono-sm text-ink font-semibold">DISTRIBUTED CDC PIPELINE</span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span className="font-caption-mono text-caption-mono text-ink-2 flex items-center gap-1">
                <span className="w-2 h-2 rounded bg-sage inline-block"></span> CDC STREAM
              </span>
              <span className="font-caption-mono text-caption-mono text-ink-2 flex items-center gap-1">
                <span className="w-2 h-2 rounded bg-accent inline-block"></span> WAREHOUSE WRITE
              </span>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-2">
            <svg className="w-full min-w-[700px] h-auto" viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x={20} y={20} width={130} height={45} rx={4} fill="#F2EBDA" stroke="#DED2B4" strokeWidth={1.5} />
              <text x={85} y={47} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#1C1A15">Commerce</text>
              <rect x={170} y={20} width={130} height={45} rx={4} fill="#F2EBDA" stroke="#DED2B4" strokeWidth={1.5} />
              <text x={235} y={47} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#1C1A15">Click-tracking</text>
              <rect x={320} y={20} width={130} height={45} rx={4} fill="#F2EBDA" stroke="#DED2B4" strokeWidth={1.5} />
              <text x={385} y={47} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#1C1A15">Loyalty</text>
              <rect x={470} y={20} width={130} height={45} rx={4} fill="#F2EBDA" stroke="#DED2B4" strokeWidth={1.5} />
              <text x={535} y={47} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#1C1A15">CRM</text>

              <line x1={85} y1={65} x2={200} y2={100} stroke="#6E7B4C" strokeWidth={1.5} strokeDasharray="4 4" />
              <line x1={235} y1={65} x2={280} y2={100} stroke="#6E7B4C" strokeWidth={1.5} strokeDasharray="4 4" />
              <line x1={385} y1={65} x2={360} y2={100} stroke="#6E7B4C" strokeWidth={1.5} strokeDasharray="4 4" />
              <line x1={535} y1={65} x2={440} y2={100} stroke="#6E7B4C" strokeWidth={1.5} strokeDasharray="4 4" />

              <rect x={60} y={100} width={440} height={55} rx={4} fill="#E9E0C8" stroke="#C7B896" strokeWidth={1.5} />
              <text x={280} y={124} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#1C1A15">MySQL Landing Layer</text>
              <text x={280} y={140} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#59564A">raw, per-source schemas, reversible</text>

              <line x1={280} y1={155} x2={280} y2={190} stroke="#6E7B4C" strokeWidth={1.5} strokeDasharray="4 4" />

              <rect x={80} y={190} width={400} height={55} rx={4} fill="#E7EAD6" stroke="#6E7B4C" strokeWidth={1.5} />
              <text x={280} y={214} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#576337">Debezium CDC → Google Pub/Sub</text>
              <text x={280} y={230} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#576337">replay boundary, per-tenant isolation</text>

              <line x1={160} y1={245} x2={90} y2={290} stroke="#C85A2E" strokeWidth={1.5} strokeDasharray="4 4" />
              <line x1={280} y1={245} x2={280} y2={290} stroke="#C85A2E" strokeWidth={1.5} strokeDasharray="4 4" />
              <line x1={400} y1={245} x2={470} y2={290} stroke="#C85A2E" strokeWidth={1.5} strokeDasharray="4 4" />

              <rect x={20} y={290} width={140} height={65} rx={4} fill="#F5DFC9" stroke="#C85A2E" strokeWidth={1.5} />
              <text x={90} y={314} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#A84420">MongoDB</text>
              <text x={90} y={330} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#9F3C11">serving</text>
              <text x={90} y={344} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#9F3C11">point lookups</text>

              <rect x={210} y={290} width={140} height={65} rx={4} fill="#F5DFC9" stroke="#C85A2E" strokeWidth={1.5} />
              <text x={280} y={314} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#A84420">ClickHouse</text>
              <text x={280} y={330} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#9F3C11">analytics</text>
              <text x={280} y={344} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#9F3C11">aggregation</text>

              <rect x={400} y={290} width={140} height={65} rx={4} fill="#F5DFC9" stroke="#C85A2E" strokeWidth={1.5} />
              <text x={470} y={314} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#A84420">BigQuery</text>
              <text x={470} y={330} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#9F3C11">historical</text>
              <text x={470} y={344} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#9F3C11">audit trail</text>
            </svg>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock index="03" eyebrow="WHY THE LEGACY PIPELINE HAD TO GO" title="The Challenge: Stale Data, Fragmented Sources">
        <p className="font-body-md text-body-md text-ink-2">
          Data arrived days late. Commerce webhooks gave near-real-time events, but custom platform integrations required a full data download every 6 hours, and click-tracking and loyalty data were even slower. Downstream products couldn&apos;t build real-time features, and the pipeline was load-bearing enough that breaking it during migration risked halting critical business functions.
        </p>
        <div className="p-4 bg-panel rounded my-1">
          <h3 className="font-headline-sm text-headline-sm text-ink mb-1 flex items-center gap-2">
            <span className="text-accent text-[20px]">⚠</span>
            Failure Points in the Legacy Pipeline
          </h3>
          <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-ink-2 list-none pt-2">
            {failurePoints.map((f) => (
              <li key={f.title} className="flex items-start gap-2">
                <span className="font-label-mono-sm text-label-mono-sm text-accent font-bold">&gt;</span>
                <span><strong>{f.title}</strong> {f.body}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="font-body-md text-body-md text-ink-2">
          New products needed to build custom integrations instead of tapping a shared stream, and reporting was expensive because queries had to reprocess data constantly.
        </p>
      </SectionBlock>

      <SectionBlock index="04" eyebrow="STRATEGY & IMPLEMENTATION" title="Architectural Solution: Landing Layer + CDC Fan-Out">
        <p className="font-body-md text-body-md text-ink-2">
          Consolidates four source systems (commerce, click-tracking, loyalty, CRM) into a raw MySQL landing store, preserving original schema. Debezium streams changes via Google Pub/Sub. The downstream layer fans out to three specialized stores rather than forcing every workload onto one general-purpose warehouse.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-1">
          {architectureLayers.map((t) => (
            <div key={t.label} className="p-4 bg-panel rounded flex flex-col">
              <span className="font-label-mono-sm text-label-mono-sm text-accent font-bold mb-1">{t.label}</span>
              <p className="font-body-sm text-body-sm text-ink-2">{t.body}</p>
            </div>
          ))}
        </div>
        <p className="font-body-md text-body-md text-ink-2">
          New sources plug into the landing layer and new consumers subscribe to Pub/Sub — no custom integrations required. The platform team owns the landing layer and CDC, with a 5-minute latency alert and a 15-minute on-call page threshold.
        </p>
      </SectionBlock>

      {/* Code block: ClickHouse tuning */}
      <section className="flex flex-col gap-3 w-full mb-10">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-sm text-headline-sm text-ink flex items-center gap-2">
            <span className="text-accent text-[16px]">$_</span>
            ClickHouse Tuning Notes
          </h3>
          <span className="font-caption-mono text-caption-mono text-ink-3">clickhouse-merge-tree.conf</span>
        </div>
        <div className="bg-panel rounded overflow-hidden">
          <div className="bg-panel-2 px-4 py-2 flex items-center justify-between">
            <span className="font-caption-mono text-caption-mono text-ink-2">SEGMENTATION ANALYTICS // BIGQUERY → CLICKHOUSE</span>
          </div>
          <pre className="p-4 font-label-mono-sm text-label-mono-sm text-ink overflow-x-auto leading-relaxed">
            <code>{`-- Migrated customer segmentation from BigQuery Views to ClickHouse
-- Cost: 66% reduction | Compute: 64GB -> 16GB RAM (4x) via cityHash64 batched hashing

PARTITION BY (client_id, date)   -- isolates per-store backfills, date-range scans
ORDER BY date                    -- serves segmentation filters + time-series reporting

-- Materialized views: hourly batch refresh, not real-time
-- (stable CPU, predictable cost -- the workload was wrong for the DB model, not a tuning problem)`}</code>
          </pre>
        </div>
      </section>

      <SectionBlock index="05" eyebrow="KEY DECISIONS" title="Decisions & Tradeoffs">
        <ul className="flex flex-col gap-2 list-none">
          <li id="decision-0" className="p-4 bg-panel rounded scroll-my-24">
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Landed Raw Instead of Normalizing at Ingest</h3>
            <p className="font-body-sm text-body-sm text-ink-2">Costs: five schemas instead of one. Benefit: reversibility — wrong normalization at ingest means a multi-service migration; a wrong view is a redefinition away from correction.</p>
          </li>
          <li id="decision-1" className="p-4 bg-panel rounded scroll-my-24">
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">CDC From the Landing Store, Not Sources</h3>
            <p className="font-body-sm text-body-sm text-ink-2">Costs: one more moving part. Benefit: CDC from a consolidated landing layer with replay and validation boundaries.</p>
          </li>
          <li className="p-4 bg-panel rounded">
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Two Replication Paths: Datastream + Debezium</h3>
            <p className="font-body-sm text-body-sm text-ink-2">Started with managed Datastream, gradually earned our way to pure Debezium. Avoided speculative engineering while managing risk.</p>
          </li>
          <li id="decision-3" className="p-4 bg-panel rounded scroll-my-24">
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Table-Per-Client Multiplies Operational Surface</h3>
            <p className="font-body-sm text-body-sm text-ink-2">Thousands of tables; migrations run across all of them. Accepted because shared-table contention is worse and less visible than operational overhead.</p>
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock index="06" eyebrow="PRODUCTION SAFEGUARDS" title="Rollout: Migration Without Breaking Production">
        <p className="font-body-md text-body-md text-ink-2">
          Store-by-store cutover, because the data layer sits under every product — a bad cutover breaks all of them simultaneously. Three safeguards ran throughout the migration:
        </p>
        <div className="flex flex-col gap-2 my-1">
          {safeguards.map((s) => (
            <div key={s.title} className="p-4 bg-panel rounded">
              <div className="flex items-center justify-between mb-1 gap-2 flex-wrap">
                <span className="font-label-mono-lg text-label-mono-lg text-ink font-semibold">{s.title}</span>
                <span className={`px-2 py-0.5 rounded font-caption-mono text-caption-mono ${
                  s.tagVariant === "sage" ? "bg-sage-wash text-sage" : s.tagVariant === "accent" ? "bg-accent-wash text-accent-ink" : "bg-panel-2 text-ink-2"
                }`}>
                  {s.tag}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-ink-2">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="my-1 p-4 bg-panel border border-accent rounded">
          <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">The production incident that changed the design</h3>
          <p className="font-body-sm text-body-sm text-ink-2 mb-2">Debezium&apos;s snapshot query on 50M rows consumed 60% CPU and blocked production writes. We stopped rollout immediately, used Datastream to seed the baseline instead, then transitioned tables to Debezium incrementally.</p>
          <a href="/engineering-notes/debezium-50m-row-snapshot/" className="font-label-mono-sm text-label-mono-sm text-accent hover:text-accent-ink transition-colors">Read the full incident and recovery decisions →</a>
        </div>
      </SectionBlock>

      <SectionBlock index="07" eyebrow="RESULTS & RETROSPECTIVE" title="Results & Operational Payoff" topPadding>
        <p className="font-body-md text-body-md text-ink-2">
          Real-time recommendations became possible within seconds of customer actions, conversion attribution could finally link orders to specific blocks, and segmentation worked with fresh data instead of stale exports — while reporting moved off a cost curve that scaled with query volume onto one the team controlled.
        </p>
        <div className="w-full overflow-x-auto my-1 rounded bg-panel">
          <table className="w-full text-left font-body-sm text-body-sm">
            <thead>
              <tr className="bg-panel-2 text-ink font-label-mono-sm text-label-mono-sm">
                <th className="p-3">METRIC</th>
                <th className="p-3">LEGACY</th>
                <th className="p-3">NOW</th>
                <th className="p-3">NET GAIN</th>
              </tr>
            </thead>
            <tbody className="font-caption-mono text-caption-mono text-ink-2">
              {resultsTable.map((row) => (
                <tr key={row.metric} className="border-t border-rule/40">
                  <td className="p-3 font-semibold text-ink">{row.metric}</td>
                  <td className="p-3 text-accent-ink">{row.legacy}</td>
                  <td className="p-3 text-sage">{row.now}</td>
                  <td className="p-3 font-bold text-ink">{row.gain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body-md text-body-md text-ink-2 pt-2">
          <strong>What I&apos;d change today:</strong> I&apos;d go to pure Debezium from day one — Datastream was our transition strategy, and we could have earned off it faster once Debezium proved itself in production. I&apos;d also consider separate CDC per domain (commerce vs. click-tracking) to reduce blast radius, and evaluate Iceberg for the analytics layer, which wasn&apos;t production-ready at the time.
        </p>
      </SectionBlock>

      <div className="mt-4 pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CTAButton href="/case-studies/" label="ALL CASE STUDIES" variant="panel" size="sm" icon="☰" />
        <CTAButton href="/case-studies/identity-resolution/" label="NEXT: IDENTITY RESOLUTION" variant="solid" size="sm" arrow="right" />
      </div>
    </article>
  );
}
