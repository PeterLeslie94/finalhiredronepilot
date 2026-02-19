-- Add backlink confirmation columns to pilot_applications
ALTER TABLE pilot_applications
  ADD COLUMN backlink_token_hash text,
  ADD COLUMN backlink_confirmed_at timestamptz;
