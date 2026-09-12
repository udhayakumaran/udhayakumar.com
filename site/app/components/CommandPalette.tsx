"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Fuse from "fuse.js";
import { searchIndex, type SearchItem } from "../data/search-index";
import { CommandPaletteContext } from "./CommandPaletteProvider";
import { useRouter } from "next/navigation";

interface GroupedResults {
  [section: string]: SearchItem[];
}

const fuse = new Fuse(searchIndex, {
  keys: ["title", "keywords", "section"],
  threshold: 0.3,
  includeScore: true,
});

export default function CommandPalette() {
  const { isOpen, open, close } = useContext(CommandPaletteContext);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [results, setResults] = useState<GroupedResults>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const allResults = Object.values(results).flat();

  useEffect(() => {
    if (!query.trim()) {
      setResults({});
      setSelectedIndex(-1);
      return;
    }

    const fuseResults = fuse.search(query);
    const grouped: GroupedResults = {};

    fuseResults.forEach(({ item: searchItem }) => {
      if (!grouped[searchItem.section]) {
        grouped[searchItem.section] = [];
      }
      grouped[searchItem.section].push(searchItem);
    });

    setResults(grouped);
    setSelectedIndex(-1);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!isOpen) {
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
          e.preventDefault();
          open();
        }
        return;
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < allResults.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < allResults.length) {
            const item = allResults[selectedIndex];
            close();
            router.push(item.url);
          }
          break;
        case "Escape":
          e.preventDefault();
          close();
          break;
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [isOpen, selectedIndex, allResults, open, close, router]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-200 bg-black/30 flex items-start justify-center pt-32" onClick={close}>
      <div
        className="bg-panel border border-rule rounded shadow-lg w-96 max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-rule p-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search case studies, incidents, pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-ink outline-none text-body-md text-body-md font-sans"
          />
        </div>

        <div className="max-h-96 overflow-y-auto">
          {allResults.length === 0 && query ? (
            <div className="p-4 text-ink-2 text-body-md text-body-md text-center">
              No results found
            </div>
          ) : !query ? (
            <div className="p-4 text-ink-2 text-body-md text-body-md text-center">
              Start typing to search...
            </div>
          ) : (
            Object.entries(results).map(([section, items]) => (
              <div key={section}>
                <div className="px-4 py-2 text-caption-mono text-caption-mono text-ink-3 font-label-mono-lg uppercase tracking-wider">
                  {section}
                </div>
                {items.map((item) => {
                  const globalIdx = allResults.indexOf(item);
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        close();
                        router.push(item.url);
                      }}
                      className={`w-full text-left px-4 py-2 transition-colors ${
                        globalIdx === selectedIndex
                          ? "bg-accent-wash text-ink"
                          : "hover:bg-panel-2 text-ink-2"
                      }`}
                    >
                      <div className="font-label-mono-lg text-label-mono-lg font-semibold">{item.title}</div>
                      <div className="text-caption-mono text-caption-mono text-ink-3">
                        {item.section}
                      </div>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
