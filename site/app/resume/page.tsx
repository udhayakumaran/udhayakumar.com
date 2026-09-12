import Link from "next/link";
import { Metadata } from "next";
import { profile } from "../data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download the resume for Udhaya Kumar, Staff Backend Engineer specializing in real-time data infrastructure (Debezium, ClickHouse, Pub/Sub).",
};

const metrics = [
  { label: "MERCHANTS OWNED", value: "200+" },
  { label: "FASTEST FRESHNESS", value: "<5min" },
  { label: "TEAM GROWTH", value: "4 → 7" },
  { label: "COST REDUCTION", value: "77.8%" },
];

const experience = [
  {
    role: "Backend Engineer, Platform Ownership",
    company: "ConvertCart",
    focus: "Data ingestion, warehouse consolidation, multi-channel personalisation",
    years: "2020 — 2026",
    current: true,
    tech: ["MySQL", "Debezium", "Pub/Sub", "MongoDB", "BigQuery", "ClickHouse", "Redis", "GKE"],
    bullets: [
      <>Rearchitected the data platform from legacy batch-sync (days-late) to real-time CDC, achieving <strong className="text-ink bg-panel-2 px-1 py-0.5 rounded font-label-mono-sm text-label-mono-sm">sub-5-minute freshness</strong> for webhook platforms across 200+ merchants on five commerce platforms.</>,
      <>Designed a segmentation engine reaching <strong className="text-ink bg-panel-2 px-1 py-0.5 rounded font-label-mono-sm text-label-mono-sm">1,000+ regularly-trained active segments</strong> within six months, saving Customer Success ~15 hours/week on manual segment creation.</>,
      <>Built a recommendation system from zero to one, reaching <strong className="text-ink bg-panel-2 px-1 py-0.5 rounded font-label-mono-sm text-label-mono-sm">80% merchant adoption</strong> at <strong className="text-sage bg-sage-wash border border-sage px-1 py-0.5 rounded font-label-mono-sm text-label-mono-sm">200-400ms p99</strong>.</>,
      <>Migrated customer segmentation compute from BigQuery to ClickHouse, cutting cost from ₹1.8L/month to ₹40K/month — a <strong className="text-sage bg-sage-wash border border-sage px-1 py-0.5 rounded font-label-mono-sm text-label-mono-sm">77.8% reduction</strong> via cityHash64-based batched hashing.</>,
      <>Grew the backend platform team from <strong className="text-ink bg-panel-2 px-1 py-0.5 rounded font-label-mono-sm text-label-mono-sm">4 to 7 engineers</strong>.</>,
    ],
  },
  {
    role: "Backend Consultant",
    company: "Independent Consultant",
    focus: "Freelance development work during transition between roles",
    years: "2019 — 2020",
    tech: [],
    bullets: [],
  },
  {
    role: "Backend Engineer, Founding Team",
    company: "Friday Media Group",
    focus: "Marketplace APIs, content ingestion, and data pipeline",
    years: "2018 — 2019",
    tech: [],
    bullets: [],
  },
  {
    role: "Backend Engineer",
    company: "Scientific Games",
    focus: "Lottery reporting, data optimization, and microservices",
    years: "2014 — 2018",
    tech: [],
    bullets: [],
  },
  {
    role: "Full-stack Engineer",
    company: "Tenlegs",
    focus: "Email systems, logistics APIs, and operational tools",
    years: "2012 — 2014",
    tech: [],
    bullets: [],
  },
  {
    role: "Junior Developer",
    company: "ISPG Technologies",
    focus: "E-commerce backend and MySQL optimization",
    years: "2010 — 2012",
    tech: [],
    bullets: [],
  },
];

