import { NextResponse } from 'next/server';

import { logEmail, logPilotApplicationEvent } from '@/lib/server/audit';
import { withTransaction } from '@/lib/server/database';
import { fireEmail } from '@/lib/server/email';
import { jsonError, parseBody } from '@/lib/server/http';
import { createInvitationToken } from '@/lib/server/security';
import { validatePilotApplicationPayload } from '@/lib/server/validation';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const payload = await parseBody(request);
    if (!payload.consent_source_page) {
      payload.consent_source_page = request.headers.get('referer');
    }
    const input = validatePilotApplicationPayload(payload);

    const { rawToken: backlinkToken, tokenHash: backlinkTokenHash } = createInvitationToken();

    const created = await withTransaction(async (client) => {
      const result = await client.query<{ id: string; status: string }>(
        `INSERT INTO pilot_applications
          (
            pilot_name,
            business_name,
            email,
            phone,
            website_url,
            profile_photo_url,
            two_sentence_summary,
            insurance_provider,
            insurance_expiry,
            flyer_id,
            operator_id,
            licence_level,
            consent_to_pilot_terms,
            pilot_terms_version,
            consent_timestamp,
            consent_source_page,
            backlink_token_hash,
            status
          )
          VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,now(),$15,$16,'SUBMITTED')
          RETURNING id, status`,
        [
          input.pilot_name,
          input.business_name,
          input.email,
          input.phone,
          input.website_url,
          input.profile_photo_url,
          input.two_sentence_summary,
          input.insurance_provider,
          input.insurance_expiry,
          input.flyer_id,
          input.operator_id,
          input.licence_level,
          input.consent_to_pilot_terms,
          input.pilot_terms_version,
          input.consent_source_page,
          backlinkTokenHash,
        ],
      );

      const applicationId = result.rows[0].id;
      await logPilotApplicationEvent(
        applicationId,
        'APPLICATION_SUBMITTED',
        { email: input.email },
        'APPLICANT',
        null,
        client,
      );
      const emailLogId = await logEmail('pilot_application_received', input.email, 'QUEUED', 'PILOT_APPLICATION', applicationId, client);
      return {
        id: result.rows[0].id,
        status: result.rows[0].status,
        emailLogId,
        applicantEmail: input.email,
        applicantName: input.pilot_name,
        websiteUrl: input.website_url as string | null,
      };
    });

    fireEmail(created.emailLogId, created.applicantEmail, {
      templateKey: 'pilot_application_received',
      applicantName: created.applicantName,
    });

    return NextResponse.json(
      {
        application_id: created.id,
        status: created.status,
      },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to submit pilot application';
    return jsonError(message, 400);
  }
}
