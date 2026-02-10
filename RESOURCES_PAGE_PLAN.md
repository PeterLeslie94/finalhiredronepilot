# Resources Page Implementation Plan

## Overview

Create a comprehensive `/resources/` section with:
- **Main hub page** at `/resources/`
- **4 Calculator pages** (individual SEO link-bait pages)
- **Full blog system** with Contentful (placeholder for now)
- **Videos & Tutorials** section
- **Drone reviews** with star ratings

---

## Phase 1: Foundation & Data Layer

### 1.1 Create Data File (`data/resources.ts`)

```
data/resources.ts
```

**Types to define:**
- `Calculator` - slug, title, description, icon, features, SEO fields
- `Video` - id, title, thumbnail, youtubeId, duration, category, tags
- `DroneReview` - id, name, manufacturer, image, rating (1-5), specs, pros/cons, category
- `BlogCategory` - slug, name, description
- `BlogArticle` - slug, title, excerpt, featuredImage, author, publishedDate, content, tags

**Helper functions:**
- `getCalculatorBySlug()`, `getVideosByCategory()`, `getReviewBySlug()`, `getFeaturedReviews()`
- `getArticleBySlug()`, `getArticlesByCategory()`, `getAllArticles()`

### 1.2 Create Placeholder Blog Data (`data/blog.ts`)

2 sample articles:
1. "Understanding Topographic Survey Accuracy" (Technical Guide)
2. "How Drone Surveys Are Transforming UK Construction" (Industry Insights)

---

## Phase 2: Reusable Components

### 2.1 Create Components Directory Structure

```
components/resources/
├── StarRating.tsx           # Reusable 1-5 star rating (half-star support)
├── CalculatorCard.tsx       # Card linking to calculator pages
├── VideoCard.tsx            # Video thumbnail with play overlay
├── DroneReviewCard.tsx      # Review card with rating display
├── RangeSlider.tsx          # Styled range input for calculators
├── CalculatorResult.tsx     # Results display component

components/blog/
├── ArticleCard.tsx          # Blog listing card
├── ArticleHero.tsx          # Full article hero section
├── ArticleContent.tsx       # Rich text renderer
├── AuthorCard.tsx           # Sidebar author info
├── CategoryFilter.tsx       # Category pills/tabs
├── RelatedArticles.tsx      # Related articles grid
```

### 2.2 Component Patterns to Follow

Based on existing `ServiceCard.tsx`:
- Gold border (3px)
- Image with gradient overlay
- Hover: `translateY(-5px)` + gold shadow
- Schema.org markup where applicable

---

## Phase 3: Main Resources Hub Page

### 3.1 Create `/app/resources/page.tsx`

**Sections:**
1. Hero (teal bg, similar to services page)
2. Calculators grid (4 cards)
3. Videos & Tutorials (filterable by category)
4. Drone Reviews (featured cards with "View All")
5. Blog preview (latest 3 articles)
6. CTA section

**SEO Metadata:**
```typescript
title: 'Drone Survey Resources | Calculators, Tutorials & Reviews'
description: 'Free drone survey resources...'
```

---

## Phase 4: Calculator Pages (SEO Link-Bait)

### 4.1 Directory Structure

```
app/resources/calculators/
├── survey-cost-estimator/page.tsx
├── flight-time-calculator/page.tsx
├── roi-calculator/page.tsx
└── area-measurement-tool/page.tsx
```

### 4.2 Calculator Form Components

```
components/resources/calculators/
├── SurveyCostForm.tsx
├── FlightTimeForm.tsx
├── ROIForm.tsx
└── AreaMeasurementForm.tsx
```

### 4.3 Calculator Logic

**Survey Cost Estimator:**
- Inputs: area (slider), complexity, deliverables (checkboxes), turnaround, GCP
- Output: Price range estimate + CTA for formal quote

**Flight Time Calculator:**
- Inputs: area, drone model (from equipment.ts), altitude, overlap %
- Output: Flight time, battery count, coverage rate

**ROI Calculator:**
- Inputs: area, traditional quote, surveys/year, risk level
- Output: Savings %, time saved, comparison chart

**Area Measurement Tool:**
- Interactive map (Leaflet) with polygon drawing
- Unit conversions (sqm, hectares, acres)

### 4.4 Calculator Page Structure

Each page:
1. Mini hero with H1 (target keyword)
2. Interactive calculator form
3. How It Works section
4. FAQ section (with FAQ schema)
5. Related calculators
6. CTA for formal quote
7. Schema.org `SoftwareApplication` markup

---

## Phase 5: Blog System

### 5.1 Directory Structure

