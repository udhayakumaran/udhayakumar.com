# Medium Drafts: Research-Backed Publishing Strategy

## What Works: Research Findings

### 1. Headline Strategy (Critical)
- **Avoid overpromise.** Audiences are skeptical of clickbait; Medium's algorithm prioritizes engagement depth over clicks. Honest, specific headlines outperform.
- **Use pattern interrupts.** Top-performing headlines in 2025 used: specific numbers, curiosity gaps ("Why X failed is not what you think"), blameless framing ("What we learned..."), and concrete before/after.
- **Examples that worked:**
  - "How We Cut Customer Segmentation Cost 66% Without Losing Correctness" (concrete metric + outcome)
  - "The 50M-row Snapshot That Almost Derailed Our Migration" (specific scale + stakes)
  - "When Materialized Views Stopped Working at Production Scale" (clear problem + context)

### 2. Article Length & Reading Time
- **Sweet spot: 7-9 minutes reading time** (roughly 1,500–2,500 words)
- Articles in this range get significantly higher engagement than shorter pieces
- Longer is fine if substance justifies it; padding kills credibility
- The Stripe/Cloudflare/GitLab postmortems that became reference material were all 6–15 minute reads with dense technical detail and narrative

### 3. Voice & Narrative vs. Pure Technical
- **2025 trend:** highest-performing technical articles weren't pure documentation or how-to guides
- They were **narratives that translated systems into stories** while maintaining technical depth
- **Conversational tone:** Use first person, personal anecdotes, unconventional metaphors
- **Show systems thinking, not just blame:** "Here's what I thought was happening, why I was wrong, what actually happened, and what we changed" beats "here's what broke"
- **Blameless framing:** Standard now. Focus on process, constraints, and decisions—not individuals

### 4. Structure That Converts
Based on successful postmortems from Stripe, Cloudflare, GitLab, Monzo, GitHub:
1. **Title** — specific, pattern interrupt, outcome-forward
2. **Lede** — 2–3 sentences: what happened, cost, unique insight (curiosity hook)
3. **Context** — system state before, why it existed (establishes stakes)
4. **What went wrong** — mechanism, not blame (technical detail starts here)
5. **Diagnosis** — actual investigative steps (this is the valuable part for readers)
6. **Decision & fix** — what was chosen, why, rejected alternatives (shows judgment)
7. **Results** — concrete before/after numbers
8. **Lesson** — one clear, ownable takeaway (not a moral)
9. **What changed** — systemic outcome (signals impact and follow-through)
10. **CTA** — back to portfolio/resume (close the loop)

### 5. Engagement Triggers
- **Medium claps:** 200+ claps = algorithm picks it up for wider distribution
- **Career signal:** Postmortem writing positions the author as "who fixed it?" not "who broke it?"
  - Ex-Stripe engineers command 20–30% compensation premiums; part of that credibility comes from postmortems read at VP level
- **Systems thinking proof:** Readers (and hiring managers) look for: diagnosis rigor, constraint recognition, tradeoff acceptance, follow-up execution
- **Blameless framing earns engagement:** Readers engage more with articles that focus on learning, not blame

### 6. Posting Cadence & Strategy
- **Consistency > Volume:** One excellent article beats ten mediocre ones
- **Quarterly minimum for portfolio freshness** (based on recruiter expectations)
- **Suggested cadence for job search:** 1 article every 2–3 weeks, ramping up pre-job-search or during active interviews
- **Portfolio as living resume:** Recruiters check for growth/consistency; posting incidents over time signals "I learn from failures, not hide them"

### 7. Cross-Posting & Amplification
- **Medium**: primary; algorithmic reach; paywalls (Medium Members only after ~4 min reading)
- **dev.to**: community-driven, faster discovery, tags matter, no paywall
- **Hashnode**: technical audience, good for deep dives
- **Strategy:** Publish on Medium first (establish canonical), cross-post to dev.to/Hashnode with canonical URL linking back to Medium
- **Tags:** For Medium: #engineering #incident #postmortem #debugging #production. For dev.to: #incident #debugging #postmortem #production #backend
- **Publishing days:** Avoid weekends; Tuesday-Thursday typically see higher engagement on tech content

### 8. What Hiring Managers & Recruiters Look For
- **Technical rigor:** Did you diagnose correctly? Can you explain the mechanism, not just the symptoms?
- **Constraint recognition:** Do you understand limits (database behavior, pod memory, trade-offs)?
- **Systemic thinking:** Did you build a fix or a one-off patch? What changed afterward?
- **Leadership signal:** Did you mentor, communicate, handle pressure? (Incident 6 is this story)
- **Honesty:** Blameless framing signals maturity and safety, not recklessness
- **Impact:** Numbers matter. "360x faster" or "6x cost reduction" is concrete proof

