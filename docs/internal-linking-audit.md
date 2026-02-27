# Internal Linking Audit

## What This Is

The internal linking audit maps every public page on HireDronePilot, suggests keyword-rich anchor text for linking to each page, and records which pages already link to each destination. The goal is to reveal gaps where new internal links should be added to improve SEO link equity distribution across the site.

**Output:** `/data/internal-linking-audit.csv`
**Script:** `/scripts/generate-linking-csv.ts`

## CSV Columns

| Column | Description |
|--------|-------------|
| **URL** | Full path of the destination page (e.g. `/services/drone-roof-inspection`) |
| **SEO Keywords for Linking** | Pipe-separated anchor text variations to use when linking *to* this page. These are keyword-rich phrases designed for internal link anchor text, not just page titles. |
| **Pages Already Linking Here** | Pipe-separated list of source pages that currently contain an internal link to this URL. `(none)` means no page-specific links exist. |

## What Counts as a Link

The audit tracks **page-specific body links only**. Links from the global header and footer are deliberately excluded because they appear on every page and don't represent editorial linking decisions.

Pages scanned for outgoing links:

- Homepage (`/`)
- About (`/about`)
- Services listing (`/services`)
- Dynamic service template (`/services/[slug]`)
- All 46 individual service pages (`/services/{slug}`) — static route overrides
- Pricing (`/pricing`)
- Resources (`/resources`)
- Pilots directory (`/pilots`)
- Contact (`/contact`)
- Drone Statistics (`/drone-statistics`)
- CAA Drone Theory Test (`/caa-drone-theory-test`)
- All 29 city pages (`/cities/{slug}`)

The HTML Sitemap (`/html-sitemap`) is **not** scanned. It links to every page on the site by design, so including it would mask genuine linking gaps. Blog posts are hosted on Contentful and are also not scanned.

## How to Regenerate

```bash
npx tsx scripts/generate-linking-csv.ts
```

The script reads live data from `/data/services.ts`, `/data/cities.ts`, and `/data/resources.ts`, then scans the source files listed above. Re-run it after making linking changes to get an updated audit.

## Current Coverage (103 Pages)

| Page Type | Count |
|-----------|-------|
| Static pages | 19 |
| Service pages | 51 |
| City pages | 29 |
| Calculator pages | 4 |
| **Total** | **103** |

## How Keywords Are Generated

### Service Pages — Automatic Patterns

Each service page gets keywords generated from its title using these rules:

1. **Full title** — e.g. "Drone Roof Inspection"
2. **Without "Drone" prefix** — e.g. "Roof Inspection"
3. **"Drone" prefix added** if the title doesn't start with "Drone" — e.g. "Drone Building Inspection"
4. **Survey variant** — replaces "Mapping"/"Monitoring"/"Analysis" with "Survey" where applicable
5. **Services suffix** — e.g. "Drone Roof Inspection Services"
6. **UK variant** — e.g. "Roof Inspection UK"
7. **Category-level term** — e.g. "Drone Inspection Services" for Inspection category pages
8. **Assessment variant** — for inspection pages, e.g. "Roof Assessment"
9. **Aerial Photography** — added for all photography/videographer pages

### City Pages — Location Patterns

Every city page gets seven keyword variations:

- `Drone Survey {City}` / `{City} Drone Survey`
- `Aerial Survey {City}`
- `Drone Services {City}`
- `Drone Pilot {City}`
- `Drone Mapping {City}`
- `Hire Drone Pilot {City}`

### Static Pages — Hand-Curated

Core pages have manually chosen keywords. For example:

- `/pricing` — Drone Pricing, Drone Costs UK, Drone Survey Costs, How Much Does a Drone Survey Cost, Drone Pilot Day Rates, Drone Hire Cost, Drone Service Pricing
- `/contact` — Contact Us, Get a Drone Quote, Request a Quote, Hire a Drone Pilot, Free Drone Survey Quote, Get in Touch

### Calculator Pages — Hand-Curated

Each calculator has five manually chosen keyword variations relevant to its purpose.

## How Link Detection Works

The script uses regex to extract `href` values from source files. It matches:

- **JSX attributes** — `href="/path"`, `href='/path'`
- **JSX expressions** — `href={'/path'}`, `` href={`/path`} ``
- **Data object properties** — `href: '/path'`, `href: "/path"` (catches links defined in arrays like pricing's `serviceData`)
- **Path properties** — `path: '/path'` (catches data arrays that feed into `<Link>` components)
- **Template literals in properties** — `` path: `/services/${service.slug}` `` (catches dynamically built paths)

Dynamic template expressions containing `${...}` are expanded against the known service slugs, city slugs, and calculator slugs to resolve all concrete URLs they produce.

Self-links are excluded (a page linking to itself is not counted).

## Key Findings

### Well-Linked Pages
Services that appear on the homepage and all 29 city pages have strong internal linking (30+ incoming links):
- `/services/drone-survey`
- `/services/drone-lidar-mapping`
- `/services/thermal-imaging`
- `/services/topographic-survey`
- `/services/building-inspection`
- `/services/drone-volumetric-survey`

### Completed Improvements (Feb 2026)

**~179 contextual body links added** across 50 pages (5 static + 45 service pages). Each page received up to 5 keyword-rich `<Link>` elements in `<p>` body text, using the gold hover-underline pattern: `<Link href="..." className="text-gold hover:underline">`. Links target underlinked service pages to distribute link equity from high-authority pages.

Pages updated:
- **Static pages (5):** About, Resources, Pilots, Drone Statistics, CAA Theory Test
- **Survey & Mapping cluster (12):** site-survey, land-survey, boundary-survey, elevation-survey, corridor-mapping, topographical-survey, photogrammetry-survey, point-cloud-mapping, lidar-mapping, measured-building-survey, estate-survey, bathymetric-survey
- **Construction & Infrastructure cluster (11):** construction-monitoring, as-built-survey, setting-out-survey, volumetric-survey, road-survey, railway-survey, utility-survey, bridge-inspection, facade-survey, roof-inspection, industrial-survey
- **Environmental & Specialist cluster (17):** environmental-survey, agricultural-survey, forestry-survey, coastal-survey, flood-risk-survey, landfill-survey, mining-survey, quarry-survey, solar-survey, wind-farm-survey, water-quality-assessment, confined-space-inspection, ground-penetrating-radar, sonar-survey, gas-detection, crop-spraying, archaeological-survey
- **Creative cluster (5):** photography, videographer, wedding-photography, real-estate-photography, thermal-imaging

### Remaining Gaps

**City pages** — All 29 city pages still show `(none)` for incoming body links from non-city pages. Adding city references to service pages or the homepage would strengthen these location pages.

**Core pages with few or no body links:**
- `/cities` — no body links from any scanned page
- `/html-sitemap` — no body links from any scanned page

**Legal/policy pages** — Privacy, terms, cookies, etc. have no page-specific body links. This is expected since they're typically in the footer only.

## How to Use This Audit

1. **Open the CSV** in a spreadsheet
2. **Sort by "Pages Already Linking Here"** to find pages with `(none)` or very few sources
3. **Pick anchor text** from the "SEO Keywords for Linking" column when adding new internal links
4. **Prioritise** adding contextual links to city pages and underlinked service pages from high-authority pages (homepage, about, pricing)
5. **Re-run the script** after making changes to verify the new links are detected
