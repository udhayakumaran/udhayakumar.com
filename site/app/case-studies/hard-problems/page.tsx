import Link from "next/link";
import { Metadata } from "next";
import BackLink from "../../components/BackLink";
import CTAButton from "../../components/CTAButton";
import IncidentAccordion from "./IncidentAccordion";
import { incidents } from "./incidents-data";

export const metadata: Metadata = {
  title: "Hard Problems & Learnings",
  description: "Ten production incidents: lock contention at scale, silent failures, architectural incompatibility, and leadership under crisis.",
  alternates: {
    canonical: "https://udhayakumar.com/case-studies/hard-problems/",
  },
  openGraph: {
    title: "Hard Problems & Learnings",
    description: "Ten production incidents: lock contention at scale, silent failures, architectural incompatibility, and leadership under crisis.",
    url: "https://udhayakumar.com/case-studies/hard-problems/",
  },
};

const stats = [
  { label: "DOCUMENTED INCIDENTS", value: "10", tag: "RECORDS" },
  { label: "BEST DIAGNOSIS WIN", value: "360x", tag: "FASTER" },
  { label: "COST REDUCTION (INC-08)", value: "6x", tag: "" },
  { label: "PLATFORM PATTERN ADOPTED", value: "1", tag: "" },
];

const progression = [
  { range: "01–03", level: "Senior", focus: "Query shape, lock contention, customer insight", theme: "Foundation of technical judgment" },
  { range: "04–05", level: "Staff", focus: "Architecture under deadline, process improvement", theme: "Own systems, build process" },
  { range: "06–10", level: "Principal", focus: "Leadership under crisis, systemic patterns, algorithmic optimization, database-specific constraints, resilience patterns", theme: "Mentor, recognize incompatibility, solve elegantly, adopt platform patterns" },
];

export default function HardProblemsPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="pt-8 pb-6">
        <BackLink href="/" label="Back to Home" />
      </div>

      <header className="flex flex-col gap-3 pb-8">
        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-panel-2 text-ink-2 font-caption-mono text-caption-mono w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          POST-MORTEM LEDGER // 10 PRODUCTION INCIDENTS
        </span>
        <h1 className="font-display-hero text-headline-lg md:text-display-hero text-ink tracking-tight break-words">
          Hard Problems &amp; Learnings
        </h1>
        <p className="font-body-lg text-body-lg text-ink-2 leading-relaxed max-w-[65ch]">
          Ten incidents where production pressure exposed a deeper problem. Each follows failure → diagnosis → decision → recovery → lesson.
        </p>
        <p className="font-caption-mono text-caption-mono text-ink-3 max-w-[65ch]">
          See also: <Link href="/engineering-notes/" className="text-accent">full incident log</Link> and <Link href="/engineering-notes/debezium-50m-row-snapshot/" className="text-accent">Debezium 50M-row snapshot deep-dive</Link>.
        </p>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 pb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-panel rounded p-4 flex flex-col justify-between hover:bg-panel-2 transition-colors">
            <span className="font-caption-mono text-caption-mono text-ink-3 uppercase tracking-wider">{s.label}</span>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="font-headline-lg text-headline-lg text-accent font-semibold">{s.value}</span>
              {s.tag && <span className="font-caption-mono text-caption-mono text-ink-2">{s.tag}</span>}
            </div>
          </div>
        ))}
      </section>

      <section className="pb-10">
        <IncidentAccordion incidents={incidents} />
      </section>

      <section className="pt-6 border-t border-rule pb-10">
        <h2 className="font-headline-sm text-headline-sm text-ink font-semibold mb-6">Ten Incidents as a Progression</h2>
        <div className="flex flex-col gap-4">
          {progression.map((p) => (
            <div key={p.range} className="grid grid-cols-1 sm:grid-cols-[80px_100px_1fr] gap-2 sm:gap-4 text-body-sm font-body-sm text-ink">
              <div className="font-semibold text-accent font-label-mono-sm text-label-mono-sm">{p.range}</div>
              <div className="font-semibold">{p.level}</div>
              <div className="text-ink-2">{p.focus} — {p.theme}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-2 pb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-rule pt-6">
        <CTAButton href="/case-studies/" label="ALL CASE STUDIES" variant="panel" size="sm" icon="☰" />
        <CTAButton href="/resume/" label="VIEW THE RESUME THESE SHAPED" variant="solid" size="sm" arrow="right" />
      </div>
    </div>
  );
}
