# 12 — Pilot Profile

**Covers:** `/drone-pilot/profile`, `GET /api/pilot/me/profile`, `PATCH /api/pilot/me/profile`

## Preconditions

- Dev server running
- Seed data loaded
- Logged in as a seeded pilot (e.g. `seed.skyvista@example.com`)

---

### P-PROF01 — Profile page loads with current data

**Steps:**
1. Navigate to `/drone-pilot/profile`

**Expected:**
- Page loads with pilot's current data populated in form fields
- Sections: Account Information (read-only), Personal Details, Summary, CAA & Insurance
- Back link to `/drone-pilot` dashboard

**Pass:** `[ ]`

---

### P-PROF02 — Email field is read-only

**Steps:**
1. On the profile page, find the Email field under "Account Information"

**Expected:**
- Email input is `disabled`
- Shows gray background (`bg-gray-100`)
- Cursor shows `cursor-not-allowed`
- Label says "Email (read-only)"
- Cannot type in or modify the email

**Pass:** `[ ]`

---

### P-PROF03 — Licence level is read-only

**Steps:**
1. On the profile page, find the Licence Level field under "Account Information"

**Expected:**
- Licence Level input is `disabled`
- Shows the pilot's licence level (e.g. "Operator ID, Flyer ID, A2 CofC")
- Cannot be modified from this page

**Pass:** `[ ]`

---

### P-PROF04 — Edit personal details

**Steps:**
1. Change the **Name** field to `SkyVista Aerial Updated`
2. Change the **Business Name** to `SkyVista Aerial Ltd Updated`
3. Change **Phone** to `07900 999999`
4. Change **Website** to `https://updated-example.com`
5. Click **Save Profile**

**Expected:**
- `PATCH /api/pilot/me/profile` called with updated fields
- Success message: "Profile updated successfully."
- Green success banner appears
- Refresh the page — changes persisted

**Pass:** `[ ]`

---

### P-PROF05 — Edit summary and insurance fields

**Steps:**
1. Change **Two Sentence Summary** to a new value (>= 20 chars)
2. Change **Insurance Provider** to `Flock Cover`
3. Set **Insurance Expiry** to a future date
4. Change **Flyer ID** and **Operator ID**
5. Click **Save Profile**

**Expected:**
- All fields saved successfully
- Success message shown
- Refresh confirms persistence

**Pass:** `[ ]`

---

### P-PROF06 — Name too short triggers server error

**Steps:**
1. Change **Name** to a single character (e.g. `A`)
2. Click **Save Profile**

**Expected:**
- Server returns validation error
- Error banner shows the validation message (e.g. "Name must be at least 2 characters")
- Changes NOT saved

**Pass:** `[ ]`

---

### P-PROF07 — Member since date shown

**Steps:**
1. On the profile page, find the "Member since" text

**Expected:**
- Shows the pilot's `created_at` date formatted as local date
- Located under the Account Information section

**Pass:** `[ ]`