```
app/resources/blog/
├── page.tsx              # Blog listing
└── [slug]/
    └── page.tsx          # Individual article
```

### 5.2 Blog Listing Page (`/resources/blog/page.tsx`)

**Sections:**
1. Hero (teal bg)
2. Category filter tabs
3. Featured article (full-width)
4. Article grid (3 columns)
5. CTA section

### 5.3 Article Page (`/resources/blog/[slug]/page.tsx`)

**Layout:**
- **Hero:** Breadcrumb, category badge, title, excerpt, author/date
- **Two columns:**
  - Left: ArticleContent + social share + CTA box
  - Right (sticky): AuthorCard + TableOfContents
- **Related Articles** section
- **Quote form** section

### 5.4 Contentful Prep

Structure data to mirror Contentful content model:
```typescript
interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  category: BlogCategory;
  author: Author;
  publishedDate: string;
  content: RichTextBlock[];  // Will become Contentful rich text
  tags: string[];
}
```

Future swap: Replace `data/blog.ts` functions with Contentful API calls.

---

## Phase 6: SEO & Schema Markup

### 6.1 Add to `components/SchemaMarkup.tsx`

- `CalculatorSchema` - SoftwareApplication type
- `ProductReviewSchema` - Review type for drone reviews
- `BlogPostingSchema` - BlogPosting type for articles

### 6.2 Update `app/sitemap.ts`

Add:
- `/resources/`
- `/resources/calculators/*` (4 pages)
- `/resources/blog/`
- `/resources/blog/[slug]` (dynamic)

### 6.3 Update Header Navigation

Add "Resources" dropdown or link in `components/Header.tsx`

---

## Phase 7: CSS Additions

Add to `globals.css`:

```css
/* Range slider styling */
.range-slider { ... }

/* Calculator result highlight */
.calculator-result { ... }
.calculator-result-value { font-size: 3rem; color: var(--color-gold); }

/* Blog article styles */
.article-card { ... }
.article-card-overlay { ... }
.article-card-category { ... }
```

---

## Implementation Order

### Sprint 1: Foundation
- [ ] Create `data/resources.ts` with all types and placeholder data
- [ ] Create `data/blog.ts` with 2 sample articles
- [ ] Create `StarRating.tsx` component
- [ ] Create `CalculatorCard.tsx` component

### Sprint 2: Resources Hub
- [ ] Create `/app/resources/page.tsx` (main hub)
- [ ] Create `VideoCard.tsx`
- [ ] Create `DroneReviewCard.tsx`
- [ ] Add navigation link in Header

### Sprint 3: Calculators
- [ ] Create calculator form base components (`RangeSlider`, `CalculatorResult`)
- [ ] Implement Survey Cost Estimator (highest SEO value)
- [ ] Implement Flight Time Calculator
- [ ] Implement ROI Calculator
- [ ] Implement Area Measurement Tool

### Sprint 4: Blog System
- [ ] Create `ArticleCard.tsx`
- [ ] Create `/app/resources/blog/page.tsx` (listing)
- [ ] Create `ArticleHero.tsx`, `ArticleContent.tsx`, `AuthorCard.tsx`
- [ ] Create `/app/resources/blog/[slug]/page.tsx` (article page)
- [ ] Create `CategoryFilter.tsx`, `RelatedArticles.tsx`

### Sprint 5: Polish & SEO
- [ ] Add schema markup components
- [ ] Update sitemap.ts
- [ ] Add CSS to globals.css
- [ ] Test responsive design
- [ ] Internal linking between resources and services

---

## Critical Files to Modify

| File | Changes |
|------|---------|
| `data/resources.ts` | NEW - All resource data |
| `data/blog.ts` | NEW - Blog placeholder data |
| `app/resources/page.tsx` | NEW - Hub page |
| `app/resources/calculators/*/page.tsx` | NEW - 4 calculator pages |
| `app/resources/blog/page.tsx` | NEW - Blog listing |
| `app/resources/blog/[slug]/page.tsx` | NEW - Article pages |
| `components/resources/*.tsx` | NEW - Resource components |
| `components/blog/*.tsx` | NEW - Blog components |
| `components/Header.tsx` | Add Resources nav link |
| `components/SchemaMarkup.tsx` | Add new schema types |
| `app/sitemap.ts` | Add resource pages |
| `app/globals.css` | Add resource/blog styles |

---

## Notes

- All pages use `'use client'` directive (following existing pattern)
- Color system: teal (#0a4d5c), gold (#f5b800)
- Path aliases: `@/components`, `@/data`
- Images: Use `.avif` format, stored in `/public/images/resources/`
- Blog will use Contentful CMS - current implementation uses placeholder data that mirrors Contentful structure
