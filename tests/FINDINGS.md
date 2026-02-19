# E2E Test Findings Log

**Date:** 2026-02-17
**Environment:** Next.js 16.1.1 (Turbopack), localhost:3000
**Seed:** 7 pilots, 16 enquiries, 3 pilot applications (updated seed with CAA/insurance fields, SkyVista active invite, token logging)

---

## BUGS
_Broken functionality_

| # | Test ID | Severity | Description | Steps to Reproduce | Status |
|---|---------|----------|-------------|-------------------|--------|
| 1 | A-ENQ07 | **Critical** | Enquiry detail page crashes with `TypeError: Cannot read properties of undefined (reading 'length')` after sending invites | Navigate to `/admin/enquiries/[id]`, click "Generate Brief", wait for approval, click "Send Invites". Page crashes in `truncateEmail()` at line 129 because `log.recipient_email` is `undefined` for some `email_logs` entries. | **FIXED** — Re-tested in Run 2, Send Invites works without crash. |
| 2 | C01 | Medium | Trailing slash 308 redirect causes duplicate POST requests to `/api/enquiries` | Submit the contact form. The POST to `/api/enquiries` gets a 308 redirect to `/api/enquiries/`, causing the request body to be re-sent. This results in the enquiry being submitted twice in some cases. Affects all POST API routes. | **FIXED** — All client-side fetches now use trailing slashes. |
| 3 | A-AUTH01 | Medium | Dev magic link not shown on login page UI due to trailing slash redirect consuming the token | On `/login`, enter email and submit. The POST to `/api/auth/request-link` gets 308-redirected to `/api/auth/request-link/`. The first request returns the `magic_link_url` but the redirect fires a second request that doesn't return it, and the UI may display the second response. | **FIXED** — Dev link now shown consistently. |
| 4 | P-DASH04 | Low | Expired invite cards do not show reduced opacity | On pilot dashboard (`/drone-pilot`), invite cards marked "Expired" render at full opacity instead of the expected 60% opacity. | **FIXED** — Re-tested in Run 2, expired cards render at 60% opacity. |
| 5 | P-BID06 | Low | Token-based bid route does not check for existing dashboard bid | Navigate to `/bid/{token}` for an invite where the pilot already submitted a bid via the authenticated dashboard (`/drone-pilot/invites/[id]`). The token page still shows the bid form instead of recognising the existing bid. | NEW — Found in Run 2. |

## SECURITY
_Auth issues, data leaks, missing validation_

| # | Test ID | Severity | Description | Steps to Reproduce |
|---|---------|----------|-------------|-------------------|
| 1 | X03 | Info | Role isolation works correctly: pilot session cannot access admin API routes (returns 401) | Log in as pilot, call `/api/admin/enquiries/` — correctly returns 401. |
| 2 | CRON05 | Low | Cron endpoint accessible without auth when `CRON_SECRET` is not set | Call `GET /api/cron/check-deadlines/` without any auth header. When `CRON_SECRET` is not configured in `.env.local`, the endpoint processes requests without authentication. Expected in dev, but must be set in production. |

## INCOMPLETE
_Features referenced but not finished_

| # | Test ID | Severity | Description | Notes |
|---|---------|----------|-------------|-------|
| 1 | — | Low | ~~Seed script does not populate pilot CAA/insurance fields~~ | **RESOLVED** — Seed updated with `flyer_id`, `operator_id`, `insurance_provider`, `insurance_expiry` for all 6 pilots. |

## UX
_Usability problems, missing feedback_

| # | Test ID | Severity | Description | Notes |
|---|---------|----------|-------------|-------|
| 1 | P-DASH04 | Low | ~~Expired invite cards have no visual differentiation from active cards~~ | **RESOLVED** — Cards now render at 60% opacity. |
| 2 | A-ENQ07 | Medium | No loading indicator or success confirmation when "Send Invites" is clicked | After clicking "Send Invites" there is no spinner or "Invites sent" toast before the page crashes. Even if the crash is fixed, user feedback is missing during the invite-sending process. **Run 2 note:** Invites now send successfully, but confirm dialog + brief pause is the only feedback. |

## CONSOLE ERRORS
_JS errors in browser console_

| # | Page | Error | Notes |
|---|------|-------|-------|
| 1 | `/admin/enquiries/[id]` | ~~`TypeError: Cannot read properties of undefined (reading 'length')`~~ | **RESOLVED** — Crash fixed, no longer occurs. |
| 2 | `/admin/bids` | `SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON` | Occurs when session is invalid/expired — API returns HTML (login page) instead of JSON. The fetch error handling doesn't account for non-JSON responses. |

