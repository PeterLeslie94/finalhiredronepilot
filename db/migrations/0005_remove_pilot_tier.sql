-- 0005_remove_pilot_tier.sql
-- Remove the pilot tier system. All pilots are now treated equally.

DROP INDEX IF EXISTS pilots_tier_idx;
ALTER TABLE pilots DROP COLUMN IF EXISTS tier;
DROP TYPE IF EXISTS pilot_tier;
