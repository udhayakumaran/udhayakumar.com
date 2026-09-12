import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture Decisions",
  description: "Architectural tradeoffs and design decisions under production constraints. How I choose between correctness, complexity, and operational overhead.",
};

const stats = [
  { label: "ADRs LOGGED", value: "3", tag: "DOCUMENTED" },
  { label: "PRINCIPLES CODIFIED", value: "5", tag: "APPLIED" },
  { label: "SCALE PROVEN AT", value: "200+", tag: "MERCHANTS" },
  { label: "YEARS IN PRODUCTION", value: "13+", tag: "" },
];

const adrs = [
  {
    id: "ADR-001",
    status: "RATIFIED · PRODUCTION",
    title: "Land Raw vs. Normalize at Ingest",
    problem: "Four e-commerce platforms (Shopify, BigCommerce, WooCommerce, Magento 1, Magento 2) each send customer data in different schemas. Need a unified model for downstream products — recommendations, segmentation, attribution.",
    rejected: { name: "Normalize at Ingest", body: "One unified schema across all platforms at write time. Simpler downstream, but a wrong shape at ingest becomes a multi-service migration to fix." },
    chosen: { name: "Land Raw", body: "Preserve each source's schema, normalize downstream via views and query models. New consumers can ask for data shaped differently without touching the landing layer." },
    tradeoffLabel: "Accepted Tradeoff",
    tradeoff: "Thousands of tables instead of one unified schema. Schema migrations run across all client tables — complex coordination and operational overhead (index management, backups).",
    lesson: "At scale, operational overhead is worth buying architectural flexibility. Normalize where mistakes are cheap (views, query models) — don't commit the whole system to a wrong ingest decision.",
  },
  {
    id: "ADR-002",
    status: "RATIFIED · PRODUCTION",
    title: "Regional Replicas (5-10s Lag) vs. Strong Consistency",
    problem: "Recommendation system serves 5 regions (US, EU, APAC, India, Brazil). Need 200ms p99 latency for good UX.",
    rejected: { name: "Central Redis + Pub/Sub", body: "One region guarantees consistency, but causes 300-500ms latency from distant regions — merchants in India waiting half a second for a recommendation." },
    chosen: { name: "Regional Replicas", body: "5-10 second lag per region. Each region serves from local Redis with no central bottleneck, hitting 200ms p99." },
    tradeoffLabel: "Accepted Tradeoff",
    tradeoff: "5-10 second data lag — recommendations might be stale. Fallback complexity if a replica lags too much.",
    lesson: "Latency matters more than freshness for UX. 5-10s stale is acceptable; 500ms slow is not. Trade off the consistency you don't need for the performance you do.",
  },
  {
    id: "ADR-003",
    status: "RATIFIED · PRODUCTION",
    title: "Table-per-Tenant vs. Shared Tables",
    problem: "200+ merchants, each with orders/customers/products data. How to structure MySQL — one shared table or separate tables per tenant?",
    rejected: { name: "Shared Tables", body: "Looks cheaper until production scale. Validated by a real incident: lock contention at 100+ concurrent customers with LOAD DATA parallelism proved shared tables break." },
    chosen: { name: "Table-per-Tenant", body: "Each merchant has isolated tables. Merchant A's slow query doesn't block Merchant B; per-tenant resync is faster; cascading failures prevented." },
    tradeoffLabel: "Accepted Tradeoff",
    tradeoff: "Thousands of tables, not manageable with simple SQL. Schema migrations run across all tables — complex coordination and operational overhead.",
    lesson: "Table-per-tenant costs more to operate but prevents silent cascading failures. Accept the complexity of thousands of tables if it buys isolation.",
  },
];

