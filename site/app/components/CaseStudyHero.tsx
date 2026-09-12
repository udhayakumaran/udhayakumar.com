export interface MetaItem {
  label: string;
  value: string;
  accent?: "sage";
}

export interface MetricItem {
  label: string;
  value: string;
  suffix: string;
  note: string;
  accentValue?: "sage";
  suffixColor?: "sage";
  isText?: boolean;
}

interface Props {
  badge: string;
  badgeVariant?: "sage" | "neutral";
  publishedDate: string;
  title: string;
  intro: string;
  metaStrip: MetaItem[];
  metrics: MetricItem[];
}

export default function CaseStudyHero({
  badge,
  badgeVariant = "neutral",
  publishedDate,
  title,
  intro,
  metaStrip,
  metrics,
}: Props) {
  return (
    <>
      <header className="flex flex-col gap-4 mb-10">
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-0.5 rounded font-caption-mono text-caption-mono uppercase tracking-widest ${
              badgeVariant === "sage" ? "bg-sage-wash text-sage" : "bg-panel-2 text-ink-2"
            }`}
          >
            {badge}
          </span>
          <span className="font-caption-mono text-caption-mono text-ink-3">•</span>
          <span className="font-caption-mono text-caption-mono text-ink-2">PUBLISHED {publishedDate}</span>
        </div>
        <h1 className="font-display-hero text-display-hero text-ink break-words">{title}</h1>
        <p className="font-body-lg text-body-lg text-ink-2 max-w-[72ch]">{intro}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          {metaStrip.map((m) => (
            <div key={m.label} className="p-3 bg-panel rounded">
              <span className="block font-caption-mono text-caption-mono text-ink-3 uppercase">{m.label}</span>
              <span className={`font-label-mono-sm text-label-mono-sm font-semibold ${m.accent === "sage" ? "text-sage" : "text-ink"}`}>
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
        {metrics.map((m) => (
          <div key={m.label} className="bg-panel p-4 rounded flex flex-col justify-between">
            <span className="font-caption-mono text-caption-mono text-ink-3 uppercase tracking-wider">{m.label}</span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className={`font-display-hero ${m.isText ? "text-headline-sm" : "text-headline-lg"} ${m.accentValue === "sage" ? "text-sage" : "text-ink"}`}>
                {m.value}
              </span>
              <span className={`font-label-mono-sm text-label-mono-sm font-bold ${m.suffixColor === "sage" ? "text-sage" : "text-accent"}`}>
                {m.suffix}
              </span>
            </div>
            <span className="font-caption-mono text-caption-mono text-ink-2 mt-1">{m.note}</span>
          </div>
        ))}
      </section>
    </>
  );
}
