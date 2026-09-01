# Portfolio Audit

## Executive Verdict

Current site has real hiring evidence, but conversion is weak. It presents a credible backend/data engineer as a broad collection of claims, pages, projects, resumes, and technical details instead of one immediately legible hiring proposition. Strongest evidence: ConvertCart platform ownership, production incident response, multi-source data systems, and team leadership. Biggest risks: conflicting metrics across portfolio and resumes, unclear primary positioning, excessive homepage depth, weak proof context, and a mobile overflow bug on `/case-studies/hard-problems/`.

No files were modified during the audit.

Local render checked: all 10 Astro routes returned HTTP 200 at 375, 768, 1024, and 1440px. No console errors. `/case-studies/hard-problems/` overflows horizontally at 375px: rendered width 552px.

## Audit Health Score

| Dimension | Score | Finding |
|---|---:|---|
| Accessibility | 2/4 | Good native links/details/focus styles; weak landmarks, heading structure, skip navigation, semantic grouping |
| Performance | 2/4 | Small static output, but third-party scripts/fonts/GitHub widget and unoptimized images |
| Responsive design | 2/4 | Most pages adapt; hard-problems page breaks at 375px |
| Theming | 2/4 | Token system exists; heavy inline styling and non-OKLCH hard-coded values |
| Anti-patterns | 2/4 | Repeated card treatment, excessive mono styling, metric-heavy presentation |
| **Total** | **10/20** | **Acceptable; significant hiring-conversion work needed** |

## 15-Second Recruiter Test

### Understands

- Backend engineer.
- 13+ years experience.
- India-based, remote worldwide.
- Worked on data platforms, recommendations, segmentation.
- 200+ merchants and five commerce platforms.
- Resume and contact links exist.

### Remains unclear

- Is this primarily a Senior, Staff, Principal, Platform, Data Infrastructure, or Founding Engineer candidate?
- What level of ownership was personal versus team-owned?
- What kind of company should contact him?
- What is strongest: backend systems, data infrastructure, e-commerce, or startup execution?
- Which resume should a recruiter use?
- What is the single strongest interview-worthy accomplishment?

Current hero says:

> “Backend Engineer”

Accurate but under-positioned. It does not quickly classify the candidate for Staff+, Platform, Data Infrastructure, or Founding Engineer searches.

## 60-Second Hiring Manager Test

Likely continues, because evidence is stronger than average portfolio material.

Reasons:

- Clear production systems.
- Concrete architecture choices.
- Incident recovery.
- Migration and rollback thinking.
- Team growth.
- Real operating constraints.

Reasons for hesitation:

- Too many claims without consistent numbers.
- Case studies state architecture more clearly than personal decision-making.
- “Staff” evidence is implied more than demonstrated.
- Some metrics lack denominator, timeframe, measurement method, or business consequence.
- Homepage hides substantial proof under multiple `<details>` blocks.
- Resume content contradicts visible site content.

## Positioning

Recommended umbrella:

> Backend & Data Infrastructure Engineer

Alternative:

> Backend / Platform Engineer for Data-Heavy Products

Primary hiring lanes:

- Senior Backend Engineer
- Staff Backend Engineer
- Platform Engineer
- Data Infrastructure Engineer
- Founding Engineer
- Technical Lead

Secondary lanes:

- Principal Engineer
- Backend Architect
- E-commerce Infrastructure Engineer
- Engineering Lead at a small startup

Do not lead with “Staff Engineer” alone. Repository evidence supports senior/staff-level ownership, but title equivalence varies heavily by company. Let evidence establish level.

# Biggest Hiring Problems

