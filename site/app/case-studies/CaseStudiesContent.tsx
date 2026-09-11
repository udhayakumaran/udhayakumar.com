"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import CaseStudyCard from "../components/CaseStudyCard";
import { caseStudies } from "../data/case-studies";

const lenses = [
  { id: "all", label: "All Case Studies" },
  { id: "data", label: "Data & Infrastructure" },
  { id: "arch", label: "Architecture & Systems" },
  { id: "founding", label: "Founding & Product" },
];

const lensLeadMap: { [key: string]: string } = {
  data: "data-platform",
  arch: "hard-problems",
  founding: "segmentation",
  all: "data-platform",
};

export default function CaseStudiesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeLens, setActiveLens] = useState("data");

  useEffect(() => {
    const lens = searchParams.get("lens") || "data";
    setActiveLens(lens);
  }, [searchParams]);

  const handleLensChange = (lensId: string) => {
    setActiveLens(lensId);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("lens", lensId);
    router.replace(`?${newParams.toString()}`);
  };

  const leadId = lensLeadMap[activeLens];
  const leadStudy = caseStudies.find((s) => s.id === leadId);
  const others = caseStudies.filter((s) => s.id !== leadId);
  const orderedStudies = leadStudy ? [leadStudy, ...others] : caseStudies;

  return (
    <>
      <div
        aria-label="Reorder case studies by architectural lens"
        className="flex items-center gap-3 flex-wrap mb-10"
        role="toolbar"
      >
        {lenses.map((lens) => (
          <button
            key={lens.id}
            onClick={() => handleLensChange(lens.id)}
            aria-pressed={activeLens === lens.id}
            type="button"
            className={
              activeLens === lens.id
                ? "inline-flex items-center justify-center px-4 py-2 min-h-[44px] rounded bg-panel border-2 border-accent text-accent font-label-mono-lg text-label-mono-lg font-semibold transition-all"
                : "inline-flex items-center justify-center px-4 py-2 min-h-[44px] rounded bg-transparent border border-rule text-ink-2 font-label-mono-lg text-label-mono-lg hover:border-accent hover:text-ink transition-all"
            }
          >
            {lens.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {orderedStudies.map((study, idx) => (
          <CaseStudyCard key={study.id} study={study} number={idx + 1} />
        ))}
      </div>
    </>
  );
}
