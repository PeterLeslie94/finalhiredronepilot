# HireDronePilot

Next.js codebase for hiredronepilot.uk containing:
- Marketing frontend
- Contentful-powered blog
- Backend APIs for enquiry intake, admin workflow, pilot onboarding, and bidding

## Current Scope

- App Router frontend on Vercel
- API routes under `app/api/*` (Node runtime)
- Railway Postgres-backed workflow schema
- Blog content sourced from Contentful

## Requirements

- Node.js 20+
- npm
- Contentful credentials for blog routes

## Environment Setup

Create `.env.local` from `hiredronepilot.env.example` and fill:

```bash
cp hiredronepilot.env.example .env.local
```

Required variables:

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `DATABASE_URL`
- `OPENAI_API_KEY`

Optional:

- `CONTENTFUL_ENVIRONMENT` (defaults to `master`)

Optional:
- `CONTENTFUL_ENVIRONMENT` (defaults to `master`)
- `OPENAI_MODEL` (defaults to `gpt-4.1-mini`)
- `DB_SSL` (defaults to true)

## Database Migration

Run schema migrations against Railway:

```bash
npm run migrate
```

Migrations live in `db/migrations/`.

## Auth (Magic Link)

Admin and drone pilot access uses DB-backed magic-link sessions.

Bootstrap an admin identity:

```bash
node scripts/create-admin.mjs you@company.com
```

Then sign in at:

- `http://localhost:3000/login`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deployment

Primary target is Vercel.