| Rank | Problem | Impact |
|---:|---|---|
| 1 | No decisive umbrella positioning | 🔴 Interview killer — recruiters cannot classify candidate quickly. Content + UX |
| 2 | Portfolio/resume metric contradictions | 🔴 Interview killer — creates credibility doubt. Content |
| 3 | Homepage is too long and proof is scattered | 🟠 High impact — recruiters lose path before resume/contact. UX + architecture |
| 4 | Multiple resumes create decision friction | 🟠 High impact — recruiter must choose before understanding fit. UX + content |
| 5 | Staff-level evidence is implied, not explicitly framed | 🟠 High impact — hiring managers see implementation, less organizational leverage. Content |
| 6 | Metrics lack context and denominators | 🟠 High impact — “80% adoption” and “200ms p99” are not independently meaningful. Content |
| 7 | Case studies omit important hard parts | 🟠 High impact — segmentation lacks identity-resolution narrative. Content |
| 8 | `/case-studies/hard-problems/` breaks mobile layout | 🟠 High impact — horizontal scroll damages trust. Code + responsive design |
| 9 | “Zero engineering involvement” and “zero support burden” are absolute claims | 🟠 High impact — easy interviewer challenge. Content |
| 10 | Technical jargon appears before recruiter-friendly context | 🟡 Medium impact — Debezium, CDC, Pub/Sub, ClickHouse appear early. Content + UX |
| 11 | GitHub activity widget is irrelevant and externally dependent | 🟡 Medium impact — activity is weaker proof than selected repositories. UX + performance |
| 12 | Homepage hides major evidence under “Supporting evidence” | 🟡 Medium impact — useful proof is invisible to default scanners. UX |
| 13 | Metadata is technically present but not role-optimized | 🟡 Medium impact — weak search classification and sharing quality. SEO + content |
| 14 | Sparse internal linking between related case studies | 🟡 Medium impact — related stories do not form a clear funnel. UX + architecture |
| 15 | Dead/duplicate implementation artifacts remain | 🟡 Medium impact — root `index.html`, tracked `dist/`, duplicate assets, unused components. Architecture |

# Strongest Assets

1. ConvertCart data-platform ownership.
2. 200+ merchants across five commerce platforms.
3. Days-to-sub-minute freshness improvement.
4. Debezium 50M-row production incident.
5. Clear migration, rollback, monitoring, and validation details.
6. Customer segmentation as a real self-service product.
7. Recommendation system built from zero with adoption evidence.
8. Team growth from 4 to 7 engineers.
9. Real testimonials with names and roles.
10. India-based, remote-worldwide availability stated clearly.

# Content Audit

## Homepage

Current implementation:

- Hero.
- Three production proof cards.
- Three selected case-study cards.
- Incident callout.
- Collapsed “More production evidence.”
- Independent products.
- Collapsed technical inventory.
- Remote-working section.
- Final CTA.

Problems:

- Strong evidence exists, but no explicit “who should hire me” statement.
- Hero headline is broad and generic.
- “Production proof” cards repeat information from selected work.
- Three proof cards plus three case-study cards creates duplication.
- “More production evidence” hides microservices, MySQL, email infrastructure, activity, and engineering notes.
- “Supporting projects and technical inventory” hides stack, principles, skills, and background.
- Recruiter may never see role history or skills.
- `200ms p99` appears on recommendations without enough context.
- “Zero engineering involvement” appears as absolute language.
- Independent products receive substantial visual prominence despite weaker hiring relevance.
- No visible resume filename, version, date, or download affordance.

Recommended change:

- Lead with umbrella role and target roles.
- Replace duplicate proof section with one compact evidence strip.
- Put platform case study first.
- Put resume and contact in a persistent hiring CTA.
- Keep independent work below professional proof.
- Make staff-level behaviors explicit: scope, decisions, team leverage, operating ownership.

Types: content, UX, architecture.

## About

Strengths:

- Best narrative explanation of career arc.
- Team growth and mentoring included.
- Engineering principles are specific.
- Testimonials improve credibility.

Problems:

