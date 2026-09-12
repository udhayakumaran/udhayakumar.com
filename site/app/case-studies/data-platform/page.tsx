import Link from "next/link";
import { Metadata } from "next";
import BackLink from "../../components/BackLink";

export const metadata: Metadata = {
  title: "The Data Platform",
  description: "Rebuilding customer and order data infrastructure across 200+ merchants with tiered freshness.",
};

const metaStrip = [
  { label: "SOURCES", value: "MySQL, MongoDB, Postgres" },
  { label: "CDC PIPELINE", value: "Debezium" },
  { label: "TRANSPORT", value: "Google Pub/Sub" },
  { label: "SLA IMPACT", value: "0% Dropped", accent: "sage" },
];

const metrics = [
  { label: "MERCHANTS ONBOARDED", value: "200", suffix: "+", note: "Across 5 commerce platforms" },
  { label: "FASTEST TIER FRESHNESS", value: "<5", suffix: "min", note: "Webhook-driven tier-1", suffixColor: "sage" },
  { label: "COST REDUCTION", value: "40", suffix: "%", note: "3 warehouses consolidated to 1" },
  { label: "ADOPTION LIFT", value: "91", suffix: "%", accentValue: "sage", note: "From 6% baseline (weekly active)" },
];

const failurePoints = [
  { title: "Stale-by-default reads:", body: "Nightly batch ETL meant every team — Customer Success, Analytics, Product — operated on 12-24 hour old snapshots, making real-time decisions impossible." },
  { title: "Fragmented sources:", body: "Data scattered across five independent e-commerce platforms with no unified view, forcing teams to reconcile numbers by hand across systems." },
  { title: "High migration risk:", body: "The legacy pipeline was load-bearing for critical business functions — breaking it during migration was not an acceptable failure mode." },
];

const tiers = [
  { label: "01. Tier-1 (Webhooks)", body: "High-frequency webhook events land in Pub/Sub within seconds, giving sub-5-minute freshness for the data that changes fastest." },
  { label: "02. Tier-2 (Snapshots)", body: "Debezium CDC streams hourly database snapshots through the MySQL landing zone for data that tolerates an hour of lag." },
  { label: "03. Tier-3 (Batch)", body: "Legacy nightly batch exports cover archival and low-priority data, avoiding the cost of real-time infrastructure where it isn't needed." },
];

const safeguards = [
  { title: "1. Dual-Write Validation Window", tag: "2-WEEK CANARY", tagVariant: "sage", body: "Every merchant ran old batch and new CDC pipelines in parallel for a 2-week validation window before cutover, with feature flags toggling reads between them." },
  { title: "2. Incident Response Rehearsals", tag: "FAILURE DRILLS", tagVariant: "accent", body: "Rehearsed common failure modes ahead of rollout — Debezium snapshot hangs, Kafka partition rebalances, ClickHouse merge storms — so on-call response was practiced, not improvised." },
  { title: "3. Automated Drift Detection", tag: "CANARY LOGIC", tagVariant: "neutral", body: "Automated canary jobs compared old-pipeline and new-pipeline outputs continuously, surfacing data drift before it reached a dashboard or report." },
];

const resultsTable = [
  { metric: "Data Latency (p80 of queries)", legacy: "12-24 hours", now: "5 minutes", gain: "~150x Faster" },
  { metric: "Warehouse Infrastructure", legacy: "3 single-purpose warehouses", now: "1 consolidated (BigQuery+ClickHouse)", gain: "40% Cost Reduction" },
  { metric: "Customer Success Adoption", legacy: "6% weekly active", now: "91% weekly active", gain: "15x Adoption" },
  { metric: "Analytics Report Refresh", legacy: "4 hours", now: "5 minutes", gain: "48x Faster" },
];