const principles = [
  {
    title: "Reversibility over purity",
    body: "Normalize data where mistakes are reversible; defer normalization where they're expensive to fix. A wrong materialized view is a redefinition away from correction. A wrong schema at ingest is a multi-service migration.",
    practice: "In practice, I landed raw data first, then fanned out shaped copies (MongoDB, ClickHouse, BigQuery), not the other way around. Mistakes in views are cheap; mistakes in the landing layer are catastrophic.",
  },
  {
    title: "Match storage to question",
    body: "Point lookups → MongoDB. Population filtering → ClickHouse or BigQuery. One database can't efficiently answer all three questions. Denormalization-in-consumers beats materialization-in-database.",
    practice: "Recommendations wanted fast point lookups (MongoDB), segmentation wanted population filtering (BigQuery then ClickHouse), reporting wanted columnar aggregation (BigQuery). Three storage systems, not one-size-fits-all.",
  },
  {
    title: "Operational simplicity over sophistication",
    body: "A legible system is easier to debug than a clever one. A Pub/Sub consumer publishing lag metrics and failing visibly beats a Dataflow job hiding execution details.",
    practice: "I chose explicit Pub/Sub consumers over Dataflow pipelines. Observable, debuggable, no hidden execution state — the backpressure pattern became adoptable company-wide because it was legible.",
  },
  {
    title: "Ship in trust order, not sophistication order",
    body: "Recommendations: manual blocks first (day 1), then automated (month 2), then smart (month 6). Clients who started on manual graduated to smart. Adoption requires trust; trust requires shipping something usable first.",
    practice: "I launched with manual recommendation blocks (literally \"we pick these products for you\"), proved value, then built ranking. By then merchants trusted the system enough to adopt sophistication.",
  },
  {
    title: "Constraints matter more than code",
    body: "A pod memory limit is real; a network timeout is real; data growth rate is real. Feedback loops (backpressure, pause/resume) beat throwing resources at symptoms.",
    practice: "Segmentation daily batch beats real-time CDC because the actual constraint was \"CSMs run campaigns once daily,\" not theoretical freshness ideals. Pub/Sub backpressure beats heap allocation because the constraint is memory, not code elegance.",
  },
];

