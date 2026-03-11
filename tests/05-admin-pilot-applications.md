# 05 — Admin Pilot Applications

**Covers:** `/admin/pilot-applications`, approve/reject/request-info APIs

## Preconditions

- Dev server running
- Seed data loaded (3 seeded applications: SUBMITTED, UNDER_REVIEW, NEEDS_INFO)
- Logged in as admin

---

### A-APP01 — Page loads with seeded applications

**Steps:**
1. Navigate to `/admin/pilot-applications`

**Expected:**
- Page shows pilot applications table/list
- Seeded applications visible:
  - "AerialWorks UK" — `SUBMITTED`
  - "GreenField UAV" — `UNDER_REVIEW`
  - "UrbanFlight Ops" — `NEEDS_INFO`
- Each shows: pilot name, business name, email, status badge, created date

**Pass:** `[ ]`

---

### A-APP02 — Click row to view full details

**Steps:**
1. Click on the "AerialWorks UK" application row

**Expected:**
- Slide-out panel (or detail view) shows full application details:
  - Pilot name, business name, email, phone
  - Website URL
  - Two-sentence summary
  - Insurance provider, insurance expiry
  - Flyer ID, Operator ID
  - Licence level
  - Profile photo (if any)
  - Status badge
  - Consent details (pilot terms version, consent timestamp, consent source page)

**Pass:** `[ ]`

---

### A-APP03 — Approve a SUBMITTED application

**Steps:**
1. Find the "AerialWorks UK" application (status: `SUBMITTED`)
2. Click **Approve**

**Expected:**
- `POST /api/admin/pilot-applications/{id}/approve` called
- Status changes to `APPROVED`
- A new row in `pilots` table created from the application data
- Application `created_pilot_id` is set
- Pilot `listing_live_at` is set when the approval creates or links the pilot
- The pilot now appears in `/admin/pilots` directory
- The pilot is immediately visible on the public directory/profile flow (`/pilots`, `/pilots/{slug}`)
- Approval queues the go-live email with the pilot profile link

**Pass:** `[ ]`

---

### A-APP04 — Approved pilot does not get dashboard login

**Preconditions:** Application approved in A-APP03

**Steps:**
1. Navigate to `/login`
2. Enter `seed.applicant1@example.com`
3. Request magic link

**Expected:**
- Generic success response is shown.
- No dev login link appears for this pilot email.
- Pilot must use invite token links sent by admin invite flow.

**Pass:** `[ ]`

---

### A-APP05 — Reject an application

**Steps:**
1. Find the "GreenField UAV" application (status: `UNDER_REVIEW`)
2. Click **Reject**
3. Confirm in dialog

**Expected:**
- `POST /api/admin/pilot-applications/{id}/reject` called
- Status changes to `REJECTED`
- No pilot or user_identity created
- Confirmation dialog appeared before action

**Pass:** `[ ]`

---

### A-APP06 — Request more info

**Steps:**
1. Find any non-APPROVED application
2. Click **Request Info** (or equivalent button)

**Expected:**
- `POST /api/admin/pilot-applications/{id}/request-info` called
- Status changes to `NEEDS_INFO`

**Pass:** `[ ]`

---

### A-APP07 — Action buttons change based on status

**Steps:**
1. View an `APPROVED` application
2. View a `REJECTED` application
3. View a `SUBMITTED` application

**Expected:**
- `APPROVED`: No Approve button shown (already approved); may show other actions
- `REJECTED`: No Approve button; may show other actions or be read-only
- `SUBMITTED`: Approve, Reject, Request Info buttons all available
- `UNDER_REVIEW`: Same as SUBMITTED
- `NEEDS_INFO`: Approve, Reject buttons available

**Pass:** `[ ]`

---

### A-APP08 — Insurance expiry shown with labels

**Steps:**
1. View an application that has `insurance_expiry` set

**Expected:**
- If expired: red "Expired" label shown
- If within 30 days: amber warning label
- If valid: normal display

**Pass:** `[ ]`

---

### A-APP09 — No badge-upgrade queue remains

**Steps:**
1. Navigate to `/admin`
2. Navigate to `/admin/pilot-applications`

**Expected:**
- Admin dashboard shows new enquiries and new pilot applications only
- No "Badge Upgrades" queue is shown
- Pilot applications page has no upgrade-only filter or backlink-confirmation queue

**Pass:** `[ ]`
