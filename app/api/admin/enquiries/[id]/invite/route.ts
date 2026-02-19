import { NextRequest, NextResponse } from 'next/server';

import { logEmail, logEnquiryEvent } from '@/lib/server/audit';
import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { withTransaction } from '@/lib/server/database';
import { fireEmail } from '@/lib/server/email';
import { jsonError, parseBody } from '@/lib/server/http';
import { createInvitationToken } from '@/lib/server/security';
import { validateInviteSelectionPayload } from '@/lib/server/validation';

export const runtime = 'nodejs';

type PilotRow = {
  id: string;
  email: string;
  name: string;
};

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { adminId } = await requireAdminAccess(request);
    const { id } = await params;
    const payload = await parseBody(request);
    const selection = validateInviteSelectionPayload(payload);

    const result = await withTransaction(async (client) => {
      const enquiryResult = await client.query<{
        id: string;
        service_slug: string;
        postcode: string;
        site_location_text: string;
        date_needed: string | null;
        date_flexibility: string;
        job_details: string;
        client_name: string;
        client_email: string;
        client_phone: string | null;
      }>(
        `SELECT id, service_slug, postcode, site_location_text, date_needed, date_flexibility, job_details, name AS client_name, email AS client_email, phone AS client_phone FROM enquiries WHERE id = $1 FOR UPDATE`,
        [id],
      );
      const enquiry = enquiryResult.rows[0];
      if (!enquiry) {
        throw new Error('Enquiry not found');
      }

      const pilotResult = await client.query<PilotRow>(
        `SELECT id, email, name FROM pilots WHERE active = true ORDER BY created_at DESC`,
      );

      const includeSet = new Set(selection.include_pilot_ids);
      const excludeSet = new Set(selection.exclude_pilot_ids);
      const selected = new Map<string, PilotRow>();

      for (const pilot of pilotResult.rows) {
        if (!excludeSet.has(pilot.id)) {
          selected.set(pilot.id, pilot);
        }
      }

      if (includeSet.size > 0) {
        const missingIncludes = [...includeSet].filter((pilotId) => !selected.has(pilotId));
        if (missingIncludes.length > 0) {
          const includeQuery = await client.query<PilotRow>(
            `SELECT id, email, name FROM pilots WHERE id = ANY($1::uuid[]) AND active = true`,
            [missingIncludes],
          );
          for (const pilot of includeQuery.rows) {
            if (!excludeSet.has(pilot.id)) {
              selected.set(pilot.id, pilot);
            }
          }
        }
      }

      if (selected.size === 0) {
        throw new Error('No eligible pilots selected');
      }

      const inviteRoundResult = await client.query<{ round: number }>(
        `SELECT COALESCE(MAX(invite_round), 0) + 1 AS round FROM pilot_invitations WHERE enquiry_id = $1`,
        [id],
      );
      const inviteRound = inviteRoundResult.rows[0].round;

      const created: Array<{ pilot_id: string; pilot_email: string; pilot_name: string; token: string; emailLogId: string }> = [];
      for (const pilot of selected.values()) {
        const { rawToken, tokenHash } = createInvitationToken();
        await client.query(
          `INSERT INTO pilot_invitations
            (enquiry_id, pilot_id, invite_round, token_hash, status, sent_at)
           VALUES ($1, $2, $3, $4, 'SENT', now())`,
          [id, pilot.id, inviteRound, tokenHash],
        );
        const emailLogId = await logEmail('pilot_invite', pilot.email, 'QUEUED', 'ENQUIRY', id, client);
        created.push({
          pilot_id: pilot.id,
          pilot_email: pilot.email,
          pilot_name: pilot.name,
          token: rawToken,
          emailLogId,
        });
      }

      await client.query(
        `UPDATE enquiries
         SET status = 'INVITES_SENT', updated_at = now()
         WHERE id = $1`,
        [id],
      );

      await logEnquiryEvent(
        id,
        'INVITES_SENT',
        {
          invite_round: inviteRound,
          count: created.length,
          include_count: selection.include_pilot_ids.length,
          exclude_count: selection.exclude_pilot_ids.length,
        },
        'ADMIN',
        adminId,
        client,
      );

      return {
        enquiry_id: id,
        invite_round: inviteRound,
        invites_created: created.length,
        invite_tokens: created,
        serviceSlug: enquiry.service_slug,
        postcode: enquiry.postcode,
        siteLocationText: enquiry.site_location_text,
        dateNeeded: enquiry.date_needed,
        dateFlexibility: enquiry.date_flexibility,
        jobDetails: enquiry.job_details,
        clientName: enquiry.client_name,
        clientEmail: enquiry.client_email,
        clientPhone: enquiry.client_phone,
      };
    });

    for (const inv of result.invite_tokens) {
      fireEmail(inv.emailLogId, inv.pilot_email, {
        templateKey: 'pilot_invite',
        pilotName: inv.pilot_name,
        serviceSlug: result.serviceSlug,
        postcode: result.postcode,
        siteLocationText: result.siteLocationText,
        dateNeeded: result.dateNeeded,
        dateFlexibility: result.dateFlexibility,
        jobDetails: result.jobDetails,
        clientName: result.clientName,
        clientEmail: result.clientEmail,
        clientPhone: result.clientPhone,
      });
    }

    return NextResponse.json({
      enquiry_id: result.enquiry_id,
      invite_round: result.invite_round,
      invites_created: result.invites_created,
      invite_tokens: result.invite_tokens.map((t) => ({
        pilot_id: t.pilot_id,
        pilot_email: t.pilot_email,
        token: t.token,
      })),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to send invites';
    if (error instanceof AuthError) {
      return jsonError(message, 401);
    }
    const status = message.includes('not found') ? 404 : 400;
    return jsonError(message, status);
  }
}
