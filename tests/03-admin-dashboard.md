# 03 — Admin Dashboard

**Covers:** `/admin`, `GET /api/admin/enquiries`

## Preconditions

- Dev server running
- Seed data loaded
- Logged in as admin

---

### A-DASH01 — Dashboard loads with seeded enquiries and KPI cards

**Steps:**
1. Navigate to `/admin`

**Expected:**
- Page title: Admin dashboard area loads
- KPI cards at top show correct aggregate counts from seeded data
- Table below shows enquiries with columns: client name, service, status badge, bids, invites, created date
- Seeded enquiries are visible (e.g. "Alex Morgan" — Drone Roof Survey, "Chloe Price" — Drone Site Survey, etc.)

**Pass:** `[ ]`

---

### A-DASH02 — Filter by status dropdown

**Steps:**
1. On `/admin`, locate the status filter dropdown
2. Select **Bidding open** from the dropdown

**Expected:**
- Table reloads (fetches `GET /api/admin/enquiries?status=BIDDING_OPEN&limit=200`)
- Only enquiries with `BIDDING_OPEN` status are shown
- Seeded enquiries like "Omar Ali" and "Emily Carter" should appear
- Change to **All statuses** — full list returns

**Pass:** `[ ]`

---

### A-DASH03 — Search by client name

**Steps:**
1. On `/admin`, type `Morgan` into the search input

**Expected:**
- Client-side filtering narrows the table to show only "Alex Morgan"
- Clear the search — full list returns

**Pass:** `[ ]`

---

### A-DASH04 — View button navigates to enquiry detail

**Steps:**
1. On `/admin`, click **View** on any enquiry row (or click the row itself)

**Expected:**
- Navigates to `/admin/enquiries/{id}` where `{id}` is the enquiry UUID
- Enquiry detail page loads with client info, brief versions, invites, bids, events

**Pass:** `[ ]`

---

### A-DASH05 — Refresh button re-fetches data

**Steps:**
1. On `/admin`, click the **Refresh** button

**Expected:**
- Loading state appears briefly
- Data reloads from API
- Table re-renders with current data

**Pass:** `[ ]`

---

### A-DASH06 — KPI card highlights when actionable

**Steps:**
1. On `/admin`, observe the KPI cards
2. Check if any card shows a highlighted state (e.g. orange border/background) when its count > 0

**Expected:**
- KPI cards for statuses requiring action (e.g. "Needs Brief", "New") are visually highlighted when count > 0
- Cards with zero count show normal styling

**Pass:** `[ ]`
