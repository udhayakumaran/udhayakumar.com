"use client";

import { useState } from "react";

export interface Incident {
  id: string;
  title: string;
  category: string;
  when: string;
  duration: string;
  impact: string;
  sections: { heading: string; body: string }[];
}

export default function IncidentAccordion({ incidents }: { incidents: Incident[] }) {
  const [openId, setOpenId] = useState<string | null>(incidents[0]?.id ?? null);

  return (
    <div className="flex flex-col gap-4">
      {incidents.map((inc, idx) => {
        const isOpen = openId === inc.id;
        return (
          <article
            key={inc.id}
            id={`incident-${String(idx + 1).padStart(2, "0")}`}
            className="bg-panel rounded overflow-hidden transition-all duration-200 hover:bg-panel-2 scroll-my-24"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : inc.id)}
              aria-expanded={isOpen}
              className="w-full text-left p-5 md:p-6 flex flex-col gap-2 cursor-pointer"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-accent-wash text-accent-ink font-label-mono-sm text-label-mono-sm font-semibold">
                    {inc.id}
                  </span>
                  <span className="font-caption-mono text-caption-mono text-ink-3">{inc.category}</span>
                </div>
                <div className="flex items-center gap-3 font-caption-mono text-caption-mono text-ink-2">
                  <span>WHEN: <strong className="text-ink font-mono">{inc.when}</strong></span>
                  <span>•</span>
                  <span>DURATION: <strong className="text-ink font-mono">{inc.duration}</strong></span>
                  <span className={`text-[14px] text-ink-3 transition-transform duration-200 inline-block ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </div>
              </div>
              <h2 className="font-headline-md text-headline-md text-ink pt-1">{inc.title}</h2>
              <p className="font-caption-mono text-caption-mono text-ink-2">IMPACT: {inc.impact}</p>
            </button>

            {isOpen && (
              <div className="px-5 md:px-6 pb-6 flex flex-col gap-4 border-t border-rule pt-4">
                {inc.sections.map((s) => (
                  <div key={s.heading}>
                    <h3 className="font-label-mono-sm text-label-mono-sm text-accent uppercase font-semibold mb-2">{s.heading}</h3>
                    <p className="font-body-md text-body-md text-ink-2 max-w-[65ch]">{s.body}</p>
                  </div>
                ))}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
