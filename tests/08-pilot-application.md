# 08 — Pilot Application

**Covers:** `/join-as-pilot`, `POST /api/pilot-applications`

## Preconditions

- Dev server running

---

### P-APPLY01 — Complete 6-step form (happy path)

**Steps:**
1. Navigate to `/join-as-pilot`
2. **Step 1 (Business Details):**
   - Pilot Name: `Test Drone Ops`
   - Business Name: `Test Drone Ops Ltd`
   - Email: `testpilot@example.com`
   - Phone: `07900555555`
   - Website URL: `example.com` (auto-normalizes to `https://example.com`)
   - Base City / Area: `London`
   - Click **Next**
3. **Step 2 (Compliance Details):**
   - Insurance Provider: `Coverdrone`
   - Flyer ID: `FLY-TEST-001`
   - Operator ID: `OP-TEST-001`
   - Licence Level: check **A2 CofC**
   - Click **Next**
4. **Step 3 (Top Services & Ratings):**
   - Select exactly 6 services
   - Set a rating for each selected service
   - Click **Next**
5. **Step 4 (Coverage & Metrics):**
   - Keep availability default or choose one
   - If UK-wide unchecked, select at least one region
   - Fill numeric fields with valid whole numbers
   - Click **Next**
6. **Step 5 (Media & Equipment):**
   - Upload square headshot (1:1)
   - Add at least one equipment row with a name
   - Upload at least one portfolio image (max 3)
   - Click **Next**
7. **Step 6 (FAQ, Links & Consent):**
   - Two Sentence Summary: `Test drone operations covering surveys and inspections. Reliable deliverables and clear comms.`
   - Fill all FAQ answers (>= 12 chars each)
   - Check consent checkbox
   - Click **Submit Application**

**Expected:**
- Success message: "Application received. We review each profile and will contact you if we need anything else."
- Form resets to step 1
- `pilot_applications` table has new row with `status = 'SUBMITTED'`
- `consent_to_pilot_terms = true`, `pilot_terms_version = 'pilot-terms-v1'`, `consent_source_page = '/join-as-pilot'`

**Pass:** `[ ]`

---

### P-APPLY02 — Step 1 validation

**Steps:**
1. Navigate to `/join-as-pilot`
2. Enter pilot name with 1 character → blur
3. Enter invalid email → blur
4. Enter phone < 6 chars → blur
5. Leave website URL blank → blur
6. Click **Next**

**Expected:**
- Field-level error messages appear on blur:
  - Name: "Drone pilot name must be at least 2 characters."
  - Email: "Enter a valid email address."
  - Phone: "Phone number must be at least 6 characters."
  - Website: "Website URL is required."
- **Next** validates and focuses the first invalid field
- Cannot proceed to step 2 with invalid fields

**Pass:** `[ ]`

---

### P-APPLY03 — Step 2 validation

**Steps:**
1. Complete step 1 with valid data, proceed to step 2
2. Leave required fields empty
3. Click **Next**

**Expected:**
- Validation errors for required fields:
  - "Insurance provider is required."
  - "Flyer ID is required."
  - "Operator ID is required."
  - "Select at least one licence level."
- First invalid field is focused
- Insurance expiry is optional (blank is valid)

**Pass:** `[ ]`

---

### P-APPLY04 — Step 3 services and ratings validation

**Steps:**
1. Complete steps 1-2, proceed to step 3
2. Select fewer than 6 services
3. Click **Next**
4. Select exactly 6 services but leave one rating empty
5. Click **Next**

**Expected:**
- Error: "Select exactly 6 top services to feature on your profile."
- Error after 6 services chosen without full ratings: "Set a rating for each selected top service."
- Cannot proceed to step 4 until both conditions are met

**Pass:** `[ ]`

---

### P-APPLY05 — Step 4 metrics and coverage validation

**Steps:**
1. Complete steps 1-3, proceed to step 4
2. Clear numeric fields and click **Next**
3. Enter invalid ranges (for example min delivery > max delivery) and click **Next**
4. Uncheck UK-wide and select no coverage region, click **Next**

**Expected:**
- Numeric fields show required/range errors
- Error when max delivery is lower than min delivery
- Error: "Select at least one coverage region or enable UK-wide coverage."
- Cannot proceed to step 5 until valid

**Pass:** `[ ]`

---

### P-APPLY06 — Step 5 media validation

**Steps:**
1. Complete steps 1-4, proceed to step 5
2. Leave headshot empty and click **Next**
3. Add headshot but leave equipment blank and click **Next**
4. Add equipment but leave portfolio empty and click **Next**

**Expected:**
- Error: "Please upload a square 1:1 headshot."
- Error: "Add at least one equipment or drone entry."
- Error: "Add at least one portfolio image."
- Cannot proceed to step 6 until valid

**Pass:** `[ ]`

---

### P-APPLY07 — Step 6 summary/FAQ/consent validation

**Steps:**
1. Complete steps 1-5, proceed to step 6
2. Enter summary < 20 characters
3. Leave one or more FAQ answers under 12 characters
4. Leave consent unchecked
5. Click **Submit Application**

**Expected:**
- Error: "Profile summary must be at least 20 characters."
- Error: "Each FAQ answer should be at least 12 characters."
- Error: "You must accept the drone pilot terms to continue."
- Form does not submit

**Pass:** `[ ]`

---

### P-APPLY08 — Application appears in admin

**Preconditions:** Application submitted in P-APPLY01

**Steps:**
1. Log in as admin
2. Navigate to `/admin/pilot-applications`

**Expected:**
- "Test Drone Ops" application visible with status `SUBMITTED`

**Pass:** `[ ]`

---

### P-APPLY09 — Confirmation email sent

**Preconditions:** Resend configured

**Steps:**
1. After submitting an application, check `email_logs` table

**Expected:**
- Row exists for the applicant's email
- `template_key` indicates application confirmation
- `status = 'QUEUED'` (or `SENT` if Resend is working)

**Pass:** `[ ]`
