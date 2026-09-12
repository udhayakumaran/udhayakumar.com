import Link from "next/link";
import { profile } from "./data/profile";
import { caseStudies } from "./data/case-studies";
import { incidents } from "./case-studies/hard-problems/incidents-data";

const metrics = [
  { label: "Merchants Served", value: "200+ / 5 platforms" },
  { label: "Data Freshness", value: "<5 MIN – 6 HRS", color: "sage" },
  { label: "ClickHouse Cost Cut", value: "66% (4× Compute)", color: "accent-ink" },
  { label: "Recommendation Adoption", value: "80% of Merchants" },
];

const homeIncidentIds = ["INC-01", "INC-02", "INC-08", "INC-10"];
const homeIncidents = incidents.filter((inc) => homeIncidentIds.includes(inc.id));

function badgeClasses(variant: "accent" | "sage" | "neutral") {
  if (variant === "accent") return "bg-accent-wash border border-accent/30 text-accent-ink";
  if (variant === "sage") return "bg-sage-wash border border-sage text-sage";
  return "bg-panel-2 border border-rule text-ink-3";
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-14 border-b border-rule">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start bg-panel px-2.5 py-1 border border-rule font-caption-mono text-caption-mono text-ink-2">
            <span className="text-[14px] text-accent">$_</span>
            <span>{profile.primaryTitle.toUpperCase()}</span>
          </div>
          <h1 className="font-display-hero text-display-hero md:text-[40px] md:leading-[46px] text-ink font-bold tracking-tight">
            Owning Data Infrastructure That Scales to 200+ Production Merchants.
          </h1>
          <p className="font-body-md text-body-md leading-relaxed max-w-[65ch] text-ink-2">
            {profile.positioning} Rearchitected data ingestion from legacy cron-based batch (days-late) to real-time CDC with sub-5-minute freshness for webhook-capable platforms, up to 6 hours for others.
          </p>

          {/* Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 px-4 bg-panel border border-rule">
            {metrics.map((m) => (
              <div key={m.label}>
                <span className="font-caption-mono text-caption-mono text-ink-3 block">{m.label}</span>
                <span className={`font-label-mono-lg text-label-mono-lg font-semibold ${m.color === "sage" ? "text-sage" : m.color === "accent-ink" ? "text-accent-ink" : "text-ink"}`}>
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/case-studies/" className="min-h-[44px] inline-flex items-center justify-center bg-accent text-bg px-5 py-2.5 rounded-sm font-label-mono-sm font-medium border border-accent-ink hover:bg-accent-ink transition-all">
              View Case Studies
            </Link>
            <Link href="/resume/" className="min-h-[44px] inline-flex items-center justify-center border border-accent text-accent bg-transparent px-5 py-2.5 rounded-sm font-label-mono-sm font-medium hover:bg-accent-wash transition-all">
              Download Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-8 border-b border-rule">
        <div className="p-4 sm:p-6 bg-panel border border-rule rounded-sm relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-rule">
            <div className="flex items-center gap-2">
              <span className="text-[14px] text-accent">◈</span>
              <span className="font-caption-mono text-caption-mono text-ink uppercase">PIPELINE TOPOLOGY // DEBEZIUM CDC INGESTION</span>
            </div>
          </div>

          {/* SVG Diagram */}
          <div className="py-4">
            <svg className="w-full h-28" fill="none" viewBox="0 0 760 110" xmlns="http://www.w3.org/2000/svg">
              <line stroke="#C7B896" strokeDasharray="4 4" strokeWidth={1.5} x1={130} x2={250} y1={55} y2={55} />
              <line stroke="#C7B896" strokeDasharray="4 4" strokeWidth={1.5} x1={370} x2={490} y1={55} y2={55} />
              <line stroke="#C7B896" strokeDasharray="4 4" strokeWidth={1.5} x1={610} x2={710} y1={55} y2={55} />

              <rect fill="#FAF6EC" height={60} rx={2} stroke="#DED2B4" strokeWidth={1.5} width={120} x={10} y={25} />
              <text fill="#1C1A15" fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" x={70} y={50}>
                MYSQL
              </text>
              <text fill="#8A8674" fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" x={70} y={66}>
                LANDING LAYER
              </text>

              <rect fill="#E7EAD6" height={60} rx={2} stroke="#6E7B4C" strokeWidth={1.5} width={120} x={250} y={25} />
              <text fill="#6E7B4C" fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" x={310} y={50}>
                DEBEZIUM CDC
              </text>
              <text fill="#576337" fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" x={310} y={66}>
                REPLAY BOUNDARY
              </text>

              <rect fill="#F5DFC9" height={60} rx={2} stroke="#C85A2E" strokeWidth={1.5} width={120} x={490} y={25} />
              <text fill="#A84420" fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" x={550} y={50}>
                GOOGLE PUB/SUB
              </text>
              <text fill="#9F3C11" fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" x={550} y={66}>
                PER-TENANT ISOLATION
              </text>

              <rect fill="#FAF6EC" height={60} rx={2} stroke="#DED2B4" strokeWidth={1.5} width={48} x={710} y={25} />
              <text fill="#1C1A15" fontFamily="JetBrains Mono" fontSize={9} fontWeight={600} textAnchor="middle" x={734} y={48}>
                MONGO
              </text>
              <text fill="#1C1A15" fontFamily="JetBrains Mono" fontSize={9} fontWeight={600} textAnchor="middle" x={734} y={58}>
                CH
              </text>
              <text fill="#8A8674" fontFamily="JetBrains Mono" fontSize={8} textAnchor="middle" x={734} y={68}>
                BQ
              </text>
            </svg>
          </div>

          <div className="flex flex-wrap items-center justify-between text-ink-3 font-caption-mono text-caption-mono pt-2 border-t border-rule">
            <span>SIGNAL FLOW: MYSQL LANDING → DEBEZIUM CDC → PUB/SUB → MONGODB / CLICKHOUSE / BIGQUERY</span>
            <span className="text-accent-ink font-medium">5-MIN ALERT · 15-MIN PAGE</span>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 border-b border-rule">
        <div className="flex flex-col gap-3 mb-8">
          <span className="font-label-mono-sm text-label-mono-sm text-accent uppercase tracking-wider font-semibold">01 / FEATURED ARCHITECTURE WORK</span>
          <h2 className="font-headline-lg text-headline-lg text-ink">Mission-Critical Production Engineering</h2>
          <p className="font-body-md text-body-md leading-relaxed max-w-[65ch] text-ink-2">
            Start with the data platform, then the production incident it survived — these show architecture ownership and operational judgment fastest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((card, i) => (
            <Link
              key={card.id}
              href={card.href}
              className="group no-underline p-6 bg-panel border border-rule rounded-sm transition-all duration-200 hover:border-accent hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4">
                  <span className="font-label-mono-sm text-label-mono-sm text-ink-3 uppercase">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`font-caption-mono text-caption-mono font-semibold px-2 py-0.5 rounded-sm ${badgeClasses(card.badgeVariant)}`}>
                    {card.badge}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-ink mb-2 group-hover:text-accent group-hover:underline transition-colors">
                  {card.title}
                </h3>
                <p className="font-body-sm text-body-sm text-ink-2 mb-6">{card.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-rule">
                {card.techTags.map((tag) => (
                  <span key={tag} className="font-caption-mono text-caption-mono px-2 py-0.5 rounded bg-panel-2 border border-rule text-ink-2">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hiring Thesis Callout */}
      <section className="py-10 border-b border-rule">
        <div className="bg-panel border-l-2 border-accent border-y border-r border-rule p-6">
          <div className="flex items-start gap-4">
            <span className="text-accent text-[24px] shrink-0 mt-0.5">✓</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-ink font-semibold mb-1">Hiring Thesis</h4>
              <p className="font-body-md text-body-md text-ink-2">
                I work best owning backend and data infrastructure systems end-to-end. I&apos;m drawn to roles where I can influence architecture across multiple teams, lead small teams through scaling, and own both technical direction and operational reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incidents Section */}
      <section className="py-12 border-b border-rule">
        <div className="flex flex-col gap-3 mb-8">
          <span className="font-label-mono-sm text-label-mono-sm text-accent uppercase tracking-wider font-semibold">02 / PRODUCTION POST-MORTEMS &amp; INCIDENTS</span>
          <h2 className="font-headline-lg text-headline-lg text-ink">Real Failures, Honest Root Causes, Measurable Mitigations.</h2>
          <p className="font-body-md text-body-md text-ink-2 max-w-[65ch] mb-4">
            A decade of production lessons: query shape, lock contention, silent data failure, memory pressure, and the judgment to trade freshness for stability when the system needs it.
          </p>
          <div>
            <Link href="/case-studies/hard-problems/" className="font-label-mono-sm text-label-mono-sm text-accent font-semibold border-b border-accent pb-0.5 inline-flex items-center gap-1.5 hover:text-accent-ink transition-colors mb-8">
              <span>Explore all 10 Incident Retrospectives</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {homeIncidents.map((inc) => {
            const num = inc.id.replace("INC-", "");
            return (
              <Link
                key={inc.id}
                href={`/case-studies/hard-problems/#incident-${num}`}
                className="group no-underline block bg-panel border border-rule p-6 rounded-sm hover:border-accent hover:bg-panel-2 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between pb-3">
                  <span className="font-caption-mono text-caption-mono text-accent-ink font-semibold">{inc.id}</span>
                  <span className="text-[18px] text-ink-3 group-hover:text-accent group-hover:translate-x-1 transition-all">→</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm leading-snug text-ink font-semibold mb-4 group-hover:text-accent group-hover:underline transition-colors">
                  {inc.title}
                </h3>
                <div className="pt-3 border-t border-rule flex items-center justify-between">
                  <span className="font-caption-mono text-caption-mono px-2 py-0.5 bg-panel-2 border border-rule text-ink-2 rounded">
                    {inc.category}
                  </span>
                  <span className="font-caption-mono text-caption-mono text-ink-3">{inc.duration}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
