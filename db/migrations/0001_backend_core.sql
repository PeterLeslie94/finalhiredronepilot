-- Core backend schema for managed bidding workflow
-- Run this migration once against Railway Postgres.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'pilot_tier') THEN
    CREATE TYPE pilot_tier AS ENUM ('TIER1', 'TIER2');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'pilot_application_status') THEN
    CREATE TYPE pilot_application_status AS ENUM ('SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'REJECTED', 'NEEDS_INFO');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enquiry_status') THEN
    CREATE TYPE enquiry_status AS ENUM (
      'NEW',
      'ACK_SENT',
      'ANONYMIZATION_PENDING',
      'ANONYMIZATION_APPROVED',
      'INVITES_SENT',
      'BIDDING_OPEN',
      'EXTENDED',
      'BIDDING_CLOSED',
      'SHORTLIST_READY',
      'SHORTLIST_SENT',
      'CLOSED'
    );
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'date_flexibility') THEN
    CREATE TYPE date_flexibility AS ENUM ('FIXED', 'WITHIN_WEEK', 'WITHIN_MONTH', 'ASAP');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'invite_status') THEN
    CREATE TYPE invite_status AS ENUM ('SENT', 'OPENED', 'SUBMITTED', 'EXPIRED', 'DECLINED');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'bid_status') THEN
    CREATE TYPE bid_status AS ENUM ('VALID', 'LATE_REJECTED', 'WITHDRAWN_ADMIN');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'email_status') THEN
    CREATE TYPE email_status AS ENUM ('QUEUED', 'SENT', 'DELIVERED', 'BOUNCED', 'FAILED');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'brief_version_type') THEN
    CREATE TYPE brief_version_type AS ENUM ('ORIGINAL', 'AI_DRAFT', 'ADMIN_APPROVED');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'anonymization_status') THEN
    CREATE TYPE anonymization_status AS ENUM ('NOT_STARTED', 'DRAFT_READY', 'APPROVED', 'FAILED', 'MANUAL_APPROVED');
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_login_at timestamptz
);

CREATE TABLE IF NOT EXISTS pilots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business_name text,
  email text UNIQUE NOT NULL,
  phone text,
  website_url text,
  profile_photo_url text,
  two_sentence_summary text,
  tier pilot_tier NOT NULL,
  active boolean NOT NULL DEFAULT true,
  licence_level text,
  insurance_provider text,
  insurance_expiry date,
  flyer_id text,
  operator_id text,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS pilots_tier_idx ON pilots (tier);
CREATE INDEX IF NOT EXISTS pilots_active_idx ON pilots (active);
CREATE INDEX IF NOT EXISTS pilots_licence_level_idx ON pilots (licence_level);

CREATE TABLE IF NOT EXISTS pilot_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pilot_name text NOT NULL,
  business_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  website_url text,
  profile_photo_url text,
  two_sentence_summary text NOT NULL,
  insurance_provider text NOT NULL,
  insurance_expiry date NOT NULL,
  flyer_id text NOT NULL,
  operator_id text NOT NULL,
  licence_level text NOT NULL,
  status pilot_application_status NOT NULL DEFAULT 'SUBMITTED',
  review_notes text,
  reviewed_by_admin_id uuid REFERENCES admins(id) ON DELETE SET NULL,
  reviewed_at timestamptz,
  created_pilot_id uuid REFERENCES pilots(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS pilot_applications_email_idx ON pilot_applications (email);
CREATE INDEX IF NOT EXISTS pilot_applications_status_idx ON pilot_applications (status, created_at DESC);
CREATE INDEX IF NOT EXISTS pilot_applications_created_pilot_idx ON pilot_applications (created_pilot_id);

CREATE UNIQUE INDEX IF NOT EXISTS pilot_applications_open_email_uq
ON pilot_applications (lower(email))
WHERE status IN ('SUBMITTED', 'UNDER_REVIEW', 'NEEDS_INFO');

CREATE TABLE IF NOT EXISTS pilot_application_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pilot_application_id uuid NOT NULL REFERENCES pilot_applications(id) ON DELETE RESTRICT,
  actor_type text NOT NULL,
  actor_id uuid,
  event_type text NOT NULL,
  payload_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS pilot_application_events_application_idx
ON pilot_application_events (pilot_application_id, created_at);

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_slug text NOT NULL,
  date_needed date,
  date_flexibility date_flexibility NOT NULL DEFAULT 'ASAP',
  site_location_text text NOT NULL,
  postcode text NOT NULL,
  job_details text NOT NULL,
  consent_share_with_pilots boolean NOT NULL DEFAULT true CHECK (consent_share_with_pilots = true),
  consent_policy_version text NOT NULL,
  consent_timestamp timestamptz NOT NULL DEFAULT now(),
  source_page text,
  source_form text NOT NULL,
  anonymization_status anonymization_status NOT NULL DEFAULT 'NOT_STARTED',
  approved_brief_version_id uuid,
  status enquiry_status NOT NULL DEFAULT 'NEW',
  bid_deadline_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  closed_at timestamptz
);

