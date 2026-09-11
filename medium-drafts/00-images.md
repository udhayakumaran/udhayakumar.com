# Image Prompts & Diagrams

## Hero Image Prompts (1 per article)

Generate these via ChatGPT/DALL-E. Use these exact prompts for consistency. All images should be:
- Abstract/editorial technical illustration style
- No real logos, no people, no text in the image
- Dark/light theme neutral (use white background)
- ~1200x600px (Medium standard)

### Incident 1: Query Shape, Not Tuning

**Prompt:** Abstract illustration of data flow bottleneck. Show a narrow funnel on the left (representing millions of rows being joined), then a valve or constraint in the middle, opening into a wide stream on the right (representing the correct query order). Use cool blues and grays. Technical, minimal style. No text.

**File name:** `01-query-shape-hero.png`

---

### Incident 2: Production Lock Contention

**Prompt:** Isometric view of a database cylinder with multiple colored threads/arrows surrounding it, all converging at a single lock point. The threads appear blocked/stalled, waiting. Use reds and oranges for the blocked threads, grays for the database. Minimal line art style.

**File name:** `02-lock-contention-hero.png`

---

### Incident 3: The Problem Nobody Asked About

**Prompt:** Split-screen editorial illustration. Left side: products disappearing into a gray void (representing 24-hour staleness). Right side: same products flowing continuously in real-time, with small pulse/wave indicators. Use warm greens on the right, cool grays on the left. Emphasize the time dimension.

**File name:** `03-real-time-recs-hero.png`

---

### Incident 4: Views to Debezium CDC

**Prompt:** Transformation diagram: left side shows a tangled web of connections (representing MySQL views joining millions of rows), middle shows a breaking point/transition, right side shows clean, separated layers with directed arrows (representing Debezium → Pub/Sub → purpose-shaped consumers). Use purples and teals. Emphasize the architectural shift.

**File name:** `04-views-to-cdc-hero.png`

---

### Incident 5: Missing Index, Missing Process

**Prompt:** Timeline illustration with three phases: first phase shows a search icon with a magnifying glass over a large database (full scan), middle phase shows a stopwatch with a fast needle (after index), third phase shows a feedback loop/cycle icon (monitoring). Use blues and oranges. Emphasize process improvement.

**File name:** `05-missing-index-hero.png`

---

### Incident 6: Christmas Eve Clickhouse

**Prompt:** Calendar showing December 24th highlighted in red, with a server/database icon above it, surrounded by escalating pressure indicators (concentric circles, rising graph, stress waves). The icon appears strained. Use reds and dark oranges. Convey urgency and pressure.

**File name:** `06-christmas-crisis-hero.png`

---

### Incident 7: The Same Bug Twice

**Prompt:** Circular diagram showing a loop: "Bug A" → "Fix" → "Different system" → "Same Bug A appears" → back to start. Show three layers around it: top layer (producer), middle (consumer), bottom (continuous QA). Use warning yellows and oranges. Emphasize the loop/pattern.

**File name:** `07-repeated-pattern-hero.png`

---

### Incident 8: Silent Failure

**Prompt:** Dark abstract illustration: on the left, a large tangled knot (representing memory explosion/join operation), shrinking through the center via a funnel shape into small, ordered buckets on the right (representing batched hashing). Use dark purples transitioning to bright teals. Emphasize elegance of the solution.

**File name:** `08-silent-failure-hero.png`

---

### Incident 9: Materialized Views Gotcha

**Prompt:** Illustration of a database table with multiple triggers firing simultaneously (shown as lightning bolts), causing cascading CPU load (represented by stacked/piling blocks above). Bottom half shows the same table with a single, clean refresh cycle (one arrow, one time period). Use reds (overload) transitioning to greens (resolution).

**File name:** `09-materialized-views-hero.png`

---

### Incident 10: Backpressure as a Pattern

**Prompt:** Illustration of a water/flow analogy: left side shows a valve at 100% open with water/data rushing through at high pressure, center shows a valve with flow control (opening/closing cycles), right side shows smooth, regulated flow. Use blues and teals. Include small pod/container icons. Convey feedback loops.

