-- Connector-only legal consent fields for enquiries and drone pilot applications.

ALTER TABLE pilot_applications
  ADD COLUMN IF NOT EXISTS consent_to_pilot_terms boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS pilot_terms_version text NOT NULL DEFAULT 'pilot-terms-v1',
  ADD COLUMN IF NOT EXISTS consent_timestamp timestamptz,
  ADD COLUMN IF NOT EXISTS consent_source_page text;

ALTER TABLE enquiries
  ADD COLUMN IF NOT EXISTS marketplace_terms_version text NOT NULL DEFAULT 'marketplace-terms-v1';
