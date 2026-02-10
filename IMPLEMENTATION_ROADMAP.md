# HireDronePilot Rebuild Roadmap

## Purpose
Track the phased adaptation of the `skykam` base into HireDronePilot, then deliver the new backend and bidding platform.

## Locked Decisions
- Base codebase: `skykam` (new standalone codebase)
- Rebrand strategy: global-first, then full sweep
- Service and area pages: keep all existing pages, rebrand copy only
- Blog: keep Contentful feed in-app
- New backend stack (next phase): Next.js + Prisma + Postgres
- Bidding model (next phase): sealed bids with deadline

## Phase Plan

### Phase 1A - Brand Foundation + Homepage Hybrid
Status: `in_progress`

#### Tasks
- [x] Replace primary accent palette from red to orange in `app/globals.css`
- [x] Rebrand global metadata and canonical domain in `app/layout.tsx`
- [x] Rebrand schema/publisher/org data in `components/SchemaMarkup.tsx`
- [x] Rebrand header identity/contact in `components/Header.tsx`
- [x] Rebrand footer identity/contact/legal text in `components/Footer.tsx`
- [x] Rewrite homepage messaging in `app/page.tsx` using HireDronePilot copy while keeping key Skykam visual sections
- [x] Update domain references in `app/robots.ts` and `app/sitemap.ts`
- [ ] Run lint/build checks and fix regressions

#### Acceptance Criteria
- [ ] Homepage messaging clearly reflects HireDronePilot positioning
- [ ] Orange accent theme is active globally
- [ ] Header/footer, schema, and metadata no longer identify as Skykam
- [ ] Existing service and area routes remain functional

### Phase 1B - Full Rebrand Sweep
Status: `pending`

#### Tasks
- [ ] Sweep `app/services/**` for Skykam naming and hardcoded domain references
- [ ] Sweep `app/areas/**` for Skykam naming and hardcoded domain references
- [ ] Sweep `data/**`, `components/**`, and `lib/**` for remaining brand references
- [ ] Update legal/policy pages (`terms`, `privacy-policy`, `cookies`) to HireDronePilot branding
- [ ] Re-check structured data consistency across pages

#### Acceptance Criteria
- [ ] No public-facing Skykam references remain
- [ ] No `skykam.co.uk` references remain except intentional historical citations

### Phase 2 - New Backend + Bidding Engine
Status: `pending`

#### Tasks
- [ ] Define new Prisma schema for users/jobs/bids/timeline/audit
- [ ] Implement versioned API (`/api/v1`) for auth, jobs, bids, admin actions
- [ ] Implement sealed-bid lifecycle (`LIVE -> BIDDING_CLOSED -> ASSIGNED -> COMPLETED`)
- [ ] Add CSRF, RBAC, and persistent rate-limiting controls
- [ ] Add notifications and status-event logging
- [ ] Connect frontend to new APIs behind feature flags

#### Acceptance Criteria
- [ ] End-to-end bid flow works with deadline and assignment safeguards
- [ ] Security baseline passes auth/CSRF/rate-limit checks
- [ ] Frontend routes consume new backend without regressions

### Phase 3 - Migration + Cutover
Status: `pending`

#### Tasks
- [ ] Prepare data migration scripts and dry-run on staging snapshots
- [ ] Create production freeze runbook
- [ ] Execute migration and cutover
- [ ] Run smoke tests and monitor post-cutover
- [ ] Keep rollback path ready until stabilization window closes

#### Acceptance Criteria
- [ ] Production cutover completed with validated core flows
- [ ] Rollback plan verified and documented

## Risks and Mitigations
- Brand drift from partial rebrand: enforce automated grep checks for old brand strings.
- SEO disruption: preserve existing route structure in phase 1; only update brand/domain metadata.
- Scope creep during homepage rewrite: keep section structure and visuals stable while updating copy.

## Change Log
- 2026-02-10: Roadmap created; Phase 1A started.
- 2026-02-10: Completed core Phase 1A rebrand edits (theme, metadata, schema, header, footer, homepage, sitemap/robots).
- 2026-02-10: Validation run attempted. Lint reported extensive pre-existing baseline issues; build blocked by Google Fonts network fetch in this environment.
- 2026-02-10: Contentful blog cutover completed for resources/blog routes. Added `hiredronepilot.env` local secret file pattern and `hiredronepilot.env.example`.

## Local Run Notes (Contentful)
- Keep secrets in `hiredronepilot.env` (git-ignored).
- Load env before dev:
  - `cd /tmp/skykam`
  - `set -a; source hiredronepilot.env; set +a`
  - `npm run dev`
