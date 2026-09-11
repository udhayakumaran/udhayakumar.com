"use client";

import { usePathname } from "next/navigation";
import { useContext } from "react";
import Link from "next/link";
import { CommandPaletteContext } from "./CommandPaletteProvider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/resume/", label: "Resume" },
  { href: "/case-studies/", label: "Case Studies" },
  { href: "/architecture-decisions/", label: "Architecture" },
  { href: "/engineering-notes/", label: "Notes" },
];

export default function Header() {
  const pathname = usePathname();
  const { open } = useContext(CommandPaletteContext);

  const isActive = (href: string) => {
    const normalizedPathname = pathname.replace(/\/$/, "") || "/";
    const normalizedHref = href.replace(/\/$/, "") || "/";
    return (
      normalizedPathname === normalizedHref ||
      (normalizedHref === "/case-studies" &&
        normalizedPathname.startsWith("/case-studies"))
    );
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-bg/95 backdrop-blur-sm border-b border-rule">
      <div className="h-20 max-w-[860px] mx-auto px-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/" className="flex flex-col min-h-[44px] justify-center whitespace-nowrap">
            <span className="font-headline-sm text-headline-sm text-ink tracking-tight uppercase">Udhaya Kumar</span>
            <span className="font-caption-mono text-caption-mono text-ink-2 uppercase tracking-widest">Infrastructure &amp; Reliability</span>
          </Link>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-sage-wash text-sage border border-sage font-caption-mono text-caption-mono ml-2 whitespace-nowrap">
            PROD / SRE
          </span>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(item.href)
                    ? "min-h-[44px] inline-flex items-center px-3 transition-colors bg-panel-2 text-ink border-b-2 border-accent font-semibold font-label-mono-sm text-label-mono-sm"
                    : "min-h-[44px] inline-flex items-center px-3 text-ink-2 font-label-mono-sm text-label-mono-sm hover:bg-panel hover:text-ink transition-colors"
                }
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="w-8 h-8 flex items-center justify-center rounded-full text-ink-2 hover:text-accent hover:bg-panel transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            id="theme-toggle"
            aria-label="Switch to dark mode"
            title="Toggle dark mode"
            aria-pressed="false"
          >
            <span id="theme-icon">🌙</span>
          </button>

          <button
            onClick={open}
            className="w-8 h-8 flex items-center justify-center rounded-full text-ink-2 hover:text-accent hover:bg-panel transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            aria-label="Open command palette"
            title="Open command palette (⌘K)"
          >
            <span className="font-mono text-label-mono-sm">⌘</span>
          </button>

          <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center shrink-0 text-bg">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