**File name:** `10-backpressure-hero.png`

---

## Inline Diagrams (Mermaid Source)

Diagrams for the technical turning point in each article. Generate these via mermaid.live and export as PNG/SVG.

### Incident 1: Query Execution Order

**Placeholder in article:** `[DIAGRAM: Query Execution Order — Before/After]`

**Mermaid source:**
```mermaid
graph LR
    subgraph Before["❌ Wrong Order (3+ min)"]
        A["Table 1: 10K rows"] --> B["JOIN Table 2"]
        B --> C["Millions of rows"]
        C --> D["Apply LIMIT 100"]
    end
    
    subgraph After["✓ Correct Order (500ms)"]
        E["Table 1: 10K rows"] --> F["LIMIT 100"]
        F --> G["100 rows"] --> H["JOIN Table 2"]
    end
```

---

### Incident 2: Lock Contention Cascade

**Placeholder in article:** `[DIAGRAM: MySQL Lock Contention — 6 parallelism vs 3]`

**Mermaid source:**
```mermaid
graph TD
    subgraph Before["6x Parallelism (5+ sec response)"]
        L1["LOAD job 1<br/>Lock held"] --> W["Other queries<br/>blocked<br/>waiting"]
        L2["LOAD job 2<br/>Lock held"] --> W
        L3["LOAD job 3<br/>Lock held"] --> W
        L4["LOAD job 4"] --> W
        L5["LOAD job 5"] --> W
        L6["LOAD job 6"] --> W
    end
    
    subgraph After["3x Parallelism (baseline)"]
        L1b["LOAD job 1"] --> Q["Queries proceed<br/>faster"]
        L2b["LOAD job 2"] --> Q
        L3b["LOAD job 3"] --> Q
    end
```

---

### Incident 4: Architecture Evolution

**Placeholder in article:** `[DIAGRAM: Views → CTEs → Debezium]`

**Mermaid source:**
```mermaid
graph LR
    subgraph Phase0["Initial (Problem)"]
        M["MySQL Views<br/>30s worst-case"]
    end
    
    subgraph Phase1["Tactical (CTEs)"]
        C["CTEs<br/>push filters<br/>1.5-2s"]
    end
    
    subgraph Phase2["Permanent (CDC)"]
        D["Debezium → Pub/Sub<br/>→ Consumers<br/>1.5s stable"]
    end
    
    Phase0 -->|"2 months"| Phase1
    Phase1 -->|"1 month"| Phase2
```

---

### Incident 5: Monitoring Gap

**Placeholder in article:** `[DIAGRAM: From Missing Index to Monitoring]`

**Mermaid source:**
```mermaid
graph LR
    A["Query deployed<br/>no index"] --> B["Week 1: intermittent<br/>slowness"]
    B --> C["Week 2: pattern<br/>emerges"]
    C --> D["❌ Humans detect<br/>after 1 week"]
    
    A2["Query deployed<br/>no index"] --> E["Monitoring catches<br/>response drop"]
    E --> F["✓ Alert fires<br/>in minutes"]
```

---

### Incident 6: Crisis Response Layers

**Placeholder in article:** `[DIAGRAM: Christmas Crisis Response]`

**Mermaid source:**
```mermaid
graph TD
    Crisis["ClickHouse OOM<br/>12 hours troubleshooting"]
    
    Immediate["Immediate:<br/>Scale RAM<br/>Stop real-time updates"]
    Permanent["Permanent:<br/>24-hour batch<br/>solution"]
    Process["Process:<br/>AI code review<br/>for DB patterns"]
    
    Crisis --> Immediate
    Crisis --> Permanent
    Crisis --> Process
```

---

### Incident 7: Three-Layer Fix

**Placeholder in article:** `[DIAGRAM: Ordering Validation Layers]`

