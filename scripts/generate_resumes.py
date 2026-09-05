from __future__ import annotations

import html
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume"
TMP = ROOT / "tmp" / "pdfs"


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def bullets(items: tuple[str, ...]) -> str:
    return "".join(f"<li>{esc(item)}</li>" for item in items)


def role(title: str, dates: str, company: str, items: tuple[str, ...]) -> str:
    return f'''<section class="role"><div class="role-head"><strong>{esc(title)}</strong><span>{esc(dates)}</span></div>
<div class="company">{esc(company)}</div><ul>{bullets(items)}</ul></section>'''


HTML = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Udhaya Kumar - Staff Backend Engineer</title>
<style>
@page {{ size: Letter; margin: .48in .55in .45in; }}
* {{ box-sizing: border-box; }} body {{ margin: 0; color: #171a20; font-family: Arial, Helvetica, sans-serif; font-size: 9.25pt; line-height: 1.34; }}
h1 {{ margin: 0; font-size: 24pt; line-height: 1; letter-spacing: .01em; }} h2 {{ margin: 15px 0 6px; padding-bottom: 3px; border-bottom: 1px solid #7aa8a4; color: #075858; font-size: 9.5pt; letter-spacing: .13em; text-transform: uppercase; }}
.target {{ margin: 5px 0 6px; color: #075858; font-size: 11pt; font-weight: bold; }} .contact {{ margin: 0 0 12px; color: #47505a; font-size: 8.5pt; }} a {{ color: #075858; text-decoration: none; }}
.summary {{ margin: 0; font-size: 10pt; line-height: 1.4; }} .skills p {{ margin: 2px 0; }} .skills strong {{ color: #171a20; }}
.role {{ margin: 0 0 8px; break-inside: avoid; }} .role-head {{ display: flex; justify-content: space-between; gap: 16px; line-height: 1.2; }} .role-head span {{ white-space: nowrap; color: #47505a; }} .company {{ margin: 2px 0 2px; color: #47505a; font-style: italic; }} ul {{ margin: 0; padding-left: 17px; }} li {{ margin: 1px 0; }}
.page-break {{ break-before: page; page-break-before: always; }} .project {{ margin: 0 0 6px; }} .project strong {{ color: #075858; }} .footer {{ margin-top: 18px; padding-top: 5px; border-top: 1px solid #b9d1ce; color: #606871; font-size: 7.5pt; display: flex; justify-content: space-between; }}
</style></head><body>
<header><h1>UDHAYA KUMAR</h1><div class="target">Staff Backend Engineer | Debezium · ClickHouse · Pub/Sub · Real-time CDC</div><div class="contact"><a href="mailto:mail4udhaya@gmail.com">mail4udhaya@gmail.com</a> | <a href="https://linkedin.com/in/udhayakumark">linkedin.com/in/udhayakumark</a> | Salem, Tamil Nadu, India | Remote</div></header>
<h2>Professional Summary</h2><p class="summary">Architect and operate high-scale data systems where every layer (ingestion, modeling, serving, operations) matters. Rearchitected the data platform from batch-sync (days-late latency) to real-time CDC (sub-minute latency) serving 200+ e-commerce merchants. Designed segmentation engine (1,000+ active segments, 80% merchant adoption) and built recommendation system from zero-to-one. Grew backend platform team from 4 to 7 engineers. 13 years across PHP, Node.js, TypeScript, MySQL, ClickHouse, BigQuery, GCP, GKE. Seeking: Staff Engineer, Principal Engineer, or Founding Engineer roles in data infrastructure or platform systems. Remote-first.</p>
<h2>Professional Experience</h2>
{role("Senior Product Development Lead (Backend / Data Platform)", "Aug 2021 - May 2026", "ConvertCart AI System Pvt Ltd | Bengaluru (Remote)", ("Owned architecture, migration, monitoring, and production operation for customer and order data across 200+ merchants on five commerce platforms.", "Rearchitected data ingestion from cron-based batch sync to real-time CDC pipelines (Debezium + Google Pub/Sub). Raw MySQL landing → fan-out to MongoDB (serving), ClickHouse (analytics), BigQuery (historical). Reduced data freshness from days-late to sub-minute across all sources. Maintained 98%+ uptime. Directly unblocked real-time segmentation, recommendations, and personalization features.", "Designed multi-source data model and BigQuery customer schema consolidating four e-commerce platforms (Shopify, BigCommerce, WooCommerce, Magento) plus click-tracking data. Implemented identity resolution across anonymous sessions and known customers. Built SQL query builder and materialization pipeline enabling non-technical CSMs to create segments.", "Built segmentation engine serving 1,000+ active segments within 6 months. 80% merchant adoption of advanced features. Business impact: reduced engineering backlog from 40 pending requests to self-serve (CSMs unblocked from engineering dependency).", "Built recommendation engine (Manual → Automated → Smart trust ladder) from zero-to-one. 80%+ of merchants trialling Smart tier adopted it. Multi-region serving with 200ms p99 latency target.", "Architected 50+ microservice platform while leading platform team growth from 4 to 7 engineers. Owned architecture reviews, code reviews, technical alignment, mentoring, and delivery decisions."))}
{role("Senior Software Developer - Team Lead (Backend)", "Aug 2020 - Aug 2021", "ConvertCart AI System Pvt Ltd | Bengaluru", ("Diagnosed root cause of fragile cron-based sync system with days-late latency: normalize-on-ingest made retroactive logic changes impossible without full resyncs. Redesigned to raw-source storage pattern, eliminating expensive full-data resync friction.", "Replaced cron sync with real-time pipelines: webhook integrations for Shopify and BigCommerce (native support), custom implementations for WooCommerce and Magento 2 (no native webhooks). Handled platform-specific constraints without merchant-side changes.", "Stopped production crisis: 50M-row CDC snapshot consumed 60% CPU and blocked production writes. Diagnosed root cause (table-level snapshots at scale). Used Datastream for safe recovery. Changed rollout strategy to incremental table-level migration with production-scale testing. Prevented recurrence.", "Initiated recommendation engine with Manual → Automated → Smart trust ladder progression. Validated that 80%+ of merchants trialling Smart tier adopted it for production personalization."))}
{role("Software Development Lead", "Aug 2018 - Feb 2019", "Friday Media Group | Bengaluru", ("Led backend delivery for marketplace APIs, content ingestion, and data pipeline work while coaching engineers.",))}
{role("Independent Backend Consultant", "Feb 2019 - Aug 2020", "Freelance", ("Backend development and delivery work for freelance clients during a transition between full-time roles.",))}
{role("Senior Software Engineer - I / Software Analyst", "Feb 2014 - Jul 2018", "Scientific Games | Bengaluru", ("Diagnosed and fixed pagination + join cardinality inversion problem in recurring MySQL reporting workload. Query improved: 3+ minutes → <500ms (360x improvement). Built reporting integrations and web services.",))}
{role("Web Developer / Junior Software Engineer", "Apr 2010 - Jan 2014", "Tenlegs and ISPG Technologies | India", ("Built web applications, email infrastructure, and MySQL-backed operational tools across multiple web projects.",))}
<h2>Technical Depth</h2><div class="skills"><p><strong>Real-Time Data Architecture:</strong> CDC (Debezium, Datastream), Google Pub/Sub, event sourcing, webhook integrations, idempotency patterns, fan-out design</p><p><strong>Databases & Query Optimization:</strong> MySQL (deep expertise: index design, query execution plans, schema design, partitioning), ClickHouse (analytics workloads, cost optimization), BigQuery, MongoDB, Redis, PostgreSQL</p><p><strong>Data Modeling & Analytics:</strong> fact/dimension tables, slowly-changing dimensions, identity resolution, multi-source data consolidation, schema evolution patterns</p><p><strong>Backend Systems:</strong> Node.js, TypeScript, PHP; microservices architecture (50+ services); REST APIs; async patterns; system design</p><p><strong>Infrastructure & Operations:</strong> GCP, GKE, Docker, Kubernetes, Google Cloud Monitoring, Datadog; incident response, post-mortems, on-call rotation</p><p><strong>Team Leadership:</strong> hiring, mentorship, async-first remote management, code review culture, team growth (4 to 7 engineers)</p><p><strong>Production LLM Systems:</strong> LangGraph, Claude API, entity resolution, deterministic post-LLM classification</p></div>
<h2>Production Proof</h2>
<ul><li>Data Platform: Rearchitected from batch-sync (days-late) to real-time CDC (sub-minute) across 200+ merchants on 5 commerce platforms. Unblocked real-time segmentation and personalization.</li><li>Segmentation Engine: 1,000+ active segments, 80% merchant adoption. Reduced engineering backlog from 40 pending requests to self-serve.</li><li>Production Crisis: 50M-row CDC snapshot consumed 60% CPU and blocked writes. Diagnosed root cause (table-level snapshots at scale). Recovered safely via Datastream. Prevented recurrence via incremental rollout strategy.</li><li>Performance Diagnosis: Pagination + join cardinality inversion problem. Reversed operation order (filter before join). 3+ minutes → <500ms (360x improvement).</li></ul>
<h2>Also Built (Technical Breadth)</h2>
<ul><li class="project"><strong>enbus:</strong> Geographic transit query system (Tamil Nadu, 93K routes, 2,234 stops). PostgreSQL, GTFS ingestion, geographic indexing. Demonstrates: complex data structures, indexing, public APIs, geographic queries.</li><li class="project"><strong>BriefMyDoctor:</strong> Full-stack healthcare product. Product design, backend, UX, Claude API integration. Demonstrates: LLM integration, end-to-end ownership, domain research, user-centric design.</li><li class="project"><strong>HitReplAI:</strong> Chrome extension with browser automation, backend persistence, AI integration, Playwright/Puppeteer testing. Demonstrates: browser APIs, async patterns, test infrastructure, shipping speed.</li></ul>
<h2>Education</h2>
<p>B.E. Computer Science and Engineering · Adhiyamaan College of Engineering</p>
<h2>Looking For</h2>
<ul><li>Staff Engineer or Principal Engineer roles: owning data systems or platforms end-to-end, working with teams of 3–8 engineers, making tradeoff decisions under constraints.</li><li>Founding Engineer roles: zero-to-one shipping in data infrastructure or backend systems, comfortable with ambiguity and shipping fast.</li><li>Also open to: Engineering Manager roles focused on platform/infrastructure teams, with strong IC credibility as foundation.</li><li>Preferences: remote-first, India-based or worldwide roles, async-friendly engineering cultures where engineers own outcomes.</li></ul>
<div class="footer"><span>Udhaya Kumar</span><span>Staff Backend Engineer | Debezium · ClickHouse · Pub/Sub · Real-time CDC</span></div>
</body></html>'''


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True); TMP.mkdir(parents=True, exist_ok=True)
    chrome = "/usr/bin/google-chrome"
    if not Path(chrome).exists(): raise FileNotFoundError(chrome)

    html_path = TMP / "general.html"; pdf_path = OUTPUT / "general.pdf"
    html_path.write_text(HTML, encoding="utf-8")
    subprocess.run([chrome, "--headless", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer", f"--print-to-pdf={pdf_path}", html_path.as_uri()], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True)

    metadata_pdf = TMP / "metadata-general.pdf"
    subprocess.run(["/usr/bin/gs", "-q", "-dBATCH", "-dNOPAUSE", "-sDEVICE=pdfwrite", f"-sOutputFile={metadata_pdf}", str(pdf_path), "-c", "[/Title (Staff Backend Engineer - Udhaya Kumar) /Author (Udhaya Kumar) /Subject (ATS-friendly resume) /Keywords (Staff Backend Engineer, real-time data infrastructure, CDC, Debezium, ClickHouse, Pub/Sub, backend infrastructure, distributed systems, data platform, migrations, observability, BigQuery, MySQL) /DOCINFO pdfmark"], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True)
    metadata_pdf.replace(pdf_path)

    print(f"Generated optimized resume at {pdf_path}")


if __name__ == "__main__": main()
