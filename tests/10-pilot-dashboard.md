# 10 — Pilot Dashboard (Retired)

**Covers:** removal of `/drone-pilot` portal and pilot-auth invite APIs.

## Preconditions

- Dev server running

---

### P-DASH01 — `/drone-pilot` route is unavailable

**Steps:**
1. Navigate to `/drone-pilot`

**Expected:**
- Route returns not found (or configured replacement page if added later).
- No pilot dashboard UI is rendered.

**Pass:** `[ ]`

---

### P-DASH02 — Legacy pilot invite API is unavailable

**Steps:**
1. Call `GET /api/pilot/me/invites`
2. Call `GET /api/pilot/invitations/{id}` with any UUID

**Expected:**
- Endpoints are not available after retirement.

**Pass:** `[ ]`

---

### P-DASH03 — Token invite page remains primary pilot flow

**Steps:**
1. Open a valid `/invite/{token}` link.

**Expected:**
- Invite details render.
- Pilot can contact client directly from the token page.

**Pass:** `[ ]`
