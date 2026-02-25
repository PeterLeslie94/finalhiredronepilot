# 12 — Pilot Profile (Retired)

**Covers:** retirement of self-service pilot profile route and API.

## Preconditions

- Dev server running

---

### P-PROF01 — `/drone-pilot/profile` route is unavailable

**Steps:**
1. Navigate to `/drone-pilot/profile`

**Expected:**
- Route is not available.
- No self-service pilot profile form is shown.

**Pass:** `[ ]`

---

### P-PROF02 — Legacy pilot profile API is unavailable

**Steps:**
1. Call `GET /api/pilot/me/profile`
2. Call `PATCH /api/pilot/me/profile`

**Expected:**
- Endpoints are unavailable after pilot-login retirement.

**Pass:** `[ ]`

---

### P-PROF03 — Profile management is admin-owned

**Steps:**
1. Log in as admin.
2. Navigate to `/admin/pilots`.
3. Open a pilot record and edit fields.

**Expected:**
- Pilot profile updates are performed via admin tooling only.

**Pass:** `[ ]`
