export interface SearchItem {
  id: string;
  title: string;
  section: string;
  url: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  // Case Studies
  {
    id: "cs-data-platform",
    title: "The Data Platform",
    section: "Case Studies",
    url: "/case-studies/data-platform",
    keywords: ["data platform", "debezium", "CDC", "data infrastructure", "merchants", "pub/sub", "clickhouse", "mongodb", "bigquery"],
  },
  {
    id: "cs-segmentation",
    title: "Customer Segmentation",
    section: "Case Studies",
    url: "/case-studies/segmentation",
    keywords: ["segmentation", "bigquery", "datastream", "customer success", "analytics", "audience builder"],
  },
  {
    id: "cs-recommendations",
    title: "Recommendation Blocks",
    section: "Case Studies",
    url: "/case-studies/recommendations",
    keywords: ["recommendations", "trust ladder", "adoption", "product", "regions", "serving"],
  },
  {
    id: "cs-hard-problems",
    title: "Hard Problems & Learnings",
    section: "Case Studies",
    url: "/case-studies/hard-problems",
    keywords: ["incidents", "production", "scale", "lock contention", "query optimization", "resilience"],
  },

  // Engineering Notes
  {
    id: "en-debezium",
    title: "The 50M-row Debezium Snapshot Incident",
    section: "Engineering Notes",
    url: "/engineering-notes/debezium-50m-row-snapshot",
    keywords: ["debezium", "snapshot", "production incident", "migration", "datastream", "recovery", "cdc"],
  },
  {
    id: "en-incidents",
    title: "Incident Records",
    section: "Engineering Notes",
    url: "/engineering-notes/incidents",
    keywords: ["incidents", "postmortem", "lessons learned"],
  },

  // Other pages
  {
    id: "pg-about",
    title: "About",
    section: "Pages",
    url: "/about",
    keywords: ["about", "background", "team", "mentorship", "leadership", "culture"],
  },
  {
    id: "pg-resume",
    title: "Resume",
    section: "Pages",
    url: "/resume",
    keywords: ["resume", "cv", "experience", "skills"],
  },
  {
    id: "pg-architecture",
    title: "Architecture Decisions",
    section: "Pages",
    url: "/architecture-decisions",
    keywords: ["architecture", "decisions", "adr", "technical decisions"],
  },
];
