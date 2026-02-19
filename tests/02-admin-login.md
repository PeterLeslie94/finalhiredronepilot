# 02 — Admin Login

**Covers:** `/login`, `POST /api/auth/request-link`, `GET /api/auth/verify`, session cookie `hdp_session`

## Preconditions

- Dev server running
- Seed data loaded (admin identity exists in `user_identities`)

---

### A-AUTH01 — Admin login via dev magic link

**Steps:**
1. Navigate to `/login`
2. Enter the seeded admin email (check `admins` table or use `seed.admin@example.com`)
3. Click **Send Sign-In Link**
4. Page shows "Check your email" message
5. In dev mode, a **Dev link** section appears with a clickable URL
6. Click the dev link URL

**Expected:**
- Redirected to `/admin`
- Browser has `hdp_session` cookie set (HttpOnly, SameSite=Lax, path=/, expires ~7 days)
- Admin dashboard loads with seeded enquiries

**Pass:** `[ ]`

---

### A-AUTH02 — Unknown email shows generic message (no enumeration)

**Steps:**
1. Navigate to `/login`
2. Enter an email that does NOT exist in `user_identities` (e.g. `unknown@example.com`)
3. Click **Send Sign-In Link**

**Expected:**
- Page shows "Check your email" / "If this email is registered, you will receive a sign-in link shortly."
- No error message indicating the email doesn't exist
- No dev link appears (no identity found)

**Pass:** `[ ]`

---

### A-AUTH03 — Expired/invalid token URL

**Steps:**
1. Navigate to `/api/auth/verify?token=invalidtokenvalue`

**Expected:**
- Redirected to `/login?error=invalid_or_expired`
- Login page shows: "That sign-in link is invalid or expired. Please request a new one."

**Pass:** `[ ]`

---

### A-AUTH04 — Re-use a consumed magic link

**Steps:**
1. Log in as admin via dev magic link (as in A-AUTH01)
2. Copy the magic link URL
3. Log out (or clear cookies)
4. Paste the same magic link URL into the browser

**Expected:**
- Redirected to `/login?error=invalid_or_expired`
- The magic link row in `auth_magic_links` has `used_at` set — it cannot be reused

**Pass:** `[ ]`

---

### A-AUTH05 — Session persists across page refreshes

**Steps:**
1. Log in as admin
2. Refresh the page (F5 or Cmd+R)
3. Navigate to `/admin` directly

**Expected:**
- Still authenticated — dashboard loads without redirect to `/login`
- `hdp_session` cookie is still present

**Pass:** `[ ]`

---

### A-AUTH06 — Logout revokes session

**Steps:**
1. Log in as admin
2. Click **Logout** in the sidebar/header (navigates to `/logout` which calls `POST /api/auth/logout`)

**Expected:**
- `hdp_session` cookie is cleared
- Redirected to `/login`
- Navigating to `/admin` returns 401 from the API

**Pass:** `[ ]`
