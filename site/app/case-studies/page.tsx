import { Suspense } from "react";
import CaseStudiesContent from "./CaseStudiesContent";

export default function CaseStudiesPage() {
  return (
    <section className="py-13">
      <h1 className="font-mono text-32 font-semibold mb-4">Case Studies</h1>
      <p className="text-body-md text-body-md text-ink-2 max-w-[65ch] mb-10">
        These four case studies form a narrative: Start with the{" "}
        <a href="/case-studies/data-platform/" className="text-accent">
          data platform
        </a>{" "}
        to understand my architectural approach and how I think about reversibility. Then read{" "}
        <a href="/case-studies/hard-problems/" className="text-accent">
          hard problems
        </a>{" "}
        to see production judgment in action — how I handle pressure, learn from mistakes, and make decisions under constraint. Finally,{" "}
        <a href="/case-studies/segmentation/" className="text-accent">
          segmentation
        </a>{" "}
        and{" "}
        <a href="/case-studies/recommendations/" className="text-accent">
          recommendations
        </a>{" "}
        show how this architecture serves products and users. Together, they illustrate the full arc of ownership: from first principles through execution to impact.
      </p>

      <Suspense fallback={null}>
        <CaseStudiesContent />
      </Suspense>
    </section>
  );
}
