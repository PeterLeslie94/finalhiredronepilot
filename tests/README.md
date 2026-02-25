# Manual E2E Test Suite

Manual test scripts for the HireDronePilot marketplace platform. These cover every user-facing workflow across three personas: **Client**, **Admin**, and **Drone Pilot**.

## Prerequisites

| Requirement | Detail |
|---|---|
| Node.js | v18+ |
| PostgreSQL | Running instance with migrations applied |
| `.env.local` | Must contain the variables below |
| Dev server | `npm run dev` on `http://localhost:3000` |
| Seed data | Loaded via `node scripts/seed-demo.mjs --confirm` |

### Required Environment Variables

```
DATABASE_URL=postgresql://username:password@host:5432/database
DB_SSL=true

# Email (optional for basic tests, required for email-delivery tests)
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=HireDronePilot <noreply@hiredronepilot.uk>

# AI anonymization (required for Generate Brief tests)
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4.1-mini

# Cron auth (optional locally; set to test auth guard)
CRON_SECRET=some-secret-value
```

### Seeding Data

```bash
# Load demo data (enquiries, pilots, invites, bids, applications)
node scripts/seed-demo.mjs --confirm

# Reset: remove all seed data then re-seed
node scripts/seed-demo.mjs --confirm --reset

# Remove seed data only (no re-seed)
node scripts/seed-demo.mjs --confirm --reset
# (then skip the re-seed by only running with --reset)
```

The seed script tags its data (`source_form = 'seed-demo'`, `notes = 'seed-demo'`, `review_notes = 'seed-demo'`) so it only touches its own records.

### Seeded Test Accounts

| Role | Email | Notes |
|---|---|---|
| Admin | First admin in `admins` table (or `seed.admin@example.com` if no admin exists) | Created by seed if no admin row exists |
| Pilot | `seed.skyvista@example.com` | SkyVista Aerial Ltd |
| Pilot | `seed.northpeak@example.com` | NorthPeak UAV |
| Pilot | `seed.coastline@example.com` | Coastline Drone Ops |
| Pilot | `seed.atlas@example.com` | Atlas Mapping |
| Pilot | `seed.ridgeline@example.com` | RidgeLine Thermal |
| Pilot | `seed.metro@example.com` | Metro Survey Drones |
| Applicant | `seed.applicant1@example.com` | AerialWorks UK (SUBMITTED) |
| Applicant | `seed.applicant2@example.com` | GreenField UAV (UNDER_REVIEW) |
| Applicant | `seed.applicant3@example.com` | UrbanFlight Ops (NEEDS_INFO) |

### Dev Magic-Link Shortcut

In non-production (`NODE_ENV !== 'production'`), the `/login` page returns a clickable **Dev link** for eligible admin accounts after requesting a magic link.

## Test Notation

Each test has:

- **ID**: Unique identifier (e.g. `C01`, `A-DASH03`, `P-BID06`)
- **Title**: Short description of the scenario
- **Preconditions**: State required before the test
- **Steps**: Numbered actions to perform
- **Expected Result**: What should happen
- **Pass/Fail**: `[ ]` checkbox

## File Index

| File | Persona | Coverage |
|---|---|---|
| `01-client-enquiry-submission.md` | Client | Quote form, FloatingCTA, validation |
| `02-admin-login.md` | Admin | Magic-link login/logout |
| `03-admin-dashboard.md` | Admin | Dashboard KPIs, filtering, navigation |
| `04-admin-enquiry-lifecycle.md` | Admin | Full enquiry triage workflow |
| `05-admin-pilot-applications.md` | Admin | Application review actions |
| `06-admin-pilot-directory.md` | Admin | Pilot search, filter, edit |
| `08-pilot-application.md` | Pilot | Application form submission |
| `09-pilot-login.md` | Pilot | Pilot-login retirement + token invite access |
| `10-pilot-dashboard.md` | Pilot | Dashboard/API retirement checks |
| `12-pilot-profile.md` | Pilot | Profile self-service retirement checks |
| `14-cross-cutting.md` | All | Auth edge cases, email, errors |