export default function ArchitectureDecisionsPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-label-mono-sm text-label-mono-sm text-accent hover:text-accent-ink transition-colors min-h-[44px]"
        >
          <span className="text-[14px]">←</span>
          <span>BACK TO OVERVIEW</span>
        </Link>
        <div className="inline-flex items-center gap-2 self-start sm:self-auto px-2.5 py-1 rounded bg-panel border border-rule">
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span className="font-caption-mono text-caption-mono text-ink-2 uppercase tracking-widest">INDEX // ARCHITECTURE DECISION RECORDS</span>
        </div>
      </div>

      <header className="pt-2 pb-8">
        <span className="font-caption-mono text-caption-mono text-accent-ink uppercase tracking-wider block mb-1">
          Engineering Governance
        </span>
        <h1 className="font-headline-lg text-headline-lg text-ink font-bold tracking-tight mb-2">
          Architecture Under Constraints
        </h1>
        <p className="font-body-lg text-body-lg text-ink-2 max-w-[65ch] leading-[1.8]">
          Big architectural decisions aren&apos;t about what&apos;s theoretically best; they&apos;re about trading off what you&apos;re willing to pay for what you need. At scale, operational overhead becomes the real constraint.
        </p>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 pb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-panel p-4 rounded border border-rule flex flex-col justify-between hover:bg-panel-2 transition-colors">
            <span className="font-caption-mono text-caption-mono text-ink-3 uppercase">{s.label}</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-display-hero text-[32px] leading-tight font-bold text-ink">{s.value}</span>
              {s.tag && <span className="font-label-mono-sm text-label-mono-sm text-sage">{s.tag}</span>}
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-6 pb-10">
        {adrs.map((adr) => (
          <article key={adr.id} className="bg-panel rounded border border-rule p-5 sm:p-6 hover:border-rule-2 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-rule">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-label-mono-lg text-label-mono-lg font-bold text-accent">{adr.id}</span>
                  <span className="text-rule-2">•</span>
                  <span className="px-2 py-0.5 rounded bg-sage-wash text-sage border border-sage font-caption-mono text-caption-mono font-medium">{adr.status}</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-ink font-semibold">{adr.title}</h2>
              </div>
            </div>

            <div className="py-4 border-b border-rule">
              <h3 className="font-caption-mono text-caption-mono text-ink-2 uppercase tracking-wider mb-1.5">01 // Problem &amp; Context</h3>
              <p className="font-body-md text-body-md text-ink-2 max-w-[65ch] leading-[1.8]">{adr.problem}</p>
            </div>

            <div className="py-4 border-b border-rule">
              <h3 className="font-caption-mono text-caption-mono text-ink-2 uppercase tracking-wider mb-3">02 // Considered vs. Chosen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-bg rounded border border-rule">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-label-mono-sm text-label-mono-sm font-semibold text-ink">{adr.rejected.name}</span>
                    <span className="font-caption-mono text-[10px] text-accent-ink">REJECTED</span>
                  </div>
                  <p className="font-caption-mono text-[11px] text-ink-3 mt-1.5 leading-relaxed">{adr.rejected.body}</p>
                </div>
                <div className="p-3 bg-accent-wash rounded border border-accent">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-label-mono-sm text-label-mono-sm font-bold text-accent-ink">{adr.chosen.name}</span>
                    <span className="font-caption-mono text-[10px] font-bold text-sage">CHOSEN</span>
                  </div>
                  <p className="font-caption-mono text-[11px] text-ink-2 mt-1.5 leading-relaxed">{adr.chosen.body}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-2 border-accent pl-3.5 py-1">
                <span className="font-caption-mono text-caption-mono text-accent uppercase font-bold block mb-1">Ratified Decision</span>
                <p className="font-body-sm text-body-sm text-ink leading-relaxed">{adr.chosen.body}</p>
              </div>
              <div className="border-l-2 border-sage pl-3.5 py-1">
                <span className="font-caption-mono text-caption-mono text-sage uppercase font-bold block mb-1">{adr.tradeoffLabel}</span>
                <p className="font-body-sm text-body-sm text-ink-2 leading-relaxed">{adr.tradeoff}</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-bg rounded border border-rule">
              <span className="font-caption-mono text-caption-mono text-ink-2 uppercase block mb-1">Lesson</span>
              <p className="font-body-sm text-body-sm text-ink-2 leading-relaxed">{adr.lesson}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="pb-10 border-t border-rule pt-8">
        <p className="font-body-md text-body-md text-ink max-w-[65ch] leading-[1.8]">
          Common thread across all three: at scale, operational overhead beats architectural purity. Accept the complexity of thousands of tables if it buys isolation. Accept the complexity of regional replicas if it buys latency. Accept the complexity of landing raw if it buys reversibility.
        </p>
      </section>

      <section className="pb-10 border-t border-rule pt-8">
        <h2 className="font-headline-lg text-headline-lg text-ink font-semibold mb-6">Five Principles That Guide These Decisions</h2>
        <div className="flex flex-col gap-6">
          {principles.map((p, i) => (
            <div key={p.title} className="p-5 bg-panel rounded border border-rule">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-label-mono-lg text-label-mono-lg text-accent font-semibold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-headline-sm text-headline-sm text-accent font-semibold">{p.title}</h3>
              </div>
              <p className="font-body-md text-body-md text-ink leading-[1.8] mb-2">{p.body}</p>
              <p className="font-body-sm text-body-sm text-ink-2 leading-[1.8]">{p.practice}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 text-center border-t border-rule">
        <p className="font-body-lg text-body-lg text-ink mb-4">
          These principles emerged from 13+ years of building systems and 5+ years of production operations at scale.
        </p>
        <Link href="/case-studies/hard-problems/" className="text-accent font-label-mono-sm text-label-mono-sm font-semibold">
          Read ten production incidents →
        </Link>
      </section>
    </div>
  );
}
