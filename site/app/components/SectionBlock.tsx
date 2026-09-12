import { ReactNode } from "react";

interface Props {
  index: string;
  eyebrow: ReactNode;
  title: ReactNode;
  meta?: ReactNode;
  topPadding?: boolean;
  children: ReactNode;
}

export default function SectionBlock({ index, eyebrow, title, meta, topPadding = false, children }: Props) {
  return (
    <section className={`flex flex-col gap-3 mb-10 ${topPadding ? "pt-2" : ""}`}>
      {meta ? (
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <span className="font-caption-mono text-caption-mono text-accent">
            {index} {"//"} {eyebrow}
          </span>
          <span className="font-caption-mono text-caption-mono text-ink-3">{meta}</span>
        </div>
      ) : (
        <span className="font-caption-mono text-caption-mono text-accent">
          {index} {"//"} {eyebrow}
        </span>
      )}
      <h2 className="font-headline-lg text-headline-lg text-ink">{title}</h2>
      {children}
    </section>
  );
}
