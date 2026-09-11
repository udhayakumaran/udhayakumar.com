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
    <header className="border-b border-rule py-6 sticky top-0 bg-bg z-100">
      <nav
        className="mx-auto max-w-[860px] px-5 flex gap-10 items-center md:gap-5"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="font-display text-headline-sm text-headline-sm font-bold text-ink no-underline mr-auto transition-colors duration-200 min-h-[44px] inline-flex items-center hover:text-accent"
        >
          Udhaya
        </Link>

        <div className="flex gap-10 items-center md:gap-5 md:order-3 md:w-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`no-underline text-ink font-label-mono-lg text-label-mono-lg font-medium border-b-2 transition-[border-color] duration-200 min-h-[44px] inline-flex items-center px-2 ${
                isActive(item.href)
                  ? "border-accent"
                  : "border-transparent hover:border-accent"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="bg-transparent border border-rule-2 text-ink text-label-mono-lg text-label-mono-lg font-medium px-2 py-2 rounded-sm cursor-pointer transition-all duration-200 font-mono min-w-[44px] min-h-[44px] hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 md:order-2"
          id="theme-toggle"
          aria-label="Switch to dark mode"
          title="Toggle dark mode"
          aria-pressed="false"
        >
          <span id="theme-icon">🌙</span>
        </button>

        <button
          onClick={open}
          className="bg-transparent border border-rule-2 text-ink-3 text-label-mono-lg text-label-mono-lg font-semibold px-2 py-2 rounded-sm cursor-pointer transition-all duration-200 font-mono min-w-[44px] min-h-[44px] flex items-center justify-center hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          aria-label="Open command palette"
          title="Open command palette (⌘K)"
        >
          <span className="inline-block">⌘</span>
        </button>
      </nav>
    </header>
  );
}
