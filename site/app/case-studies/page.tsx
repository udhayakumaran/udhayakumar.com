import { Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";
import BackLink from "../components/BackLink";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Four production systems I owned: a CDC data platform, a segmentation engine, a recommendation system, and ten incidents that shaped my engineering judgment.",
  alternates: {
    canonical: "https://udhayakumar.com/case-studies/",
  },
  openGraph: {
    title: "Case Studies",
    description: "Four production systems I owned: a CDC data platform, a segmentation engine, a recommendation system, and ten incidents that shaped my engineering judgment.",
    url: "https://udhayakumar.com/case-studies/",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="pt-8 pb-6">
        <BackLink href="/" label="Back to Home" />
      </div>

      <div className="flex flex-col gap-3 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-caption-mono text-caption-mono px-2 py-0.5 rounded bg-panel-2 text-ink-2 uppercase tracking-wider">
            INDEX // 4 PRODUCTION SYSTEMS
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-ink font-bold tracking-tight">
          Case Studies &amp; Systems Architecture
        </h1>
        <p className="font-body-lg text-body-lg text-ink-2 max-w-[65ch]">
          Four complete systems I owned, from first principles through execution to impact: a CDC data platform rebuilding infrastructure across 200+ merchants, a segmentation engine that let non-technical teams build audiences without code, a real-time recommendation system solving cold-start, and ten production incidents that shaped my engineering judgment.
        </p>
      </div>

      <Suspense fallback={null}>
        <CaseStudiesContent />
      </Suspense>

      <div className="mt-12 p-6 bg-panel-2 border border-rule-2 rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded bg-bg border border-rule-2 flex items-center justify-center shrink-0 text-accent">
            <span className="text-[18px]">$_</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-headline-sm text-headline-sm text-ink font-semibold">
              Looking for the incidents behind the architecture?
            </h2>
            <p className="font-body-sm text-body-sm text-ink-2 max-w-[50ch]">
              Ten production incidents that shaped engineering judgment are cataloged in Hard Problems &amp; Learnings.
            </p>
          </div>
        </div>
        <Link
          href="/case-studies/hard-problems/"
          className="inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] rounded bg-bg border border-rule-2 font-label-mono-lg text-label-mono-lg text-ink font-medium hover:bg-panel hover:text-accent transition-colors shrink-0"
        >
          READ HARD PROBLEMS →
        </Link>
      </div>
    </div>
  );
}
