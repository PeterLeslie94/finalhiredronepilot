# 09 — Pilot Login (Retired)

**Covers:** `/login` behavior for non-admin emails after pilot-login retirement.

## Preconditions

- Dev server running
- Seed data loaded

---

### P-AUTH01 — Pilot email cannot obtain login link

**Steps:**
1. Navigate to `/login`
2. Enter a seeded pilot email: `seed.skyvista@example.com`
3. Click **Send Sign-In Link**

**Expected:**
- Page shows generic "Check your email" confirmation.
- No dev link appears.
- Pilot email cannot log in to a dashboard.

**Pass:** `[ ]`

---

### P-AUTH02 — Applicant email cannot obtain login link

**Steps:**
1. Navigate to `/login`
2. Enter an applicant email: `seed.applicant2@example.com`
3. Click **Send Sign-In Link**

**Expected:**
- Generic success response is shown.
- No dev link appears.

**Pass:** `[ ]`

---

### P-AUTH03 — Invite-token access remains available

**Steps:**
1. Use a valid pilot invite link from seeded output or admin invite action.
2. Open `/invite/{token}` directly.

**Expected:**
- Invite page loads without pilot login.
- Pilot can view project and client contact details.

**Pass:** `[ ]`