- “13 years” versus current timeline needs date validation.
- Says “5 years production ownership” while elsewhere says “nearly six years at ConvertCart.”
- “Staff backend and platform engineer” in metadata is stronger than homepage positioning.
- Testimonials are mostly broad praise: “exceptional,” “strong technical depth,” “asset to any organization.”
- Only one testimonial clearly supports leadership; none provide measurable outcomes.
- “Designed for reversibility” appears repeatedly across the site.
- No explicit resume CTA near career summary.
- About page is long relative to recruiter value.

Types: content + UX.

## Case-study index

Strengths:

- Four case studies are discoverable.
- Titles and summaries are understandable.
- Data platform appears first.

Problems:

- “Hard Problems” is a different content type from case studies. Label as incident notes or production incidents.
- No role-fit labels such as “Platform,” “Data Infrastructure,” or “Founding Engineer.”
- No explicit recommendation about which case study to read first.
- No next step to resume/contact.

Types: UX + information architecture.

## Engineering Notes

Strengths:

- One useful production incident is published.
- Topic selection is relevant to Staff+/platform hiring.

Problems:

- Six “Coming soon” entries create perceived incompleteness.
- Unpublished placeholders are not proof.
- Published note overlaps heavily with the data-platform case study.
- No author/date/reading-time metadata.
- No related-case-study links.
- No article structured data.

Types: content + SEO + architecture.

## Resume page

Strengths:

- General resume is visually prioritized.
- Specialized resumes map to meaningful role lenses.
- All PDF files exist and render as one-page documents.

Problems:

- Five choices create friction for cold recruiters.
- Website promotes “13 years,” while PDFs use different summaries and numbers.
- PDFs state `100+ stores`; site states `200+ merchants`.
- PDFs state `50+ microservices`; site states `57+ microservices`.
- PDFs state “led teams of 6”; site states “team from 4 to 7.”
- PDFs include claims absent from the site, including “freelanced on Series A startup architecture consulting.”
- PDFs use “Senior Backend Engineer | Staff / Principal / Founding Engineer” simultaneously. This reads as title stacking.
- Links do not say “PDF,” file size, last updated date, or download.
- No browser preview/download distinction.
- No resume tracking events in analytics.

Recommended strategy:

- Expose one primary resume: `general.pdf`.
- Keep targeted resumes behind “For a specific role” secondary links.
- Align all claims before exposing multiple versions.
- Add explicit role-routing copy, not more choices.

Types: content + UX.

# Case Study Audit

## The Data Platform

Strongest case study on site.

Answers well:

- What was broken?
- Why it mattered.
- Constraints.
- Personal ownership.
- Architecture decision.
- Migration strategy.
- Rollback strategy.
- Incident response.
- Measurable freshness result.

Weaknesses:

- 200+ merchant figure lacks timeframe and source.
- “Zero rollbacks” needs distinction between no rollback and zero failed cutovers.
- “100% checksums” needs explanation of what was checked.
- “Every downstream product runs on this” is broad.
- ClickHouse section lacks actual tuning details and cost reduction.
- Conversion attribution is described, but outcome is not quantified.
- Five years versus nearly six years remains inconsistent.
- Incident story is duplicated on engineering-notes page.
- Opening proof does not clearly state team size.

Claim classifications:

| Claim | Classification |
|---|---|
| 200+ merchants, five platforms | 🟡 Defensible; needs exact timeframe/source |
| Days to sub-minute freshness | 🟡 Defensible; scope must say webhook freshness, not all integrations |
| 3-month migration | 🟢 Strong if project records support it |
| Zero rollbacks | 🟡 Needs definition |
| 50M-row snapshot | 🟡 Needs exact table/schema context |
| 60% CPU | 🟡 Needs measurement source and duration |
| 100% checksums | 🟡 Strong only for checked fields/tables |
| Complete migration off legacy architecture | 🟡 Needs completion date and scope |

Recommendation: keep prominent.

## Customer Segmentation

Strengths:

- Clear problem and four source systems.
- BigQuery consolidation, materialized views, query builder, daily precomputation, rollout, and impact are explained.
- Architecture choices and tradeoffs are visible.

Weaknesses:

