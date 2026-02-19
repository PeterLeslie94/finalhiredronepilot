# 06 — Admin Pilot Directory

**Covers:** `/admin/pilots`, `GET /api/admin/pilots`, `PATCH /api/admin/pilots/[id]`

## Preconditions

- Dev server running
- Seed data loaded (6 seeded pilots)
- Logged in as admin

---

### A-PIL01 — Page loads with seeded pilots

**Steps:**
1. Navigate to `/admin/pilots`

**Expected:**
- Page shows pilot directory with list/table
- 6 seeded pilots visible:
  - SkyVista Aerial, NorthPeak UAV, Coastline Drone Ops, Atlas Mapping, RidgeLine Thermal, Metro Survey Drones
- Each shows: name, business name, email, licence level, active status, created date

**Pass:** `[ ]`

---

### A-PIL02 — Search by name/email/business

**Steps:**
1. Type `SkyVista` into the search input
2. Observe results

**Expected:**
- List filters to show only "SkyVista Aerial"
- Server-side filtering via `GET /api/admin/pilots?search=SkyVista`
- Clear search — full list returns

**Pass:** `[ ]`

---

### A-PIL03 — Filter by Active/Inactive

**Steps:**
1. Select **Active** from the filter control
2. Select **Inactive** from the filter control

**Expected:**
- Active: shows only pilots with `active = true` (all 6 seeded pilots are active)
- Inactive: shows only pilots with `active = false` (should be empty for fresh seed)
- All: shows all pilots

**Pass:** `[ ]`

---

### A-PIL04 — Click row to view pilot details

**Steps:**
1. Click on "SkyVista Aerial" row

**Expected:**
- Slide-out panel (or detail view) shows full pilot details:
  - Name, business name, email, phone
  - Website URL
  - Two-sentence summary
  - Licence level
  - Insurance provider, insurance expiry
  - Flyer ID, Operator ID
  - Active status toggle
  - Admin notes field
  - Created/updated timestamps

**Pass:** `[ ]`

---

### A-PIL05 — Toggle active switch

**Steps:**
1. Open "Coastline Drone Ops" pilot detail
2. Toggle the **Active** switch from ON to OFF
3. Click **Save**

**Expected:**
- `PATCH /api/admin/pilots/{id}` called with `{ active: false }`
- Pilot now shows as Inactive
- Re-toggle to ON and save — pilot is Active again

**Pass:** `[ ]`

---

### A-PIL06 — Edit admin notes

**Steps:**
1. Open any pilot detail panel
2. Type a note into the admin notes field (e.g. "Verified insurance docs")
3. Click **Save**

**Expected:**
- `PATCH /api/admin/pilots/{id}` called with updated `notes`
- Reload the page — notes persisted in database

**Pass:** `[ ]`

---

### A-PIL07 — Insurance expiry color coding

**Steps:**
1. View pilots that have `insurance_expiry` set (seeded pilots may not have insurance; modify one in DB if needed)

**Expected:**
- Expired: red text/badge
- Within 30 days: amber text/badge
- Valid (> 30 days): normal display

**Pass:** `[ ]`

---

### A-PIL08 — Deactivated pilot does NOT receive invites

**Preconditions:** One pilot deactivated (from A-PIL05)

**Steps:**
1. Find an enquiry with an approved brief
2. Send invites from the enquiry detail page

**Expected:**
- Invites sent to all **active** pilots only
- The deactivated pilot does NOT receive an invitation
- Invite count = number of active pilots (5 if 1 was deactivated)

**Pass:** `[ ]`
