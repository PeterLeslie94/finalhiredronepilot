-- 0006_simplify_flow.sql
-- Remove bidding & anonymisation systems. Switch to direct client contact flow.
-- Client enquiry → admin reviews → sends raw enquiry to pilots → pilots contact client directly.

BEGIN;

-- 1. Drop tables (FK order matters)
DROP TABLE IF EXISTS customer_shortlists CASCADE;
DROP TABLE IF EXISTS bids CASCADE;

-- Null out FK before dropping the referenced table
ALTER TABLE enquiries DROP COLUMN IF EXISTS approved_brief_version_id;

DROP TABLE IF EXISTS enquiry_brief_versions CASCADE;

-- 2. Drop columns from enquiries
ALTER TABLE enquiries DROP COLUMN IF EXISTS bid_deadline_at;
ALTER TABLE enquiries DROP COLUMN IF EXISTS anonymization_status;

-- 3. Drop unused enums
DROP TYPE IF EXISTS bid_status;
DROP TYPE IF EXISTS brief_version_type;
DROP TYPE IF EXISTS anonymization_status;

-- 4. Rebuild enquiry_status enum (Postgres can't remove values — must recreate)
-- Rename old enum
ALTER TYPE enquiry_status RENAME TO enquiry_status_old;

-- Create new enum with only the statuses we keep
CREATE TYPE enquiry_status AS ENUM ('NEW', 'ACK_SENT', 'INVITES_SENT', 'CLOSED');

-- Migrate the column
ALTER TABLE enquiries
  ALTER COLUMN status DROP DEFAULT,
  ALTER COLUMN status TYPE enquiry_status USING (
    CASE status::text
      WHEN 'NEW' THEN 'NEW'::enquiry_status
      WHEN 'ACK_SENT' THEN 'ACK_SENT'::enquiry_status
      WHEN 'INVITES_SENT' THEN 'INVITES_SENT'::enquiry_status
      WHEN 'CLOSED' THEN 'CLOSED'::enquiry_status
      -- Map removed statuses to closest surviving status
      WHEN 'ANONYMIZATION_PENDING' THEN 'ACK_SENT'::enquiry_status
      WHEN 'ANONYMIZATION_APPROVED' THEN 'ACK_SENT'::enquiry_status
      WHEN 'BIDDING_OPEN' THEN 'INVITES_SENT'::enquiry_status
      WHEN 'EXTENDED' THEN 'INVITES_SENT'::enquiry_status
      WHEN 'BIDDING_CLOSED' THEN 'INVITES_SENT'::enquiry_status
      WHEN 'SHORTLIST_READY' THEN 'INVITES_SENT'::enquiry_status
      WHEN 'SHORTLIST_SENT' THEN 'CLOSED'::enquiry_status
      ELSE 'NEW'::enquiry_status
    END
  ),
  ALTER COLUMN status SET DEFAULT 'NEW';

-- Drop old enum
DROP TYPE enquiry_status_old;

-- 5. Rebuild invite_status enum (remove SUBMITTED)
ALTER TYPE invite_status RENAME TO invite_status_old;

CREATE TYPE invite_status AS ENUM ('SENT', 'OPENED', 'EXPIRED', 'DECLINED');

ALTER TABLE pilot_invitations
  ALTER COLUMN status DROP DEFAULT,
  ALTER COLUMN status TYPE invite_status USING (
    CASE status::text
      WHEN 'SENT' THEN 'SENT'::invite_status
      WHEN 'OPENED' THEN 'OPENED'::invite_status
      WHEN 'EXPIRED' THEN 'EXPIRED'::invite_status
      WHEN 'DECLINED' THEN 'DECLINED'::invite_status
      WHEN 'SUBMITTED' THEN 'OPENED'::invite_status
      ELSE 'SENT'::invite_status
    END
  ),
  ALTER COLUMN status SET DEFAULT 'SENT';

DROP TYPE invite_status_old;

COMMIT;
