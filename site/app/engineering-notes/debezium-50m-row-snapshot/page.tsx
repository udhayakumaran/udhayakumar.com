import Link from "next/link";
import { Metadata } from "next";
import BackLink from "../../components/BackLink";

export const metadata: Metadata = {
  title: "The 50M-Row Debezium Snapshot Incident",
  description: "How a snapshot operation nearly derailed a critical migration, and what it taught about production risk vs architectural purity.",
};

const steps = [
  { n: "1", label: "Detection", body: "Snapshot drove CPU to 60%; writes began queueing. Dashboards weren't updating. We had visibility into the problem within minutes." },
  { n: "2", label: "Diagnosis", body: "The ~50M-row snapshot and lock behavior, not downstream consumers, were saturating MySQL. Query planner chose a suboptimal execution path; the read lock held longer than expected." },
  { n: "3", label: "Stop decision", body: "I stopped the Debezium job and killed the snapshot before migration progress outweighed production risk. The judgment call: production stability wins. Architectural purity comes second." },
  { n: "4", label: "Recovery", body: "Production writes recovered within seconds. We'd built the system with a fallback — Google Cloud's Datastream service was already capturing changes from the same landing layer as a parallel replication path. We pivoted: use Datastream to bootstrap the initial snapshot, then switch tables to Debezium CDC incrementally." },
  { n: "5", label: "Permanent change", body: "We moved to incremental table migration with a rollback path and production-scale snapshot testing. The dual-replication strategy became our production design for several months, until we graduated to pure Debezium once we understood its behavior at scale." },
];

