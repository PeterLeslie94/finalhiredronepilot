# Service Pages Creation Plan

## Overview
Create **31 comprehensive service pages** using the LiDAR page (`app/services/lidar-mapping/page.tsx`) as the template. Each page will have full depth with 11+ content sections and AI-generated images.

---

## Template Structure (from LiDAR page)

Each service page will adapt these **H2 headings** from the LiDAR template, replacing "[Service]" with the specific service name:

### H2 Section Headings & Content (Adapt for Each Service)

| # | H2 Heading (Question Format) | Content Type |
|---|------------------------------|--------------|
| 1 | Hero Section | Service title, description, CTAs |
| 2 | What Is a Drone [Service]? | Definition + Conversion CTA box |
| 3 | How Much Does a Drone [Service] Cost? | Pricing table (6 tiers) |
| 4 | What Is the Difference Between Drone [Service] and [Alternative]? | Comparison cards |
| 5 | What Accuracy Can a Drone [Service] Achieve? | Technical specifications |
| 6 | What Are the Applications of Drone [Service]? | 6-item grid of use cases |
| 7 | [Service-Specific Key Feature Question]? | Service-specific feature highlight |
| 8 | What Deliverables Do You Get From a Drone [Service]? | 5-item list with descriptions |
| 9 | How Long Does a Drone [Service] Take? | Phase table + express option |
| 10 | How Do I Choose a Drone [Service] Provider? | 5-point checklist |
| 11 | Is Drone [Service] Cheaper Than Traditional [Method]? | Cost comparison + final CTA |

### Additional Page Elements

| # | Element | Content Type |
|---|---------|--------------|
| 12 | Sidebar | Surveyor card, TOC, quote form |
| 13 | Equipment Section | Shared component |
| 14 | Testimonials | Shared component |
| 15 | Related Services | 3 service cards |

### Original LiDAR H2s (Reference)

```
1. What Is a Drone LiDAR Survey?
2. How Much Does a Drone LiDAR Survey Cost?
3. What Is the Difference Between Drone LiDAR and Photogrammetry?
4. What Accuracy Can a Drone LiDAR Survey Achieve?
5. What Are the Applications of Drone LiDAR Survey?
6. Can Drone LiDAR Survey Penetrate Tree Canopy?
7. What Deliverables Do You Get From a Drone LiDAR Survey?
8. How Long Does a Drone LiDAR Survey Take?
9. How Do I Choose a Drone LiDAR Survey Provider?
10. Is Drone LiDAR Survey Cheaper Than Traditional Surveying?
```

---

## File Structure

```
app/services/
├── [slug]/page.tsx                    (existing dynamic - keep for fallback)
├── lidar-mapping/page.tsx             (existing template)
├── drone-topographic-survey/page.tsx  (new)
├── drone-photogrammetry-survey/page.tsx (new)
├── ... (29 more directories)

public/images/services/
├── lidar/                             (existing - 11 images)
├── topographic/                       (new - 11 images)
├── photogrammetry/                    (new - 11 images)
├── ... (29 more directories)

data/
├── services.ts                        (update with all 31 services)
```

---

## Image Requirements Per Page

Each service needs **11 AI-generated images** following this naming pattern:

| Image | Filename Pattern | Purpose |
|-------|-----------------|---------|
| 1 | `{slug}-hero.avif` | Hero background |
| 2 | `{slug}-what-is.avif` | Definition section |
| 3 | `{slug}-cost.avif` | Pricing section |
| 4 | `{slug}-comparison.avif` | Comparison section |
| 5 | `{slug}-accuracy.avif` | Technical specs |
| 6 | `{slug}-applications.avif` | Use cases |
| 7 | `{slug}-feature.avif` | Key capability |
| 8 | `{slug}-deliverables.avif` | Output products |
| 9 | `{slug}-timeline.avif` | Process/workflow |
| 10 | `{slug}-provider.avif` | Team/equipment |
| 11 | `service-{slug}.avif` | Card thumbnail (root level) |

**Total images needed: 31 services × 11 images = 341 images**

---

## Services List (31 Total)

### Core Survey Services (20 pages)

| # | Slug | Directory Name | Status |
|---|------|----------------|--------|
| 1 | drone-topographic-survey | topographic | Pending |
| 2 | drone-lidar-survey | lidar-mapping | EXISTS |
| 3 | drone-photogrammetry-survey | photogrammetry | Pending |
| 4 | drone-volumetric-survey | volumetric | Pending |
| 5 | drone-construction-monitoring | construction-monitoring | Pending |
| 6 | drone-roof-survey | roof | Pending |
| 7 | drone-site-survey | site | Pending |
| 8 | drone-land-survey | land | Pending |
| 9 | drone-elevation-survey | elevation | Pending |
| 10 | drone-facade-survey | facade | Pending |
| 11 | drone-setting-out-survey | setting-out | Pending |
| 12 | drone-bridge-inspection | bridge | Pending |
| 13 | drone-road-survey | road | Pending |
| 14 | drone-railway-survey | railway | Pending |
| 15 | drone-utility-survey | utility | Pending |
| 16 | drone-solar-farm-survey | solar-farm | Pending |
| 17 | drone-wind-farm-survey | wind-farm | Pending |
| 18 | drone-landfill-survey | landfill | Pending |
| 19 | drone-estate-survey | estate | Pending |
| 20 | drone-industrial-survey | industrial | Pending |

### Specialist Survey Services (5 pages)

