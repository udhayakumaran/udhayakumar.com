import Link from "next/link";

interface Props {
  href: string;
  label: string;
}

export default function BackLink({ href, label }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 min-h-[44px] text-accent font-label-mono-sm text-label-mono-sm hover:text-accent-ink transition-colors group"
    >
      <span className="text-[14px] transition-transform group-hover:-translate-x-1">←</span>
      <span>{label}</span>
    </Link>
  );
}
