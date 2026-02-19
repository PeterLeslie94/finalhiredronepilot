# 09 — Pilot Login

**Covers:** `/login` (pilot path), `POST /api/auth/request-link`, `GET /api/auth/verify` → redirect to `/drone-pilot`

## Preconditions

- Dev server running
- Seed data loaded (seeded pilots have `user_identities` with role `DRONE_PILOT`)

---

### P-AUTH01 — Pilot login via dev magic link

**Steps:**
1. Navigate to `/login`
2. Enter a seeded pilot email: `seed.skyvista@example.com`
3. Click **Send Sign-In Link**
4. Dev link appears
5. Click the dev link

**Expected:**
- Redirected to `/drone-pilot` (not `/admin` — role-based redirect)
- `hdp_session` cookie set
- Pilot dashboard loads with invitations

**Pass:** `[ ]`

---

### P-AUTH02 — Unapproved pilot email (no user_identity)

**Steps:**
1. Navigate to `/login`
2. Enter an applicant email that has NOT been approved (e.g. `seed.applicant2@example.com` — UNDER_REVIEW)
3. Click **Send Sign-In Link**

**Expected:**
- Page shows "Check your email" / "If this email is registered, you will receive a sign-in link shortly."
- No dev link appears (email exists in `pilot_applications` but NOT in `user_identities`)
- No magic link generated

**Pass:** `[ ]`

---

### P-AUTH03 — Pilot logout

**Steps:**
1. Log in as pilot (P-AUTH01)
2. Click **Logout** link on the pilot dashboard (navigates to `/logout`)

**Expected:**
- `hdp_session` cookie cleared
- Redirected to `/login`
- Accessing `/drone-pilot` returns 401 from API

**Pass:** `[ ]`

---

### P-AUTH04 — Rate limit: multiple magic link requests

**Steps:**
1. Navigate to `/login`
2. Enter `seed.skyvista@example.com`
3. Submit the form 6 times within 15 minutes

**Expected:**
- First 5 requests: magic link generated each time (dev link appears)
- 6th request: throttled — still shows "Check your email" (no error exposed)
- API returns `{ ok: true, throttled: true }` (no dev link in response)
- Rate limit: 5 links per identity per 15-minute window

**Pass:** `[ ]`
