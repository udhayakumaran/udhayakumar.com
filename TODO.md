# Portfolio Audit — TODO

## Completed (P0 + P1 items 1–3, 5–6, 8–14, 11, 13)

- ✅ Positioning rewrite: hero H1, titles, eyebrow
- ✅ Fix 5/6 years inconsistency + remove 98% uptime
- ✅ Personal vs team ownership split (3 case studies)
- ✅ Feature 50M-row incident as distinct callout
- ✅ Leadership evidence: strengthen skills to show "what changed"
- ✅ Real LinkedIn testimonials (4 quotes, verbatim)
- ✅ Engineering Notes section: index + 1 published + 6 stubs
- ✅ Reframe independent products: "Outside work", shipped vs building
- ✅ Stronger CTA: direct, personal framing
- ✅ Architecture diagrams: add ownership + SLO annotations
- ✅ Resume page UX: promote General, secondary grid for specialized

## Deferred (P2 items 15–20)

### 15. SEO/Meta strengthening
- Update meta descriptions on all pages to lead with "Staff Backend / Platform Engineer"
- Include role-title keywords (Founding Engineer, Backend Architect, Data Platform Lead) in descriptions
- Tighten homepage meta description (currently falls back to Layout default)

### 16. GitHub contribution chart → selected repositories
- Replace ghchart.rshah.org contribution graph with list of 3 selected repos
- Show real stats: en-bus (93K+ trips), HitReplAI (Chrome Web Store), + 1 backend project
- Requires user confirmation on which repos are public/presentable

### 17. Trim Engineering Principles to 3
- Keep: Reversibility, Operational simplicity, Ship in trust order
- Remove from homepage: Match storage to question (keep only on About / case studies)

### 18. Visual hierarchy restructure (homepage)
- Consolidate "By the numbers" + "Selected Systems" into 3 proof-point cards
- Reorder: Hero → Three Proof Points → How I Work (3 principles) → Selected Work → Background → Outside Work → Engineering Notes → CTA
- Simplify headline metrics: only 3–4 top-level stats at hero, details in case studies

### 19. Project screenshots
- Add/verify screenshots for: Fruggy, HitReplAI, en-bus
- Determine whether to add AffairsMap screenshot (currently "In development") or remove from homepage

### 20. Copy tightening
- Remove self-conscious phrasing: "The hardest product I built", etc.
- Replace with concrete reasons instead of labels
- General polish pass across all pages

## Future Enhancements

### Dynamic LinkedIn Testimonials Sync (High Priority)
**Goal:** Keep testimonials in sync with LinkedIn without manual updates, preserve verbatim accuracy.

**Approach:**
1. Set up LinkedIn Developer app (user provides API credentials/setup)
2. Create build-time fetch script: `scripts/fetch-testimonials.js`
   - Calls LinkedIn recommendations API
   - Stores verbatim quotes + attribution in `site/src/data/testimonials.json`
   - Runs as pre-build hook in `package.json`
3. Update testimonials component to import from JSON instead of hardcoded
4. CI/CD: run fetch on each build to auto-sync

**Requirements:**
- LinkedIn API credentials (LinkedIn Developer app)
- Permissions to access public recommendations
- Optional: set up scheduled rebuild (e.g., weekly via GitHub Actions) for background sync

**Benefits:**
- Testimonials always reflect current LinkedIn
- No manual copy-paste updates needed
- Verbatim accuracy preserved (quotes never altered in code)

### Other Future Work
- Dark mode visual testing on all new components
- Mobile responsive testing on resume page grid
- A/B test "Recommended" resume prominence vs flat listing

---

## Session Summary

**Time spent:** Portfolio audit implementation
**Model:** Claude Sonnet 5
**Commits:**
1. `755be6d` — Portfolio audit fixes: positioning, ownership, testimonials, engineering notes (P0 + P1 items 8–10, 12, 14)
2. `a4d2c19` — P1 items 11 & 13: architecture diagrams & resume UX

**Deploy:** Vercel auto-deploy on `master` push
**Status:** All 10 pages building cleanly, ready for live testing
