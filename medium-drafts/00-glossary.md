# Glossary: Consistent Genericized Terms

Use these exact terms consistently across all 10 articles. Check at the final cross-article pass.

## Company & Context
- **Instead of:** ConvertCart
- **Use:** "an e-commerce personalization platform I worked at" (first mention, full context)
- **Thereafter:** "the platform" or "the system"

## Product Names & Systems

### Old Recommendation System
- **Instead of:** Reco (old system)
- **Use:** "the old recommendation system" or "the legacy recommendation engine"
- **Consistency check:** articles 3, 4, 6 reference this — use identical phrasing in all three

### New Recommendation Engine
- **Instead of:** IntelliBlocks
- **Use:** "the new recommendation engine" or "the Smart recommendation tier"
- **Consistency check:** articles 3, 4, 6 reference this — use identical phrasing in all three

### Data Platform / Infrastructure
- **Instead of:** specific internal service names (e.g., "the landing layer," "the consuming services")
- **Use:** descriptive functional terms: "the MySQL landing layer," "the downstream consuming services," "the data pipeline"

## Scale Framing
- **Merchants:** "200+ merchants" (canonical from profile.ts)
- **Microservices:** "50+ microservices" (canonical from profile.ts)
- **Segmentation scale:** "1,000+ active segments" (canonical from profile.ts, confirm before finalizing)
- **Platform-partner names:** avoid naming specific e-commerce platforms (Shopify, BigCommerce, etc.) unless context requires it; use generic "checkout platforms" or similar

## Cost & Metrics
- **For Incident 8 specifically:** Use profile.ts figure: **₹1.8 lakhs/month → ₹40K/month (77% reduction)** or similar wording
- Other incident numbers: use profile-facts.md as source of truth for medium-confidence figures

---

## Cross-Article Consistency Check (Run at Final Pass)

Search for these terms in all 10 files and ensure uniformity:
- [ ] Old recommendation system phrasing appears identically in articles 3, 4, 6
- [ ] New recommendation engine phrasing appears identically in articles 3, 4, 6
- [ ] All company/platform references are genericized (no "ConvertCart," no specific internal product names)
- [ ] Cost figure in article 8 matches approved profile.ts number
- [ ] Scale metrics (200+, 50+, 1,000+) are consistent where referenced