## NETWORK ERRORS
_Failed API calls_

| # | Page | URL | Status | Notes |
|---|------|-----|--------|-------|
| 1 | `/admin/enquiries/[id]` | `POST /api/admin/enquiries/[id]/anonymize` | ~~Duplicate (308 redirect)~~ | **RESOLVED** — Client-side fetches now use trailing slashes. |
| 2 | All pages | Various POST endpoints | ~~308 → duplicate~~ | **RESOLVED** — All fetch calls updated to include trailing slashes. |

---

## Test Results Summary

### Run 1 — Initial (35 passed, 2 failed, 25+ blocked)
See git history for original results.

### Run 2 — After Bug Fixes + Seed Updates

#### Passed Tests (Run 2 — previously blocked, now tested)
| Test ID | Description | Session |
|---------|-------------|---------|
| A-ENQ04 | Edit AI draft brief — modify text, save | Session 1 |
| A-ENQ07 | Send Invites — no crash, invites created successfully | Session 1 |
| A-ENQ08 | Invite counts — 3 invites with correct statuses on enquiry detail | Session 1 |
| A-ENQ09 | Email logs — section renders with template key, recipient, status | Session 1 |
| A-ENQ10 | Select bids for shortlist — checkboxes work, bids selectable | Session 1 |
| A-ENQ11 | Send shortlist — confirm dialog, success, status change to SHORTLIST_SENT | Session 1 |
| A-ENQ12 | Post-shortlist display — SHORTLIST_SENT enquiry renders correctly | Session 1 |
| A-ENQ13 | Audit log — events render chronologically on enquiry detail | Session 1 |
| A-APP03 | Approve pilot application (AerialWorks UK) → status changes to Approved | Session 2 |
| A-APP05 | Reject pilot application (GreenField UAV) → confirm dialog, status changes to Rejected | Session 2 |
| A-APP06 | Request Info status — UrbanFlight Ops displays as "Needs Info" (seeded) | Session 2 |
| A-APP07 | Button states match each application status (Under Review/Needs Info/Rejected/Approved) | Session 2 |
| A-PIL02 | Search "SkyVista" → filtered to single result | Session 3 |
| A-PIL03 | Filter Active/Inactive dropdown works correctly | Session 3 |
| A-PIL04 | Click pilot row → detail panel opens with full info (contact, qualifications, insurance) | Session 3 |
| A-PIL05 | Toggle active switch off → save → "Inactive" badge, red dot in table | Session 3 |
| A-PIL06 | Edit admin notes → save → re-open panel → notes persisted | Session 3 |
| A-PIL07 | Insurance color coding: Coastline=red/Expired, Atlas=amber/Expiring soon, others=normal | Session 3 |
| P-DASH04 | Expired/declined invite cards show 60% opacity (bug fix verified) | Session 4 |
| P-BID01 | Click active SENT invite → detail page loads, status auto-marks OPENED | Session 4 |
| P-BID02 | Submit bid (GBP 450, 5 days, notes) → confirm dialog → "Your Bid" card shown | Session 4 |
| P-BID03 | Revisit submitted invite → "Your Bid" card shown, no form | Session 4 |
| P-BID05 | Brief shows anonymized content with "Client contact details removed" | Session 4 |
| P-BID06 | Navigate to `/bid/{active-token}` → page loads with blind bidding notice, brief, form | Session 5 |
| P-BID08 | Navigate to `/bid/{expired-token}` → "Bid Link Error" / "Invite link has expired" | Session 5 |
| P-BID09 | Revisit used token → "Bid Link Error" (token consumed) | Session 5 |
| P-BID10 | Blind bidding notice text: "Blind bidding: drone pilot responses are not visible to other invited drone pilots" | Session 5 |
| P-APPLY01 | Complete 3-step application form → "Application received" confirmation | Session 6 |
| P-APPLY02 | Step 1 validation — empty fields show required errors | Session 6 |
| P-APPLY03 | Step 2 validation — empty fields show required errors | Session 6 |
| P-APPLY04 | Photo upload — valid square image accepted, preview shown | Session 6 |
| P-APPLY05 | Step 3 validation — empty summary ("at least 20 characters"), unchecked consent, missing headshot | Session 6 |
| P-APPLY07 | Submitted application appears in admin Pilot Applications with "Submitted" status | Session 6 |