export default function DebeziumSnapshotNote() {
  return (
    <article className="flex flex-col w-full">
      <div className="pb-6">
        <BackLink href="/engineering-notes/" label="BACK TO ENGINEERING NOTES" />
      </div>

      <header className="flex flex-col gap-3 mb-10">
        <span className="font-caption-mono text-caption-mono text-ink-3 uppercase tracking-wider">
          Engineering Note · Production Reliability
        </span>
        <h1 className="font-headline-lg text-headline-lg text-ink font-bold tracking-tight">
          I Stopped a Production Migration When a 50M-Row CDC Snapshot Blocked Writes
        </h1>
        <p className="font-body-lg text-body-lg text-ink-2 max-w-[65ch]">
          During a data platform migration across 200+ merchants, Debezium&apos;s snapshot operation consumed 60% CPU and began blocking production writes. I stopped the snapshot, used an existing Datastream path to recover, and changed the rollout strategy.
        </p>
      </header>

      <section className="flex flex-col gap-3 mb-10">
        <h2 className="font-headline-md text-headline-md text-ink font-semibold">Context</h2>
        <p className="font-body-md text-body-md text-ink-2 max-w-[65ch]">
          We were migrating the data platform to a new architecture: raw MySQL landing layer → Debezium CDC → Google Pub/Sub → specialized serving layers (MongoDB, ClickHouse, BigQuery). The landing layer was the shared CDC boundary for recommendations, segmentation, reporting, and attribution. We&apos;d already done a store-by-store cutover for 200+ merchants without issues — but the initial rollout of Debezium on the landing layer itself hit a wall.
        </p>
      </section>

      <section className="flex flex-col gap-3 mb-10">
        <h2 className="font-headline-md text-headline-md text-ink font-semibold">What Went Wrong</h2>
        <p className="font-body-md text-body-md text-ink-2 max-w-[65ch]">
          Debezium uses snapshots to bootstrap replication state when first connecting to a database. For this deployment, the initial snapshot read the entire ~50M-row landing table and streamed rows into our CDC event transport. When it started:
        </p>
        <ul className="list-none space-y-2 font-body-md text-body-md text-ink max-w-[65ch]">
          <li><strong>The snapshot query hit 60% CPU.</strong> MySQL&apos;s query planner picked a suboptimal execution path.</li>
          <li><strong>The read lock held longer than expected.</strong> Downstream code hitting the landing layer started timing out.</li>
          <li><strong>Production writes began queueing.</strong> The database connection pool saturated.</li>
        </ul>
        <p className="font-body-md text-body-md text-ink-2 max-w-[65ch]">
          Within minutes, requests were piling up. Dashboards weren&apos;t updating. Customer-facing systems were degrading.
        </p>
      </section>

      <section className="flex flex-col gap-3 mb-10">
        <h2 className="font-headline-md text-headline-md text-ink font-semibold">The Recovery</h2>
        <ol className="flex flex-col gap-4 list-none border-l-2 border-rule pl-0">
          {steps.map((s) => (
            <li key={s.n} className="p-4 bg-panel rounded ml-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center font-label-mono-sm text-label-mono-sm font-bold shrink-0">
                  {s.n}
                </span>
                <span className="font-headline-sm text-headline-sm text-ink font-semibold">{s.label}</span>
              </div>
              <p className="font-body-md text-body-md text-ink-2 max-w-[65ch]">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-3 mb-10">
        <h2 className="font-headline-md text-headline-md text-ink font-semibold">Why We Didn&apos;t See It Coming</h2>
        <p className="font-body-md text-body-md text-ink-2 max-w-[65ch]">
          <strong>Scale assumptions.</strong> We&apos;d tested Debezium snapshots on dev tables (10M rows) and they were fast — production was 5x larger, and performance doesn&apos;t scale linearly.
        </p>
        <p className="font-body-md text-body-md text-ink-2 max-w-[65ch]">
          <strong>Architectural purity.</strong> We wanted a single CDC path from the landing layer. Two tools felt redundant, and that desire for elegance made us skip the safety net.
        </p>
        <p className="font-body-md text-body-md text-ink-2 max-w-[65ch]">
          <strong>Query optimization assumption.</strong> We assumed the snapshot query would use an index. MySQL&apos;s query planner chose differently under real load.
        </p>
      </section>

      <section className="flex flex-col gap-3 mb-10">
        <h2 className="font-headline-md text-headline-md text-ink font-semibold">The Lesson</h2>
        <p className="font-body-md text-body-md text-ink font-semibold max-w-[65ch]">
          Don&apos;t optimize for architectural purity when production is at risk.
        </p>
        <p className="font-body-md text-body-md text-ink-2 max-w-[65ch]">
          We had a perfectly good tool (Datastream) already in place. Using it alongside Debezium wasn&apos;t inelegant — it was pragmatic. We never risked production stability for consistency, we had a recovery path, we could migrate gradually instead of all-or-nothing, and we bought time to understand Debezium&apos;s behavior at our scale.
        </p>
        <p className="font-body-md text-body-md text-ink-2 max-w-[65ch]">
          The best architecture for production is the one that lets you recover quickly. Redundancy — even redundancy that feels &ldquo;inelegant&rdquo; — is not waste. It&apos;s insurance.
        </p>
      </section>

      <section className="flex flex-col gap-3 mb-10">
        <h2 className="font-headline-md text-headline-md text-ink font-semibold">What Changed</h2>
        <ul className="list-none space-y-2 font-body-md text-body-md text-ink max-w-[65ch]">
          <li><strong>We now load-test snapshots at production scale</strong> before deploying new CDC approaches.</li>
          <li><strong>We keep backup replication paths</strong> for critical data flows — managed services handle the heavy lifting of snapshots, custom tools handle ongoing CDC.</li>
          <li><strong>We design migrations with rollback paths</strong> so a production-scale failure can be reverted without data loss.</li>
        </ul>
      </section>

      <nav className="pt-6 border-t border-rule flex flex-col sm:flex-row gap-4" aria-label="Related work">
        <Link href="/case-studies/data-platform/" className="text-accent font-label-mono-sm text-label-mono-sm">
          Related: The Data Platform →
        </Link>
        <Link href="/resume/" className="text-accent font-label-mono-sm text-label-mono-sm">
          View resume →
        </Link>
      </nav>
    </article>
  );
}
