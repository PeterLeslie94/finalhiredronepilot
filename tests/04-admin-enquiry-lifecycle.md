# 04 — Admin Enquiry Lifecycle

**Covers:** `/admin/enquiries/[id]`, send invites

## Preconditions

- Dev server running
- Seed data loaded
- Logged in as admin

---

### A-ENQ01 — Load a NEW enquiry detail page

**Steps:**
1. Navigate to `/admin`
2. Find and click the enquiry with status **NEW** (e.g. "Alex Morgan" — Drone Roof Survey, Manchester)

**Expected:**
- `/admin/enquiries/{id}` loads
- Client info card shows: name, email, phone, service slug, location, postcode, date flexibility, job details
- Status badge shows `NEW`
- Audit log (events) section shows `SEEDED` event

**Pass:** `[ ]`

---

### A-ENQ02 — Send Invites

**Preconditions:** Any enquiry (no brief approval required)

**Steps:**
1. On the enquiry detail page, click **Send Invites**
2. `POST /api/admin/enquiries/{id}/invite` called

**Expected:**
- Invitations created for all active pilots (6 seeded pilots)
- Enquiry status changes to `INVITES_SENT`
- Invites section shows new invitations with status `SENT`
- Success message: "Invites queued: X"

**Pass:** `[ ]`

---

### A-ENQ03 — Invites section shows correct counts

**Preconditions:** An enquiry with invites (e.g. "Hannah Brown" — Bridge Inspection, `INVITES_SENT` status)

**Steps:**
1. Load the enquiry detail page
2. Scroll to the Invites section

**Expected:**
- Invites listed with pilot name, email, status badge, sent_at
- Correct counts by status: SENT, OPENED, DECLINED, EXPIRED
- Hannah Brown's enquiry should show 3 invites: 1 SENT, 1 OPENED, 1 DECLINED

**Pass:** `[ ]`

---

### A-ENQ04 — Email log shows pilot_invite entries

**Preconditions:** Invites have been sent (either from seed data or from A-ENQ02)

**Steps:**
1. On the enquiry detail page, scroll to the Email Logs section

**Expected:**
- `pilot_invite` entries shown for each invited pilot
- Each shows recipient email, status (QUEUED/SENT), timestamp
- Status badges colored: QUEUED=gray, SENT=green, FAILED=red

**Pass:** `[ ]`

---

### A-ENQ05 — Audit log shows all events

**Steps:**
1. Load any enquiry detail page with activity
2. Scroll to the Events/Audit Log section

**Expected:**
- Events shown in chronological order
- Each event shows: event_type, actor (SYSTEM/ADMIN), detail/payload summary, timestamp
- Events include: SEEDED, ACK_SENT, INVITES_SENT, CLOSED, etc.

**Pass:** `[ ]`
