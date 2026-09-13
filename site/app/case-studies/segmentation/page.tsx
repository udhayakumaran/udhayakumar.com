import { Metadata } from "next";
import CaseStudyTagBar from "../../components/CaseStudyTagBar";
import CaseStudyHero, { MetaItem, MetricItem } from "../../components/CaseStudyHero";
import SectionBlock from "../../components/SectionBlock";
import CTAButton from "../../components/CTAButton";

export const metadata: Metadata = {
  title: "Customer Segmentation",
  description: "Built the system that lets non-technical Customer Success reps build audiences without code. Four source systems, one query interface, 1,000+ segments.",
};

const metaStrip: MetaItem[] = [
  { label: "SOURCES", value: "Click, Commerce, Orders, Loyalty" },
  { label: "SERVING LAYER", value: "MongoDB + BigQuery" },
  { label: "INTERFACE", value: "Drag-and-drop query builder" },
  { label: "STATUS", value: "Self-serve", accent: "sage" },
];

const metrics: MetricItem[] = [
  { label: "ACTIVE SEGMENTS", value: "1,000", suffix: "+", note: "Within 6 months of launch" },
  { label: "SOURCE SYSTEMS UNIFIED", value: "4", suffix: "", note: "Click, Commerce, Orders, Loyalty" },
  { label: "TURNAROUND", value: "3-5 days", suffix: "→ min", note: "Ticket to self-service", isText: true },
  { label: "CSM TIME SAVED", value: "~15", suffix: "hrs/wk", note: "On manual segment creation", accentValue: "sage" },
];

