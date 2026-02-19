BEGIN;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'pilot_tier_v2') THEN
    CREATE TYPE pilot_tier_v2 AS ENUM ('VERIFIED_OPERATOR', 'INTEGRATED_OPERATOR');
  END IF;
END $$;

ALTER TABLE pilots
  ADD COLUMN IF NOT EXISTS tier pilot_tier_v2 NOT NULL DEFAULT 'VERIFIED_OPERATOR',
  ADD COLUMN IF NOT EXISTS slug text,
  ADD COLUMN IF NOT EXISTS integrated_confirmed_at timestamptz,
  ADD COLUMN IF NOT EXISTS backlink_token_hash text;

-- Generate slugs for existing pilots
UPDATE pilots
SET slug = lower(regexp_replace(regexp_replace(name, '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g'))
WHERE slug IS NULL;

-- Deduplicate slugs
DO $$ DECLARE r RECORD; counter INT; BEGIN
  FOR r IN SELECT id, slug FROM pilots WHERE slug IN (
    SELECT slug FROM pilots GROUP BY slug HAVING count(*) > 1
  ) ORDER BY created_at LOOP
    SELECT count(*) INTO counter FROM pilots WHERE slug = r.slug AND id < r.id;
    IF counter > 0 THEN
      UPDATE pilots SET slug = r.slug || '-' || (counter + 1) WHERE id = r.id;
    END IF;
  END LOOP;
END $$;

ALTER TABLE pilots ALTER COLUMN slug SET NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS pilots_slug_uq ON pilots (slug);
CREATE INDEX IF NOT EXISTS pilots_tier_v2_idx ON pilots (tier);

COMMIT;
