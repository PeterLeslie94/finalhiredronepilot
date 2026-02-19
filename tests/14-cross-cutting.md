# 14 — Cross-Cutting Concerns

**Covers:** Auth edge cases, session expiry, email delivery, error states

## Preconditions

- Dev server running
- Seed data loaded

---

## Auth & Authorization

### X01 — Access /admin without session

**Steps:**
1. Clear all cookies (or use incognito)
2. Navigate to `/admin`

**Expected:**
- API call `GET /api/admin/enquiries` returns 401
- Error banner shown on the page
- Page does not render protected data

**Pass:** `[ ]`

---

### X02 — Access /drone-pilot without session

**Steps:**
1. Clear all cookies
2. Navigate to `/drone-pilot`

**Expected:**
- API call `GET /api/pilot/me/invites` returns 401
- Error banner shown with message
- "Go to login" link visible (links to `/login`)

**Pass:** `[ ]`

---

### X03 — Admin session cannot access pilot routes

**Steps:**
1. Log in as admin
2. Navigate to `/drone-pilot`
3. Observe the API response

**Expected:**
- API returns 401 (wrong role — admin identity does not have `DRONE_PILOT` role)
- Error banner shown

**Pass:** `[ ]`

---

### X04 — Pilot session cannot access admin routes

**Steps:**
1. Log in as pilot (e.g. `seed.skyvista@example.com`)
2. Navigate to `/admin`
3. Observe the API response

**Expected:**
- API returns 401 (wrong role — pilot identity does not have `ADMIN` role)
- Error banner shown

**Pass:** `[ ]`

---

## Email Delivery

### X05 — Email delivery: QUEUED to SENT transitions

**Preconditions:** `RESEND_API_KEY` configured in `.env.local`

**Steps:**
1. Submit a new enquiry (triggers `client_acknowledgement` email)
2. Check `email_logs` table immediately — status should be `QUEUED`
3. Wait a few seconds
4. Check again

**Expected:**
- Status transitions from `QUEUED` to `SENT`
- `provider_message_id` populated (Resend message ID)
- `sent_at` timestamp set

**Pass:** `[ ]`

---

### X06 — Email with missing RESEND_API_KEY

**Preconditions:** Remove or comment out `RESEND_API_KEY` in `.env.local`, restart dev server

**Steps:**
1. Submit a new enquiry

**Expected:**
- `email_logs` row created with status `QUEUED`
- Email delivery fails silently — status updates to `FAILED`
- API still returns success (enquiry created successfully)
- No 500 error — email failure does not break the main flow

**Pass:** `[ ]`

---

## Concurrency & Data Integrity

### X07 — Concurrent bid submissions on same invite

**Steps:**
1. Obtain an invite with no bid yet
2. Open two browser tabs, both logged in as the same pilot
3. Navigate both to the invite detail page
4. Fill bid forms in both tabs simultaneously
5. Click Submit on both tabs as quickly as possible

**Expected:**
- Only one bid succeeds (database uses `FOR UPDATE` lock + unique constraint on `bids.invitation_id`)
- Second submission returns an error (e.g. "Bid already submitted for this invitation" or constraint violation)
- `bids` table has exactly one row for this invitation

**Pass:** `[ ]`

---

## API Error Handling

### X08 — API validation errors return structured JSON

**Steps:**
1. Send a malformed `POST /api/enquiries` request:
   ```bash
   curl -X POST http://localhost:3000/api/enquiries \
     -H "Content-Type: application/json" \
     -d '{"name": ""}'
   ```

**Expected:**
- 400 response with JSON body:
  ```json
  { "error": "validation error message" }
  ```
- Structured error format, not HTML or stack trace

**Pass:** `[ ]`

---

### X09 — 404 for nonexistent IDs

**Steps:**
1. Navigate to `/admin/enquiries/00000000-0000-0000-0000-000000000000`
2. Or call `GET /api/admin/enquiries/00000000-0000-0000-0000-000000000000`

**Expected:**
- API returns 404 or appropriate error
- UI shows error message, not a crash

**Pass:** `[ ]`

---

## Session Expiry

### X10 — Session expiry after 7 days

**Steps:**
1. Log in and note the `hdp_session` cookie expiry
2. (Simulate) Modify `auth_sessions.expires_at` in the database to a past timestamp
3. Make any authenticated API call

**Expected:**
- API returns 401
- Cookie no longer valid
- User must re-authenticate via `/login`

**Pass:** `[ ]`