- Does not explain identity resolution across source systems.
- Does not explain what made it “the hardest thing.”
- “1,000+ active segments” lacks denominator, date, and definition of active.
- “Zero engineering involvement” is too absolute.
- “Zero support burden post-launch” is high-risk language.
- Evaluation latency is absent.
- No largest tenant/store scale.
- No failure or correctness story.
- Reads cleanly executed, not hard-won.

Claim classifications:

| Claim | Classification |
|---|---|
| Four source systems | 🟢 Strong if systems are named |
| 3–5 days to minutes | 🟡 Needs measurement definition |
| 1,000+ segments | 🟡 Needs timeframe and active definition |
| Zero engineering involvement | 🟠 Weakly supported absolute |
| Zero support burden | 🟠 Weakly supported |
| Daily precomputation | 🟢 Clear technical fact |

Recommendation: keep prominent after adding identity resolution, failure modes, and ownership detail.

## Recommendation Blocks

Strengths:

- Strong product-initiation story.
- Three-tier trust ladder.
- Multi-region serving.
- Adoption measurement.
- Clear latency/freshness tradeoffs.
- Good founding/product ownership evidence.

Weaknesses:

- “80%+ adoption” lacks trial population and timeframe.
- “200ms p99” needs exact request scope.
- “Five regions” names different regions in different places.
- “Most merchants” is less precise than the 80% claim.
- “Merchants generating revenue” is not quantified.
- “Sales used attribution as primary ROI proof” lacks evidence.
- “Zero downtime” lacks deployment or monitoring context.
- Algorithm sophistication is not clearly explained.
- Product impact is stronger than business impact.

Claim classifications:

| Claim | Classification |
|---|---|
| Built product from zero | 🟢 Strong if ownership is accurate |
| 80%+ Smart-tier adoption | 🟡 Needs numerator, denominator, timeframe |
| 5-region serving | 🟡 Needs exact production topology |
| 200ms p99 | 🟡 Needs endpoint, geography, measurement window |
| Zero downtime | 🟠 Weakly supported |
| Revenue generated through recommendations | 🟠 Credibility risk without revenue or attribution metric |

Recommendation: keep as founding/product proof; qualify metrics.

## Hard Problems

Current implementation contains eight incidents covering query planning, migration locks, real-time product changes, MySQL views, missing indexes, ClickHouse memory, ordering bugs, and hashing.

Strengths:

- Shows failure exposure.
- Shows debugging and remediation.
- Shows repeated-pattern recognition.
- Shows mentoring during incidents.
- Shows algorithmic problem solving.

Problems:

- Eight incidents are too many for primary navigation.
- Several incidents lack candidate ownership clarity.
- “Team member” framing may create leadership concerns.
- “Wrong audience got emails” lacks blast radius and remediation detail.
- “Same customer churned twice” is a strong claim with no evidence.
- “O(n²) memory” for a database join is technically questionable as written and invites challenge.
- ₹3+ lakhs to ₹50K needs currency, timeframe, and cost basis.
- December 24, 2025 incident needs validation against employment dates.
- Summary labels incidents as “Senior” and “Staff” without explaining the rubric.
- Mobile grid causes horizontal overflow at 375px.

Recommendation: move to secondary “Production incidents” area. Keep two or three strongest incidents prominent.

# Side Project Audit

| Project | Recommendation | Reason |
|---|---|---|
| enbus | Keep prominent | Best independent proof of data ingestion, search, messy real-world data, and verified scale. |
| HitReplAI | Keep but reduce | Strong end-to-end ownership; AI reply product is less relevant than infrastructure work. |
| BriefMyDoctor | Keep but reduce | Shows product judgment and hybrid LLM architecture; medical context creates trust/safety scrutiny. |
| Fruggy | Move secondary | Useful full-stack/product proof, but grocery app and download count are weaker for Staff backend hiring. |
| affairsmap.com | Move secondary or remove until live | “Currently building” is not hiring proof. |
| GitHub contribution chart | Remove or replace | Activity volume does not establish professional capability; external dependency adds fragility. |

