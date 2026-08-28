# Portfolio site — build brief for Claude Code

A working, verified implementation already exists (`index.html`, sent earlier in this conversation) — single file, no build step, no dependencies, tested and ready to deploy as-is. Treat this brief as the source of truth for content and behavior if you want Claude Code to rebuild it in a different stack, extend it, or verify it did the job correctly. If you just want to ship what exists, skip straight to **Deployment** at the bottom.

Everything below reflects the current, corrected state of the content — including three rounds of fact-checking against your own answers. Do not let Claude Code invent, embellish, or "improve" any technical claim. Every sentence here was arrived at deliberately; if something reads as understated, that was the point.

---

## 1. What this site is for

A portfolio for a 13-year backend engineer targeting Staff / Principal / Founding Engineer / Backend Architect roles at Series A–B startups. Not a project gallery — a small set of deep engineering case studies that read as platform ownership, aimed at two audiences at once:

1. **Engineers and hiring managers**, who scan for problem-solving evidence and want to see what was rejected and why, not just what shipped.
2. **Non-technical recruiters and HR screeners**, who spend under three minutes, don't read expanded technical detail, and decide whether to forward the candidate based on the collapsed view alone.

The design consequence: every title, subtitle, and metric visible **before** a reader clicks anything must be readable with zero technical background and still be accurate to an engineer reading closely. Jargon is allowed only inside the expanded case study body.

---

## 2. Design system

**Palette** — light-first, full dark-mode parity via `prefers-color-scheme`, with `[data-theme]` override support for an explicit toggle (none is currently built, but tokens support one):

```css
--bg:        #FCFCFD   /* dark: #0F1217 */
--panel:     #F3F4F7   /* dark: #161A21 */
--panel-2:   #EAECF1   /* dark: #1C212A */
--ink:       #15171C   /* dark: #E7E9ED */
--ink-2:     #555B6A   /* dark: #9AA1AF */
--ink-3:     #7C8393   /* dark: #79808E */
--rule:      #E1E4EA   /* dark: #252A33 */
--rule-2:    #CBD0DA   /* dark: #333A45 */
--accent:      #0A6A6A /* dark: #5BC4B8 */   -- teal, restrained, used for links/active states/metric chips only
--accent-ink:  #075858 /* dark: #7FD4CA */
--accent-wash: #E4F1F0 /* dark: #122A29 */
--flag:      #8A4B08   /* dark: #D9A05B */   -- amber, TODO/placeholder markers only, never decorative
--flag-wash: #FBEEE0   /* dark: #2A2015 */
```

**Type** — IBM Plex Sans (body, headings) + IBM Plex Mono (labels, metadata, code, eyebrows), loaded from Google Fonts with system fallback stacks. No display/serif face — this is a technical document, not an editorial page. Body copy measure capped at 68ch.

**Layout** — single column, max-width 860px, generous section padding (52px between sections), no sidebar, no hero image. Structural rhythm carries the page, not decoration.

**Motion** — deliberately minimal. A 150ms fade on the lens note only. No page-load animation, no scroll-triggered reveals, no animated section transitions. This was a considered decision, not an oversight: the target audience penalizes flashy portfolio gimmicks, and the content itself argues for restraint (case study 1 is literally about deleting unnecessary complexity). `prefers-reduced-motion: reduce` disables all transitions/animations globally.

**Case study disclosure** — native `<details>`/`<summary>`, zero JavaScript required for the core interaction. Works with JS disabled, keyboard-accessible for free, content inside closed `<details>` is still findable via in-page browser search in Chromium browsers.

---

## 3. Page structure (in order)

1. **Masthead** — name, one-line positioning tagline, a "also searched as" role-equivalents line (for ATS/recruiter keyword matching), a compact facts strip (years, location, stack), four links (Résumé, Email, LinkedIn, GitHub).
2. **Thesis** — one sentence stating the platform-ownership arc, bordered top/bottom, sits between masthead and case studies.
3. **Lens selector** — five buttons (All / Data-Platform / Backend-Architecture / Founding-Engineer / E-commerce-Infra) that reorder case study emphasis and highlight matching skills. See §5.
4. **Selected work** — three case studies as collapsible `<details>` blocks. See §4.
5. **Also shipped** — three short entries, prose not cards (microservice fleet, MySQL optimization at Scientific Games, email tooling at Tenlegs).
6. **Activity** — GitHub contribution chart + live "checked just now" line. See §6.
7. **Independent products** — compact card grid, currently three verified entries. See §7.
8. **Skills** — three columns (Deep / Working knowledge / Currently learning), tagged per-lens for the highlight behavior.
9. **Background** — narrative paragraph + role timeline.
10. **Contact** — plain mailto link, no form.

