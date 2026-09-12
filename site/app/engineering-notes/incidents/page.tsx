import Link from "next/link";
import { Metadata } from "next";
import BackLink from "../../components/BackLink";

export const metadata: Metadata = {
  title: "Incident Record",
  description: "Ten production incidents showing Udhaya Kumar's approach to diagnosis, architecture, reliability, and leadership under pressure.",
};

const incidents = [
  { n: "01", title: "Query shape, not tuning", summary: "Pagination joined millions of rows before applying LIMIT. Reversed the order and moved 3+ minutes to under 500ms — a 360x improvement.", category: "Diagnosis · query architecture" },
  { n: "02", title: "Production lock contention", summary: "A cutover pushed response times above five seconds across 100+ merchants. Isolated ingestion, traced MySQL lock waits, and reduced per-client LOAD DATA parallelism from six jobs to three.", category: "Crisis · production isolation" },
  { n: "03", title: "Customer problem nobody asked about", summary: "Out-of-stock recommendations stayed live for up to 24 hours. Reused webhook and CDC infrastructure to propagate product changes within five minutes, removing the recurring complaint.", category: "Product judgment · customer signal" },
  { n: "04", title: "Views to destination-shaped consumers", summary: "MySQL views pushed worst-case latency above 30 seconds. CTEs bought runway at 1.5-2 seconds; Debezium and Pub/Sub consumers made that serving shape durable.", category: "Architecture · deadline judgment" },
  { n: "05", title: "Missing index, missing process", summary: "An unindexed MongoDB filter caused intermittent slow queries. Added the index, then added production query monitoring so this class of regression surfaced in minutes.", category: "Operational discipline · prevention" },
  { n: "06", title: "Christmas production pressure", summary: "Real-time ClickHouse updates exhausted RAM during peak sales. Scaled resources to recover, reverted to an acceptable 24-hour batch, and added guardrails for database-specific constraints.", category: "Leadership · stability tradeoff" },
  { n: "07", title: "Repeated ordering failure", summary: "Unspecified result ordering broke twice across BigQuery and ClickHouse. Fixed producer and consumer contracts, then added continuous validation instead of relying on incidental order.", category: "Pattern recognition · systems thinking" },
  { n: "08", title: "Silent failure, fixed algorithmically", summary: "A full join corrupted 100M-member segment diffs without errors. Deterministic cityHash64 bucketing made comparison fit within 16GB and reduced cycle cost 6x.", category: "Algorithms · correctness under constraint" },
  { n: "09", title: "Materialized-view scale mismatch", summary: "ClickHouse triggers repeatedly rescanned large tables at hundreds of events per second. Replaced them with hourly batch refresh: stable CPU, predictable cost, reports under 30 seconds.", category: "Database behavior · scale judgment" },
  { n: "10", title: "Node.js memory and backpressure", summary: "Pub/Sub consumers hit daily OOMs at a 512MiB pod limit. Pause at 80% memory, resume at 60%, combined with HPA — the pattern became a standard across consuming services.", category: "Resilience · platform pattern" },
];

export default function IncidentsPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="pt-8 pb-6">
        <BackLink href="/" label="Back to Home" />
      </div>

      <span className="font-label-mono-sm text-label-mono-sm text-accent uppercase tracking-widest mb-2 block">
        Production evidence · 10 records
      </span>
      <h1 className="font-headline-lg text-headline-lg text-ink font-bold mb-3">Hard Problems Leave Patterns.</h1>
      <p className="font-body-lg text-body-lg text-ink-2 max-w-[65ch] mb-10">
        These are not outage trophies. They are a record of how I diagnose under pressure and recognize system constraints.
      </p>

      <div className="flex flex-col gap-4 mb-10">
        {incidents.map((inc) => (
          <article key={inc.n} className="flex gap-4 p-5 bg-panel border border-rule rounded">
            <span className="font-display-hero text-headline-md text-ink-3 shrink-0">{inc.n}</span>
            <div>
              <p className="font-caption-mono text-caption-mono text-accent uppercase tracking-wide mb-1">{inc.category}</p>
              <h2 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">{inc.title}</h2>
              <p className="font-body-sm text-body-sm text-ink-2 mb-2">{inc.summary}</p>
              <Link href={`/case-studies/hard-problems/#incident-${inc.n}`} className="text-accent font-label-mono-sm text-label-mono-sm">
                → full breakdown
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="p-6 bg-panel-2 border border-rule-2 rounded flex flex-col gap-2">
        <p className="font-body-md text-body-md text-ink">Want the full incident details?</p>
        <Link href="/case-studies/hard-problems/" className="text-accent font-label-mono-sm text-label-mono-sm">
          Read the full incident breakdowns →
        </Link>
        <p className="font-body-sm text-body-sm text-ink-2 mt-4">Or dive into the specific deep-dive on the Debezium snapshot:</p>
        <Link href="/engineering-notes/debezium-50m-row-snapshot/" className="text-accent font-label-mono-sm text-label-mono-sm">
          The 50M-row CDC snapshot incident →
        </Link>
        <Link href="/resume/" className="text-accent font-label-mono-sm text-label-mono-sm mt-4">
          View the role-focused resume →
        </Link>
      </div>
    </div>
  );
}
