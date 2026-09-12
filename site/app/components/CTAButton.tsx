import Link from "next/link";

interface Props {
  href: string;
  label: string;
  variant?: "solid" | "outline" | "panel";
  size?: "sm" | "lg";
  icon?: string;
  arrow?: "right";
}

export default function CTAButton({
  href,
  variant = "solid",
  size = "lg",
  icon,
  arrow,
  label,
}: Props) {
  const sizeClasses = size === "sm" ? "font-label-mono-sm text-label-mono-sm" : "font-label-mono-lg text-label-mono-lg";
  const baseClasses = `inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded transition-colors group ${sizeClasses}`;
  const variantClasses =
    variant === "outline"
      ? "border border-rule text-ink hover:border-accent hover:text-accent"
      : variant === "panel"
        ? "bg-panel text-ink hover:bg-panel-2"
        : "bg-accent text-bg border border-accent hover:bg-accent-ink hover:border-accent-ink";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {icon && <span className="text-[14px]">{icon}</span>}
      <span>{label}</span>
      {arrow === "right" && (
        <span className="text-[14px] transition-transform group-hover:translate-x-1">→</span>
      )}
    </Link>
  );
}
