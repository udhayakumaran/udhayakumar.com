"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, ReactNode } from "react";
import { caseStudies, type CaseStudy } from "../data/case-studies";

const lenses = [
  { id: "all", label: "All", note: "Four case studies in recommended read order" },
  { id: "data", label: "Data & Infrastructure", note: "Primary case study — build and own the full data platform" },
  { id: "arch", label: "Architecture & Systems", note: "Deep dives into production incidents and architectural decisions" },
  { id: "founding", label: "Founding & Product", note: "Early-stage execution, building products from zero" },
];

interface Props {
  children: ReactNode;
}

export default function CaseStudiesInteractive({ children }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeLens, setActiveLens] = useState("data");
  const [fadeNote, setFadeNote] = useState(false);

  useEffect(() => {
    const lens = searchParams.get("lens") || "data";
    setActiveLens(lens);
  }, [searchParams]);

  const handleLensChange = (lensId: string) => {
    setFadeNote(true);
    setTimeout(() => {
      setActiveLens(lensId);
      setFadeNote(false);
    }, 150);

    const newParams = new URLSearchParams(searchParams);
    newParams.set("lens", lensId);
    router.replace(`?${newParams.toString()}`);
  };

  const getReorderedStudies = (): CaseStudy[] => {
    const lensLeadMap: { [key: string]: string } = {
      data: "data-platform",
      arch: "hard-problems",
      founding: "segmentation",
      all: "data-platform",
    };

    const leadId = lensLeadMap[activeLens];
    const leadStudy = caseStudies.find((s) => s.id === leadId);
    const others = caseStudies.filter((s) => s.id !== leadId);

    return leadStudy ? [leadStudy, ...others] : caseStudies;
  };

  const activeLensObj = lenses.find((l) => l.id === activeLens);
  const reorderedStudies = getReorderedStudies();

  return (
    <div>
      <div className="my-10">
        <div className="flex gap-3 mb-6 flex-wrap">
          {lenses.map((lens) => (
            <button
              key={lens.id}
              onClick={() => handleLensChange(lens.id)}
              className={`px-4 py-2 rounded-full border-2 font-label-mono-lg text-label-mono-lg font-semibold transition-all ${
                activeLens === lens.id
                  ? "border-accent text-accent bg-transparent"
                  : "border-rule text-ink hover:border-accent hover:text-accent"
              }`}
              aria-pressed={activeLens === lens.id}
            >
              {lens.label}
            </button>
          ))}
        </div>

        <div
          className={`text-body-md text-body-md text-ink-2 transition-opacity duration-150 ${
            fadeNote ? "opacity-0" : "opacity-100"
          }`}
        >
          {activeLensObj?.note}
        </div>
      </div>

      <div className="grid gap-6" id="case-studies-grid">
        {reorderedStudies.map((study) => {
          const leadId = lenses.find((l) => l.id === activeLens)?.id === "all"
            ? "data-platform"
            : { data: "data-platform", arch: "hard-problems", founding: "segmentation" }[activeLens];

          return (
            <div key={study.id} data-case-id={study.id}>
              {children}
            </div>
          );
        })}
      </div>
    </div>
  );
}