CREATE INDEX IF NOT EXISTS enquiries_status_idx ON enquiries (status, created_at DESC);
CREATE INDEX IF NOT EXISTS enquiries_email_idx ON enquiries (email);
CREATE INDEX IF NOT EXISTS enquiries_service_idx ON enquiries (service_slug, created_at DESC);
CREATE INDEX IF NOT EXISTS enquiries_postcode_idx ON enquiries (postcode);

CREATE TABLE IF NOT EXISTS enquiry_brief_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enquiry_id uuid NOT NULL REFERENCES enquiries(id) ON DELETE RESTRICT,
  version_type brief_version_type NOT NULL,
  content_text text NOT NULL,
  redaction_map_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_by_type text NOT NULL,
  created_by_id uuid,
  model_name text,
  prompt_version text,
  approved_for_pilot_send boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS enquiry_brief_versions_enquiry_idx
ON enquiry_brief_versions (enquiry_id, created_at DESC);

ALTER TABLE enquiries
  ADD CONSTRAINT enquiries_approved_brief_fk
  FOREIGN KEY (approved_brief_version_id)
  REFERENCES enquiry_brief_versions(id)
  ON DELETE SET NULL;

CREATE TABLE IF NOT EXISTS enquiry_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enquiry_id uuid NOT NULL REFERENCES enquiries(id) ON DELETE RESTRICT,
  actor_type text NOT NULL,
  actor_id uuid,
  event_type text NOT NULL,
  payload_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS enquiry_events_enquiry_idx ON enquiry_events (enquiry_id, created_at);

CREATE TABLE IF NOT EXISTS pilot_invitations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enquiry_id uuid NOT NULL REFERENCES enquiries(id) ON DELETE RESTRICT,
  pilot_id uuid NOT NULL REFERENCES pilots(id) ON DELETE RESTRICT,
  invite_round smallint NOT NULL DEFAULT 1,
  token_hash text NOT NULL,
  token_expires_at timestamptz NOT NULL,
  status invite_status NOT NULL DEFAULT 'SENT',
  sent_at timestamptz NOT NULL DEFAULT now(),
  opened_at timestamptz,
  submitted_at timestamptz
);

CREATE UNIQUE INDEX IF NOT EXISTS pilot_invitations_round_uq
ON pilot_invitations (enquiry_id, pilot_id, invite_round);

CREATE UNIQUE INDEX IF NOT EXISTS pilot_invitations_token_hash_uq
ON pilot_invitations (token_hash);

CREATE INDEX IF NOT EXISTS pilot_invitations_enquiry_idx ON pilot_invitations (enquiry_id);
CREATE INDEX IF NOT EXISTS pilot_invitations_pilot_idx ON pilot_invitations (pilot_id);
CREATE INDEX IF NOT EXISTS pilot_invitations_status_idx ON pilot_invitations (status);

CREATE TABLE IF NOT EXISTS bids (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enquiry_id uuid NOT NULL REFERENCES enquiries(id) ON DELETE RESTRICT,
  pilot_id uuid NOT NULL REFERENCES pilots(id) ON DELETE RESTRICT,
  invitation_id uuid NOT NULL REFERENCES pilot_invitations(id) ON DELETE RESTRICT,
  price_amount numeric(12, 2) NOT NULL,
  currency text NOT NULL DEFAULT 'GBP',
  eta_days integer NOT NULL,
  notes text,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  status bid_status NOT NULL DEFAULT 'VALID'
);

CREATE UNIQUE INDEX IF NOT EXISTS bids_invitation_uq ON bids (invitation_id);
CREATE INDEX IF NOT EXISTS bids_enquiry_idx ON bids (enquiry_id);
CREATE INDEX IF NOT EXISTS bids_pilot_idx ON bids (pilot_id);
CREATE INDEX IF NOT EXISTS bids_status_idx ON bids (status);
CREATE INDEX IF NOT EXISTS bids_rank_idx ON bids (enquiry_id, status, price_amount, eta_days, submitted_at);

CREATE TABLE IF NOT EXISTS customer_shortlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enquiry_id uuid NOT NULL REFERENCES enquiries(id) ON DELETE RESTRICT,
  sent_by_admin_id uuid NOT NULL REFERENCES admins(id) ON DELETE RESTRICT,
  sent_at timestamptz NOT NULL DEFAULT now(),
  email_subject text NOT NULL,
  email_body text NOT NULL,
  selected_bid_ids_json jsonb NOT NULL
);

CREATE INDEX IF NOT EXISTS customer_shortlists_enquiry_idx ON customer_shortlists (enquiry_id);

CREATE TABLE IF NOT EXISTS email_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  template_key text NOT NULL,
  recipient text NOT NULL,
  provider_message_id text,
  status email_status NOT NULL DEFAULT 'QUEUED',
  related_entity_type text,
  related_entity_id uuid,
  sent_at timestamptz
);

CREATE INDEX IF NOT EXISTS email_logs_status_idx ON email_logs (status);
CREATE INDEX IF NOT EXISTS email_logs_related_idx ON email_logs (related_entity_type, related_entity_id);
