# Database Schema

## Scope Decisions
- Quote requests are stored in `enquiries`. There is no separate `quote_requests` table.
- Pilot self-signup goes into `pilot_applications`, then admins approve/reject.
- Only approved records in `pilots` are eligible for invitations.
- Pilots contact clients directly — no bidding or anonymisation system.

## Stack Assumption
- PostgreSQL on Railway.
- API on Vercel (Next.js route handlers, Node runtime).
- UUID primary keys.
- UTC timestamps (`timestamptz`).

## 1. `admins`
Internal users with dashboard access.

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | default `gen_random_uuid()` |
| email | text UNIQUE NOT NULL | login identity |
| created_at | timestamptz NOT NULL | default `now()` |
| last_login_at | timestamptz NULL | updated on auth |

Indexes:
- `admins_email_uq (email)`

## 1b. Auth Tables (Magic Link Sessions)

Magic-link auth is shared for admins and drone pilots (same login page). Role rule is strict:
- One email can be **either** an admin identity or a drone pilot identity (never both).

### `user_identities`

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | default `gen_random_uuid()` |
| email | text UNIQUE NOT NULL | stored lowercase; CHECK `email = lower(email)` |
| role | text NOT NULL | `ADMIN`, `DRONE_PILOT` |
| admin_id | uuid NULL | FK to `admins.id` when role = `ADMIN` |
| pilot_id | uuid NULL | FK to `pilots.id` when role = `DRONE_PILOT` |
| created_at | timestamptz NOT NULL | default `now()` |

Constraints:
- CHECK role link: `(role='ADMIN' AND admin_id is not null AND pilot_id is null) OR (role='DRONE_PILOT' AND pilot_id is not null AND admin_id is null)`

### `auth_magic_links`

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| identity_id | uuid FK NOT NULL | references `user_identities.id` |
| token_hash | text UNIQUE NOT NULL | sha256(raw token); never store raw token |
| expires_at | timestamptz NOT NULL | default 15 minutes from creation |
| used_at | timestamptz NULL | set when consumed |
| created_at | timestamptz NOT NULL | default `now()` |

### `auth_sessions`

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| identity_id | uuid FK NOT NULL | references `user_identities.id` |
| session_token_hash | text UNIQUE NOT NULL | sha256(cookie token); never store raw token |
| expires_at | timestamptz NOT NULL | default 7 days from creation |
| revoked_at | timestamptz NULL | set on logout |
| created_at | timestamptz NOT NULL | default `now()` |
| last_seen_at | timestamptz NOT NULL | updated on use |

## 2. `pilots`
Approved pilot directory (used for invitations).

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| name | text NOT NULL | pilot name |
| business_name | text NULL | pilot company name |
| email | text UNIQUE NOT NULL | |
| phone | text NULL | |
| website_url | text NULL | |
| profile_photo_url | text NULL | |
| two_sentence_summary | text NULL | public profile summary |
| active | boolean NOT NULL | default `true` |
| licence_level | text NULL | `GVC`, `A2_CofC`, etc |
| insurance_provider | text NULL | |
| insurance_expiry | date NULL | |
| flyer_id | text NULL | |
| operator_id | text NULL | |
| notes | text NULL | internal notes |
| created_at | timestamptz NOT NULL | |
| updated_at | timestamptz NOT NULL | |

Indexes:
- `pilots_email_uq (email)`
- `pilots_active_idx (active)`
- `pilots_licence_level_idx (licence_level)`

## 3. `pilot_applications`
Pilot signup queue pending admin decision.

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| pilot_name | text NOT NULL | |
| business_name | text NOT NULL | |
| email | text NOT NULL | |
| phone | text NOT NULL | |
| website_url | text NULL | |
| profile_photo_url | text NULL | |
| two_sentence_summary | text NOT NULL | |
| insurance_provider | text NOT NULL | |
| insurance_expiry | date NULL | optional |
| flyer_id | text NOT NULL | |
| operator_id | text NOT NULL | |
| licence_level | text NOT NULL | |
| status | text NOT NULL | `SUBMITTED`, `UNDER_REVIEW`, `APPROVED`, `REJECTED`, `NEEDS_INFO` |
| review_notes | text NULL | admin feedback |
| reviewed_by_admin_id | uuid NULL | references `admins.id` |
| reviewed_at | timestamptz NULL | |
| created_pilot_id | uuid NULL | references `pilots.id` when approved |
| created_at | timestamptz NOT NULL | |
| updated_at | timestamptz NOT NULL | |

Constraints:
- UNIQUE partial index for open applications by email (one active application at a time).

Indexes:
- `pilot_applications_email_idx (email)`
- `pilot_applications_status_idx (status, created_at desc)`
- `pilot_applications_created_pilot_idx (created_pilot_id)`

## 4. `pilot_application_events`
Audit log for pilot signup lifecycle.

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| pilot_application_id | uuid FK NOT NULL | references `pilot_applications.id` |
| actor_type | text NOT NULL | `SYSTEM`, `ADMIN`, `APPLICANT` |
| actor_id | uuid NULL | nullable for system or applicant events |
| event_type | text NOT NULL | domain event key |
| payload_json | jsonb NOT NULL | event details |
| created_at | timestamptz NOT NULL | |