export default function DataPlatformCaseStudy() {
  return (
    <article className="flex flex-col w-full">
      {/* Top nav / metadata header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-8 pb-4 mb-8 border-b border-rule">
        <BackLink href="/" label="Back to Home" />
        <span className="font-caption-mono text-caption-mono text-ink-3 uppercase tracking-wider">
          CASE STUDY 01 // DATA PLATFORM // MYSQL &amp; DEBEZIUM
        </span>
      </div>

      {/* Hero */}
      <header className="flex flex-col gap-4 mb-10">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-sage-wash text-sage font-caption-mono text-caption-mono uppercase tracking-widest">
            PRODUCTION MIGRATION ARCHIVE
          </span>
          <span className="font-caption-mono text-caption-mono text-ink-3">•</span>
          <span className="font-caption-mono text-caption-mono text-ink-2">PUBLISHED 2025-09-03</span>
        </div>
        <h1 className="font-display-hero text-display-hero text-ink break-words">The Data Platform</h1>
        <p className="font-body-lg text-body-lg text-ink-2 max-w-[72ch]">
          Owned the rebuild of customer and order data infrastructure across 200+ merchants on five commerce platforms — replacing a 12-24 hour stale nightly batch pipeline with a tiered-freshness system ranging from sub-5-minute webhooks to nightly archival, without breaking a single load-bearing dependency during migration.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          {metaStrip.map((m) => (
            <div key={m.label} className="p-3 bg-panel rounded">
              <span className="block font-caption-mono text-caption-mono text-ink-3 uppercase">{m.label}</span>
              <span className={`font-label-mono-sm text-label-mono-sm font-semibold ${m.accent === "sage" ? "text-sage" : "text-ink"}`}>
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Metric callout bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
        {metrics.map((m) => (
          <div key={m.label} className="bg-panel p-4 rounded flex flex-col justify-between">
            <span className="font-caption-mono text-caption-mono text-ink-3 uppercase tracking-wider">{m.label}</span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className={`font-display-hero text-headline-lg ${m.accentValue === "sage" ? "text-sage" : "text-ink"}`}>{m.value}</span>
              <span className={`font-label-mono-sm text-label-mono-sm font-bold ${m.suffixColor === "sage" ? "text-sage" : "text-accent"}`}>{m.suffix}</span>
            </div>
            <span className="font-caption-mono text-caption-mono text-ink-2 mt-1">{m.note}</span>
          </div>
        ))}
      </section>

      {/* 01 // Role & Context */}
      <section className="flex flex-col gap-3 mb-10">
        <span className="font-caption-mono text-caption-mono text-accent">01 // ROLE &amp; CONTEXT</span>
        <h2 className="font-headline-lg text-headline-lg text-ink">My Role</h2>
        <p className="font-body-md text-body-md text-ink-2">
          Owned architectural design, implementation, and operational reliability of the entire data platform. Led the technical decision-making around freshness guarantees, CDC tooling, and warehouse consolidation. Managed the execution across five parallel e-commerce platform integrations while maintaining zero data loss.
        </p>
      </section>

      {/* 02 // Topology */}
      <section className="flex flex-col gap-3 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <span className="font-caption-mono text-caption-mono text-accent">02 // TOPOLOGY &amp; FRESHNESS TIERS</span>
          <span className="font-caption-mono text-caption-mono text-ink-3">DEBEZIUM CDC TO WAREHOUSE</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-ink">System Architecture</h2>

        <div className="bg-panel p-4 sm:p-6 rounded overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-4 bg-panel-2 p-2 rounded">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
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
            <svg className="w-full min-w-[700px] h-auto" viewBox="0 0 760 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x={20} y={20} width={130} height={40} rx={4} fill="#F2EBDA" stroke="#DED2B4" strokeWidth={1.5} />
              <text x={85} y={44} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#1C1A15">MongoDB</text>
              <rect x={20} y={90} width={130} height={40} rx={4} fill="#F2EBDA" stroke="#DED2B4" strokeWidth={1.5} />
              <text x={85} y={114} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#1C1A15">Postgres</text>
              <rect x={20} y={160} width={130} height={40} rx={4} fill="#F2EBDA" stroke="#DED2B4" strokeWidth={1.5} />
              <text x={85} y={184} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#1C1A15">Webhooks</text>

              <line x1={150} y1={40} x2={230} y2={90} stroke="#6E7B4C" strokeWidth={1.5} strokeDasharray="4 4" />
              <line x1={150} y1={110} x2={230} y2={100} stroke="#6E7B4C" strokeWidth={1.5} strokeDasharray="4 4" />
              <line x1={150} y1={180} x2={480} y2={110} stroke="#C85A2E" strokeWidth={1.5} strokeDasharray="4 4" />

              <rect x={230} y={70} width={140} height={50} rx={4} fill="#E9E0C8" stroke="#C7B896" strokeWidth={1.5} />
              <text x={300} y={92} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#1C1A15">MySQL Landing</text>
              <text x={300} y={108} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#59564A">Sync point</text>

              <line x1={370} y1={95} x2={480} y2={95} stroke="#6E7B4C" strokeWidth={1.5} strokeDasharray="4 4" />
              <rect x={480} y={70} width={130} height={50} rx={4} fill="#E7EAD6" stroke="#6E7B4C" strokeWidth={1.5} />
              <text x={545} y={92} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#576337">Debezium CDC</text>
              <text x={545} y={108} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#576337">+ Pub/Sub</text>

              <line x1={610} y1={85} x2={690} y2={45} stroke="#C85A2E" strokeWidth={1.5} strokeDasharray="4 4" />
              <line x1={610} y1={105} x2={690} y2={145} stroke="#C85A2E" strokeWidth={1.5} strokeDasharray="4 4" />

              <rect x={620} y={20} width={120} height={50} rx={4} fill="#F5DFC9" stroke="#C85A2E" strokeWidth={1.5} />
              <text x={680} y={42} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#A84420">BigQuery</text>
              <text x={680} y={58} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#9F3C11">Analytics</text>

              <rect x={620} y={120} width={120} height={50} rx={4} fill="#F5DFC9" stroke="#C85A2E" strokeWidth={1.5} />
              <text x={680} y={142} fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" fill="#A84420">ClickHouse</text>
              <text x={680} y={158} fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" fill="#9F3C11">Real-time</text>
            </svg>
          </div>
        </div>
      </section>

      {/* 03 // Problem */}
      <section className="flex flex-col gap-3 mb-10">
        <span className="font-caption-mono text-caption-mono text-accent">03 // WHY THE LEGACY PIPELINE HAD TO GO</span>
        <h2 className="font-headline-lg text-headline-lg text-ink">The Challenge: Stale Data, Fragmented Sources</h2>
        <p className="font-body-md text-body-md text-ink-2">
          Legacy data infrastructure consisted of nightly batch ETL jobs pulling data 12-24 hours behind production reality. The data was scattered across five independent e-commerce platforms with no unified view, and the pipeline was load-bearing enough that breaking it during migration risked halting critical business functions.
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
          The requirement was absolute: define freshness tiers for different data classes without building five separate pipelines, and enable non-engineers to query the unified dataset without SQL expertise.
        </p>
      </section>

      {/* 04 // Strategy */}
      <section className="flex flex-col gap-3 mb-10">
        <span className="font-caption-mono text-caption-mono text-accent">04 // STRATEGY &amp; IMPLEMENTATION</span>
        <h2 className="font-headline-lg text-headline-lg text-ink">Architectural Solution: Tiered Freshness Model</h2>
        <p className="font-body-md text-body-md text-ink-2">
          Chose Debezium for CDC to avoid application code changes, and deployed a single MySQL landing zone as a synchronization point — eliminating the need to maintain five separate CDC connectors. Rather than forcing every consumer onto the most expensive freshness guarantee, three tiers let each data class pick the latency it actually needed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-1">
          {tiers.map((t) => (
            <div key={t.label} className="p-4 bg-panel rounded flex flex-col">
              <span className="font-label-mono-sm text-label-mono-sm text-accent font-bold mb-1">{t.label}</span>
              <p className="font-body-sm text-body-sm text-ink-2">{t.body}</p>
            </div>
          ))}
        </div>
        <p className="font-body-md text-body-md text-ink-2">
          Events flowed through Google Cloud Pub/Sub for decoupling, then into BigQuery for historical analytics and ClickHouse for real-time queries — giving each consumer independent scaling without forcing a single warehouse to serve every workload.
        </p>
      </section>

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
            <span className="font-caption-mono text-caption-mono text-ink-2">MERGE TREE // WRITE PATH TUNING</span>
          </div>
          <pre className="p-4 font-label-mono-sm text-label-mono-sm text-ink overflow-x-auto leading-relaxed">
            <code>{`-- Initial bottleneck: 500 events/sec before merge lock contention
-- Ordering by InsertionTime (not primary key) cut write amplification 60%
ORDER BY (insertion_time, merchant_id)

-- ReplacingMergeTree handles late-arriving updates without full re-merges
ENGINE = ReplacingMergeTree(version)

-- Result: sustainable 8k events/sec, p99 query latency < 200ms`}</code>
          </pre>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="flex flex-col gap-3 mb-10">
        <span className="font-caption-mono text-caption-mono text-accent">05 // KEY DECISIONS</span>
        <h2 className="font-headline-lg text-headline-lg text-ink">Decisions &amp; Tradeoffs</h2>
        <ul className="flex flex-col gap-2 list-none">
          <li id="decision-0" className="p-4 bg-panel rounded scroll-my-24">
            <h4 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">MySQL as Landing Zone</h4>
            <p className="font-body-sm text-body-sm text-ink-2">Instead of managing five separate Debezium → Kafka connectors, centralize snapshot and streaming logic in one MySQL instance. Simplifies schema evolution and gives one place to tune CDC lag and snapshot concurrency.</p>
          </li>
          <li id="decision-1" className="p-4 bg-panel rounded scroll-my-24">
            <h4 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Tiered Freshness Model</h4>
            <p className="font-body-sm text-body-sm text-ink-2">Webhooks → Pub/Sub (tier-1, &lt;5m), database snapshots → Debezium (tier-2, 1h), batch exports (tier-3, nightly). Lets customers optimize cost/latency tradeoff without forcing all data to the highest SLA.</p>
          </li>
          <li id="decision-3" className="p-4 bg-panel rounded scroll-my-24">
            <h4 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">BigQuery + ClickHouse Dual Path</h4>
            <p className="font-body-sm text-body-sm text-ink-2">BigQuery handles slow analytics queries (minutes acceptable); ClickHouse serves fast dashboards and alerts (sub-second SLA). Allows independent scaling and tuning per workload.</p>
          </li>
        </ul>
      </section>

      {/* 06 // Production Safeguards (Execution) */}
      <section className="flex flex-col gap-3 mb-10">
        <span className="font-caption-mono text-caption-mono text-accent">06 // PRODUCTION SAFEGUARDS</span>
        <h2 className="font-headline-lg text-headline-lg text-ink">Rollout: Migration Without Breaking Production</h2>
        <p className="font-body-md text-body-md text-ink-2">
          Rolling out to 200+ merchants one at a time is an operational discipline, not a one-time cutover. Three safeguards ran throughout the migration:
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
      </section>

      {/* 07 // Results table (Impact) */}
      <section className="flex flex-col gap-3 pt-2 mb-10">
        <span className="font-caption-mono text-caption-mono text-accent">07 // RESULTS &amp; RETROSPECTIVE</span>
        <h2 className="font-headline-lg text-headline-lg text-ink">Results &amp; Operational Payoff</h2>
        <p className="font-body-md text-body-md text-ink-2">
          Customer Success adoption jumped from 6% to 91% weekly active usage because teams finally had access to fresh data that matched reality.
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
          <strong>What I&apos;d change today:</strong> given current tooling maturity, I&apos;d use Postgres logical replication + Kafka Connect over Debezium for simpler operational debugging. The dual-path (BigQuery + ClickHouse) added operational overhead that a single unified MPP warehouse could have replaced had we bet on that earlier.
        </p>
      </section>

      {/* Bottom nav */}
      <div className="mt-4 pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          href="/case-studies/"
          className="min-h-[44px] px-4 py-2 bg-panel rounded font-label-mono-sm text-label-mono-sm text-ink hover:bg-panel-2 transition-colors inline-flex items-center gap-2"
        >
          <span className="text-[14px]">☰</span>
          <span>ALL CASE STUDIES</span>
        </Link>
        <Link
          href="/case-studies/segmentation/"
          className="min-h-[44px] px-4 py-2 bg-accent rounded font-label-mono-sm text-label-mono-sm text-bg hover:bg-accent-ink transition-colors inline-flex items-center gap-2 group"
        >
          <span>NEXT: CUSTOMER SEGMENTATION</span>
          <span className="text-[14px] transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
