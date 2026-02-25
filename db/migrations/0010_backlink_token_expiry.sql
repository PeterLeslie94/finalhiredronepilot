BEGIN;

ALTER TABLE pilots
  ADD COLUMN IF NOT EXISTS backlink_token_expires_at timestamptz;

ALTER TABLE pilot_applications
  ADD COLUMN IF NOT EXISTS backlink_token_expires_at timestamptz;

UPDATE pilots
SET backlink_token_expires_at = now() + interval '30 days'
WHERE backlink_token_hash IS NOT NULL
  AND backlink_token_expires_at IS NULL;

UPDATE pilot_applications
SET backlink_token_expires_at = now() + interval '30 days'
WHERE backlink_token_hash IS NOT NULL
  AND backlink_token_expires_at IS NULL;

CREATE INDEX IF NOT EXISTS pilots_backlink_token_expires_idx
  ON pilots (backlink_token_expires_at);

CREATE INDEX IF NOT EXISTS pilot_applications_backlink_token_expires_idx
  ON pilot_applications (backlink_token_expires_at);

COMMIT;