Indexes:
- `pilot_application_events_application_idx (pilot_application_id, created_at)`

## 5. `enquiries`
Customer quote request root entity.

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| name | text NOT NULL | customer name |
| email | text NOT NULL | customer email |
| phone | text NOT NULL | customer phone |
| service_slug | text NOT NULL | must match slug from `data/services.ts` |
| date_needed | date NULL | customer target date |
| date_flexibility | text NOT NULL | `FIXED`, `WITHIN_WEEK`, `WITHIN_MONTH`, `ASAP` |
| site_location_text | text NOT NULL | location/city/address |
| postcode | text NOT NULL | UK postcode |
| job_details | text NOT NULL | detailed project description |
| consent_share_with_pilots | boolean NOT NULL | required checkbox, must be true |
| consent_policy_version | text NOT NULL | legal copy version at submission |
| consent_timestamp | timestamptz NOT NULL | |
| source_page | text NULL | URL/path captured |
| source_form | text NOT NULL | `quote-form`, `multistep-modal`, `sidebar-modal-trigger` |
| status | text NOT NULL | `NEW`, `ACK_SENT`, `INVITES_SENT`, `CLOSED` |
| created_at | timestamptz NOT NULL | |
| updated_at | timestamptz NOT NULL | |
| closed_at | timestamptz NULL | |

Constraints:
- CHECK `consent_share_with_pilots = true`.

Indexes:
- `enquiries_status_idx (status, created_at desc)`
- `enquiries_email_idx (email)`
- `enquiries_service_idx (service_slug, created_at desc)`
- `enquiries_postcode_idx (postcode)`

## 6. `enquiry_events`
Immutable audit log.

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| enquiry_id | uuid FK NOT NULL | references `enquiries.id` |
| actor_type | text NOT NULL | `SYSTEM`, `ADMIN`, `PILOT` |
| actor_id | uuid NULL | nullable for system events |
| event_type | text NOT NULL | domain event key |
| payload_json | jsonb NOT NULL | event details |
| created_at | timestamptz NOT NULL | |

Indexes:
- `enquiry_events_enquiry_idx (enquiry_id, created_at)`

## 7. `pilot_invitations`
One row per invited pilot per enquiry.

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| enquiry_id | uuid FK NOT NULL | references `enquiries.id` |
| pilot_id | uuid FK NOT NULL | references `pilots.id` |
| invite_round | smallint NOT NULL | default `1` |
| token_hash | text NOT NULL | never store raw token |
| status | text NOT NULL | `SENT`, `OPENED`, `EXPIRED`, `DECLINED` |
| sent_at | timestamptz NOT NULL | |
| opened_at | timestamptz NULL | first open |

Constraints:
- UNIQUE `(enquiry_id, pilot_id, invite_round)`.

Indexes:
- `pilot_invitations_enquiry_idx (enquiry_id)`
- `pilot_invitations_pilot_idx (pilot_id)`
- `pilot_invitations_status_idx (status)`
- `pilot_invitations_token_hash_uq (token_hash)`

## 8. `email_logs`
Transactional email observability.

| Column | Type | Notes |
|---|---|---|
| id | uuid PK | |
| template_key | text NOT NULL | template identifier |
| recipient | text NOT NULL | |
| provider_message_id | text NULL | Resend message ID |
| status | text NOT NULL | `QUEUED`, `SENT`, `DELIVERED`, `BOUNCED`, `FAILED` |
| related_entity_type | text NULL | `ENQUIRY`, `INVITE`, `PILOT_APPLICATION` |
| related_entity_id | uuid NULL | soft reference |
| sent_at | timestamptz NULL | |

Indexes:
- `email_logs_status_idx (status)`
- `email_logs_related_idx (related_entity_type, related_entity_id)`

## Recommended Enums (or check constraints)
- `pilot_application_status`: `SUBMITTED`, `UNDER_REVIEW`, `APPROVED`, `REJECTED`, `NEEDS_INFO`
- `enquiry_status`: `NEW`, `ACK_SENT`, `INVITES_SENT`, `CLOSED`
- `date_flexibility`: `FIXED`, `WITHIN_WEEK`, `WITHIN_MONTH`, `ASAP`
- `invite_status`: `SENT`, `OPENED`, `EXPIRED`, `DECLINED`
- `email_status`: `QUEUED`, `SENT`, `DELIVERED`, `BOUNCED`, `FAILED`

## Referential Behavior (Suggested)
- `enquiries` to child tables: `ON DELETE RESTRICT` to preserve audit history.
- `pilot_applications` to child events: `ON DELETE RESTRICT`.
- Prefer pilot deactivation over hard delete.
- Hard delete only through controlled retention/anonymization jobs.

## Retention Policy
- Default retention: 24 months.
- Scheduled policy job:
- Anonymize or purge old enquiries, enquiry events, and email logs.
- Anonymize or purge old rejected/abandoned pilot applications and events.
- Keep aggregate metrics where needed for reporting.

## Migration Order
1. Create enums/check constraints.
2. Create core tables: `admins`, `pilots`, `pilot_applications`, `enquiries`.
3. Create dependent tables: `pilot_application_events`, `pilot_invitations`, `enquiry_events`, `email_logs`.
4. Add indexes and constraints.
5. Seed initial admin user.