export default function ResumePage() {
  return (
    <div className="flex flex-col w-full">
      <header className="flex flex-col gap-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-widest text-accent-ink font-semibold">
            CURRICULUM VITAE // 13+ YEARS
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-ink tracking-tight mt-1">
          Resume &amp; Track Record
        </h1>
        <p className="font-body-lg text-body-lg text-ink-2 max-w-[65ch] mt-1">
          Architect and operate high-scale data systems where every layer — ingestion, modeling, serving, operations — matters. Seeking Staff Engineer, Principal Engineer, or Founding Engineer roles in data infrastructure or platform systems. {profile.availability}.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {metrics.map((m) => (
            <div key={m.label} className="p-3 bg-panel border border-rule flex flex-col rounded">
              <span className="font-caption-mono text-caption-mono uppercase text-ink-3">{m.label}</span>
              <span className="font-label-mono-lg text-label-mono-lg text-ink font-bold mt-1">{m.value}</span>
            </div>
          ))}
        </div>
      </header>

      <section className="mb-10">
        <div className="p-6 md:p-8 bg-panel border-2 border-accent rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-[540px]">
            <div className="flex items-center gap-2">
              <span className="text-accent text-[18px]">✓</span>
              <span className="font-label-mono-sm text-label-mono-sm text-accent-ink uppercase tracking-wider font-semibold">
                PDF · CONSOLIDATED RESUME
              </span>
            </div>
            <h2 className="font-label-mono-lg text-label-mono-lg text-ink font-bold">
              {profile.resume.label}
            </h2>
            <p className="font-body-sm text-body-sm text-ink-2 mt-1">
              {profile.resume.description}. Links back to case studies and incident records for verification.
            </p>
          </div>
          <Link
            href={profile.resume.file}
            className="w-full md:w-auto shrink-0 min-h-[44px] bg-accent text-bg border border-accent-ink px-6 py-3 rounded font-label-mono-sm text-label-mono-sm uppercase tracking-wider font-semibold hover:bg-accent-ink transition-colors flex items-center justify-center gap-2"
          >
            <span className="text-[16px]">⬇</span>
            <span>Download Resume (PDF)</span>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between border-b border-rule pb-3 mb-6">
          <h2 className="font-headline-md text-headline-md text-ink flex items-center gap-2">
            <span className="text-ink-2 text-[18px]">◷</span>
            Engineering Track Record
          </h2>
          <span className="font-caption-mono text-caption-mono text-ink-3 uppercase">2010 — 2026</span>
        </div>

        <div className="flex flex-col gap-4">
          {experience.map((job) => (
            <article key={job.company + job.years} className="bg-panel border border-rule hover:border-rule-2 hover:bg-panel-2 transition-colors duration-200 rounded p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h3 className="font-headline-sm text-headline-sm text-ink">{job.role}</h3>
                <span className={`font-label-mono-sm text-label-mono-sm font-semibold px-2 py-0.5 rounded border w-fit ${
                  job.current ? "text-accent-ink bg-accent-wash border-accent" : "text-ink-2 bg-panel-2 border-rule"
                }`}>
                  {job.years}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 text-ink-2 mb-4 font-label-mono-sm text-label-mono-sm">
                <span className="font-semibold text-ink">{job.company}</span>
                <span className="text-rule-2">•</span>
                <span>{job.focus}</span>
              </div>
              {job.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {job.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-panel-2 border border-rule text-ink-2 font-caption-mono text-caption-mono">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              {job.bullets.length > 0 && (
                <ul className="flex flex-col gap-2 text-ink list-none border-l-2 border-rule pl-4 mt-3">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="font-body-md text-body-md flex items-start gap-2">
                      <span className="font-caption-mono text-caption-mono text-accent-ink font-bold mt-1 shrink-0">•</span>
                      <div>{b}</div>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="pt-6 border-t border-rule">
        <h2 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Questions about the resume?</h2>
        <p className="font-body-md text-body-md text-ink-2 max-w-[65ch] mb-4">
          Email me with the system you need owned, and I can discuss specific details.
        </p>
        <Link href="/case-studies/hard-problems/" className="text-accent font-label-mono-sm text-label-mono-sm">
          Read the ten incident records that shaped this resume →
        </Link>
      </section>
    </div>
  );
}
