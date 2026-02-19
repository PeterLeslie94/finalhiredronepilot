import { PoolClient } from 'pg';

import { query } from '@/lib/server/database';

type ActorType = 'SYSTEM' | 'ADMIN' | 'PILOT' | 'APPLICANT';

export async function logEnquiryEvent(
  enquiryId: string,
  eventType: string,
  payload: Record<string, unknown> = {},
  actorType: ActorType = 'SYSTEM',
  actorId: string | null = null,
  client?: PoolClient,
) {
  const sql = `INSERT INTO enquiry_events (enquiry_id, actor_type, actor_id, event_type, payload_json)
               VALUES ($1, $2, $3, $4, $5::jsonb)`;
  const params = [enquiryId, actorType, actorId, eventType, JSON.stringify(payload)];
  if (client) {
    await client.query(sql, params);
    return;
  }
  await query(sql, params);
}

export async function logPilotApplicationEvent(
  applicationId: string,
  eventType: string,
  payload: Record<string, unknown> = {},
  actorType: ActorType = 'SYSTEM',
  actorId: string | null = null,
  client?: PoolClient,
) {
  const sql = `INSERT INTO pilot_application_events (pilot_application_id, actor_type, actor_id, event_type, payload_json)
               VALUES ($1, $2, $3, $4, $5::jsonb)`;
  const params = [applicationId, actorType, actorId, eventType, JSON.stringify(payload)];
  if (client) {
    await client.query(sql, params);
    return;
  }
  await query(sql, params);
}

export async function logEmail(
  templateKey: string,
  recipient: string,
  status: 'QUEUED' | 'SENT' | 'DELIVERED' | 'BOUNCED' | 'FAILED',
  relatedEntityType?: string,
  relatedEntityId?: string,
  client?: PoolClient,
): Promise<string> {
  const sql = `INSERT INTO email_logs (template_key, recipient, status, related_entity_type, related_entity_id, sent_at)
               VALUES (
                 $1,
                 $2,
                 $3::email_status,
                 $4,
                 $5,
                 CASE WHEN $3::email_status = 'SENT'::email_status THEN now() ELSE NULL END
               )
               RETURNING id`;
  const params = [templateKey, recipient, status, relatedEntityType ?? null, relatedEntityId ?? null];
  if (client) {
    const res = await client.query<{ id: string }>(sql, params);
    return res.rows[0].id;
  }
  const res = await query<{ id: string }>(sql, params);
  return res.rows[0].id;
}
