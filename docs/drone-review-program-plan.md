# Expanded Drone Reviews Plan for HireDronePilot

## Summary

- Build a dedicated drone editorial section inside the current site, with three page types:
  - `/drone-reviews/[slug]` for single reviews
  - `/drone-comparisons/[slug]` for head-to-head pages
  - `/best-drones/[slug]` for roundup and use-case pages
- Use [NapLab's review page](https://naplab.com/mattress-reviews/helix-midnight-luxe-review/), [comparison page](https://naplab.com/mattress-comparisons/loom-leaf-vs-tempurpedic/), and [best-page format](https://naplab.com/best-mattress/best-mattress-for-back-sleepers/) as structural references, but make the methodology more technical, visual, and evidence-led for drones.
- Target UK-first consumer and hobbyist buyers, with Amazon UK as the main affiliate path, DJI-led launch coverage, and a small set of non-DJI rival anchors.
- Treat the plan as two linked systems:
  - a repeatable drone-testing program
  - a structured publishing system that turns those results into reviews, comparisons, and best pages

## Implementation Changes

- Add a dedicated review information architecture:
  - `/drone-reviews` for the review hub
  - `/drone-reviews/[slug]` for single-drone reviews
  - `/drone-comparisons/[slug]` for model-vs-model comparison pages
  - `/best-drones/[slug]` for category and use-case roundup pages
- Do not force this into the current generic blog model. Create dedicated content types and typed loaders so scores, specs, test runs, affiliate links, ranking logic, and comparison metadata are first-class fields.
- Use Contentful as the editorial source of truth, but keep the existing snapshot build pattern so pages are generated from typed local JSON at build time.
- Replace the earlier single `reviewHub` idea with three dedicated content models:
  - `droneReview`
  - `droneComparison`
  - `droneBestPage`
- Reuse the best parts of the current article system:
  - hero structure
  - sticky TOC behavior
  - author and trust modules
  - related content patterns
  - scroll progress
  - schema helpers
- Do not reuse the current quote-form ending on consumer review pages. Review CTAs should be affiliate-first, with commercial-service CTAs only where contextually relevant.
- Single review pages should include:
  - above-the-fold verdict card with overall score, updated date, firmware tested, affiliate disclosure, "Best For", and "Avoid If"
  - primary CTA `Check Amazon Price`
  - secondary CTA `Jump to Test Results`
  - sticky TOC, score breakdown, specs table, benchmark summary, deep-dive sections, FAQ, related reviews, and related comparisons
  - original photo and video evidence throughout
- Comparison pages should be hybrid structured pages, not generic articles:
  - above-the-fold winner summary
  - best-for-each-drone verdict
  - price context
  - primary affiliate CTA for both drones
  - side-by-side specs and score table
  - category winners across camera, battery, wind, tracking, portability, value, and ease of use
  - short editorial verdict explaining who should buy which
  - links to both full reviews and close alternatives
- Best pages should be formula-driven with explicit editorial override:
  - each page has an eligibility filter
  - each page has a use-case weighting profile
  - rankings are computed from eligible reviews
  - manual overrides are allowed only with a stored override reason
  - each ranked drone needs "why this pick" and "who should skip it" copy
- Launch content set:
  - 6-10 individual reviews across core DJI consumer categories
  - 2-3 non-DJI rival anchor reviews
  - consumer use-case best pages such as `best drones overall`, `best beginner drones`, `best camera drones`, `best travel drones`, `best drones for wind`, `best DJI drones`, and `best value drones`
  - model-vs-model comparison pages between your primary launch products

## Content Models and Public Interfaces

- Add typed review-domain models for:
  - `DroneReview`
  - `DroneComparison`
  - `DroneBestPage`
  - `DroneTestRun`
  - `DroneMetricSet`
  - `DroneScoreBreakdown`
  - `DroneSpecSheet`
  - `BestPageRuleSet`
- Keep scoring and ranking fields explicit rather than storing free-form JSON blobs, so page rendering, shortlist generation, schema generation, and QA stay deterministic.
- Content model shape:
  - `droneReview`: product identity, specs, affiliate links, raw test metrics, normalized scores, verdict copy, pros and cons, FAQ, media gallery, related reviews, related comparisons, related best pages
  - `droneComparison`: two linked review records, canonical slug, winner summary, category winners, editorial verdict notes, FAQ, related alternatives
  - `droneBestPage`: use-case keyword, intro, eligibility rules, weighted ranking profile, ranked review references, override notes, FAQ
- Add schema support for:
  - `Product`
  - `Review`
  - `BreadcrumbList`
  - `FAQPage`
  - `ItemList`
- Comparison-page URL handling:
  - store one canonical slug per pair, such as `dji-air-3s-vs-mini-4-pro`
  - reverse-order variants redirect to the canonical page to avoid duplicate content
- Internal linking rules:
  - each review links to 2-3 related comparison pages and 2-3 best pages
  - each comparison links to both full reviews and at least one best page
  - each best page links out to all ranked reviews

## Drone Test Protocol

- Standardize every review around fixed test conditions:
  - latest public firmware available at time of test
  - fresh batteries and standard propellers
  - same locations where possible
  - logged weather, wind, temperature, and light conditions shown on-page
- Core repeatable tests for every drone:
  - Setup and readiness: packed weight, unfolded footprint, controller setup friction, time from bag-open to takeoff, GPS lock time
  - Real flight time: three runs from lift-off to a defined battery cutoff, reporting median plus best and worst result
  - Hover and wind stability: fixed-height hover over a marked ground grid in calm and moderate wind, scoring drift, correction behavior, and footage stability
  - Photo quality: the same daylight high-detail scene and the same dusk or low-light scene, scoring detail, dynamic range, color, noise, and sharpening
  - Video quality: the same forward, lateral, ascent, and pan passes, scoring stabilization, rolling shutter, bitrate behavior, HDR usefulness, and low-light noise
  - Tracking reliability: the same walk or cycle route with turns and partial occlusion, scoring subject retention, framing, reacquisition, and failure rate
  - Obstacle avoidance: a controlled course with stationary obstacles, scoring warnings, braking, rerouting, and confidence, without intentional crash testing
  - Transmission and controller experience: fixed VLOS checkpoints on the same route, logging signal stability, live-view breakup, controller usability, screen visibility, and app friction
  - Portability and convenience: bag footprint, accessory burden, charging friction, relaunch speed, and general travel friendliness
  - Value and ownership friction: UK street price band, accessory and battery ecosystem cost, setup friction, geofencing friction, and buyer complexity
- Launch scoring model:
  - Camera and Image Quality 20%
  - Flight Performance and Wind Stability 15%
  - Battery and Real Flight Time 12%
  - Safety and Obstacle Avoidance 12%
  - Ease of Use 10%
  - Tracking and Intelligent Features 10%
  - Controller and App Experience 8%
  - Value for Money 8%
  - Portability and Setup Speed 5%
- Score category definitions:
  - Camera and Image Quality: This score reflects how good the drone's photos and videos actually look in real-world use. Assess detail, dynamic range, colour accuracy, low-light performance, stabilisation, and how consistent the camera is across different shooting conditions.
  - Flight Performance and Wind Stability: This measures how confident and controlled the drone feels in the air. Assess responsiveness, braking, hover precision, flight smoothness, and how well it holds position and footage quality in wind.
  - Battery and Real Flight Time: Manufacturer claims are not enough; this score is based on real-world endurance. Assess usable flight time, battery drain during typical filming, recharge practicality, and whether the battery system feels limiting or dependable.
  - Safety and Obstacle Avoidance: This score covers how well the drone helps prevent costly mistakes. Assess obstacle sensing coverage, warning reliability, braking behaviour, return-to-home confidence, and how safe the drone feels for less experienced pilots.
  - Ease of Use: This measures how simple the drone is to set up, launch, and fly well. Assess first-time user friendliness, menu clarity, setup friction, learning curve, and how quickly the drone goes from bag to airborne.
  - Tracking and Intelligent Features: This score reflects how useful the drone's smart features are in practice, not just on the spec sheet. Assess subject tracking reliability, framing, reacquisition, automated flight modes, and whether these tools genuinely improve the flying and filming experience.
  - Controller and App Experience: A strong drone can still be frustrating if the controller or app is poor. Assess controller ergonomics, screen visibility, connection reliability, live-view quality, menu design, and how polished the control experience feels overall.
  - Value for Money: This score looks at what the buyer actually gets for the price. Assess performance relative to cost, included accessories, camera quality, feature gaps, battery ecosystem pricing, and whether the drone feels overpriced, fair, or excellent value.
  - Portability and Setup Speed: This measures how easy the drone is to carry, unpack, and deploy quickly. Assess folded size, travel friendliness, accessory burden, and how fast the drone can be relaunched when you want to fly.
- Practical field-test mapping:
  - Camera and Image Quality: Shoot the same daylight scene and the same low-light scene on every drone, using stills and video clips. Compare detail, highlights, shadows, colour, noise, and any over-processing.
  - Flight Performance and Wind Stability: Run the same hover, forward pass, side pass, ascent, descent, and braking pattern on every drone. Repeat in light and moderate wind so drift, stability, and control feel can be compared directly.
  - Battery and Real Flight Time: Run three battery tests per drone from 100% to the defined battery cutoff. Record median runtime, best and worst result, and how realistic the claimed battery life feels.
  - Safety and Obstacle Avoidance: Use a controlled obstacle layout with clear visual markers. Test warning timing, braking reliability, rerouting behaviour where supported, and return-to-home confidence without intentional crash scenarios.
  - Ease of Use: Time the setup process from bag closed to airborne. Record GPS lock time, app friction, calibration hassle, and how intuitive the overall setup and first flight process feels.
  - Tracking and Intelligent Features: Use one repeatable subject route, including straight movement, turns, and partial occlusion. Record subject retention, framing quality, reacquisition, and smart-mode usefulness.
  - Controller and App Experience: Test screen brightness outdoors, signal stability, live-view lag, telemetry usefulness, menu clarity, and physical comfort during a real flight session.
  - Value for Money: Record UK street price, included accessories, additional battery cost, and feature trade-offs. Judge whether the performance genuinely matches the price bracket.
  - Portability and Setup Speed: Record carry weight, folded footprint, case or bag friction, accessory burden, and relaunch speed after landing.
- Store both raw metrics and normalized category scores so comparison pages and best pages can reuse the same underlying data.
- Explicit testing boundary:
  - do not publish risky or irresponsible max-range benchmarking as a core test; keep comparisons within repeatable, safe, VLOS-style evaluation

## Test Plan

- Product-methodology validation:
  - every launch drone must have a complete raw test record before publication
  - every published review must include original media evidence and logged test conditions
  - every scored category must map back to a defined test or editorial rubric
- Build and data validation:
  - all review, comparison, and best-page slugs are unique
  - score weights sum correctly
  - every comparison references exactly two valid review records
  - every best page has valid eligibility rules, ranking weights, and override reasons where used
  - canonical comparison slugs resolve correctly and reverse-order URLs redirect
- Page-generation QA:
  - all three page types statically generate from snapshot data
  - review pages render scorecard, specs, disclosure, CTA, TOC, benchmark sections, and schema
  - comparison pages render winner summary, side-by-side data, category winners, dual CTAs, and canonical metadata
  - best pages render ranked cards in the correct order, methodology summary, and FAQ
  - mobile layouts keep verdicts, CTAs, and key comparison data usable without desktop sidebars
- Manual acceptance tests:
  - add manual checklists in `tests/` for one review page, one comparison page, and one best page
  - verify the displayed winner on a comparison page matches stored category results and summary metadata
  - verify best-page ranking order matches the computed shortlist plus any explicit override
  - verify related-linking between reviews, comparisons, and best pages works in both directions
- Optional later automation:
  - once templates settle, add smoke Playwright checks for route generation, CTA presence, schema tags, and comparison canonical redirects
- Regression safety:
  - existing blog and service pages remain unchanged in layout, metadata, and CTA behavior unless intentionally updated

## Assumptions and Defaults

- UK-first copy, pricing context, and Amazon UK affiliate links.
- Consumer and hobbyist launch audience rather than enterprise buyers.
- DJI-led launch coverage with selected non-DJI anchor rivals.
- Comparison pages are model-vs-model first, not brand-vs-brand at launch.
- Best pages use formula-first ranking with documented editorial overrides, not pure manual ranking.
- Comparisons and best pages are dedicated editorial surfaces, not generic blog posts.
- The current repo's manual test-doc style remains the initial QA format, with automation added after the templates and data model stabilize.
- Every launch review includes your own original photos or video and visible test-condition metadata.
