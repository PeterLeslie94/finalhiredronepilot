BEGIN;

CREATE INDEX IF NOT EXISTS pilot_invitations_pilot_sent_at_idx
ON pilot_invitations (pilot_id, sent_at DESC);

CREATE INDEX IF NOT EXISTS pilot_invitations_enquiry_round_sent_at_idx
ON pilot_invitations (enquiry_id, invite_round, sent_at);

CREATE INDEX IF NOT EXISTS email_logs_related_sent_at_idx
ON email_logs (related_entity_id, sent_at DESC);

CREATE INDEX IF NOT EXISTS pilots_active_created_at_idx
ON pilots (active, created_at DESC);

COMMIT;
