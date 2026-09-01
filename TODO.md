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

## Completed (P2 items 15, 17–20)

- ✅ SEO/Meta strengthening (About, homepage, case-studies index descriptions)
- ✅ Trim Engineering Principles to 3 (Reversibility, Operational simplicity, Ship in trust order)
- ✅ Visual hierarchy restructure (removed hero stat trio, Three Proof Points consolidation, section reorder)
- ✅ Project screenshots (decided: leave AffairsMap as-is, no action needed)
- ✅ Copy tightening (removed "hardest thing I built" labels, replaced with concrete facts)

## Deferred (P2 item 16 — skipped this pass)

### 16. GitHub contribution chart → selected repositories (SKIPPED)
- Original repos (en-bus, HitReplAI) not public on GitHub
- Options: make repos public, use different public repos, or skip
- Decision: skip this pass, keep activity widget as-is

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

**Model:** Claude Haiku 4.5
**Commits:**
1. `755be6d` — P0 + P1 items 8–10, 12, 14: positioning, ownership, testimonials, engineering notes
2. `a4d2c19` — P1 items 11 & 13: architecture diagrams & resume UX
3. `909f246` — P1 continuation (deployed via manual Vercel)
4. `62d65d2` — P2 polish: principles trim, copy tightening, SEO meta, visual hierarchy

**Deploy:** Manual `vercel --prod` (no Git integration on account). All P0/P1/P2 changes live.
**Status:** 10 pages, all HTTP 200. avoid-ai-writing skill: passed. Zero discrepancies in audit.

**Verified:** All ChatGPT audit items addressed (P0/P1/P2 complete, P2 item 16 skipped pending repo confirmation).
