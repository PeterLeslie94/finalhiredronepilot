# 10 — Pilot Dashboard

**Covers:** `/drone-pilot`, `GET /api/pilot/me/invites`

## Preconditions

- Dev server running
- Seed data loaded
- Logged in as a seeded pilot (e.g. `seed.skyvista@example.com`)

---

### P-DASH01 — Dashboard loads with invitations and stats bar

**Steps:**
1. Navigate to `/drone-pilot`

**Expected:**
- Page title: "Drone Pilot Dashboard"
- Stats bar shows 3 cards:
  - **Total Invites**: total invitation count
  - **Active**: invites with SENT or OPENED status
  - **Declined**: invites with DECLINED status
- Invitation cards displayed in a grid below

**Pass:** `[ ]`

---

### P-DASH02 — Invite cards show correct info

**Steps:**
1. Examine the invite cards on the dashboard

**Expected:**
- Each card shows:
  - Service name (formatted from slug, e.g. "Drone Roof Survey")
  - Location and postcode (e.g. "Newcastle, NE1 4ST")
  - Date needed (or "No fixed date")
  - CTA text: "View details" (for actionable invites)
- Cards link to `/drone-pilot/invites/{invitation_id}`

**Pass:** `[ ]`

---

### P-DASH03 — Expired/declined cards show reduced opacity

**Steps:**
1. Observe cards with EXPIRED or DECLINED status

**Expected:**
- Cards show at 60% opacity (`opacity-60`)
- CTA text: "No action needed"

**Pass:** `[ ]`

---

### P-DASH04 — Click invite card navigates to detail

**Steps:**
1. Click any invite card

**Expected:**
- Navigates to `/drone-pilot/invites/{invitation_id}`
- Invite detail page loads with project details and client contact info

**Pass:** `[ ]`

---

### P-DASH05 — Refresh button re-fetches data

**Steps:**
1. Click the **Refresh** button on the dashboard header

**Expected:**
- Loading spinner appears on the button
- Data reloads from `GET /api/pilot/me/invites`
- Cards and stats update

**Pass:** `[ ]`

---

### P-DASH06 — My Profile link

**Steps:**
1. Click the **My Profile** button in the dashboard header

**Expected:**
- Navigates to `/drone-pilot/profile`
- Profile page loads

**Pass:** `[ ]`
