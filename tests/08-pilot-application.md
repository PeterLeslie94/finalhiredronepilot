# 08 — Pilot Application

**Covers:** `/join-as-pilot`, `POST /api/pilot-applications`

## Preconditions

- Dev server running

---

### P-APPLY01 — Complete 6-step form (happy path)

**Steps:**
1. Navigate to `/join-as-pilot`
2. **Step 1 (Business Details):**
   - Mini-step 1: complete all required fields in one screen
   - Pilot Name `Test Drone Ops`, Business Name `Test Drone Ops Ltd`
   - Email `testpilot@example.com`, Phone `07900555555`
   - Website URL `example.com` (normalizes to `https://example.com`)
   - Base City / Area: `London`
3. **Step 2 (Compliance Details):**
   - Mini-step 1: Insurance Provider `Coverdrone` (expiry can be blank)
   - Mini-step 2: Flyer ID `FLY-TEST-001`, Operator ID `OP-TEST-001`, Licence Level `A2 CofC`
4. **Step 3 (Top Services & Ratings):**
   - Mini-step 1: select exactly 6 services
   - Mini-step 2: set a rating for each selected service (additional notes optional)
5. **Step 4 (Coverage & Metrics):**
   - Mini-step 1: choose availability timing
   - Mini-step 2: choose UK Nationwide or one+ nations (England/Scotland/Wales/Northern Ireland)
   - Mini-step 3: complete all numeric metrics in a single screen
6. **Step 5 (Media & Equipment):**
   - Mini-step 1: upload headshot image
   - Mini-step 2: select at least one drone model in **Drones You Own**
   - Mini-step 3: upload at least one portfolio image (max 3)
7. **Step 6 (Profile & Consent):**
   - Mini-step 1: Two Sentence Summary
   - Mini-step 2: FAQ 1
   - Mini-step 3: FAQ 2
   - Mini-step 4: FAQ 3
   - Mini-step 5: FAQ 4
   - Mini-step 6: FAQ 5
   - Mini-step 7: optional links + consent checkbox
   - Click **Submit Application**

**Expected:**
- Success message: "Application received. We review each profile and will contact you if we need anything else."
- Form resets to step 1
- `pilot_applications` table has a new row with `status = 'SUBMITTED'`
- `consent_to_pilot_terms = true`, `pilot_terms_version = 'pilot-terms-v2'`, `consent_source_page = '/join-as-pilot'`

**Pass:** `[ ]`

---

### P-APPLY02 — Next button is disabled until required fields are valid

**Steps:**
1. Navigate to `/join-as-pilot`
2. In step 1, leave required fields blank
3. Observe **Next** state
4. Fill each required field with valid values

**Expected:**
- **Next** is disabled while required fields are invalid
- **Next** becomes enabled only when all required fields in the current mini-step are valid
- Same behavior applies to **Submit Application** on final mini-step

**Pass:** `[ ]`

---

### P-APPLY03 — Step 2 validation

**Steps:**
1. Complete step 1 with valid data, proceed to step 2
2. Leave `insurance_provider` empty and click **Next**
3. Fill `insurance_provider`, leave `flyer_id`/`operator_id`/`licence_level` empty on mini-step 2

**Expected:**
- Errors for required fields:
  - "Insurance provider is required."
  - "Flyer ID is required."
  - "Operator ID is required."
  - "Select at least one licence level."
- Insurance expiry remains optional

**Pass:** `[ ]`

---

### P-APPLY04 — Services + ratings validation and wording

**Steps:**
1. Complete steps 1-2, proceed to step 3
2. Select fewer than 6 services and try to continue
3. Select 6 services and continue to mini-step 2
4. Leave one rating empty

**Expected:**
- Error: "Select exactly 6 top services to feature on your profile."
- Error: "Set a rating for each selected top service."
- Prompt text appears: "How would you rate your commercial experience in these services?"

**Pass:** `[ ]`

---

### P-APPLY05 — Coverage and metrics validation

**Steps:**
1. Complete steps 1-3, proceed to step 4
2. In coverage mini-step, untick UK Nationwide and select no nation
3. In metrics mini-step, clear required numeric fields
4. Enter min delivery > max delivery

**Expected:**
- Error: "Select at least one coverage region or enable UK-wide coverage."
- Required/range errors on numeric fields
- Error: "Maximum data delivery days cannot be lower than minimum data delivery days."

**Pass:** `[ ]`

---

### P-APPLY06 — Media step validation + drone list updates

**Steps:**
1. Complete steps 1-4, proceed to step 5
2. Leave headshot empty and try to continue
3. Add headshot, leave drones blank and try to continue
4. Select a drone, leave portfolio empty and try to continue
5. Verify drone options include `DJI Neo`, `DJI Neo 2`, `DJI Mini 2`, `DJI Mini 5 Pro`

**Expected:**
- Error: "Please upload a drone pilot headshot."
- Error: "Select at least one drone you own."
- Error: "Add at least one portfolio image."
- New drone options are present in the checklist

**Pass:** `[ ]`

---

### P-APPLY07 — Step 6 sequential summary/FAQ/consent validation

**Steps:**
1. Complete steps 1-5, proceed to step 6
2. Enter summary under 20 chars
3. For each FAQ mini-step, enter under 12 chars
4. On links mini-step, leave consent unchecked and attempt submit

**Expected:**
- Summary error: "Profile summary must be at least 20 characters."
- FAQ error: "Each FAQ answer should be at least 12 characters."
- Consent error: "You must accept the drone pilot terms to continue."

**Pass:** `[ ]`

---

### P-APPLY08 — Upload security enforcement

**Steps:**
1. Submit payload directly to `POST /api/pilot-applications` with:
   - non-image data URL in `profile_photo_url`, or
   - external URL in `portfolio_items_json`, or
   - malformed/base64-invalid image payload
2. Retry with oversized data URL payload

**Expected:**
- API responds `400` with validation errors
- External URLs are rejected for intake image fields
- Non-image/malformed/oversized image uploads are rejected

**Pass:** `[ ]`

---

### P-APPLY09 — Anti-bot and abuse protections

**Steps:**
1. Submit with honeypot field populated
2. Submit with missing/very-recent `form_started_at`
3. Burst-submit from same IP beyond configured limit

**Expected:**
- Honeypot and suspicious timing are trapped (masked success response)
- Burst submissions return `429` with `Retry-After`

**Pass:** `[ ]`

---

### P-APPLY10 — Application appears in admin

**Preconditions:** Application submitted in P-APPLY01

**Steps:**
1. Log in as admin
2. Navigate to `/admin/pilot-applications`

**Expected:**
- "Test Drone Ops" application visible with status `SUBMITTED`

**Pass:** `[ ]`

---

### P-APPLY11 — Confirmation email sent

**Preconditions:** Resend configured

**Steps:**
1. After submitting an application, check `email_logs` table

**Expected:**
- Row exists for applicant email
- `template_key` indicates application confirmation
- `status = 'QUEUED'` (or `SENT` if email delivery is configured)

**Pass:** `[ ]`