**Mermaid source:**
```mermaid
graph TD
    Producer["Layer 1: Producer<br/>Maintains contract<br/>Defines order guarantee"]
    Consumer["Layer 2: Consumer<br/>Validates incoming<br/>doesn't assume"]
    QA["Layer 3: Continuous QA<br/>Tests ordering<br/>catches changes"]
    
    Incident["Bug repeats<br/>twice?"] --> Producer
    Incident --> Consumer
    Incident --> QA
    
    Producer -.->|"prevents"| Incident
    Consumer -.->|"catches"| Incident
    QA -.->|"verifies"| Incident
```

---

### Incident 8: Batched Hashing Solution

**Placeholder in article:** `[DIAGRAM: From Full Join to Bucketed Hashing]`

**Mermaid source:**
```mermaid
graph LR
    subgraph Before["Full Outer Join (O(n²) memory)"]
        OldSeg["Old Segment<br/>100M members"]
        NewSeg["New Segment<br/>100M members"]
        Join["Full Join<br/>requires all in RAM<br/>❌ Silent failure"]
        OldSeg --> Join
        NewSeg --> Join
    end
    
    subgraph After["Batched Hashing (O(1) memory)"]
        Old["Old Segment"] --> Hash1["Hash + partition<br/>by email"]
        New["New Segment"] --> Hash2["Hash + partition<br/>by email"]
        Hash1 --> Compare["Compare bucket<br/>hashes<br/>✓ Correct"]
        Hash2 --> Compare
    end
```

---

### Incident 9: Materialized Views at Scale

**Placeholder in article:** `[DIAGRAM: Real-time Triggers → Hourly Batch]`

**Mermaid source:**
```mermaid
graph LR
    subgraph Before["Real-time Triggers (CPU pinned)"]
        Event1["Event 1"] --> Trigger["Trigger fires<br/>re-scan full table<br/>re-aggregate"]
        Event2["Event 2"] --> Trigger
        EventN["Event N<br/>hundreds/sec"] --> Trigger
        Trigger --> CPU["CPU: 90%+"]
    end
    
    subgraph After["Hourly Batch (predictable)"]
        Events["Events<br/>accumulate"]
        Batch["Hourly batch<br/>single refresh<br/>query"]
        Events --> Batch
        Batch --> CPU2["CPU: stable<br/>reports: <30s"]
    end
```

---

### Incident 10: Backpressure Pattern

**Placeholder in article:** `[DIAGRAM: Pause/Resume Feedback Loop]`

**Mermaid source:**
```mermaid
graph TD
    Consume["Pub/Sub consumer<br/>pulls messages"]
    Monitor["Monitor heap<br/>usage"]
    
    HighMem["Heap > 80%"] --> Pause["Pause consuming"]
    Monitor -->|"check"| HighMem
    Monitor -->|"check"| LowMem
    
    Pause --> Process["Process backlog<br/>free memory"]
    Process --> LowMem["Heap < 60%"]
    LowMem --> Resume["Resume consuming"]
    Resume --> Consume
    
    style HighMem fill:#ff6b6b
    style LowMem fill:#51cf66
    style Pause fill:#ff6b6b
    style Resume fill:#51cf66
```

---

## Instructions

1. **Hero images:** Copy the prompt from above into ChatGPT or DALL-E. Generate. Save as PNG in medium-drafts/ with the specified filename.
2. **Diagrams:** Copy the Mermaid source code. Paste into mermaid.live. Render. Export as PNG or SVG. Save in medium-drafts/ with incident number prefix (e.g., `01-query-execution-order.png`).
3. **Article placeholders:** When drafting each article, leave a placeholder comment like `[DIAGRAM: Query Execution Order — Before/After]` at the point where the diagram should appear. Replace with the actual image filename when ready.
4. **Batch generation:** You can generate all 10 hero images at once (they don't have dependencies). Generate diagrams one per incident as you draft that article.

---

## File Naming Convention

All images stored in: `/home/udhayakumar/projects/udhayakumar.com/medium-drafts/`

Pattern: `NN-descriptive-name.{png|svg}`
- `NN` = incident number (01–10)
- Examples: `01-query-shape-hero.png`, `01-query-execution-order.png`
