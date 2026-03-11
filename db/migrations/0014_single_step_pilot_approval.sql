-- 0014_single_step_pilot_approval.sql
-- Approved pilots now go live immediately via listing_live_at.

BEGIN;

ALTER TABLE pilots
  ADD COLUMN IF NOT EXISTS listing_live_at timestamptz;

UPDATE pilots
SET listing_live_at = COALESCE(listing_live_at, integrated_confirmed_at, created_at, updated_at, now()),
    updated_at = now()
WHERE listing_live_at IS NULL;

CREATE INDEX IF NOT EXISTS pilots_listing_live_idx
  ON pilots (active, listing_live_at DESC)
  WHERE listing_live_at IS NOT NULL;

DROP INDEX IF EXISTS pilots_tier_v2_idx;
DROP INDEX IF EXISTS pilots_backlink_token_expires_idx;
DROP INDEX IF EXISTS pilot_applications_backlink_token_expires_idx;

ALTER TABLE pilots
  DROP COLUMN IF EXISTS tier,
  DROP COLUMN IF EXISTS integrated_confirmed_at,
  DROP COLUMN IF EXISTS backlink_token_hash,
  DROP COLUMN IF EXISTS backlink_token_expires_at;

ALTER TABLE pilot_applications
  DROP COLUMN IF EXISTS backlink_token_hash,
  DROP COLUMN IF EXISTS backlink_confirmed_at,
  DROP COLUMN IF EXISTS backlink_token_expires_at;

DROP TYPE IF EXISTS pilot_tier_v2;

COMMIT;