Major issue: projects are named but mostly not linked to live products or repositories. A recruiter cannot verify them directly.

# Resume Audit

Current strategy: one general PDF plus four specialized PDFs.

Verdict: useful for deliberate applications, unnecessary as primary recruiter UX.

Main contradictions:

- Website: 200+ merchants; PDFs: 100+ stores.
- Website: 57+ microservices; PDFs: 50+ microservices.
- Website: team grew 4 to 7; PDFs: led team of 6.
- Website: five years ownership / nearly six years at ConvertCart; PDFs vary.
- PDFs include consulting claims absent from the site.

These are 🔴 credibility problems. Reconcile before design work.

Recommended strategy:

1. Primary general resume.
2. Secondary targeted resumes only after content normalization.
3. Each PDF clearly labelled by role.
4. Add `Download PDF` and `Open in browser`.
5. Track resume clicks/downloads separately.
6. Keep portfolio, resume, and LinkedIn consistent on dates, titles, years, counts, technologies, and ownership.

# UX / Design Audit

## Hierarchy

Good:

- Restrained palette.
- Strong contrast.
- Native disclosure patterns.
- Clear professional proof.
- No gratuitous animation or visual gimmicks.

Problems:

- Homepage has too many equally important sections.
- Cards dominate despite the content being narrative.
- Repeated rounded panels flatten hierarchy.
- Metric chips overemphasize numbers before context.
- Mono font is used heavily for navigation, labels, headings, and metadata.
- Hero does not visually distinguish candidate identity from proof.
- Contact appears at bottom and in footer, but no persistent contact action.

## Navigation

Good:

- Home, Work, About, Resume.
- Current-page state exists.
- Mobile navigation wraps rather than disappearing.

Problems:

- No skip link.
- Multiple `<nav>` elements lack accessible labels.
- Engineering Notes absent from main navigation.
- Back links use `<nav>` without labels.
- Sticky header consumes significant mobile vertical space.
- Theme toggle has emoji-only presentation.
- No clear active state for engineering notes.

## CTA flow

Current path works:

`Homepage → Work → Case Study → Resume → Email`

Weak points:

- Case studies do not consistently lead to resume/contact.
- Resume page gives choices before conversion.
- About page mostly ends in email, with no resume CTA.
- Engineering notes lead back to notes/home, not hiring action.
- External LinkedIn/GitHub links open new tabs without reinforcing return path.
- No recruiter-specific CTA such as “View general resume.”

# Technical Audit

## Accessibility

Findings:

- No skip-to-content link.
- Multiple `<nav>` elements lack accessible labels.
- Homepage has one `h1` and only one `h2`; many content sections use `h3`/`h4` for visual styling.
- Some `section` elements lack headings.
- SVG diagrams have inconsistent accessible descriptions.
- Product cards are non-interactive `<div>` elements; live products should be links.
- Theme toggle label remains “Toggle dark mode” after state changes.
- Emoji theme icon may be noisy for screen readers.
- Native `<details>` is good and keyboard usable.
- Focus-visible styles exist on major controls.
- Image alt text exists for current images.

Severity: 🟠 High impact. Code + semantic HTML.

## Performance

Findings:

- Google Analytics loads on every page.
- Google Fonts adds external blocking dependency.
- GitHub chart and GitHub API add two third-party dependencies to homepage.
- Images lack explicit `width`/`height`, increasing layout-shift risk.
- Images are not lazy-loaded.
- No responsive image variants.
- Small static site otherwise has low complexity.
- No excessive hydration; Astro output is mostly static.
- No observed console errors in local browser testing.

Severity: 🟡 Medium.

## SEO / Discoverability

Present:

- Page titles.
- Descriptions.
- Canonicals.
- Robots files.
- Sitemap.
- Person JSON-LD.
- OpenGraph and Twitter card tags.

Missing or weak:

