# 08 — Pilot Application

**Covers:** `/pilots/apply`, `POST /api/pilot-applications`

## Preconditions

- Dev server running

---

### P-APPLY01 — Complete 3-step form (happy path)

**Steps:**
1. Navigate to `/pilots/apply`
2. **Step 1 (Business Details):**
   - Pilot Name: `Test Drone Ops`
   - Business Name: `Test Drone Ops Ltd`
   - Email: `testpilot@example.com`
   - Phone: `07900555555`
   - Website URL: `example.com` (auto-normalizes to `https://example.com`)
   - Click **Next**
3. **Step 2 (Compliance Details):**
   - Insurance Provider: `Coverdrone`
   - Flyer ID: `FLY-TEST-001`
   - Operator ID: `OP-TEST-001`
   - Licence Level: check **A2 CofC** checkbox
   - Click **Next**
4. **Step 3 (Profile & Headshot):**
   - Upload a square 1:1 image (JPG, PNG, or WEBP)
   - Two Sentence Summary: `Test drone operations covering surveys and inspections. Reliable deliverables and clear comms.`
   - Check consent checkbox (Drone Pilot Terms + Privacy Policy)
   - Click **Submit Application**

**Expected:**
- Success message: "Application received. We review each profile and will contact you if we need anything else."
- Form resets to step 1
- `pilot_applications` table has new row with `status = 'SUBMITTED'`
- `consent_to_pilot_terms = true`, `pilot_terms_version = 'pilot-terms-v1'`, `consent_source_page = '/pilots/apply'`

**Pass:** `[ ]`

---

### P-APPLY02 — Step 1 validation

**Steps:**
1. Navigate to `/pilots/apply`
2. Enter pilot name with 1 character → blur → error message
3. Enter invalid email → blur → error message
4. Enter phone < 6 chars → blur → error message
5. Leave website URL blank → blur → error message
6. Click **Next**

**Expected:**
- Field-level error messages appear on blur:
  - Name: "Drone pilot name must be at least 2 characters."
  - Email: "Enter a valid email address."
  - Phone: "Phone number must be at least 6 characters."
  - Website: "Website URL is required."
- **Next** button click validates and focuses the first invalid field
- Cannot proceed to step 2 with invalid fields

**Pass:** `[ ]`

---

### P-APPLY03 — Step 2 validation

**Steps:**
1. Complete step 1 with valid data, proceed to step 2
2. Leave all fields empty
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

### P-APPLY04 — Step 3: photo upload (valid square image)

**Steps:**
1. Complete steps 1-2, proceed to step 3
2. Click the drag-and-drop zone (or drag a file onto it)
3. Select a square (1:1) JPEG image

**Expected:**
- Image preview appears in the dropzone
- Image auto-compressed to <= 220KB JPEG
- "Remove headshot" link appears below preview
- `profile_photo_url` form value is set to a data URL

**Pass:** `[ ]`

---

### P-APPLY05 — Step 3: summary and consent validation

**Steps:**
1. On step 3, enter a summary with < 20 characters (e.g. "Short")
2. Leave consent unchecked
3. Click **Submit Application**

**Expected:**
- Error: "Profile summary must be at least 20 characters."
- Error: "You must accept the drone pilot terms to continue."
- Form does not submit

**Pass:** `[ ]`

---

### P-APPLY06 — Non-square image rejected

**Steps:**
1. On step 3, upload a non-square image (e.g. 800x400 landscape photo)

**Expected:**
- Error message: "Headshot must be square (1:1 aspect ratio)."
- No preview shown
- Tolerance: images within 3% aspect ratio difference are accepted

**Pass:** `[ ]`

---

### P-APPLY07 — Application appears in admin

**Preconditions:** Application submitted in P-APPLY01

**Steps:**
1. Log in as admin
2. Navigate to `/admin/pilot-applications`

**Expected:**
- "Test Drone Ops" application visible with status `SUBMITTED`

**Pass:** `[ ]`

---

### P-APPLY08 — Confirmation email sent

**Preconditions:** Resend configured

**Steps:**
1. After submitting an application, check `email_logs` table

**Expected:**
- Row exists for the applicant's email
- `template_key` indicates application confirmation
- `status = 'QUEUED'` (or `SENT` if Resend is working)

**Pass:** `[ ]`
