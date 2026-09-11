import Link from "next/link";

interface Props {
  href: string;
  variant?: "solid" | "outline";
  label: string;
}

export default function CTAButton({
  href,
  variant = "solid",
  label,
}: Props) {
  const baseClasses = "inline-block px-4 py-2 font-label-mono-lg text-label-mono-lg rounded border transition-colors";
  const variantClasses = variant === "outline"
    ? "border-rule text-ink hover:border-accent hover:text-accent"
    : "bg-accent text-bg border-accent hover:bg-accent-ink hover:border-accent-ink";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {label}
    </Link>
  );
}