- No `og:image:width`.
- No `og:image:height`.
- No `og:image:type`.
- SVG social image support is less reliable than a tested PNG/JPEG preview.
- No `twitter:creator`.
- No `WebSite` or `ProfilePage` structured data.
- No `Article`/`TechArticle` structured data for engineering notes.
- Person `jobTitle` always says “Backend Engineer,” limiting role discovery.
- Heading hierarchy weak.
- No visible publication date or author metadata on engineering note.
- Sitemap is manually maintained and separate from Astro source.
- Duplicate root/public sitemap and robots files increase maintenance risk.

Severity: 🟡 Medium. SEO + content + architecture.

## Structured data

Current JSON-LD only describes:

- Person.
- Name.
- URL.
- Job title.
- Description.
- Country.
- LinkedIn/GitHub.

Recommended additions:

- `ProfilePage`.
- `WebSite`.
- `Article` for engineering notes.
- Verified `sameAs` URLs.
- `knowsAbout` based on defensible technologies.

Do not add inflated role claims to schema.

## Internal linking

Current:

- Homepage links to main case studies, notes, resume, LinkedIn, and GitHub.
- Case studies link back to case-study index.
- Engineering note links back to notes.
- About does not link to relevant case studies.
- Case studies do not consistently link to related cases.
- Resume does not link back to evidence.

Missing:

- Data platform → segmentation.
- Data platform → recommendations.
- Incident note → data platform.
- About → strongest case study.
- Every case study → resume/contact.
- Engineering notes → related professional work.

## External links

Verified reachable during audit:

- LinkedIn.
- GitHub.
- GitHub activity chart.
- GitHub API.
- Social image URL.

Problems:

- Products have no visible live URLs.
- GitHub activity is external and can fail silently.
- Analytics has no consent/privacy treatment.
- External links are not tracked individually.

## Build/deployment

Current:

- Astro project under `site/`.
- Vercel builds with `cd site && npm install && npm run build`.
- Output directory is `dist`.
- Node 24 is specified.
- Static assets are copied from `public`.
- Existing `dist/` is tracked.
- Root `index.html` is a separate older implementation.
- Root `assets/`, `public/assets/`, and generated `dist/assets/` duplicate images.
- `Footer.astro`, `LensSelector.astro`, `StatBar.astro`, and `StatCallout.astro` appear unused.
- `index.html` contains materially different older content and metrics.

The duplicate implementations create deployment and maintenance risk. Current Vercel configuration appears to use Astro, but future maintainers could edit the wrong source.

# Recommended Information Architecture

1. `/`
   - Identity and role positioning.
   - Three proof points.
   - Selected work.
   - Resume/contact CTA.
2. `/work`
   - Replace or alias `/case-studies`.
   - Three primary case studies.
   - Separate production incidents.
3. `/work/data-platform`
4. `/work/segmentation`
5. `/work/recommendations`
6. `/incidents`
   - Two or three strongest incidents.
7. `/about`
   - Career arc, leadership, testimonials.
8. `/resume`
   - One primary resume.
   - Secondary targeted versions.
9. `/notes`
   - Published technical writing only.
10. `/projects`
   - Independent work, clearly secondary.

# Proposed Homepage Structure

1. **Header** — name, umbrella positioning, Resume, Contact.
2. **Hero** — Backend & Data Infrastructure Engineer; 13+ years; India-based; remote worldwide; target roles.
3. **Hiring thesis** — one sentence connecting platform ownership, production systems, and small-team execution.
4. **Proof strip** — 200+ merchants/five platforms; days-to-sub-minute freshness; team/platform ownership.
5. **Selected work** — data platform, segmentation, recommendation blocks.
6. **Staff-level evidence** — architecture ownership, team leverage, incident judgment, cross-functional impact.
7. **Resume/contact CTA** — “View general resume” and “Email me.”
8. **Selected independent work** — enbus first; other projects secondary.
9. **Background** — condensed timeline.
10. **Published notes** — published technical note only.
11. **Final contact CTA**.