---

## 4. Case studies — full verified copy

Three case studies, same six-heading structure every time: **Context → Problem → Constraints → Approach → Tradeoffs → Result**. This structure is deliberate and should not be collapsed or reordered — the Tradeoffs section (stating what was rejected and why) is the single highest-value section on the page per every source consulted on what senior technical hiring actually screens for.

### 4.1 — The data platform (`id="cs-platform"`)

**Collapsed view:**
- Title: *The data platform*
- Subtitle: *"Rebuilt how customer and order data flows through the company — from data arriving days late to under a minute, across 100+ merchant stores on five e-commerce platforms. Every other product below runs on this."*
- Metrics: `days → under a minute` · `98%+ uptime` · `100+ stores`
- Stack line: Node.js · MySQL · Debezium · Google Pub/Sub · Datastream · MongoDB · BigQuery · ClickHouse · Redis · GKE

**Context.** ConvertCart is an e-commerce personalisation platform. Everything it sells — segmentation, recommendations, on-site personalisation, triggered email — is downstream of one thing: holding a current, accurate picture of each merchant's shoppers, orders, products and catalogue. When Udhay joined, that picture was days old. He owned this platform for five years, across 100+ merchant stores on Shopify, BigCommerce, WooCommerce and Magento 1 and 2.

**Problem.** Platform sync ran as scheduled batch pulls against each merchant's commerce API, so data landed days late — worst during sale periods, when volume and API rate limiting peak together. Commerce platforms were never the whole picture either — merchants also run loyalty platforms (Zinrelo) and marketing/CRM systems (Microsoft Dynamics), none of which resemble a commerce API or each other. The deeper problem was on the consuming side: recommendations want point lookups, segmentation wants population filtering, reporting wants columnar aggregation — one store can't serve all three, so every new feature meant another bespoke path back to the data.

**Constraints.** No merchant-side changes (no schema changes, no downtime, merchants absorb zero cost). Five platforms with genuinely different webhook reliability. An open-ended, never-final set of source types. Consumers wanting structurally incompatible read shapes. A live migration with no coverage gap allowed.

**Approach — "land raw, fan out shaped."**
- *Landing:* every source lands in MySQL in its own native API schema, deliberately unnormalized. Normalizing at ingest turns platform quirks into permanent, irreversible modelling guesses made under pressure. It's also what makes an open-ended source set tractable — a Shopify product, a Zinrelo balance, and a Dynamics contact record share no structure, so any unified schema would be mostly null columns and permanent argument.
- *Tenancy:* landing started as one shared table per entity, split under real growth pressure to `<platform>_<entity>_<clientId>`. Isolation, small useful indexes, single-table resync, and offboarding-by-DROP. Starting shared and splitting later (not building thousands of tables on day one) was the right order.
- *Fan-out:* Debezium tails the landing store into Pub/Sub; three consumer services each normalize for exactly one destination — a recommendation normalizer into MongoDB, and two consumers (email events, click-tracking) into ClickHouse, both also resolving conversion attribution. Normalization happens once per destination inside a consumer that knows what it needs, not once at ingest where it must satisfy everyone.
- **Diagram required here** — see §8.
- *Reporting: BigQuery, then ClickHouse.* Reporting started on BigQuery via Datastream — the right early choice, nothing to operate. But BigQuery bills on bytes scanned, and reporting is the worst-shaped workload for that model (same dashboards, re-run on a schedule, scanning overlapping data every time). Moving to ClickHouse was cheap specifically because the Debezium work already existed: reporting became two more Pub/Sub consumers instead of a second managed replication stream. That's the clearest evidence the architecture did what it was designed to do.
  - `[TODO: what was actually tuned in ClickHouse — column selection / partitioning / ORDER BY / codecs / materialized views]`
  - `[TODO: cost reduction figure, even approximate — this is the single highest-value missing number on the entire site]`

