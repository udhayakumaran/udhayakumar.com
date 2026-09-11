import Link from "next/link";

interface Props {
  href: string;
  title: string;
  label: string;
  subtitle: string;
  tags: string[];
  isMostRelevant?: boolean;
}

export default function CaseStudyCard({
  href,
  title,
  label,
  subtitle,
  tags,
  isMostRelevant = false,
}: Props) {
  return (
    <Link
      href={href}
      className="no-underline block p-6 bg-panel border border-rule-2 rounded transition-all hover:border-accent hover:-translate-y-1"
    >
      <div className="font-label-mono-lg text-label-mono-lg text-ink-3 font-semibold mb-1">
        {label}
      </div>
      <div className="flex justify-between items-start gap-2 mb-2">
        <h2 className="font-headline-lg text-headline-lg text-ink m-0">{title}</h2>
        {isMostRelevant && (
          <span className="font-label-mono-lg text-label-mono-lg text-accent uppercase tracking-[0.05em] whitespace-nowrap">
            most relevant
          </span>
        )}
      </div>
      <p className="text-body-md text-body-md text-ink-2 mb-3">{subtitle}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