export default function SegmentationCaseStudy() {
  return (
    <article className="flex flex-col w-full">
      <CaseStudyTagBar caseStudyLabel="CASE STUDY 02 // CUSTOMER DATA // BIGQUERY & MONGODB" />

      <CaseStudyHero
        badge="CUSTOMER DATA PRODUCT"
        badgeVariant="sage"
        publishedDate="2026-09-03"
        title="Customer Segmentation"
        intro="Built the system that lets a non-technical Customer Success rep build audiences like “shoppers who'd buy again if reminded” without writing a line of code or filing an engineering ticket — unifying four disconnected data sources into one query interface."
        metaStrip={metaStrip}
        metrics={metrics}
      />

      <SectionBlock index="01" eyebrow="ROLE & CONTEXT" title="My Role">
        <p className="font-body-md text-body-md text-ink-2">
          Owned architecture and product design — the unified data model, query composition system, and precomputation strategy (scheduled queries + views). Directed the query builder, materialization pipeline, and customer data model implementation with a small team (2-3 engineers, alongside other projects), while partnering directly with the CSM team on audience needs and monitoring BigQuery cost and query performance in production.
        </p>
        <p className="font-body-md text-body-md text-ink-2">
          Customer Success wanted to run targeted campaigns — &ldquo;remind shoppers who almost bought,&rdquo; &ldquo;reward loyal customers.&rdquo; Customer signals lived in four disconnected systems: click-tracking, commerce, orders, loyalty. CSMs filed engineering tickets for each segment, blocking campaigns and capping productivity.
        </p>
      </SectionBlock>

      <SectionBlock index="02" eyebrow="THE PROBLEM" title="No Self-Service, No Unified Model">
        <p className="font-body-md text-body-md text-ink-2">
          Segments were built ad-hoc for campaigns, manually combined by engineers. Each new segment added 3-5 days of latency. The loyalty program couldn&apos;t be queried against order data — there was no way to answer &ldquo;loyalty customers who haven&apos;t ordered in 30 days.&rdquo;
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-1">
          <div className="p-4 bg-panel rounded">
            <div className="font-label-mono-sm text-label-mono-sm text-accent font-semibold mb-2">BEFORE</div>
            <ul className="list-none space-y-1 font-body-sm text-body-sm text-ink-2">
              <li>Manual segment definition</li>
              <li>Engineering ticket per segment</li>
              <li>Disconnected data sources</li>
            </ul>
          </div>
          <div className="p-4 bg-panel rounded">
            <div className="font-label-mono-sm text-label-mono-sm text-accent font-semibold mb-2">WHY IT MATTERED</div>
            <ul className="list-none space-y-1 font-body-sm text-body-sm text-ink-2">
              <li>Campaigns blocked on engineering</li>
              <li>Couldn&apos;t combine customer signals</li>
              <li>CSM productivity capped</li>
            </ul>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock index="03" eyebrow="ARCHITECTURE" title="Self-Serve Query Builder on a Unified Model">
        <p className="font-body-md text-body-md text-ink-2">
          Consolidated four source systems into one unified customer model in BigQuery, defining reusable customer dimensions (loyalty status, purchase frequency, engagement, churn risk). CSMs compose segments by stacking filters through a UI; scheduled queries precompute expensive derived subsets, and views join these with raw and dimension data.
        </p>

        <div className="bg-panel p-4 sm:p-6 rounded overflow-hidden my-1">
          <div className="flex items-center justify-between pb-2 mb-4 bg-panel-2 p-2 rounded">
            <span className="font-label-mono-sm text-label-mono-sm text-ink font-semibold">BEFORE → AFTER: SEGMENT TURNAROUND</span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="px-4 py-2 bg-panel-2 border border-rule rounded text-center w-full">
                <span className="font-label-mono-sm text-label-mono-sm text-ink">CSM Request</span>
              </div>
              <span className="text-ink-3">↓</span>
              <div className="px-4 py-2 bg-panel-2 border border-rule rounded text-center w-full">
                <span className="font-label-mono-sm text-label-mono-sm text-ink">Engineering Ticket</span>
              </div>
              <span className="text-accent-ink font-caption-mono text-caption-mono">3-5 days</span>
              <span className="text-ink-3">↓</span>
              <div className="px-4 py-2 bg-panel-2 border border-rule rounded text-center w-full">
                <span className="font-label-mono-sm text-label-mono-sm text-ink">Segment Live</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="px-4 py-2 bg-sage-wash border border-sage rounded text-center w-full">
                <span className="font-label-mono-sm text-label-mono-sm text-sage">CSM Query</span>
              </div>
              <span className="text-ink-3">↓</span>
              <div className="px-4 py-2 bg-sage-wash border border-sage rounded text-center w-full">
                <span className="font-label-mono-sm text-label-mono-sm text-sage">Self-Service UI</span>
              </div>
              <span className="text-sage font-caption-mono text-caption-mono">minutes</span>
              <span className="text-ink-3">↓</span>
              <div className="px-4 py-2 bg-sage-wash border border-sage rounded text-center w-full">
                <span className="font-label-mono-sm text-label-mono-sm text-sage">Segment Live</span>
              </div>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-rule text-ink-3 font-caption-mono text-caption-mono">
            POWERED BY: Sources (Click, Commerce, Orders, Loyalty) → Unified customer model (BigQuery) → Scheduled queries → Dimensions (views) → Query builder (UI) → Campaign export
          </div>
        </div>
      </SectionBlock>

      <SectionBlock index="04" eyebrow="KEY DECISIONS" title="Decisions & Tradeoffs">
        <ul className="flex flex-col gap-2 list-none">
          <li className="p-4 bg-panel rounded">
            <h4 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">UI-First, SQL Later</h4>
            <p className="font-body-sm text-body-sm text-ink-2">CSMs weren&apos;t comfortable with raw SQL. A drag-and-drop builder got adoption faster than 80% of use cases, at the cost of less expressive queries. After 6 months of adoption, demand for SQL grew, so a &ldquo;SQL mode&rdquo; toggle was added.</p>
          </li>
          <li className="p-4 bg-panel rounded">
            <h4 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">No Query Approvals, Trust CSMs</h4>
            <p className="font-body-sm text-body-sm text-ink-2">Gave CSMs ownership of audience quality. Risk: a bad segment definition means a bad email campaign. Mitigated with a &ldquo;Preview&rdquo; step showing sample customers before deploy.</p>
          </li>
          <li className="p-4 bg-panel rounded">
            <h4 className="font-headline-sm text-headline-sm text-ink font-semibold mb-2">Point-in-Time Snapshots, Not Real-Time</h4>
            <p className="font-body-sm text-body-sm text-ink-2">Segments computed once daily at midnight — predictable cost and performance, up to 24 hours stale. Fine for retention campaigns that don&apos;t need fresher-than-daily data; didn&apos;t over-engineer for real-time.</p>
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock index="05" eyebrow="EXECUTION" title="Rollout & the Hard Part">
        <p className="font-body-md text-body-md text-ink-2">
          Started with the first CSM, iterated on dimensions and UI, then expanded to the full team once query builder patterns stabilized. Within 6 months, 1,000+ segments were active.
        </p>
        <div className="p-4 bg-panel rounded">
          <h3 className="font-headline-sm text-headline-sm text-ink mb-2 flex items-center gap-2">
            <span className="text-accent text-[20px]">⚠</span>
            The Hard Part: No Single Source of Truth
          </h3>
          <p className="font-body-sm text-body-sm text-ink-2">
            A segment like &ldquo;high-value recent customers with abandoned carts&rdquo; required stitching data from three independent stores simultaneously: MySQL (order totals, campaign exclusions), ClickHouse (behavior events, recency windows, UTM tracking), and MongoDB (active shopping carts). No query layer bridges these three — the segment builder had to enforce consistency across federated filters rather than rely on a single normalized schema. Matching storage to question sometimes means accepting complexity at the integration layer when the question spans multiple systems.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock index="06" eyebrow="RESULTS & RETROSPECTIVE" title="Impact" topPadding>
        <p className="font-body-md text-body-md text-ink-2">
          Segment request → engineering ticket → 3-5 days became CSM query → self-service UI → minutes. Customer Success handled routine segment creation without engineering intervention, and data literacy grew across the CSM team.
        </p>
        <p className="font-body-md text-body-md text-ink-2 pt-2">
          <strong>What I&apos;d change today:</strong> BigQuery&apos;s scan-based billing drove reporting cost concerns — I would have moved to ClickHouse earlier, or built segmentation there directly. I&apos;d also build lineage tracking from day one, since dependencies between segments and queries grew complex fast.
        </p>
      </SectionBlock>

      <div className="mt-4 pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CTAButton href="/case-studies/" label="ALL CASE STUDIES" variant="panel" size="sm" icon="☰" />
        <CTAButton href="/case-studies/recommendations/" label="NEXT: RECOMMENDATION BLOCKS" variant="solid" size="sm" arrow="right" />
      </div>
    </article>
  );
}
