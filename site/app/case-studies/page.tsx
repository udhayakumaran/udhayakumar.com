import { Suspense } from "react";
import Link from "next/link";
import CaseStudiesContent from "./CaseStudiesContent";

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="mb-6">
        <Link
          href="/"
          className="font-label-mono-sm text-label-mono-sm text-accent font-medium hover:underline inline-flex items-center gap-1.5 transition-colors"
        >
          <span className="text-[14px] leading-none">←</span>
          <span>BACK TO OVERVIEW</span>
        </Link>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-caption-mono text-caption-mono px-2 py-0.5 rounded bg-panel-2 text-ink-2 uppercase tracking-wider">
            INDEX // 4 PRODUCTION SYSTEMS
          </span>
          <span className="h-1 w-1 rounded-full bg-rule-2"></span>
          <span className="font-caption-mono text-caption-mono text-ink-3">SYS_VERIFIED</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-ink font-bold tracking-tight">
          Case Studies &amp; Systems Architecture
        </h1>
        <p className="font-body-lg text-body-lg text-ink-2 max-w-[65ch]">
          Four complete systems I owned, from first principles through execution to impact: a data platform with CDC and warehouse consolidation, a segmentation engine for non-technical users, a real-time recommendation system, and ten production incidents that shaped my engineering judgment.
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
            <h3 className="font-headline-sm text-headline-sm text-ink font-semibold">
              Looking for the incidents behind the architecture?
            </h3>
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
