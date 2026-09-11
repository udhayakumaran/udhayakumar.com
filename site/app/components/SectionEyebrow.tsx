interface Props {
  label: string;
  accent?: "sage" | "accent";
}

export default function SectionEyebrow({ label, accent = "accent" }: Props) {
  return (
    <div className={`eyebrow ${accent === "sage" ? "sage" : ""}`}>
      {label}
    </div>
  );
}
