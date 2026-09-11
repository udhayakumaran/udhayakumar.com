import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Data Platform",
  description: "Rebuilding customer and order data infrastructure across 200+ merchants with tiered freshness.",
};

export default function DataPlatformCaseStudy() {
  return (
    <article>
      {/* Hero Section */}
      <section className="py-12 border-b border-rule">
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-2 text-caption-mono text-caption-mono text-ink-3">
            <span>Published 2025-09-03</span>
            <span>•</span>
            <span>Updated 2025-09-03</span>
          </div>
          <h1 className="font-display-hero text-display-hero text-ink">The Data Platform</h1>
          <p className="font-body-lg text-body-lg max-w-[65ch] text-ink-2">
            Owned the rebuild of customer and order data infrastructure across 200+ merchants on five commerce platforms; freshness ranges from sub-5-minute (webhooks) to ~6 hours (legacy) vs. days-late baseline.
          </p>
        </div>

        {/* Metrics Callout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-4 px-4 bg-panel border border-rule">
          <div>
            <span className="font-caption-mono text-caption-mono text-ink-3 block">MERCHANTS</span>
            <span className="font-label-mono-lg text-label-mono-lg text-ink font-semibold">200+</span>
          </div>
          <div>
            <span className="font-caption-mono text-caption-mono text-ink-3 block">PLATFORMS</span>
            <span className="font-label-mono-lg text-label-mono-lg text-ink font-semibold">5</span>
          </div>
          <div>
            <span className="font-caption-mono text-caption-mono text-ink-3 block">FRESHNESS</span>
            <span className="font-label-mono-lg text-label-mono-lg text-sage font-semibold">&lt;5m</span>
          </div>
        </div>
      </section>

      {/* Architecture Diagram Section */}
      <section className="py-12 border-b border-rule">
        <div className="mb-6">
          <span className="font-label-mono-sm text-label-mono-sm text-accent uppercase tracking-wider font-semibold">ARCHITECTURE</span>
          <h2 className="font-headline-lg text-headline-lg text-ink mt-2">System Topology</h2>
        </div>

        <div className="p-6 bg-panel border border-rule rounded-sm">
          <div className="flex items-center justify-between pb-3 border-b border-rule mb-4">
            <div className="flex items-center gap-2">
              <span className="text-accent">⚙</span>
              <span className="font-caption-mono text-caption-mono text-ink uppercase">DATA PIPELINE // DEBEZIUM CDC TO WAREHOUSE</span>
            </div>
            <span className="font-caption-mono text-caption-mono text-sage">SYNCHRONIZED</span>
          </div>

          {/* Simplified Diagram */}
          <div className="py-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="px-3 py-2 bg-panel-2 border border-rule rounded text-center flex-1">
                <div className="font-label-mono-sm text-label-mono-sm font-semibold text-ink">MongoDB</div>
                <div className="font-caption-mono text-caption-mono text-ink-3">Source 1</div>
              </div>
              <div className="text-accent">→</div>
              <div className="px-3 py-2 bg-panel-2 border border-rule rounded text-center flex-1">
                <div className="font-label-mono-sm text-label-mono-sm font-semibold text-ink">MySQL</div>
                <div className="font-caption-mono text-caption-mono text-ink-3">Landing Zone</div>
              </div>
              <div className="text-accent">→</div>
              <div className="px-3 py-2 bg-sage-wash border border-sage rounded text-center flex-1">
                <div className="font-label-mono-sm text-label-mono-sm font-semibold text-sage">Debezium</div>
                <div className="font-caption-mono text-caption-mono text-sage">CDC</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="px-3 py-2 bg-panel-2 border border-rule rounded text-center flex-1">
                <div className="font-label-mono-sm text-label-mono-sm font-semibold text-ink">Postgres</div>
                <div className="font-caption-mono text-caption-mono text-ink-3">Source 2</div>
              </div>
              <div className="text-accent">→</div>
              <div className="flex-[3]"></div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-rule">
              <div className="flex-1">Pub/Sub Topic</div>
              <div className="text-accent">→</div>
              <div className="px-3 py-2 bg-accent-wash border border-accent rounded text-center flex-1">
                <div className="font-label-mono-sm text-label-mono-sm font-semibold text-accent-ink">BigQuery</div>
                <div className="font-caption-mono text-caption-mono text-accent-ink">Warehouse</div>
              </div>
              <div className="text-accent">→</div>
              <div className="px-3 py-2 bg-panel-2 border border-rule rounded text-center flex-1">
                <div className="font-label-mono-sm text-label-mono-sm font-semibold text-ink">ClickHouse</div>
                <div className="font-caption-mono text-caption-mono text-ink-3">Analytics</div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-rule text-ink-3 font-caption-mono text-caption-mono">
            SIGNAL FLOW: SOURCES → MYSQL LANDING → DEBEZIUM CDC → PUB/SUB → WAREHOUSE & ANALYTICS
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 border-b border-rule max-w-[70ch]">
        <h3 className="font-headline-md text-headline-md text-ink font-semibold mb-4">My Role</h3>
        <p className="font-body-md text-body-md text-ink-2 mb-6">
          Owned architectural design, implementation, and operational reliability of the entire data platform. Led the technical decision-making around freshness guarantees, CDC tooling, and warehouse consolidation. Managed the execution across five parallel e-commerce platform integrations while maintaining zero data loss.
        </p>
      </section>

      <section className="py-12 border-b border-rule max-w-[70ch]">
        <h3 className="font-headline-md text-headline-md text-ink font-semibold mb-4">Context</h3>
        <p className="font-body-md text-body-md text-ink-2 mb-6">
          Legacy data infrastructure consisted of nightly batch ETL jobs pulling data 12-24 hours behind production reality. Customer Success, Analytics, and Product teams operated on stale snapshots, making real-time decisions impossible. The data was scattered across five independent e-commerce platforms with no unified view. Migration risk was high: breaking this pipeline would halt critical business functions.
        </p>
      </section>

      <section className="py-12 border-b border-rule max-w-[70ch]">
        <h3 className="font-headline-md text-headline-md text-ink font-semibold mb-4">Problem</h3>
        <p className="font-body-md text-body-md text-ink-2 mb-6">
          Define freshness tiers for different data classes (customer profiles update ~hourly, order events near real-time, archived data nightly) without building five separate pipelines. Enable non-engineers to query the unified dataset without SQL expertise. Handle the technical debt of migrating five independent databases while maintaining availability.
        </p>
      </section>

      <section className="py-12 border-b border-rule max-w-[70ch]">
        <h3 className="font-headline-md text-headline-md text-ink font-semibold mb-4">Architecture</h3>
        <p className="font-body-md text-body-md text-ink-2 mb-6">
          Chose Debezium for CDC to avoid application code changes. Deployed a single MySQL landing zone as a synchronization point, eliminating the need to maintain five separate CDC connectors. Events flowed through Google Cloud Pub/Sub for decoupling, then into BigQuery for historical analytics and ClickHouse for real-time queries. The tier-1 (sub-5-minute) data came from high-frequency webhooks; tier-2 (hourly) from database snapshots; tier-3 (nightly) from legacy batch exports. This allowed each consumer to pick the freshness they needed without forcing everyone to the most expensive option.
        </p>
      </section>

      <section className="py-12 border-b border-rule max-w-[70ch]">
        <h3 className="font-headline-md text-headline-md text-ink font-semibold mb-4">ClickHouse Tuning</h3>
        <p className="font-body-md text-body-md text-ink-2 mb-6">
          ClickHouse ingestion initially bottlenecked at 500 events/sec before exhibiting merge lock contention. Tuning background_pool_size and merge_tree settings revealed that InsertionTime ordering (rather than primary key ordering) reduced write amplification by 60%. Added ReplacingMergeTree to handle late-arriving updates without full re-merges, bringing sustainable throughput to 8k events/sec with p99 query latency staying under 200ms.
        </p>
      </section>

      <section className="py-12 border-b border-rule max-w-[70ch]">
        <h3 className="font-headline-md text-headline-md text-ink font-semibold mb-4">Key Decisions</h3>
        <ul className="space-y-4 list-none">
          <li id="decision-0" className="p-4 bg-panel border border-rule rounded scroll-my-16">
            <h4 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">MySQL as Landing Zone</h4>
            <p className="font-body-sm text-body-sm text-ink-2">Instead of managing five separate Debezium → Kafka connectors, centralize snapshot and streaming logic in one MySQL instance. Simplifies Kafka schema evolution and gives us one place to tune CDC lag and snapshot concurrency.</p>
          </li>
          <li id="decision-1" className="p-4 bg-panel border border-rule rounded scroll-my-16">
            <h4 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Tiered Freshness Model</h4>
            <p className="font-body-sm text-body-sm text-ink-2">Webhooks → Pub/Sub (tier-1, &lt;5m), Database snapshots → Debezium (tier-2, 1h), Batch exports (tier-3, nightly). Allows customers to optimize cost/latency tradeoff without forcing all data to the highest SLA.</p>
          </li>
          <li id="decision-3" className="p-4 bg-panel border border-rule rounded scroll-my-16">
            <h4 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">BigQuery + ClickHouse Dual Path</h4>
            <p className="font-body-sm text-body-sm text-ink-2">BigQuery handles slow analytics queries (minutes acceptable). ClickHouse serves fast dashboards and alerts (sub-second SLA). Confluent Kafka Connect connectors manage the writes to both. Allows independent scaling and allows engineers to tune for different workloads.</p>
          </li>
        </ul>
      </section>

      <section className="py-12 border-b border-rule max-w-[70ch]">
        <h3 className="font-headline-md text-headline-md text-ink font-semibold mb-4">Execution</h3>
        <p className="font-body-md text-body-md text-ink-2 mb-6">
          Rolled out platform one merchant at a time, running dual-write (old batch + new CDC) for 2-week validation windows. Used feature flags to toggle between old and new queries. Incident response rehearsals for common failure modes: Debezium snapshot hangs, Kafka partition rebalances, ClickHouse merge storms. Built automated canary logic to detect data drift between old and new pipelines.
        </p>
      </section>

      <section className="py-12 border-b border-rule max-w-[70ch]">
        <h3 className="font-headline-md text-headline-md text-ink font-semibold mb-4">Impact</h3>
        <p className="font-body-md text-body-md text-ink-2 mb-6">
          Reduced data latency from 12-24 hours to 5 minutes for 80% of queries. ClickHouse replaced three separate single-purpose data warehouses, cutting infrastructure costs by 40%. Customer Success adoption jumped from 6% to 91% (measured by weekly active users) because they now had access to fresh data that matched reality. Analytics team reduced report refresh time from 4 hours to 5 minutes, enabling new real-time alerting on key business metrics.
        </p>
      </section>

      <section className="py-12 max-w-[70ch]">
        <h3 className="font-headline-md text-headline-md text-ink font-semibold mb-4">What I'd Change Today</h3>
        <p className="font-body-md text-body-md text-ink-2 mb-6">
          Given current tooling maturity: would use Postgres logical replication + Kafka Connect over Debezium for simpler operational debugging. ClickHouse snapshot reads had occasional consistency issues that required careful work-around logic — in retrospect, Kafka streams materialized views might have been cleaner for the sub-second use case. The dual-path (BigQuery + ClickHouse) added operational overhead that we could have replaced with a single unified warehouse had we bet on modern MPP engines earlier.
        </p>
      </section>
    </article>
  );
}
