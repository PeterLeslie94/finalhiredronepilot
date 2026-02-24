-- Add backlink confirmation columns to pilot_applications
ALTER TABLE pilot_applications
  ADD COLUMN IF NOT EXISTS backlink_token_hash text,
  ADD COLUMN IF NOT EXISTS backlink_confirmed_at timestamptz;
