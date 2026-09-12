import Link from "next/link";
import { Metadata } from "next";
import { profile } from "../data/profile";
import BackLink from "../components/BackLink";

export const metadata: Metadata = {
  title: "About",
  description: "About Udhaya Kumar, Staff Backend Engineer with 13+ years building real-time data infrastructure — Debezium, ClickHouse, Pub/Sub.",
};

const vitals = [
  { label: "Merchants Served", value: profile.convertCart.merchants },
  { label: "Platform Ownership", value: profile.convertCart.platformOwnership },
  { label: "Team Growth", value: profile.convertCart.teamGrowth },
  { label: "Cost Reduction", value: "66%", accent: "sage" },
];

const testimonials = [
  {
    quote: "I worked with Udhay for the past four years, and calling him just a 'team lead' wouldn't do justice to the role he played in my journey. He has been an exceptional mentor and guide, always approachable, patient, and supportive.",
    name: "Goutham Kishore",
    role: "Full Stack Developer, reported to Udhaya",
    tag: "MENTEE // 4 YEARS",
  },
  {
    quote: "Udhaya is an exceptional engineer with strong technical depth and the curiosity to solve complex client challenges. He combines a high ownership mindset with excellent communication, translating technical concepts clearly for non-technical stakeholders.",
    name: "Mannat Bhalla",
    role: "Customer Success Manager",
    tag: "CROSS-FUNCTIONAL",
  },
  {
    quote: "Udhaya has demonstrated an impressive ability to manage complex product development projects while leading a diverse team. His leadership style fosters a supportive environment where team members can thrive.",
    name: "Vasudeva Sagari",
    role: "Engineering Manager / Former Manager",
    tag: "FORMER MANAGER",
  },
  {
    quote: "Udhaya is an exceptional leader who sets high standards for his team and inspires them to reach their full potential. His technical expertise has been invaluable to the success of our projects.",
    name: "Piyush Jaiswal",
    role: "Backend Engineer, reported to Udhaya",
    tag: "MENTEE",
  },
];

const matrix = [
  {
    label: "HIRING FOR",
    icon: "💼",
    body: "Staff, Principal, or Founding-Engineer roles where I can own a backend or data infrastructure system with real influence on how a team scales.",
    items: profile.roleFit.slice(0, 3),
  },
  {
    label: "WHAT I BRING",
    icon: "◆",
    body: "Deep expertise across CDC pipelines, warehouse consolidation, and building for reversibility so mistakes stay cheap to fix.",
    items: profile.technologies.slice(0, 3),
  },
  {
    label: "CORE LEARNINGS",
    icon: "◎",
    body: "Match storage to question. Operational simplicity beats sophisticated abstractions. Ship in trust order, not sophistication order.",
    items: ["Reversibility by design", "Debuggability under pressure", "Adoption requires trust"],
  },
];