# What Should Be Deleted

- “Coming soon” engineering-note cards.
- GitHub contribution chart unless replaced by selected repositories.
- Duplicate production-proof cards if they repeat case-study summaries.
- Unlinked project cards.
- Unresolved absolute claims: “zero support burden,” “zero engineering involvement,” “merchants generating revenue,” “zero downtime.”
- “Staff” labels without evidence framing.
- Duplicate root implementation after confirming deployment source.
- Tracked generated `dist/` if repository policy permits regeneration.
- Unused components.
- Repeated engineering-principle copy across pages.
- Incident summary labels such as “Senior” and “Staff” unless explained.

# What Is Missing

- One defensible umbrella positioning statement.
- One normalized source of truth for career facts.
- Exact denominator/timeframe for major metrics.
- Identity-resolution explanation in segmentation case study.
- ClickHouse tuning and cost outcome.
- Recommendation adoption denominator and time window.
- Business impact tied to measurable results.
- Explicit scope of personal ownership versus team ownership.
- Staff-level influence evidence: decisions changed, teams unblocked, standards introduced, hiring impact, cross-team adoption.
- Live links for independent projects.
- Resume version dates.
- Recruiter-friendly contact path.
- Article metadata.
- Skip navigation.
- Mobile fix for hard-problems grid.
- Privacy/analytics policy decision.

# Implementation Difficulty

| Change | Difficulty |
|---|---|
| Add umbrella positioning and role labels | trivial |
| Normalize metrics across site/resumes | medium |
| Make one resume primary | small |
| Add PDF labels/download behavior | small |
| Add persistent contact CTA | small |
| Remove coming-soon content | trivial |
| Add related-case-study links | small |
| Fix hard-problems mobile grid | small |
| Add skip link and labelled landmarks | small |
| Correct heading hierarchy | medium |
| Optimize images and loading | small |
| Add article/profile structured data | medium |
| Consolidate duplicate source/assets | medium |
| Rewrite case studies around evidence gaps | large |
| Establish shared content/data source | medium |
| Add meaningful analytics events | medium |

# Priority Roadmap

## PHASE 1 — MUST FIX

1. Reconcile all metrics across website, PDFs, LinkedIn-available claims, and build brief.
2. Choose umbrella positioning: `Backend & Data Infrastructure Engineer`.
3. Make general resume primary.
4. Fix 375px hard-problems horizontal overflow.
5. Remove or rewrite absolute unsupported claims.
6. Add clear personal/team ownership distinctions.
7. Add resume/contact CTA to case studies.
8. Remove “Coming soon” content and unused evidence distractions.
9. Add skip navigation and correct landmarks/headings.
10. Remove or isolate duplicate root `index.html` and tracked generated output after deployment-source confirmation.

## PHASE 2 — HIGH ROI

1. Rework homepage around one hiring funnel.
2. Strengthen segmentation case study with identity resolution, failure modes, and latency.
3. Strengthen recommendation case study with denominator, timeframe, endpoint scope, and business impact.
4. Add Staff-level organizational evidence.
5. Add related-case-study navigation.
6. Link independent projects to live products/repositories.
7. Replace GitHub activity chart with selected public technical work.
8. Add Article/Profile/WebSite structured data.
9. Add PDF metadata and version dates.
10. Add analytics events for resume, email, case-study, LinkedIn, and GitHub actions.

## PHASE 3 — POLISH

1. Optimize image dimensions, lazy loading, and responsive variants.
2. Improve OpenGraph image compatibility and metadata.
3. Reduce mono-font usage and repeated card styling.
4. Consolidate inline styles into reusable tokens/components.
5. Add reading time and publication dates to notes.
6. Improve theme-toggle state semantics.
7. Add privacy treatment for Google Analytics.
8. Remove unused components and duplicated assets.
9. Validate all four viewports after changes.
10. Re-run accessibility, link, SEO, and performance checks.
