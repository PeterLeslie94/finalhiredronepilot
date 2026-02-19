-- Shared magic-link auth for admins and independent drone pilots.
-- Emails are exclusive: one email can belong to either an ADMIN or a DRONE_PILOT identity, never both.

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM admins a
    JOIN pilots p ON lower(a.email) = lower(p.email)
  ) THEN
    RAISE EXCEPTION 'Auth migration blocked: an email exists in both admins and pilots (role exclusivity violated).';
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS user_identities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL CHECK (email = lower(email)),
  role text NOT NULL CHECK (role IN ('ADMIN', 'DRONE_PILOT')),
  admin_id uuid REFERENCES admins(id) ON DELETE CASCADE,
  pilot_id uuid REFERENCES pilots(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE user_identities
  ADD CONSTRAINT user_identities_role_link_chk
  CHECK (
    (role = 'ADMIN' AND admin_id IS NOT NULL AND pilot_id IS NULL) OR
    (role = 'DRONE_PILOT' AND pilot_id IS NOT NULL AND admin_id IS NULL)
  );

CREATE TABLE IF NOT EXISTS auth_magic_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  identity_id uuid NOT NULL REFERENCES user_identities(id) ON DELETE CASCADE,
  token_hash text UNIQUE NOT NULL,
  expires_at timestamptz NOT NULL,
  used_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS auth_magic_links_identity_idx
ON auth_magic_links (identity_id, created_at DESC);

CREATE TABLE IF NOT EXISTS auth_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  identity_id uuid NOT NULL REFERENCES user_identities(id) ON DELETE CASCADE,
  session_token_hash text UNIQUE NOT NULL,
  expires_at timestamptz NOT NULL,
  revoked_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS auth_sessions_identity_idx
ON auth_sessions (identity_id, created_at DESC);

CREATE INDEX IF NOT EXISTS auth_sessions_valid_idx
ON auth_sessions (expires_at, revoked_at);

-- Backfill identities for existing admins and pilots.
INSERT INTO user_identities (email, role, admin_id)
SELECT lower(a.email), 'ADMIN', a.id
FROM admins a
WHERE a.email IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM user_identities ui WHERE ui.email = lower(a.email));

INSERT INTO user_identities (email, role, pilot_id)
SELECT lower(p.email), 'DRONE_PILOT', p.id
FROM pilots p
WHERE p.email IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM user_identities ui WHERE ui.email = lower(p.email));