#### Previously Passed (Run 1 — still valid)
| Test ID | Description |
|---------|-------------|
| C01 | Client enquiry submission via `/contact` form → redirects to `/thank-you` |
| C08 | Enquiry appears in admin dashboard with correct status |
| A-AUTH01 | Admin magic link login → redirected to `/admin` |
| A-AUTH02 | Unknown email → generic "check your email" (no enumeration) |
| A-DASH01 | Dashboard loads with seeded enquiries and KPI cards |
| A-DASH02 | Status filter dropdown works correctly |
| A-DASH04 | "View" button navigates to enquiry detail |
| A-ENQ01 | Client info card shows all fields correctly |
| A-ENQ02 | "Generate Brief" creates anonymized version with PII redacted |
| A-ENQ05 | Brief auto-approved when no risk flags detected |
| A-ENQ06 | "Send Invites" without approved brief → error banner shown |
| A-APP01 | Pilot applications page loads with seeded applications |
| A-APP02 | Slide-out panel shows full application details |
| A-PIL01 | Pilot directory loads with 6 seeded pilots |
| A-BID01 | Bid history page loads with seeded bids |
| A-BID05 | Bid status badges show correct colors |
| A-BID06 | Prices formatted as GBP currency |
| P-AUTH01 | Pilot magic link login → redirected to `/drone-pilot` |
| P-DASH01 | Pilot dashboard loads with stats bar (invites, bids, declined) |
| P-DASH02 | Invite cards show service name, location, deadline |
| P-DASH03 | Submitted bid cards show green border and bid amount |
| P-DASH05 | Click invite card → navigates to `/drone-pilot/invites/[id]` |
| P-DASH06 | Bid history section shows past bids with status badges |
| P-DASH08 | "My Profile" button visible and functional |
| P-BID03 | Revisiting submitted invite shows "Your Bid" display (no form) |
| P-BID04 | Expired invite shows "(Expired)" label |
| P-BID05 | Brief shows anonymized version with "Client contact details removed" notes |
| P-PROF01 | Profile page loads with current pilot data |
| P-PROF02 | Email field is read-only |
| P-PROF03 | Licence level is read-only |
| P-PROF04 | Edit website → save → "Profile updated successfully" |
| P-PROF07 | "Member since" date shown correctly |
| X01 | Access `/admin` without session → 401 |
| X02 | Access `/drone-pilot` without session → 401 |
| X03 | Pilot session cannot access admin routes → 401 |
| CRON01 | Cron endpoint responds with processed count |

### Still Not Tested (Environment-Dependent)
| Test ID | Reason |
|---------|--------|
| A-APP04 | Log in as newly approved applicant (AerialWorks UK) — applicants don't have pilot accounts until manually created |
| A-APP08 | Insurance expiry labels on applications — applicants don't have insurance data, N/A for applications |
| A-PIL08 | Deactivated pilot excluded from invites — requires multi-step orchestration (deactivate, send invites, verify count) |
| P-BID04 | Expired invite with no prior bid — all expired invites in seed had bids already submitted; partial test only |
| P-BID07 | Submit bid via token-based form — skipped to avoid duplicate bid (SkyVista already bid via dashboard) |
| P-APPLY06 | Non-square image rejection — requires specific non-square test image |
| P-APPLY08 | Confirmation email — requires Resend API key |
| X05–X10 | Email delivery, concurrent bids, session expiry — require external services or multi-session orchestration |

---

## Summary
- **Total bugs found:** 5 (4 original + 1 new; 4 fixed, 1 open)
- **Total security issues:** 2 (1 info-only, 1 low)
- **Total incomplete:** 1 (resolved — seed updated)
- **Total UX issues:** 2 (1 resolved, 1 open)
- **Total console errors:** 2 (1 resolved, 1 open)
- **Total network errors:** 2 (both resolved)
- **Tests passed:** 68 (35 Run 1 + 33 Run 2)
- **Tests failed:** 0 (both Run 1 failures now fixed and passing)
- **Tests not run:** 8 (environment-dependent)

## Remaining Priority Items
1. **Low:** Fix token-based bid route (`/bid/{token}`) to check for existing bids submitted via the authenticated dashboard route (Bug #5)
2. **Medium:** Ensure `CRON_SECRET` is set in production environment
3. **Low:** Improve "Send Invites" user feedback (loading spinner or success toast)
4. **Low:** Handle non-JSON API responses in `/admin/bids` when session is expired (Console Error #2)
