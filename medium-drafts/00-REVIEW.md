# Article Review Status

Track which articles are drafted, reviewed, and ready to publish.

---

## Incident 1: Query Shape, Not Tuning
**Status:** ✅ DRAFTED & AVOID-AI-WRITING PASS COMPLETE

**File:** `01-query-shape-not-tuning.md`

**Word count:** 1,429 words (~5–6 min reading time)

**Checklist:**
- [x] Content anchored to facts (3+ min → 500ms, 360x, 9 billion rows)
- [x] No AI-writing vocabulary clusters
- [x] "Is/are" used correctly (no "serves as" substitutes)
- [x] No vague attribution or hedging
- [x] First-person, direct voice
- [x] No negative parallelism traps
- [x] No rule-of-three padding
- [x] Diagram placeholder marked: `[DIAGRAM: Query Execution Order — Before/After]`
- [x] CTA links placeholder: `/engineering-notes/incidents` and `/resume`
- [x] Tags included for Medium posting
- [x] Section headers in sentence case

**Tags (3–5):** #database #performance #architecture #debugging #productionengineering

**Notes for editing when pasting to Medium:**
- Replace placeholder link `/engineering-notes/incidents` with absolute URL to your portfolio's incident log
- Replace placeholder link `/resume` with absolute URL to your resume
- Copy the diagram prompt from `00-images.md` (Incident 1 hero prompt) and generate hero image via ChatGPT/DALL-E
- Embed the generated image at the top after title/lede
- Add these tags when publishing

**Story quality:** Strong. Opens with concrete escalation, walks through diagnosis with cardinality math, clear before/after fix, emphasizes architectural vs. tuning distinction. Good narrative arc and hiring relevance.

**Ready to publish?** Yes, pending:
1. User review for tone/accuracy
2. Hero image generated and embedded
3. Links updated to absolute URLs
4. Final read-through before pasting to Medium

---

## Incident 2: Production Lock Contention
**Status:** ⏳ PENDING

---

## Incident 3: The Problem Nobody Asked About
**Status:** ⏳ PENDING

---

## Incident 4: Views to Debezium CDC
**Status:** ⏳ PENDING

---

## Incident 5: Missing Index, Missing Process
**Status:** ⏳ PENDING

---

## Incident 6: Christmas Eve ClickHouse
**Status:** ⏳ PENDING

---

## Incident 7: The Same Bug Twice
**Status:** ⏳ PENDING

---

## Incident 8: Silent Failure
**Status:** ⏳ PENDING
**Open item:** Cost figure — confirm using profile.ts ₹1.8L → ₹40K/month (77.8% reduction)

---

## Incident 9: Materialized Views Gotcha
**Status:** ⏳ PENDING

---

## Incident 10: Backpressure as a Pattern
**Status:** ⏳ PENDING

---

## Publishing Checklist (before going live)

Once all 10 are drafted:

- [ ] Run final cross-article `/avoid-ai-writing` pass (check for vocabulary drift, consistency)
- [ ] Verify 00-glossary.md terms used identically across articles (especially 3, 4, 6)
- [ ] Confirm all open-item numbers (incident 8 cost figure, any medium-confidence metrics from profile-facts.md)
- [ ] Generate all 10 hero images
- [ ] Generate all inline diagrams (Mermaid → PNG/SVG)
- [ ] Embed all images in articles
- [ ] Update all placeholder links to absolute URLs
- [ ] Final tone check: first-person, blameless framing, no company names
- [ ] Prepare posting schedule (1 article every 2–3 weeks recommended)
- [ ] Set up cross-posting to dev.to/Hashnode with canonical URLs

---

## Recommended Posting Order

Based on strength and hiring impact:

1. **Incident 1** (query shape) — entry point, clear diagnostic value
2. **Incident 3** (customer insight) — shows proactive thinking, business impact
3. **Incident 4** (architectural evolution) — demonstrates systems thinking, long-term impact
4. **Incident 2** (lock contention) — CEO-level crisis management
5. **Incident 8** (algorithmic optimization) — technical depth, constraint recognition
6. **Incident 6** (Christmas crisis) — leadership under pressure
7. **Incident 7** (repeated pattern) — systemic thinking
8. **Incident 5** (missing index) — operational discipline
9. **Incident 10** (backpressure) — platform pattern, org-wide impact
10. **Incident 9** (materialized views) — scale lesson, tool-specific gotcha

Post every 2–3 weeks for steady portfolio visibility during job search.
