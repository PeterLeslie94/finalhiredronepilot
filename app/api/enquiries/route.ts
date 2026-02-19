import { NextResponse } from 'next/server';

import { logEmail, logEnquiryEvent } from '@/lib/server/audit';
import { withTransaction } from '@/lib/server/database';
import { fireEmail } from '@/lib/server/email';
import { jsonError, parseBody, wantsHtmlRedirect } from '@/lib/server/http';
import { validateEnquiryPayload } from '@/lib/server/validation';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const payload = await parseBody(request);

    // Preserve compatibility with legacy forms by inferring source data.
    if (!payload.source_page) {
      payload.source_page = request.headers.get('referer');
    }
    if (!payload.marketplace_terms_version) {
      payload.marketplace_terms_version = 'marketplace-terms-v1';
    }

    const input = validateEnquiryPayload(payload);

    const enquiry = await withTransaction(async (client) => {
      const inserted = await client.query<{ id: string; status: string }>(
        `INSERT INTO enquiries
        (
          name,
          email,
          phone,
          service_slug,
          date_needed,
          date_flexibility,
          site_location_text,
          postcode,
          job_details,
          consent_share_with_pilots,
          consent_policy_version,
          marketplace_terms_version,
          consent_timestamp,
          source_page,
          source_form,
          status
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,now(),$13,$14,'NEW')
        RETURNING id, status`,
        [
          input.name,
          input.email,
          input.phone,
          input.service_slug,
          input.date_needed,
          input.date_flexibility,
          input.site_location_text,
          input.postcode,
          input.job_details,
          input.consent_share_with_pilots,
          input.consent_policy_version,
          input.marketplace_terms_version,
          input.source_page,
          input.source_form,
        ],
      );

      const enquiryId = inserted.rows[0].id;
      await logEnquiryEvent(
        enquiryId,
        'ENQUIRY_CREATED',
        {
          service_slug: input.service_slug,
          source_form: input.source_form,
          source_page: input.source_page,
        },
        'SYSTEM',
        null,
        client,
      );

      await client.query(`UPDATE enquiries SET status = 'ACK_SENT', updated_at = now() WHERE id = $1`, [enquiryId]);
      await logEnquiryEvent(enquiryId, 'ACK_SENT', {}, 'SYSTEM', null, client);
      const emailLogId = await logEmail('client_acknowledgement', input.email, 'QUEUED', 'ENQUIRY', enquiryId, client);

      return {
        id: enquiryId,
        status: 'ACK_SENT',
        emailLogId,
        clientEmail: input.email,
        clientName: input.name,
        serviceSlug: input.service_slug,
      };
    });

    fireEmail(enquiry.emailLogId, enquiry.clientEmail, {
      templateKey: 'client_acknowledgement',
      clientName: enquiry.clientName,
      serviceSlug: enquiry.serviceSlug,
    });

    if (wantsHtmlRedirect(request)) {
      return NextResponse.redirect(new URL('/thank-you', request.url), 303);
    }

    return NextResponse.json({
      enquiry_id: enquiry.id,
      status: enquiry.status,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to create enquiry';
    return jsonError(message, 400);
  }
}