**Tradeoffs** (five, each stated with the cost admitted, not just the benefit):
1. Landed raw instead of normalizing at ingest — costs five schemas instead of one; bought reversibility.
2. CDC out of the landing store rather than publishing at ingest — costs one more moving part; bought a stream that's provably what actually happened, not a second source of truth that can diverge.
3. Two replication mechanisms (Datastream + Debezium), narrowing to one over time as Debezium proved itself and Datastream's footprint shrank to segmentation alone. Adopting the managed option first and earning your way off it beats building the flexible thing speculatively.
4. Table-per-client multiplies operational surface (thousands of tables, migrations run across all of them) — accepted because the alternative failure mode (shared-table contention degrading one client's writes because of another's growth) is worse and far less visible.
5. Migrated store-by-store, slower, because the data layer sits under every product surface and a bad cutover breaks all of them simultaneously.

**Result.**
- Data freshness: days → under a minute.
- 98%+ pipeline uptime, 100+ stores, five platforms.
- New downstream services *and* new source types both land as "subscribe to an existing stream," not "build a pipeline."
- Conversion attribution linking orders to specific blocks/email clicks — what let the product prove its own value to merchants.
- Reporting moved off a cost curve that scaled with query volume onto one the team controlled.
- Complete migration off the legacy architecture.

**"Where I would have taken it next"** (a forward-looking closing section — see §4.4 for why this exists and how to talk about it):

Conversion attribution is the most fragile thing built here, because it's the wrong shape for the tool underneath it. Attribution is a windowed join between two streams (orders; click/email events inside a conversion window). Pub/Sub carries no state, so this runs as an hourly batch job with substantial reconciliation logic — an emulation of a primitive the platform doesn't provide.

Proposed moving the event backbone to Kafka + Kafka Streams on **managed Confluent Cloud** (deliberately not self-hosted — this was never a proposal to take on Kafka operations). Evaluated **Dataflow** first (the "why not stay on GCP" fair comparison) and rejected it: Beam's windowing/triggers/watermarks model is heavy to carry, and a misbehaving Dataflow job is hard to debug because the execution graph obscures what's happening — topics and consumer lag are legible in a way a Dataflow execution plan isn't, and with a small team, debuggability under pressure beats a better abstraction on paper.

The one piece left unresolved: Kafka Streams is JVM-only, the team was Node/TypeScript. Real open choice between **ksqlDB** (Confluent-managed, no new language enters the codebase) and a JVM service (learning curve, in tension with the maintainability argument just made against Dataflow). This is written as an **open, unresolved evaluation**, not a settled plan — that's deliberate. Presenting it as settled invites a Kafka-experienced interviewer to demonstrate it wasn't fully thought through; presenting the real unresolved piece as unresolved reads as someone who knows the boundary of their own analysis.

---

### 4.2 — Customer segmentation (`id="cs-segment"`)

**Collapsed view:**
- Title: *Customer segmentation*
- Subtitle: *"Built the system that lets a non-technical Customer Success rep build audiences like 'shoppers who'd buy again if reminded' without writing a line of code or filing an engineering ticket. The hardest thing I built, and the module every marketing campaign ran through."*
- Metrics: `4 source systems, 1 query` · dependency note: "built on the platform ↑"
- Stack line: BigQuery · Google Datastream · MySQL · materialised views

**Context.** The module everything else targets through. Representative segment: *shoppers who viewed a product that's since dropped in price, haven't ordered in 12 months, have LTV above $300, and hold loyalty points expiring this month.*

**Problem.** That question spans four systems of origin (click-tracking, commerce catalogue, transactional orders, third-party loyalty balance) across three storage engines. Nothing joins — different query languages, performance characteristics, owners, cadences. And the person asking the question is a CSM who doesn't write SQL.

**Constraints.** Authored by non-engineers in a UI (arbitrary predicate combinations, not a fixed report menu). Open-ended source set. No client-side schema changes. Read-heavy and repeated (segments run on a schedule, reused across campaigns).

**Approach.**
- *One queryable surface:* everything ported into BigQuery — click-tracking already there, MySQL sync via Google Datastream, third-party sources the same way. This was the **first** replication path off the landing store, predating the Debezium serving path in §4.1. Rejected federating at evaluation time (querying each system live and joining results) because it inherits the worst performance characteristics of the slowest participant and makes each new source a change to the query engine.
- *Materialised views as the modelling layer:* replicated tables arrive in source-native shape; materialised views (some pre-applying joins) turn that into entities a segment can be expressed against. This is where source-native landing finally gets normalized — at the analytics layer, once, where the decision is reversible (unlike at ingest).
- *Segment builder + daily precomputation:* CSMs compose predicates in a UI, never see a query. Each segment materializes on a 24-hour cycle rather than on demand.

