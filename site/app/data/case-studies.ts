export interface CaseStudy {
  id: string;
  href: string;
  label: string;
  title: string;
  subtitle: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "data-platform",
    href: "/case-studies/data-platform/",
    label: "Primary case study · recommended first read",
    title: "The Data Platform",
    subtitle: "Owned the rebuild of customer and order data infrastructure across 200+ merchants on five commerce platforms; freshness ranges from sub-5-minute (webhooks) to ~6 hours (legacy) vs. days-late baseline.",
    tags: ["tiered freshness", "200+ merchants", "5 e-commerce platforms"],
  },
  {
    id: "segmentation",
    href: "/case-studies/segmentation/",
    label: "Customer data product · self-serve",
    title: "Customer Segmentation",
    subtitle: "Owned the query model and builder that let Customer Success create audiences from four source systems without routine engineering tickets.",
    tags: ["4 source systems, 1 query", "built on the platform ↑"],
  },
  {
    id: "recommendations",
    href: "/case-studies/recommendations/",
    label: "Product system · recommendations",
    title: "Recommendation Blocks",
    subtitle: "Owned the trust ladder, serving system, and adoption measurement for a recommendation product built from zero.",
    tags: ["80% of all merchants", "5 regions", "200-400ms p99"],
  },
  {
    id: "hard-problems",
    href: "/case-studies/hard-problems/",
    label: "Production incidents · deep dive",
    title: "Hard Problems & Learnings",
    subtitle: "Ten production incidents that shaped engineering judgment. Lock contention at scale, silent failures, architectural incompatibility, database constraints, resilience patterns, leadership under crisis.",
    tags: ["query architecture", "scale constraints", "systematic patterns"],
  },
];
