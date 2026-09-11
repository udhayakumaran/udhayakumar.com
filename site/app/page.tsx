import Link from "next/link";

const metrics = [
  { label: "Max Scale", value: "120K QPS" },
  { label: "Target Availability", value: "99.999%", color: "sage" },
  { label: "Data Replicated", value: "4.8 PB" },
  { label: "MTTR (2023-24)", value: "< 8 MIN", color: "accent-ink" },
];

const caseStudyCards = [
  {
    id: 1,
    title: "Migrating 50M Rows with Zero Downtime via Debezium CDC",
    description: "Solving CDC snapshot lock starvation and replication lag in PostgreSQL to Kafka streaming pipeline.",
    tags: [
      { text: "P99 LAG < 180MS", bg: "panel-2" },
      { text: "ZERO DATA LOSS", bg: "sage-wash" },
      { text: "50M RECORDS", bg: "panel-2" },
    ],
    badge: "MOST RELEVANT",
    href: "/case-studies/data-platform/",
  },
  {
    id: 2,
    title: "Multi-Region Distributed Data Platform",
    description: "Designing cross-datacenter state synchronization with consensus protocols and tiered caching.",
    tags: [
      { text: "99.999% AVAILABILITY", bg: "sage-wash" },
      { text: "60% COST REDUCTION", bg: "panel-2" },
    ],
    badge: "DISTRIBUTED SYSTEMS",
    href: "/case-studies/segmentation/",
  },
  {
    id: 3,
    title: "Dynamic Customer Segmentation Engine",
    description: "Sub-second evaluation across 12M active user profiles with memory-bounded columnar indices.",
    tags: [
      { text: "12M PROFILES", bg: "panel-2" },
      { text: "12MS LATENCY", bg: "accent-wash" },
    ],
    badge: "DATA ENGINE",
    href: "/case-studies/segmentation/",
  },
  {
    id: 4,
    title: "Scalable Real-time Recommendation Pipeline",
    description: "Low-latency inference orchestration handling 45k QPS with graceful degradation fallbacks.",
    tags: [
      { text: "45K QPS", bg: "panel-2" },
      { text: "FALLBACK CIRCUIT BREAKERS", bg: "sage-wash" },
    ],
    badge: "STREAM INFERENCE",
    href: "/case-studies/recommendations/",
  },
];

const incidents = [
  { id: "01", title: "Postgres Connection Pool Saturation during Flash Spike", category: "DATABASE LOCKS", sev: "SEV-1 // 23 MIN" },
  { id: "02", title: "Debezium Kafka Partition Rebalance Cascade", category: "KAFKA / CDC", sev: "SEV-2 // 41 MIN" },
  { id: "03", title: "DNS Split-Brain during Cloudflare Failover", category: "NETWORKING", sev: "SEV-1 // 18 MIN" },
  { id: "04", title: "Redis Cache Stampede following Key Eviction", category: "CACHE STAMPEDE", sev: "SEV-2 // 14 MIN" },
];