**Tradeoffs:**
1. Consolidated (moved data) rather than federated (moved computation) — costs a second full copy and continuous replication; buys one query language and genuinely possible joins.
2. Normalized at the analytics layer, not at ingest — deliberately the **mirror image** of the platform's ingest decision (§4.1). Same modelling work, moved to where mistakes are cheap to fix.
3. Precomputed daily, not live — correct for campaign-cadence workloads; also why segmentation and the recommendation engine deliberately use different computation models for different questions ("who to contact this week" vs "what to show this shopper right now").
4. BigQuery's scan-based billing was an accepted risk on a read-heavy, repeatedly-evaluated workload — the same cost shape that later drove reporting to ClickHouse in §4.1.

**Result.** CSMs compose multi-source segments with zero engineering involvement per segment and zero merchant-side schema changes. A new source type is a new table/view, not an engine change.
- `[TODO: why this was described as "the hardest thing I built" — what actually fought back. Identity resolution? BigQuery cost? Join complexity in the views? This is the single biggest missing piece of narrative on the whole site — right now the case study reads as clean and well-executed, not hard-won.]`
- `[TODO: identity resolution mechanism across click-tracking, commerce sync, and loyalty data — how the same shopper gets matched across sources keyed differently]`
- `[TODO, lower priority: evaluation latency (typical/p99), largest store handled, number of live segments]`

---

### 4.3 — Recommendation blocks (`id="cs-blocks"`)

> **Naming note:** the original internal product names for this feature were removed from all public-facing copy on legal/confidentiality grounds — see §9. Referred to generically as "recommendation blocks" throughout. Do not reintroduce the internal names without explicit confirmation they're safe to publish.

**Collapsed view:**
- Title: *Recommendation blocks*
- Subtitle: *"Built the company's product recommendation feature from nothing, designed so store owners could trust it enough to turn it on. Most clients who tried it ended up on the fully automated version."*
- Metrics: `80%+ adoption, Smart tier` · `5 regions` · dependency note: "built on the platform ↑"
- Stack line: Node.js · Redis · MongoDB Atlas (multi-region) · ClickHouse · Pub/Sub

**Context.** ConvertCart sold personalisation but had no first-party recommendation product. Initiated it, built the first version, later rebuilt and expanded it into the three-tier system below.

**Problem.** The tempting build is one behavioural engine: collect signals, rank, render. That doesn't get adopted — merchandising is the part of a store owner's job they're least willing to hand to a black box, and blocks were configured by CSMs on the client's behalf, so the person deploying one had to be able to explain exactly what it would show and why. The real problem wasn't ranking quality — it was building something a non-technical CSM could confidently deploy.

**Constraints.** Storefront latency budget in the tens of milliseconds (renders inside page load; slow is worse than absent). Configured by CSMs, not engineers — every capability had to be UI-expressible and client-explainable. Price/stock accuracy (a wrong recommendation damages trust worse than an empty block). Cold start on both sides (new stores, new products). One system across five platforms and 100+ stores with very different traffic profiles.

**Approach — a ladder of control, not one engine:**
- **Manual:** hand-picked products, zero intelligence, deployable day one with no data history. Deliberately built first despite having no engineering interest, because it got the product in front of clients while the behavioural tier matured.
- **Automated:** rule-based filters over catalogue attributes, optionally layered with simple aggregates. Precalculated daily, refreshed as attributes change. Predictable enough a CSM can describe its behavior in one sentence.
- **Smart:** behavioural (co-purchase/co-view, category affinity from purchase history). Computed live against the current session.
- *The event path that makes Smart possible:* every on-site event lands in Redis first, staying there through the session, flushing to persistent storage on session close or 30 minutes of inactivity. Smart blocks are genuinely live (not nominally real-time) because the signal they need most — what this shopper did in the last 90 seconds — is already in memory on the hot path, never behind a database read.
- *Geographic replication, because the latency budget is physics, not compute:* a shopper in Singapore reading a database in us-east-1 spends ~200ms in round trips before any work begins — several times the entire budget. No query tuning fixes that; only distance does. MongoDB read model replicated across five Atlas regions — primary us-east-1, secondaries Southeast Asia, Europe, South America, Australia — covering every populated continent. The budget is met by placing the *input* correctly, not caching an *answer*.

