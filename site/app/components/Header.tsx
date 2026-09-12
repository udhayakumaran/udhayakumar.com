"use client";

import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
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
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileNavOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileNavOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

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
          <Link href="/" className="group no-underline flex flex-col min-h-[44px] justify-center whitespace-nowrap">
            <span className="font-headline-sm text-headline-sm text-ink tracking-tight uppercase group-hover:underline">Udhaya Kumar</span>
            <span className="font-caption-mono text-caption-mono text-ink-2 uppercase tracking-widest">Staff Backend Engineer</span>
          </Link>
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
            onClick={toggleTheme}
            className="hidden lg:flex w-8 h-8 items-center justify-center rounded-full text-ink-2 hover:text-accent hover:bg-panel transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title="Toggle dark mode"
            aria-pressed={theme === "dark"}
          >
            <span>{theme === "dark" ? "☀️" : "🌙"}</span>
          </button>

          <button
            onClick={open}
            className="hidden lg:flex w-8 h-8 items-center justify-center rounded-full text-ink-2 hover:text-accent hover:bg-panel transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            aria-label="Open command palette"
            title="Open command palette (⌘K)"
          >
            <span className="font-mono text-label-mono-sm">⌘</span>
          </button>

          <button
            onClick={() => setMobileNavOpen((v) => !v)}
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded-full text-ink-2 hover:text-accent hover:bg-panel transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileNavOpen}
          >
            <span>{mobileNavOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {mobileNavOpen && (
        <nav className="lg:hidden absolute top-20 left-0 w-full bg-bg border-b border-rule" aria-label="Primary navigation">
          <div className="flex flex-col max-w-[860px] mx-auto px-5 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(item.href)
                    ? "min-h-[44px] flex items-center px-3 transition-colors bg-panel-2 text-ink border-l-2 border-accent font-semibold font-label-mono-sm text-label-mono-sm"
                    : "min-h-[44px] flex items-center px-3 text-ink-2 font-label-mono-sm text-label-mono-sm hover:bg-panel hover:text-ink transition-colors"
                }
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-1 mt-1 pt-2 border-t border-rule">
              <button
                onClick={toggleTheme}
                className="min-h-[44px] flex items-center gap-2 px-3 text-ink-2 font-label-mono-sm text-label-mono-sm hover:bg-panel hover:text-ink transition-colors"
                aria-pressed={theme === "dark"}
              >
                <span>{theme === "dark" ? "☀️" : "🌙"}</span>
                <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
              </button>
              <button
                onClick={open}
                className="min-h-[44px] flex items-center gap-2 px-3 text-ink-2 font-label-mono-sm text-label-mono-sm hover:bg-panel hover:text-ink transition-colors"
              >
                <span className="font-mono">⌘</span>
                <span>Command palette</span>
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
