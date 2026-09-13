import Link from "next/link";

interface Props {
  children?: React.ReactNode;
}

export default function Footer({ children }: Props) {
  return (
    <footer className="w-full bg-panel border-t border-rule">
      <div className="max-w-[860px] mx-auto px-5 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-rule">
          <div className="flex items-center gap-2">
            <span className="font-caption-mono text-caption-mono text-ink-2">OPEN TO INDIAN, INTERNATIONAL, REMOTE &amp; HYBRID ROLES</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/udhayakumaran" className="min-h-[44px] inline-flex items-center text-ink-2 font-label-mono-sm text-label-mono-sm hover:text-accent transition-colors">
              GitHub
            </Link>
            <span className="text-rule-2">•</span>
            <Link href="https://linkedin.com/in/udhayakumark" className="min-h-[44px] inline-flex items-center text-ink-2 font-label-mono-sm text-label-mono-sm hover:text-accent transition-colors">
              LinkedIn
            </Link>
            <span className="text-rule-2">•</span>
            <Link href="mailto:mail4udhaya@gmail.com" className="min-h-[44px] inline-flex items-center text-ink-2 font-label-mono-sm text-label-mono-sm hover:text-accent transition-colors">
              Email
            </Link>
          </div>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="font-caption-mono text-caption-mono text-ink-3">© 2026 Udhaya Kumar. Designed with architectural rigor &amp; warm modernism.</p>
        </div>
        {children}
      </div>
    </footer>
  );
}