**Tradeoffs:**
1. Split live vs. precomputed **by tier**, not uniformly — matched each tier's computation model to how fast its inputs actually move.
2. Read replicas trade freshness for distance, which cuts against the stated stock-accuracy constraint — accepted because the failure modes are asymmetric: a few seconds of lag affecting a few items in a narrow window beats permanently serving every non-US shopper a slow block.
3. Redis-first buys latency, costs durability (an in-flight session is lost on a Redis failure) — acceptable for click-tracking, would not have made the same call for order data.
4. Built the least-interesting tier (Manual) first, deliberately, in trust order rather than sophistication order — which is why Smart eventually had an installed base to graduate into.

**Result.** 80%+ of clients adopted the Smart tier — the highest-trust tier, reached by clients who started on the lowest. Recommendations became first-party rather than bought. Expanded into a multi-channel personalisation feed. Served from five regions. Conversion attribution ties orders back to specific blocks (measured, not asserted, value).
- `[TODO: cold-start behavior for Smart blocks — a brand-new store or a shopper's first page view with no session yet. This is the most obvious hole in a live-computed system and the first thing a sharp interviewer will probe. Needs a real answer: fallback to Automated? Show trending? Something else?]`
- `[TODO: how out-of-stock/repriced items get filtered on the Smart tier specifically, given replication lag — Automated handles this via precalculation, Smart's mechanism isn't stated]`
- `[TODO: p99 serving latency — still the only latency number missing across the whole site]`

---

### 4.4 — Why the "where I would have taken it next" section exists

This is not filler. Every source on what separates senior/staff candidates in technical screening converges on one thing: hiring managers want evidence of **how you think**, not just what you shipped. A case study that stops at "and then I left" understates a 13-year candidate. The Kafka proposal in §4.1 demonstrates: recognizing when a problem needs a primitive (stateful windowed joins) that the current platform doesn't provide; evaluating the "stay on GCP" alternative honestly instead of skipping straight to the preferred answer; and being willing to say a piece of the plan was genuinely unresolved rather than papering over it.

**If Claude Code (or anyone) is tempted to "clean up" this section by making the Kafka plan sound fully resolved and decided — don't.** The unresolved-runtime-question framing is deliberate and was arrived at specifically to preempt a predictable, sharp interview challenge. See the full reasoning trail if you want it — it's preserved in `portfolio-case-studies.md`.

---

## 5. Lens system — exact copy and behavior

Five buttons under the thesis, reordering which case study leads and highlighting matching skills. **This is not content-hiding** — every lens shows all three case studies and the full skills list; it only changes *order* and adds a *highlight*. With JavaScript disabled, the page renders in default order and is fully complete — the lens is pure progressive enhancement, never load-bearing.

The URL hash reflects the active lens (`#data`, `#arch`, `#founding`, `#ecom`) so a specific lens can be linked directly per job application — e.g. `yoursite.com/#founding` for a Founding Engineer application.

```js
LENS = {
  data: {
    leadsWith: 'cs-platform',
    note: "Five years owning a data platform end to end — ingestion, modelling, serving, and the cost of running it. Two CDC paths, a warehouse consolidation, a multi-tenant landing store, and a reporting migration driven by the shape of a billing model rather than a broken system."
  },
  arch: {
    leadsWith: 'cs-platform',
    note: "Every case study below states what I rejected and why. The through-line: refuse to normalise at the ingestion boundary where the decision is irreversible, then normalise in the warehouse where a wrong model is a redefinition rather than a migration. Same judgment applied at two layers."
  },
  founding: {
    leadsWith: 'cs-blocks',
    note: "Zero to one twice over — a recommendation product built from scratch inside a startup and taken to 80%+ adoption on its hardest tier, and six products designed, built and shipped alone outside one. Comfortable owning a surface end to end with nobody behind me."
  },
  ecom: {
    leadsWith: 'cs-platform',
    note: "Shopify, BigCommerce, WooCommerce, and Magento 1 and 2 — in production simultaneously for 100+ merchants across five years. Webhook reliability, catalogue sync, storefront latency budgets, conversion attribution, and the constraint that a merchant will absorb no cost for your architecture."
  }
}
```

Skills carry `data-l` tags (space-separated lens keys) and get a highlight treatment (color + dot marker) when their tag matches the active lens. Case studies get a `most relevant` chip next to their metrics when they're the lens's lead.

