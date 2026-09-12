import Link from "next/link";
import type { CaseStudy } from "../data/case-studies";

interface Props {
  study: CaseStudy;
  number: number;
}

const badgeVariantClasses: Record<CaseStudy["badgeVariant"], string> = {
  accent: "text-accent-ink bg-accent-wash border border-accent/40",
  sage: "text-sage bg-sage-wash border border-sage/40",
  neutral: "text-ink-2 bg-panel-2 border border-rule",
};

export default function CaseStudyCard({ study, number }: Props) {
  return (
    <article className="p-6 bg-panel border border-rule rounded transition-all duration-200 hover:border-accent hover:-translate-y-1 flex flex-col gap-5">
      <div className="flex items-center justify-between gap-4 border-b border-rule pb-3">
        <div className="flex items-center gap-3">
          <span className="font-label-mono-sm text-label-mono-sm text-ink-3 font-semibold tracking-wider">
            {String(number).padStart(2, "0")}
          </span>
          <span className="text-rule-2 font-caption-mono text-caption-mono">/</span>
          <span className="font-label-mono-sm text-label-mono-sm text-accent uppercase font-semibold tracking-wide">
            {study.category}
          </span>
        </div>
        <span className={`font-caption-mono text-caption-mono px-2 py-0.5 rounded font-medium ${badgeVariantClasses[study.badgeVariant]}`}>
          {study.badge}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-headline-md text-headline-md font-semibold tracking-tight">
          <Link href={study.href} className="text-ink hover:text-accent transition-colors">
            {study.title}
          </Link>
        </h2>
        <p className="font-body-md text-body-md text-ink-2">{study.subtitle}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {study.techTags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 rounded bg-panel-2 border border-rule font-caption-mono text-caption-mono text-ink-2 font-medium">
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-3 border-t border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 bg-panel-2 px-3 py-2 rounded border border-rule/60 text-ink-2">
          <span className="text-[14px] text-sage">{study.telemetryIcon}</span>
          <span className="font-caption-mono text-caption-mono text-ink font-medium">{study.telemetryText}</span>
        </div>
        <Link
          href={study.href}
          className="inline-flex items-center gap-1.5 font-label-mono-lg text-label-mono-lg text-accent font-semibold hover:text-accent-ink hover:underline shrink-0 min-h-[44px]"
        >
          <span>Read Architecture Breakdown</span>
          <span className="text-[14px]">→</span>
        </Link>
      </div>
    </article>
  );
}
