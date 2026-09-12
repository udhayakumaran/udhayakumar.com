export interface CaseStudy {
  id: string;
  href: string;
  category: string;
  badge: string;
  badgeVariant: "accent" | "sage" | "neutral";
  title: string;
  subtitle: string;
  techTags: string[];
  telemetryIcon: string;
  telemetryText: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "data-platform",
    href: "/case-studies/data-platform/",
    category: "DATA PLATFORM / CDC",
    badge: "MOST RELEVANT",
    badgeVariant: "accent",
    title: "The Data Platform",
    subtitle: "Owned the rebuild of customer and order data infrastructure across 200+ merchants on five commerce platforms; freshness ranges from sub-5-minute (webhooks) to ~6 hours (legacy) vs. days-late baseline.",
    techTags: ["MYSQL", "DEBEZIUM", "PUB/SUB", "BIGQUERY", "CLICKHOUSE"],
    telemetryIcon: "⚡",
    telemetryText: "200+ merchants · 5 platforms · <5min freshness (webhooks)",
  },
  {
    id: "identity-resolution",
    href: "/case-studies/identity-resolution/",
    category: "IDENTITY / CUSTOMER DATA",
    badge: "CROSS-DEVICE",
    badgeVariant: "sage",
    title: "Identity Resolution",
    subtitle: "Architected deterministic identity resolution across email, device, cookie, phone, and platform IDs on a legacy, highly-distributed profile system — merging ~15%+ of contacts into an existing identity across ~200-300 merchants.",
    techTags: ["DETERMINISTIC MATCHING", "READ-TIME RESOLUTION", "LEGACY SYSTEM"],
    telemetryIcon: "⚡",
    telemetryText: "200-300 merchants · ~15% contact merge rate · deterministic matching",
  },
  {
    id: "segmentation",
    href: "/case-studies/segmentation/",
    category: "CUSTOMER DATA PRODUCT",
    badge: "SELF-SERVE",
    badgeVariant: "sage",
    title: "Customer Segmentation",
    subtitle: "Owned the query model and builder that let Customer Success create audiences from four source systems without routine engineering tickets.",
    techTags: ["BIGQUERY", "DATASTREAM", "QUERY BUILDER"],
    telemetryIcon: "✓",
    telemetryText: "4 source systems, 1 query · built on the platform above",
  },
  {
    id: "recommendations",
    href: "/case-studies/recommendations/",
    category: "PRODUCT SYSTEM",
    badge: "RECOMMENDATIONS",
    badgeVariant: "neutral",
    title: "Recommendation Blocks",
    subtitle: "Owned the trust ladder, serving system, and adoption measurement for a recommendation product built from zero.",
    techTags: ["SERVING LAYER", "TRUST LADDER", "5 REGIONS"],
    telemetryIcon: "⚡",
    telemetryText: "80% of all merchants · 5 regions · 200-400ms p99",
  },
  {
    id: "hard-problems",
    href: "/case-studies/hard-problems/",
    category: "PRODUCTION INCIDENTS",
    badge: "DEEP DIVE",
    badgeVariant: "neutral",
    title: "Hard Problems & Learnings",
    subtitle: "Ten production incidents that shaped engineering judgment. Lock contention at scale, silent failures, architectural incompatibility, database constraints, resilience patterns, leadership under crisis.",
    techTags: ["QUERY ARCHITECTURE", "SCALE CONSTRAINTS", "SYSTEMATIC PATTERNS"],
    telemetryIcon: "◆",
    telemetryText: "10 incidents · postmortem depth · judgment under pressure",
  },
];