**On animation for this interaction — explicitly rejected, don't add it back.** An earlier direction considered an animated page "transform" per lens (à la a landing-page reveal). Rejected for three reasons that should survive any rebuild: (1) register mismatch — the audience is evaluating engineering judgment, and an animated reflow reads as marketing-site grammar in the wrong context; (2) it contradicts the page's own content, which argues for deleting unnecessary complexity — spending visible effort on a transition that adds zero information undercuts that; (3) animated portfolio reveals are one of the most common tells of a templated or AI-generated site. The lens change should be **instant** — reorder + a 150ms fade on the note text, nothing more.

---

## 6. Activity section — GitHub widget

```html
<img id="ghChart" src="https://ghchart.rshah.org/0A6A6A/udhayakumaran" ...>
<script>
  // client-side fetch to https://api.github.com/users/udhayakumaran/events/public
  // (unauthenticated, public data, no key needed)
  // shows: "N public commits in recent activity · last Xh ago · checked just now"
  // fails silently to nothing if the fetch errors — never shows a broken state
</script>
```

Two things worth knowing if rebuilding this:
- **`ghchart.rshah.org` is an unofficial third-party service.** It's been stable for years but is not GitHub-official — if it's ever unreachable, the `<img onerror>` handler hides it and the static caption text carries the section alone. Don't replace the fallback with a broken-image icon.
- **The live fetch will not work inside a sandboxed preview environment** (Claude's own Artifact preview blocks all external network calls except Google Fonts) — this is expected, not a bug, and only matters if testing inside that specific tool. It works normally on any real hosting (Vercel, Cloudflare Pages, etc.), since the fetch runs in the visitor's own browser with no CSP restriction from the hosting side.
- The API only surfaces the last ~90 days of **public** events — most commit activity is expected to be in private company repos and won't show here. The caption is worded to make that expected and unremarkable, not something the visitor has to wonder about.

GitHub username: `udhayakumaran`. Public repos exist (13 total, including three ConvertCart platform-plugin repos and the affairsmap.com pipeline) — **per explicit instruction, do not name or spotlight the ConvertCart-namespaced repos individually on the site.** Link the profile generally; let a visitor who clicks through find them on their own.

---

## 7. Independent products — verified, do not add back what was removed

Three entries only. This list went through a correction pass — three previously-listed products (BharatLedger, ReplyCut, Status Station) were removed because they were concept-only or never launched, and listing an unlaunched product as if it shipped is exactly the kind of overstatement a Founding Engineer interview probes first.

| Product | Description | Status |
|---|---|---|
| affairsmap.com | Current-affairs study platform for UPSC, SSC, Banking, RBI Grade B and Defence exam aspirants | In development |
| Fruggy | Grocery shopping planner for Indian FMCG shoppers, Flutter, dataset of 1,500+ FMCG items | 1,000+ downloads |
| HitReplAI | AI-powered social media reply generator that mimics the user's writing style | Pre-launch |

Do not re-add BharatLedger (concept only, never built), ReplyCut ("fully built" but never launched/materialized), or Status Station (pre-launch, was removed by explicit request) unless the user says otherwise.

---

## 8. Diagram spec (case study 1)

One inline SVG, no external library, the only diagram on the page. Shows: four source types (Commerce ×5, Click-tracking, Loyalty/Zinrelo, CRM/Dynamics) → MySQL landing (raw, source-native, per-client-per-entity) → splits into two labelled paths — **serving path** (Debezium → Pub/Sub → three consumers → MongoDB 5-region / ClickHouse) and **analytical path** (Datastream → BigQuery materialised views → segmentation, CSM-authored). The exact SVG markup is in the reference `index.html` (search for `class="figure"`) — reuse it directly rather than redrawing; it's already tuned for both light and dark themes via CSS custom properties (`--rule-2`, `--accent`, `--accent-wash`, etc. — never hardcode a color inside the SVG).

Wrapped in a horizontally-scrolling container (`overflow-x:auto`) since the diagram has a `min-width` larger than mobile viewports — never let it force the page body to scroll sideways.

---

## 9. Legal / naming guardrails

- **No internal ConvertCart product names on the public site.** The recommendation feature's actual internal name(s) were removed and replaced with the generic "recommendation blocks" throughout, on the reasoning that a personal job-search site is not the place to guess at what counts as confidential product branding. If there's ever a question about whether some other internal term is safe to use, default to generic/descriptive language rather than guessing yes.
- **No fabricated numbers.** Every `[TODO: ...]` marker in this document and in the live HTML (`<span class="todo">`) represents a real gap — a number or explanation that was deliberately left unfilled because it wasn't verified, not a placeholder to be creatively filled in by Claude Code. If Claude Code is asked to "finish" this site, it should surface these TODOs to the user for real answers, not invent plausible-sounding figures. An overstated portfolio is a liability in a technical screen, not an asset.
- **Confidentiality baseline already applied:** no ConvertCart revenue figures, no customer names, no exact traffic/volume numbers, no internal schemas. Relative improvements ("days to under a minute," "80%+ adoption") and order-of-magnitude figures ("100+ stores," "tens of thousands of events/day") are the ceiling of specificity — don't push past that even if a more precise number surfaces later without checking whether it's safe to publish.

---

## 10. Outstanding TODOs — consolidated punch list

Everything below is marked `[TODO]` inline in the case study copy above and in the live HTML (search for `class="todo"`). Nothing here blocks shipping the site — ship with the TODOs visible in amber, or quietly omit those specific sentences until answered. Do not fill these with invented numbers.

**High value, worth chasing first:**
1. ClickHouse cost reduction figure + what was actually tuned (case study 1) — the single strongest missing number on the site.
2. Why segmentation was "the hardest thing I built" — what actually fought back (case study 2) — the single strongest missing narrative on the site.
3. Cold-start behavior for Smart recommendation blocks (case study 3) — the most predictable interview question currently unanswered.

**Worth adding if easy to retrieve:**
4. Identity resolution mechanism across click-tracking / commerce sync / loyalty data (case study 2).
5. Out-of-stock filtering mechanism on the Smart tier specifically, given replication lag (case study 3).
6. p99 serving latency, any figure (case study 3) — the only latency number missing site-wide.
7. Role/team-size clarity on the platform rebuild — "I built it" vs. "I led N engineers" (case study 1) — currently ambiguous, and ambiguity here reads as the weaker interpretation by default.
8. How far the Kafka/Confluent proposal actually got — document, design review, prototype, approved-but-unscheduled (case study 1, closing section).

---

## 11. Technical requirements (non-negotiable if rebuilding)

- **Self-contained, no build step required to view.** A single `index.html` that opens correctly with no server is the baseline; a framework build is fine if the *output* still meets every other requirement here.
- **Full light/dark theme parity** via `prefers-color-scheme`, with every color sourced from a CSS custom property — never a color declared only inside a media query or literal hex outside the token set.
- **Works with JavaScript fully disabled.** Case study disclosure, navigation, and all core content must render and be usable. Only the lens reordering and the live GitHub line require JS, and both degrade to a sensible default (unordered/default-order content, static caption) without it.
- **Mobile-first responsive**, single column throughout, wide content (the diagram) scrolls in its own container rather than breaking page layout.
- **Accessible:** visible focus states on every interactive element, `aria-pressed` on lens buttons, `role="img"` + `aria-label` on the SVG diagram, semantic heading hierarchy.
- **Fast.** No render-blocking scripts beyond the Google Fonts stylesheet link, no layout-shifting late-loading content. Target sub-1s load and a clean Lighthouse score — the site argues its author cares about performance; a slow site undercuts that argument before anyone reads a word.
- **Custom domain required before sending this to anyone.** Never ship an application with a `vercel.app` or similar platform subdomain in the link. Set `/resume` as a permanent redirect to the current résumé PDF so the link never goes stale even if the file is replaced later.

---

## 12. Deployment

1. Point a custom domain (e.g. `udhayakumar.dev`) at the hosting provider.
2. Deploy `index.html` as-is to Vercel or Cloudflare Pages — no build command needed, output directory is the file's own directory.
3. Configure `/resume` as a redirect (Vercel: `vercel.json` redirects array; Cloudflare Pages: `_redirects` file) pointing at the hosted résumé PDF.
4. Optional: add lightweight privacy-respecting analytics (Plausible or similar) to see when a company opens the link after an application goes out.
5. Confirm the live GitHub widget (chart + "checked just now" line) actually renders on the deployed domain — it will not render inside Claude's own preview sandbox, so this is the first real check to make once it's live.

---

*This brief was generated from a fully verified working implementation after multiple rounds of fact-checking directly against the candidate's own answers — nothing in the case study content above is inferred or assumed. Preserve that standard: any future edit that adds a technical claim should come from the candidate, not be generated to sound plausible.*