### 9. Red Flags to Avoid
- ❌ Vague attribution ("industry reports suggest," "experts say")
- ❌ Marketing adjectives ("groundbreaking," "innovative," "cutting-edge")
- ❌ Blame frames ("the junior engineer didn't understand X")
- ❌ Hypotheticals ("if we had done Y, things would be different")
- ❌ Missing learnings or systemic outcomes (leaves reader asking "so what changed?")

---

## Publishing Checklist

### Before Publishing Each Article
- [ ] Headline is honest, specific, contains numbers or pattern interrupt
- [ ] Lede hooks with curiosity (what's unique or counterintuitive about this story?)
- [ ] Diagnosis section has actual investigative steps (not just conclusions)
- [ ] Numbers are sourced or confirmed against profile-facts.md
- [ ] Blameless language throughout (no "they didn't understand X," only "we didn't recognize X earlier")
- [ ] Closing CTA is consistent across all 10 (links to portfolio + resume)
- [ ] Read-time is 7–9 minutes (check Medium's built-in calculator)
- [ ] avoid-ai-writing skill pass is clean (no banned vocabulary, no "serves as," etc.)

### Tagging Strategy for Discovery
- **Per-article:** 3–5 tags max (Medium shows top 5; beyond that dilutes reach)
- **Tag type breakdown:**
  - 1 core technical tag (#database, #architecture, #performance)
  - 1 methodology tag (#debugging, #monitoring, #incident-response)
  - 1 scope tag (#productionengineering, #infrastructure, #backend)
  - (optional) 1 outcome tag (#optimization, #resilience, #scaling)
  - (optional) 1 audience tag (#staffengineering, #systemsdesign)
- **Avoid:** generic tags like #engineering, #coding (too broad, no reach signal)
- **Avoid:** trending/viral tags unrelated to the content (damages credibility)

### Posting Strategy
1. **Pre-job-search:** Publish 2–3 strongest incidents (1, 3, 8) individually to build momentum, then go weekly on the rest
2. **During job search:** One article per week, 4–6 weeks of consistency signals "I'm serious about my portfolio"
3. **After job search:** Quarterly updates to keep portfolio alive

### Metrics to Track
- Clap count (target: 200+ per article = algorithm pickup)
- Read time / completion rate (if Medium stats available)
- Dev.to/Hashnode engagement (cross-post after Medium)
- Portfolio referrals in interview conversations (ask your network)

---

## Open Items & Confirmations Required

### Incident 8 — ClickHouse Cost Figures
Source doc says: **₹3+ lakhs → <₹50K per cycle, 6x**
Profile.ts says: **₹1.8L → ₹40K/month, 77.8% reduction**

**Confirmation needed before publishing:** Are these two different metrics (per-cycle algorithm cost vs. overall monthly migration)? User says "second one is the right, go with it" — so use the profile.ts figure in the article.
- Article 8: Use **₹1.8 lakhs/month → ₹40K/month (77% reduction)** or similar wording
- This replaces the placeholder `[COST FIGURE — CONFIRM...]`

### Other Medium-Confidence Facts (from profile-facts.md)
- [ ] Recommendation adoption: "80%+ of merchants who trialled Smart tier adopted it" — confirm denominator (all merchants? only those who trialled?)
- [ ] Segmentation: "1,000+ active segments within six months of launch" — confirm this is the right scope
- [ ] Recommendation latency: "200ms p99 across stated serving scope" — confirm endpoint and measurement window

---

## Sources & References

This research draws from:

- [Writing for Medium: What Works and What Doesn't in 2025](https://medium.com/write-a-catalyst/writing-for-medium-what-works-and-what-doesnt-in-2025-cb36ade06090)
- [The Art of Writing a Good Post-Mortem - DEV Community](https://dev.to/samson_tanimawo/the-art-of-writing-a-good-post-mortem-2887)
- [Incident Review and Postmortem Best Practices - The Pragmatic Engineer](https://blog.pragmaticengineer.com/postmortem-best-practices/)
- [Analyzing 1 Million+ Medium Articles: Insights on Optimizing for Claps](https://www.bomberbot.com/writing/analyzing-1-million-medium-articles-insights-on-optimizing-for-claps/)
- [How to write a postmortem. From blank template to action items](https://medium.com/@asuffield/how-to-write-a-postmortem-979b85489263)
- [Google SRE - Blameless Postmortem for System Resilience](https://sre.google/sre-book/postmortem-culture/)
- [Writing on Medium: The ultimate guide (updated for 2025)](https://nickwolny.com/writing-on-medium-guide/)
- [The Stripe Latency Post-Mortem Every Engineer Should Read](https://medium.com/@warstories/the-stripe-latency-post-mortem-every-engineer-should-read-before-launching-their-api-6514411772f8)
