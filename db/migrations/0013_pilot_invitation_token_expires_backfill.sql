BEGIN;

ALTER TABLE pilot_invitations
  ADD COLUMN IF NOT EXISTS token_expires_at timestamptz;

UPDATE pilot_invitations
SET token_expires_at = sent_at + interval '30 days'
WHERE token_expires_at IS NULL;

ALTER TABLE pilot_invitations
  ALTER COLUMN token_expires_at SET NOT NULL;

COMMIT;