const culture = [
  {
    tag: "PUB/SUB STANDARDS",
    title: "Established code review standards for Pub/Sub consumers",
    body: "Every new consumer had to implement backpressure monitoring and memory high-water marks before deployment. This pattern prevented OOM crashes across 15+ services company-wide.",
  },
  {
    tag: "HIRING BAR",
    title: "Designed system design interviews for backend hiring",
    body: "Led hiring for 3 backend engineers. Focused questions on tradeoffs and reversibility, not algorithm complexity — raised the bar for architectural thinking across the company.",
  },
  {
    tag: "CROSS-TEAM SYNC",
    title: "Ran monthly architecture sync across teams",
    body: "Platform, Recommendations, and Segmentation teams aligned on shared systems. This is where we caught the stale recommendation churn driver before it spiraled.",
  },
  {
    tag: "MENTORSHIP",
    title: "Mentored engineers to Staff-level impact",
    body: "Goutham Kishore and Piyush Jaiswal both reported to me. Focused on helping them own systems end-to-end and communicate architecture to non-technical stakeholders. Both now lead sub-systems independently.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="pt-8 pb-6">
        <BackLink href="/" label="Back to Home" />
      </div>

      {/* Header & intro */}
      <section className="flex flex-col gap-4 pb-10">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-caption-mono text-caption-mono uppercase px-2 py-0.5 rounded bg-panel-2 text-ink-2">
            PROFILE // 13+ YEARS BACKEND &amp; DATA INFRASTRUCTURE
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-ink font-semibold tracking-tight">
          Thirteen Years Backend. Five Years Owning a Data Platform End to End.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-1">
          <div className="md:col-span-8 flex flex-col gap-4">
            <p className="font-body-lg text-body-lg text-ink leading-relaxed max-w-[65ch]">
              I&apos;m a {profile.primaryTitle} open to Staff, Principal, or Founding-Engineer roles where I can own a backend or data infrastructure system with the same scope and have real influence on how a team scales.
            </p>
            <p className="font-body-md text-body-md text-ink-2 leading-relaxed max-w-[65ch]">
              {profile.positioning} Scaled a platform team from {profile.convertCart.teamGrowth}, served {profile.proof.merchants}, and reduced infrastructure cost 66% along the way.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-2 p-4 bg-panel rounded-lg">
            <div className="flex items-center justify-between pb-1">
              <span className="font-caption-mono text-caption-mono text-ink-3 uppercase">CAREER VITALS</span>
              <span className="text-accent text-[18px]">✓</span>
            </div>
            <div className="flex flex-col gap-1">
              {vitals.map((v) => (
                <div key={v.label} className="flex items-baseline justify-between">
                  <span className="font-caption-mono text-caption-mono text-ink-2">{v.label}</span>
                  <span className={`font-label-mono-lg text-label-mono-lg font-medium ${v.accent === "sage" ? "text-sage" : "text-ink"}`}>
                    {v.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col gap-4 py-10 border-t border-rule">
        <div className="flex items-center justify-between">
          <h2 className="font-caption-mono text-caption-mono uppercase tracking-widest text-accent font-medium">
            RECOMMENDATIONS // WHAT COLLABORATORS SAY
          </h2>
          <span className="font-caption-mono text-caption-mono text-ink-3 hidden sm:inline-block">4 ENDORSEMENTS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <article key={t.name} className="p-6 bg-panel rounded-lg flex flex-col justify-between gap-4 transition-colors duration-200 hover:bg-panel-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-accent">
                  <span className="text-[28px] leading-none">&ldquo;</span>
                  <span className="font-caption-mono text-caption-mono text-ink-3">{t.tag}</span>
                </div>
                <p className="font-body-md text-body-md text-ink leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="pt-2">
                <span className="font-headline-sm text-headline-sm text-ink font-medium leading-none block">{t.name}</span>
                <span className="font-caption-mono text-caption-mono text-ink-2 mt-1 block">{t.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tri-column matrix */}
      <section className="flex flex-col gap-4 py-10 border-t border-rule">
        <div className="flex items-center justify-between">
          <span className="font-caption-mono text-caption-mono uppercase tracking-widest text-accent font-medium">
            ALIGNMENT MATRIX // OPERATIONAL PROFILE
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {matrix.map((col) => (
            <div key={col.label} className="bg-panel rounded-lg p-4 flex flex-col gap-2 transition-colors duration-200 hover:bg-panel-2">
              <div className="flex items-center justify-between pb-1">
                <span className="font-label-mono-sm text-label-mono-sm text-accent uppercase font-medium">{col.label}</span>
                <span className="text-ink-3 text-[16px]">{col.icon}</span>
              </div>
              <p className="font-body-md text-body-md text-ink leading-relaxed">{col.body}</p>
              <ul className="flex flex-col gap-1.5 pt-1">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-caption-mono text-caption-mono text-ink-2">
                    <span className="text-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering culture tenets */}
      <section className="flex flex-col gap-4 py-10 border-t border-rule">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <span className="font-caption-mono text-caption-mono uppercase tracking-widest text-accent font-medium block">
              METHODOLOGY // HOW I INFLUENCED ENGINEERING CULTURE
            </span>
            <h2 className="font-headline-md text-headline-md text-ink font-semibold mt-1">
              Beyond the Platform Role
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {culture.map((c, i) => (
            <div key={c.title} className="p-6 bg-panel rounded-lg flex flex-col gap-2 transition-colors duration-200 hover:bg-panel-2">
              <div className="flex items-center justify-between">
                <span className="font-label-mono-lg text-label-mono-lg text-accent font-semibold">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-caption-mono text-caption-mono text-ink-3 uppercase">{c.tag}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-ink font-medium">{c.title}</h3>
              <p className="font-body-md text-body-md text-ink-2 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-10 border-t border-rule">
        <div className="p-6 md:p-8 bg-panel rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex flex-col gap-2 max-w-[480px] z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage"></span>
              <span className="font-caption-mono text-caption-mono text-ink-2 uppercase tracking-wide">
                {profile.availability}
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-ink font-semibold">
              Let&apos;s talk about infrastructure, data, and building at scale.
            </h2>
            <p className="font-body-md text-body-md text-ink-2 leading-relaxed">
              Whether you&apos;re refactoring a legacy pipeline, diagnosing CDC lag, or designing a zero-downtime migration, let&apos;s unpack the architecture.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto shrink-0 z-10">
            <Link
              href={`mailto:${profile.email}`}
              className="min-h-[44px] px-4 py-2.5 rounded bg-accent text-bg font-label-mono-sm text-label-mono-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-accent-ink"
            >
              <span className="text-[16px]">💬</span>
              Schedule Technical Chat
            </Link>
            <Link
              href="/architecture-decisions/"
              className="min-h-[44px] px-4 py-2.5 rounded bg-panel-2 text-ink font-label-mono-sm text-label-mono-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-rule"
            >
              <span className="text-[16px]">◈</span>
              View Architecture Decisions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