export default function HomePage() {
  return (
    <>
      {/* Top Telemetry Micro-Bar */}
      <div className="flex items-center justify-between py-2 border-b border-rule font-caption-mono text-caption-mono text-ink-3">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage"></span>
          <span>CLUSTER: AWS-EAST-1 // PROD-STABLE</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">UPTIME: 99.998%</span>
          <span>EPOCH: 1714752000</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-14 border-b border-rule">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start bg-panel px-2.5 py-1 border border-rule font-caption-mono text-caption-mono text-ink-2">
            <span className="material-symbols-outlined text-[14px] text-accent">terminal</span>
            <span>INFRASTRUCTURE ARCHITECTURE &amp; SRE</span>
          </div>
          <h1 className="font-display-hero text-display-hero md:text-[40px] md:leading-[46px] text-ink font-bold tracking-tight">
            Building Resilient Distributed Systems &amp; High-Throughput Infrastructure.
          </h1>
          <p className="font-body-md text-body-md leading-relaxed max-w-[65ch] text-ink-2">
            Principal Infrastructure Architect specializing in zero-downtime database migrations, event streaming at scale, and high-availability systems that withstand production entropy.
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
            <Link href="#resume" className="min-h-[44px] inline-flex items-center justify-center border border-accent text-accent bg-transparent px-5 py-2.5 rounded-sm font-label-mono-sm font-medium hover:bg-accent-wash transition-all">
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
              <span className="material-symbols-outlined text-[16px] text-accent">hub</span>
              <span className="font-caption-mono text-caption-mono text-ink uppercase">PIPELINE TOPOLOGY // ZERO-LOCK DEBEZIUM INGESTION</span>
            </div>
            <span className="font-caption-mono text-caption-mono text-sage">SYNCHRONIZED</span>
          </div>

          {/* SVG Diagram */}
          <div className="py-4">
            <svg className="w-full h-28" fill="none" viewBox="0 0 760 110" xmlns="http://www.w3.org/2000/svg">
              <line stroke="#C7B896" strokeDasharray="4 4" strokeWidth={1.5} x1={130} x2={250} y1={55} y2={55} />
              <line stroke="#C7B896" strokeDasharray="4 4" strokeWidth={1.5} x1={370} x2={490} y1={55} y2={55} />
              <line stroke="#C7B896" strokeDasharray="4 4" strokeWidth={1.5} x1={610} x2={710} y1={55} y2={55} />

              <rect fill="#FAF6EC" height={60} rx={2} stroke="#DED2B4" strokeWidth={1.5} width={120} x={10} y={25} />
              <text fill="#1C1A15" fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" x={70} y={50}>
                POSTGRES
              </text>
              <text fill="#8A8674" fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" x={70} y={66}>
                WAL_LEVEL=LOGICAL
              </text>

              <rect fill="#E7EAD6" height={60} rx={2} stroke="#6E7B4C" strokeWidth={1.5} width={120} x={250} y={25} />
              <text fill="#6E7B4C" fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" x={310} y={50}>
                DEBEZIUM CDC
              </text>
              <text fill="#576337" fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" x={310} y={66}>
                OFF-PEAK SNAPSHOT
              </text>

              <rect fill="#F5DFC9" height={60} rx={2} stroke="#C85A2E" strokeWidth={1.5} width={120} x={490} y={25} />
              <text fill="#A84420" fontFamily="JetBrains Mono" fontSize={11} fontWeight={600} textAnchor="middle" x={550} y={50}>
                APACHE KAFKA
              </text>
              <text fill="#9F3C11" fontFamily="JetBrains Mono" fontSize={9} textAnchor="middle" x={550} y={66}>
                32 PARTITIONS
              </text>

              <rect fill="#FAF6EC" height={60} rx={2} stroke="#DED2B4" strokeWidth={1.5} width={48} x={710} y={25} />
              <text fill="#1C1A15" fontFamily="JetBrains Mono" fontSize={10} fontWeight={600} textAnchor="middle" x={734} y={52}>
                SINK
              </text>
              <text fill="#8A8674" fontFamily="JetBrains Mono" fontSize={8} textAnchor="middle" x={734} y={66}>
                ANALYTICS
              </text>
            </svg>
          </div>

          <div className="flex flex-wrap items-center justify-between text-ink-3 font-caption-mono text-caption-mono pt-2 border-t border-rule">
            <span>SIGNAL FLOW: RAW WAL → CDC EVENT BUFFER → PARTITION TOPICS → TARGET READ REPLICAS</span>
            <span className="text-accent-ink font-medium">REPLICATION LAG: 142MS</span>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 border-b border-rule">
        <div className="flex flex-col gap-3 mb-8">
          <span className="font-label-mono-sm text-label-mono-sm text-accent uppercase tracking-wider font-semibold">01 / FEATURED ARCHITECTURE WORK</span>
          <h2 className="font-headline-lg text-headline-lg text-ink">Mission-Critical Production Engineering</h2>
          <p className="font-body-md text-body-md leading-relaxed max-w-[65ch] text-ink-2">
            Architectural blueprints and technical retrospectives focused on sustained throughput, zero downtime transitions, and deterministic fault tolerance under peak load.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudyCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group p-6 bg-panel border border-rule rounded-sm transition-all duration-200 hover:border-accent hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4">
                  <span className="font-label-mono-sm text-label-mono-sm text-ink-3 uppercase">{String(card.id).padStart(2, "0")}</span>
                  <span className={`font-caption-mono text-caption-mono ${card.badge === "MOST RELEVANT" ? "bg-accent-wash border border-accent/30 text-accent-ink" : "bg-panel-2 border border-rule text-ink-3"} font-semibold px-2 py-0.5 rounded-sm`}>
                    {card.badge}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-ink mb-2 group-hover:text-accent transition-colors">
                  {card.title}
                </h3>
                <p className="font-body-sm text-body-sm text-ink-2 mb-6">{card.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-rule">
                {card.tags.map((tag) => (
                  <span
                    key={tag.text}
                    className={`font-caption-mono text-caption-mono px-2 py-0.5 rounded ${
                      tag.bg === "sage-wash"
                        ? "bg-sage-wash border border-sage text-sage"
                        : tag.bg === "accent-wash"
                        ? "bg-accent-wash border border-accent/30 text-accent-ink"
                        : "bg-panel-2 border border-rule text-ink-2"
                    }`}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Architectural Invariant Callout */}
      <section className="py-10 border-b border-rule">
        <div className="bg-panel border-l-2 border-accent border-y border-r border-rule p-6">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-accent text-[24px] shrink-0 mt-0.5">verified</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-ink font-semibold mb-1">Architectural Invariant</h4>
              <p className="font-body-md text-body-md text-ink-2">
                "Every distributed abstraction leaks under catastrophic load. Reliability is not the complete absence of failures, but the deterministic containment of their blast radius."
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
            Reliability isn't proven when systems are idle; it's proven in failure modes. A catalog of production outages analyzed with rigorous blameless retrospectives.
          </p>
          <div>
            <Link href="/case-studies/hard-problems/" className="font-label-mono-sm text-label-mono-sm text-accent font-semibold border-b border-accent pb-0.5 inline-flex items-center gap-1.5 hover:text-accent-ink transition-colors mb-8">
              <span>Explore all 10 Incident Retrospectives</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {incidents.map((inc) => (
            <Link
              key={inc.id}
              href={`/case-studies/hard-problems/#incident-${inc.id}`}
              className="group block bg-panel border border-rule p-6 rounded-sm hover:border-accent hover:bg-panel-2 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between pb-3">
                <span className="font-caption-mono text-caption-mono text-accent-ink font-semibold">INC-{inc.id}</span>
                <span className="material-symbols-outlined text-[18px] text-ink-3 group-hover:text-accent group-hover:translate-x-1 transition-all">arrow_forward</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm leading-snug text-ink font-semibold mb-4 group-hover:text-accent transition-colors">
                {inc.title}
              </h3>
              <div className="pt-3 border-t border-rule flex items-center justify-between">
                <span className="font-caption-mono text-caption-mono px-2 py-0.5 bg-panel-2 border border-rule text-ink-2 rounded">
                  {inc.category}
                </span>
                <span className="font-caption-mono text-caption-mono text-ink-3">{inc.sev}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Terminal Output Section */}
      <section className="py-10">
        <div className="bg-panel border border-rule rounded-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 bg-panel-2 border-b border-rule">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rule-2 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-rule-2 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-rule-2 inline-block"></span>
              <span className="font-caption-mono text-caption-mono text-ink ml-2">sys-telemetry-cli --live</span>
            </div>
            <span className="font-caption-mono text-caption-mono text-sage">STATUS: LISTENING</span>
          </div>
          <div className="p-4 font-caption-mono text-caption-mono leading-relaxed text-ink space-y-1">
            <p className="text-ink-3">{"$ kubectl get pods -n ingress-edge -o wide"}</p>
            <p className="text-ink-2">NAME{"                         "}READY{"   "}STATUS{"    "}RESTARTS{"   "}AGE{"   "}IP</p>
            <p className="text-sage">envoy-edge-mesh-79d8f89-4xkq9{"    "}1/1{"     "}Running{"   "}0{"          "}42d{"   "}10.244.3.18</p>
            <p className="text-sage">envoy-edge-mesh-79d8f89-8lm2v{"    "}1/1{"     "}Running{"   "}0{"          "}42d{"   "}10.244.5.91</p>
            <p className="text-ink-3 pt-2">{`$ prometheus-eval 'rate(http_requests_total{status=~"5.."}[5m])'`}</p>
            <p className="text-accent-ink">0.000000000000e+00 (Zero elevated 5xx anomalies detected across primary load balancers)</p>
          </div>
        </div>
      </section>
    </>
  );
}
