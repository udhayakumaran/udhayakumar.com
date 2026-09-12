import BackLink from "./BackLink";

interface Props {
  caseStudyLabel: string;
}

export default function CaseStudyTagBar({ caseStudyLabel }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-8 pb-4 mb-8 border-b border-rule">
      <BackLink href="/" label="Back to Home" />
      <span className="font-caption-mono text-caption-mono text-ink-3 uppercase tracking-wider">
        {caseStudyLabel}
      </span>
    </div>
  );
}
