# 01 — Client Enquiry Submission

**Covers:** `QuoteMultiStepForm`, `POST /api/enquiries`, `/thank-you`, `FloatingCTA`, `LegacyFormBridge`

## Preconditions

- Dev server running (`npm run dev`)
- Seed data loaded

---

### C01 — Submit enquiry via /contact page (happy path)

**Steps:**
1. Navigate to `/contact`
2. Step 1: Enter name (`Test Client`), email (`test@example.com`), phone (`07900123456`)
3. Click **Next**
4. Step 2: Select a service from dropdown (e.g. `Drone Roof Survey`), select date flexibility `Within a week`, optionally enter location and postcode
5. Click **Next**
6. Step 3: Enter job details (>= 10 characters), check consent checkbox
7. Click **Submit Enquiry**

**Expected:**
- Redirected to `/thank-you`
- New row in `enquiries` table with `status = 'ACK_SENT'`, `source_form = 'multistep-contact'` (or the configured `sourceForm` prop)
- `email_logs` row created with `template_key = 'client_acknowledgement'`, `status = 'QUEUED'`

**Pass:** `[ ]`

---

### C02 — Submit via FloatingCTA modal

**Steps:**
1. Navigate to any page with the `FloatingCTA` component (e.g. `/` homepage)
2. Scroll down until the floating widget appears (bottom-right on desktop, bottom bar on mobile)
3. Click **Talk To Our Team** (desktop) or **Get Advice** (mobile)
4. Modal opens with the 3-step `QuoteMultiStepForm` (compact mode)
5. Complete all 3 steps with valid data
6. Click **Send Enquiry**

**Expected:**
- Modal closes
- Browser navigates to `/thank-you`
- Enquiry created with `source_form = 'multistep-modal'`

**Pass:** `[ ]`

---

### C03 — Step 1 validation: invalid inputs

**Steps:**
1. Navigate to `/contact`
2. Leave name blank or enter 1 character
3. Enter invalid email (e.g. `notanemail`)
4. Enter phone with < 6 characters (e.g. `123`)
5. Observe the **Next** button

**Expected:**
- **Next** button is disabled (has `disabled:opacity-60` class)
- Cannot proceed to step 2

**Pass:** `[ ]`

---

### C04 — Step 2 validation: FIXED date without date picker

**Steps:**
1. Complete step 1 with valid data, proceed to step 2
2. Select **Fixed date** radio button
3. Leave the date picker empty
4. Observe the **Next** button

**Expected:**
- **Next** button is disabled
- Cannot proceed to step 3 until a date is selected

**Pass:** `[ ]`

---

### C05 — Step 3 validation: short job details and unchecked consent

**Steps:**
1. Complete steps 1 and 2 with valid data, proceed to step 3
2. Enter job details with < 10 characters (e.g. `Short`)
3. Leave consent checkbox unchecked
4. Observe the **Submit Enquiry** button

**Expected:**
- **Submit Enquiry** button is disabled
- Checking consent but keeping short job details: still disabled
- Entering >= 10 chars but leaving consent unchecked: still disabled
- Both valid: button becomes enabled

**Pass:** `[ ]`

---

### C06 — Service dropdown includes all services plus "Other"

**Steps:**
1. Navigate to `/contact`, proceed to step 2
2. Open the service dropdown

**Expected:**
- Lists all services from `data/services.ts` (e.g. Drone Roof Survey, Drone Site Survey, LiDAR Mapping, etc.)
- Last option is **Other**

**Pass:** `[ ]`

---

### C07 — Date flexibility radio buttons and date picker

**Steps:**
1. Navigate to `/contact`, proceed to step 2
2. Select **As soon as possible** — confirm no date picker shown
3. Select **Within a week** — confirm no date picker shown
4. Select **Within a month** — confirm no date picker shown
5. Select **Fixed date** — confirm date picker appears
6. Switch back to **As soon as possible** — confirm date picker disappears and `date_needed` is cleared

**Expected:**
- Date picker only visible when **Fixed date** is selected
- Switching away clears the date value

**Pass:** `[ ]`

---

### C08 — Enquiry appears in admin dashboard

**Preconditions:** Admin is logged in

**Steps:**
1. Submit a new enquiry via `/contact` (as in C01)
2. Navigate to `/admin`
3. Look for the new enquiry in the table

**Expected:**
- Enquiry appears with client name, service, and status badge showing `ACK_SENT`

**Pass:** `[ ]`

---

### C09 — Email log shows client_acknowledgement

**Preconditions:** Resend API key configured in `.env.local`

**Steps:**
1. Submit a new enquiry via `/contact`
2. Check `email_logs` table in the database

**Expected:**
- Row exists with `template_key = 'client_acknowledgement'`
- `recipient` matches the submitted email
- `status` transitions from `QUEUED` to `SENT` (if Resend configured and working)

**Pass:** `[ ]`
