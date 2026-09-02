# Resume verification

Generated from `scripts/generate_resumes.py` on 2026-09-01.

## Output matrix

| File | Target | Pages | Primary evidence |
| --- | --- | ---: | --- |
| `general.pdf` | Senior Backend Engineer | 2 | Backend ownership, CDC, migrations, incidents, product outcomes |
| `data.pdf` | Senior Data Platform Engineer | 2 | CDC fan-out, landing layer, warehouse paths, migration recovery |
| `arch.pdf` | Senior Platform Engineer - Backend Architecture | 2 | System boundaries, tradeoffs, rollout, reliability decisions |
| `ecom.pdf` | Senior Backend Engineer - E-commerce Infrastructure | 1 | Five commerce platforms, webhooks, catalogue and order flows |
| `founding.pdf` | Founding Engineer - Backend / Product | 1 | Product judgment, independent products, end-to-end shipping |

## Verified checks

- Single-column, selectable-text PDFs with standard headings and embedded metadata.
- Official employment titles preserved; functional descriptors added only where useful.
- Canonical `200+ merchants` and `50+ microservices` values used across generated resumes.
- No Kafka, `57+`, `100+`, revenue, or unsupported absolute claims in generated PDFs or built site output.
- General Resume remains recommended website entry point.
- Every primary case study and incident note links to `/resume`.
- Astro build passes.
- Routes return HTTP 200 at mobile preview width with no horizontal overflow.
- Homepage H1 remains `Senior Backend Engineer`; Resume CTA is visible in first viewport.

## Facts still requiring confirmation

- Exact definition and timeframe for `1,000+ active segments`.
- Recommendation adoption denominator, timeframe, and definition of “adopted”.
- Whether `200ms p99` is a target or measured result, plus endpoint and measurement window.
- Exact CDC transport and sequencing of Debezium, Datastream, and Pub/Sub paths.
- Validation scope behind checksum or rollback claims; these are intentionally not promoted.
- Independent-product user, launch, and adoption figures; none are invented.
- Exact headcount (“2–3 engineers”) for the segmentation and recommendations teams.

Until confirmed, future edits must keep these claims scoped or omit them.
