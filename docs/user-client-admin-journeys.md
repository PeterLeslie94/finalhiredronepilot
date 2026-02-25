# User, Client, and Admin Journeys

## Purpose
This document defines the end-to-end journeys for:
- Client (the person requesting drone services)
- Pilot (receiving invites and contacting clients directly)
- Admin (internal operator managing enquiries and sending invites)

## Shared Workflow Summary
1. Client submits enquiry.
2. Admin reviews the raw enquiry.
3. Admin sends invites to pilots.
4. Pilots see full client details and contact the client directly to quote.

## 1. Client Journey

## Step 1: Discover and Start Quote
- Client lands on a page with quote CTA.
- Entry points can be inline quote form, floating modal, or sidebar-triggered modal.

DB touchpoints:
- None yet.

## Step 2: Complete Multistep Form
- Step 1 fields: `name`, `email`, `phone`.
- Step 2 fields: `service_slug`, `date_needed`, `date_flexibility`, `site_location_text`, `postcode`.
- Step 3 fields: `job_details`, required consent checkbox (`consent_share_with_pilots`).
- Client submits.

DB touchpoints:
- `enquiries` insert.
- `enquiry_events` insert (`ENQUIRY_CREATED`, `ACK_QUEUED`).

## Step 3: Receive Acknowledgement
- Client gets confirmation email that enquiry is received.

DB touchpoints:
- `email_logs` insert/update for acknowledgement.
- `enquiries.status` progresses to `ACK_SENT`.

## Step 4: Await Pilot Contact
- Client waits for pilots to contact them directly with quotes.
- Pilots have the client's name, email, and phone number.

## 2. Pilot Journey

## Step 0: Access Invite Link
- Drone pilots do not use platform login.
- Pilots receive secure invite links by email and open `/invite/{token}` directly.

DB touchpoints:
- None for session auth in pilot flow.

## Step 1: Pilot Onboarding Application
- Pilot submits application with:
- `pilot_name`, `business_name`, `email`, `phone`
- `profile_photo_url`, `website_url`, `two_sentence_summary`
- `insurance_provider`, `insurance_expiry`, `flyer_id`, `operator_id`, `licence_level`

DB touchpoints:
- `pilot_applications` insert (`status = SUBMITTED`).
- `pilot_application_events` insert (`APPLICATION_SUBMITTED`).
- `email_logs` optional applicant confirmation.

## Step 2: Admin Review Outcome
- Pilot may be approved, rejected, or asked for more information.
- On approval, pilot is added to approved directory.

DB touchpoints:
- `pilot_applications.status` update.
- `pilot_application_events` insert (`APPROVED` or `REJECTED` or `NEEDS_INFO`).
- `pilots` insert on approval.
- `pilot_applications.created_pilot_id` set.

## Step 3: Receive Invite
- Pilot gets invite email with a secure link.
- Invite link expires after the configured token TTL window.
- Pilot sees full project details and client contact information.

DB touchpoints:
- `pilot_invitations` insert (`status = SENT`).
- `email_logs` insert/update for invite message.

## Step 4: View Details and Contact Client
- Pilot opens invite link (`/invite/{token}`).
- Pilot sees: job details, service type, location, postcode, date needed.
- Pilot sees: client name, email (mailto link), phone (tel link).
- Pilot contacts the client directly to discuss and provide a quote.

DB touchpoints:
- `pilot_invitations.status` update to `OPENED`.

## 3. Admin Journey

## Step 0: Admin Login (Magic Link)
- Admin signs in via `/login`.
- Only emails present in `user_identities` with role `ADMIN` can receive a link.
- After sign-in admin can access `/admin`.

DB touchpoints:
- `auth_magic_links` insert on link request.
- `auth_sessions` insert on link verification.
- `admins.last_login_at` update on verification.

## Step 1: Review New Enquiry
- Admin opens dashboard queue.
- Admin sees full original enquiry, including contact and project details.

DB touchpoints:
- `enquiries` read.
- `enquiry_events` read for timeline.

## Step 2: Select Pilot Audience
- Admin optionally includes/excludes specific pilots.

DB touchpoints:
- Pilot selection query from `pilots` filtered by `active` and compliance fields.

## Step 3: Send Invites
- System creates invite rows and sends emails.
- Raw enquiry details (including client contact info) are shared with pilots.

DB touchpoints:
- `pilot_invitations` batch insert.
- `email_logs` batch insert/update.
- `enquiries.status` update to `INVITES_SENT`.
- `enquiry_events` insert (`INVITES_SENT`).

## Journey-State Mapping
- `NEW`: client submitted, awaiting admin.
- `ACK_SENT`: client confirmation delivered.
- `INVITES_SENT`: pilot emails sent, pilots can view and contact client.
- `CLOSED`: lifecycle complete.

## Key Guardrails
- `consent_share_with_pilots` must be true for invite flow to proceed.
- All critical actions write event logs for auditability.
- Invite links are time-limited and rejected once expired.