| # | Slug | Directory Name | Status |
|---|------|----------------|--------|
| 21 | drone-corridor-mapping | corridor | Pending |
| 22 | drone-boundary-survey | boundary | Pending |
| 23 | drone-as-built-survey | as-built | Pending |
| 24 | drone-measured-building-survey | measured-building | Pending |
| 25 | drone-coastal-survey | coastal | Pending |

### Sector-Specific Surveys (6 pages)

| # | Slug | Directory Name | Status |
|---|------|----------------|--------|
| 26 | drone-mining-survey | mining | Pending |
| 27 | drone-agricultural-survey | agricultural | Pending |
| 28 | drone-environmental-survey | environmental | Pending |
| 29 | drone-archaeological-survey | archaeological | Pending |
| 30 | drone-flood-risk-survey | flood-risk | Pending |
| 31 | drone-forestry-survey | forestry | Pending |

---

## Content Adaptation Strategy

For each service page, adapt the LiDAR content by:

### 1. What Is Section
Define the specific survey type, its technology, and primary use cases.

### 2. Pricing Table
Adjust pricing tiers appropriate to the service complexity:
- **Micro Project**: Small residential/simple jobs
- **Small Project**: Standard single-site work
- **Medium Project**: Multi-day or complex sites
- **Large Project**: Major infrastructure
- **Major Project**: Enterprise/ongoing contracts

### 3. Comparison Section
Compare to relevant alternative:
- Survey types → Traditional surveying methods
- Inspections → Manual inspection/scaffolding
- Sector-specific → Industry standard approaches

### 4. Applications Grid
6 industry-specific use cases per service.

### 5. Key Capability
Unique selling point for that service type.

### 6. Deliverables
Service-specific outputs (point clouds, orthomosaics, reports, CAD files, etc.)

### 7. Timeline
Realistic turnaround based on service complexity.

---

## AI Image Generation

**Skill Reference**: `~/.claude/skills/generate-images/SKILL.md`

Uses Runware API with `google:4@2` (Imagen) model. See skill file for:
- API request format
- Supported dimensions (16:9 for hero, 1:1 for sections)
- Download and AVIF conversion workflow

### Hero Image Template
```
Professional aerial drone photography of [specific scene], UK landscape,
commercial drone survey in progress, high quality, photorealistic,
golden hour lighting, [industry-specific elements]
```

### Section Image Template
```
[Specific survey scene] from drone perspective, professional surveying
equipment visible, UK setting, photorealistic, high resolution,
[section-specific elements like data overlays, equipment, terrain]
```

### Service-Specific Prompts

#### Topographic Survey
- Hero: Rolling UK countryside with contour overlay visualization
- What-is: Drone capturing terrain data over varied landscape
- Cost: Survey team with equipment on construction site
- Applications: Housing development site with terrain markers

#### Photogrammetry Survey
- Hero: Detailed orthomosaic of urban development
- What-is: Multiple overlapping aerial images forming mosaic
- Cost: Commercial site with grid flight pattern visible
- Applications: Archaeological site with 3D model overlay

#### Volumetric Survey
- Hero: Quarry or stockpile with volume measurement overlay
- What-is: Aggregate stockpiles with cubic meter calculations
- Cost: Mining operation with multiple stockpiles
- Applications: Landfill cell with progression mapping

#### Construction Monitoring
- Hero: Active construction site from above
- What-is: Time-lapse comparison of site progress
- Cost: Large infrastructure project aerial view
- Applications: Building foundation with progress markers

#### Roof Survey
- Hero: Residential rooftops with thermal/condition overlay
- What-is: Detailed roof surface with measurement annotations
- Cost: Commercial building roof inspection
- Applications: Solar panel potential assessment view

[Continue for all 31 services...]

---

## Execution Batches

### Batch 1 (First 5)
1. Topographic Survey
2. Photogrammetry Survey
3. Volumetric Survey
4. Construction Monitoring
5. Roof Survey

### Batch 2 (Pages 6-10)
6. Site Survey
7. Land Survey
8. Elevation Survey
9. Facade Survey
10. Setting Out Survey

### Batch 3 (Pages 11-15)
11. Bridge Inspection
12. Road Survey
13. Railway Survey
14. Utility Survey
15. Solar Farm Survey

### Batch 4 (Pages 16-20)
16. Wind Farm Survey
17. Landfill Survey
18. Estate Survey
19. Industrial Survey
20. Corridor Mapping

### Batch 5 (Pages 21-25)
21. Boundary Survey
22. As-Built Survey
23. Measured Building Survey
24. Coastal Survey
25. Mining Survey

### Batch 6 (Pages 26-31)
26. Agricultural Survey
27. Environmental Survey
28. Archaeological Survey
29. Flood Risk Survey
30. Forestry Survey

---

## Files to Modify

### New Files
- `app/services/{slug}/page.tsx` × 30 new page files
- `public/images/services/{slug}/` × 30 new directories
- `public/images/services/{slug}/*.avif` × 330 new images

### Modified Files
- `data/services.ts` - Add all 31 services with full data
- `components/QuoteForm.tsx` - Update service dropdown with all options
- `app/sitemap.ts` - Ensure all new pages are indexed

---

## Success Criteria

- [ ] All 31 service pages render correctly
- [ ] All 341 images generated and optimized as AVIF
- [ ] Build completes without errors
- [ ] All internal links work
- [ ] SEO metadata unique per page
- [ ] Quote form includes all services
- [ ] Mobile responsive on all pages
- [ ] Related services cross-linking works
