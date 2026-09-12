import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Notes",
  description: "Technical deep-dives into architecture decisions, incident recovery, and systems thinking.",
};

export default function EngineeringNotesPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="pb-6">
        <Link href="/" className="text-accent font-label-mono-sm text-label-mono-sm">
          ← Back home
        </Link>
      </div>

      <h1 className="font-headline-lg text-headline-lg text-ink font-bold mb-3">Engineering Notes</h1>
      <p className="font-body-lg text-body-lg text-ink-2 max-w-[65ch] mb-12">
        Deep-dives into decisions, incidents, and lessons from building data platforms and backend infrastructure at scale.
      </p>

      <section className="mb-12">
        <h2 className="font-label-mono-sm text-label-mono-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Published
        </h2>
        <Link
          href="/engineering-notes/debezium-50m-row-snapshot/"
          className="block p-5 bg-panel border border-rule rounded hover:border-accent transition-colors"
        >
          <h3 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">
            The 50M-Row Debezium Snapshot Incident
          </h3>
          <p className="font-body-sm text-body-sm text-ink-2">
            A snapshot operation consumed 60% CPU and nearly blocked a critical migration. How we recovered and what it taught about production risk vs. architectural purity.
          </p>
        </Link>
      </section>

      <section>
        <h2 className="font-label-mono-sm text-label-mono-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Incident Record
        </h2>
        <p className="font-body-md text-body-md text-ink-2 max-w-[65ch] mb-4">
          Ten production problems covering diagnosis, architecture, customer judgment, correctness, resilience, and leadership under pressure.
        </p>
        <Link href="/engineering-notes/incidents/" className="text-accent font-label-mono-sm text-label-mono-sm">
          Read all ten incident records →
        </Link>
      </section>
    </div>
  );
}
