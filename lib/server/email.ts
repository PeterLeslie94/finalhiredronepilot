import { Resend } from 'resend';

import { query } from '@/lib/server/database';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM_EMAIL || 'HireDronePilot <noreply@hiredronepilot.uk>';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://hiredronepilot.uk';

// ---------------------------------------------------------------------------
// Template data — discriminated union
// ---------------------------------------------------------------------------

export type EmailTemplateData =
  | { templateKey: 'auth_magic_link'; magicLinkUrl: string }
  | { templateKey: 'client_acknowledgement'; clientName: string; serviceSlug: string }
  | {
      templateKey: 'pilot_invite';
      pilotName: string;
      serviceSlug: string;
      postcode: string;
      siteLocationText: string;
      dateNeeded: string | null;
      dateFlexibility: string;
      jobDetails: string;
      clientName: string;
      clientEmail: string;
      clientPhone: string | null;
    }
  | {
      templateKey: 'pilot_application_received';
      applicantName: string;
    }
  | {
      templateKey: 'pilot_approved';
      pilotName: string;
      pilotId: string;
      slug: string;
      backlinkToken: string;
      websiteUrl: string | null;
    }
  | {
      templateKey: 'admin_backlink_confirmed';
      pilotName: string;
      businessName: string;
      websiteUrl: string | null;
      applicationId: string;
    }
  | {
      templateKey: 'pilot_application_rejected';
      applicantName: string;
      reason: string | null;
    }
  | {
      templateKey: 'pilot_application_info_requested';
      applicantName: string;
      message: string;
    };

// ---------------------------------------------------------------------------
// Shared email layout
// ---------------------------------------------------------------------------

function wrapInLayout(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<!--[if mso]><style>table,td{font-family:Arial,Helvetica,sans-serif!important;}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;">
    <tr><td align="center" style="padding:24px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <!-- Header -->
        <tr><td style="background-color:#1f2937;padding:24px 32px;border-radius:8px 8px 0 0;">
          <span style="color:#ffffff;font-size:22px;font-weight:bold;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;text-decoration:none;">HireDronePilot</span>
          <br>
          <span style="color:#f97316;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">UK Network</span>
        </td></tr>
        <!-- Body -->
        <tr><td style="background-color:#ffffff;padding:32px;">
          ${bodyHtml}
        </td></tr>
        <!-- Upper Footer -->
        <tr><td style="background-color:#1f2937;padding:24px 32px;text-align:center;">
          <a href="${BASE_URL}" style="color:#f97316;font-size:14px;text-decoration:none;font-weight:600;">HireDronePilot.uk</a><br>
          <span style="color:rgba(255,255,255,0.7);font-size:13px;line-height:1.8;">
            <a href="mailto:quotes@hiredronepilot.uk" style="color:rgba(255,255,255,0.7);text-decoration:none;">quotes@hiredronepilot.uk</a>
            &nbsp;&middot;&nbsp;
            <a href="tel:+441334804554" style="color:rgba(255,255,255,0.7);text-decoration:none;">+44 1334 804554</a>
          </span>
        </td></tr>
        <!-- Copyright Bar -->
        <tr><td style="background-color:#111827;padding:16px 32px;text-align:center;border-radius:0 0 8px 8px;">
          <span style="color:rgba(255,255,255,0.5);font-size:12px;line-height:1.6;">
            &copy; 2026 HireDronePilot<br>
            HireDronePilot (SC662275) &middot; Castlecroft Business Centre, Tom Johnston Road, Dundee DD4 8XD
          </span>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function ctaButton(href: string, label: string): string {
  return `<!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:44px;v-text-anchor:middle;width:220px;" arcsize="0%" fillcolor="#f97316" stroke="f">
    <w:anchorlock/>
    <center style="color:#111827;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">${label}</center>
  </v:roundrect>
  <![endif]-->
  <!--[if !mso]><!-->
  <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;">
    <tr><td style="background-color:#f97316;border-radius:30px 0 30px 0;padding:14px 32px;">
      <a href="${href}" style="color:#111827;font-size:14px;font-weight:600;text-decoration:none;display:inline-block;text-transform:uppercase;letter-spacing:0.05em;">${label}</a>
    </td></tr>
  </table>
  <!--<![endif]-->`;
}

function formatServiceSlug(slug: string): string {
  return slug
    .replace(/^drone-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function flexibilityLabel(flex: string): string {
  const map: Record<string, string> = {
    FIXED: 'Fixed Date',
    ASAP: 'As Soon as Possible',
    FLEXIBLE: 'Flexible',
    WITHIN_WEEK: 'Within a Week',
    WITHIN_MONTH: 'Within a Month',
  };
  return map[flex] || flex;
}

function formatDate(value: string | null): string {
  if (!value) return 'Not specified';
  const d = new Date(value);
  if (isNaN(d.getTime())) return 'Not specified';
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ---------------------------------------------------------------------------
// Template rendering
// ---------------------------------------------------------------------------

function renderTemplate(data: EmailTemplateData): { subject: string; html: string } {
  switch (data.templateKey) {
    case 'auth_magic_link':
      return {
        subject: 'Your login link for HireDronePilot',
        html: wrapInLayout(`
          <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Sign in to HireDronePilot</h2>
          <p style="margin:0 0 8px;color:#2d3748;font-size:15px;line-height:1.6;">
            Click the button below to log in. This link expires in 15 minutes.
          </p>
          ${ctaButton(data.magicLinkUrl, 'Log in to HireDronePilot')}
          <p style="margin:0;color:#718096;font-size:13px;">
            If you didn't request this link, you can safely ignore this email.
          </p>
        `),
      };

    case 'client_acknowledgement':
      return {
        subject: "We've received your drone survey enquiry",
        html: wrapInLayout(`
          <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Thanks, ${escapeHtml(data.clientName)}!</h2>
          <p style="margin:0 0 8px;color:#2d3748;font-size:15px;line-height:1.6;">
            We've received your enquiry for <strong>${escapeHtml(formatServiceSlug(data.serviceSlug))}</strong>.
          </p>
          <p style="margin:0 0 8px;color:#2d3748;font-size:15px;line-height:1.6;">
            We've shared your enquiry with experienced drone pilots in your area. They'll contact you directly to discuss your requirements and provide a quote.
          </p>
          <p style="margin:16px 0 0;color:#718096;font-size:13px;">
            If you have any questions in the meantime, just reply to this email.
          </p>
        `),
      };

    case 'pilot_invite': {
      const dateDisplay = formatDate(data.dateNeeded);
      const flexDisplay = flexibilityLabel(data.dateFlexibility);
      const phoneRow = data.clientPhone
        ? `<tr><td style="padding:6px 12px;color:#2d3748;font-size:14px;line-height:1.5;">
              <a href="tel:${escapeHtml(data.clientPhone)}" style="color:#f97316;text-decoration:none;">${escapeHtml(data.clientPhone)}</a>
            </td></tr>`
        : '';

      return {
        subject: `New drone survey opportunity near ${data.postcode}`,
        html: wrapInLayout(`
          <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Hi ${escapeHtml(data.pilotName)}, you have a new job opportunity!</h2>
          <p style="margin:0 0 20px;color:#2d3748;font-size:15px;line-height:1.6;">
            A new job is available for you to quote on.
          </p>

          <!-- Project Details -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
            <tr><td style="background-color:#f3f4f6;padding:10px 12px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">
              Project Details
            </td></tr>
            <tr><td style="padding:12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:4px 0;color:#6b7280;font-size:13px;width:80px;vertical-align:top;">Service</td>
                  <td style="padding:4px 0;color:#1f2937;font-size:14px;font-weight:600;">${escapeHtml(formatServiceSlug(data.serviceSlug))}</td>
                </tr>
                <tr>
                  <td style="padding:4px 0;color:#6b7280;font-size:13px;vertical-align:top;">Location</td>
                  <td style="padding:4px 0;color:#1f2937;font-size:14px;">${escapeHtml(data.siteLocationText)}, ${escapeHtml(data.postcode)}</td>
                </tr>
                <tr>
                  <td style="padding:4px 0;color:#6b7280;font-size:13px;vertical-align:top;">Date</td>
                  <td style="padding:4px 0;color:#1f2937;font-size:14px;">${escapeHtml(dateDisplay)} (${escapeHtml(flexDisplay)})</td>
                </tr>
              </table>
            </td></tr>
            <tr><td style="padding:0 12px 12px;">
              <p style="margin:8px 0 4px;color:#6b7280;font-size:13px;">Job Details</p>
              <p style="margin:0;color:#2d3748;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.jobDetails)}</p>
            </td></tr>
          </table>

          <!-- Client Contact -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
            <tr><td style="background-color:#f3f4f6;padding:10px 12px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">
              Client Contact
            </td></tr>
            <tr><td style="padding:6px 12px;color:#1f2937;font-size:14px;font-weight:600;line-height:1.5;">
              ${escapeHtml(data.clientName)}
            </td></tr>
            <tr><td style="padding:6px 12px;color:#2d3748;font-size:14px;line-height:1.5;">
              <a href="mailto:${escapeHtml(data.clientEmail)}" style="color:#f97316;text-decoration:none;">${escapeHtml(data.clientEmail)}</a>
            </td></tr>
            ${phoneRow}
          </table>

          <p style="margin:0 0 8px;color:#2d3748;font-size:15px;line-height:1.6;">
            Contact the client directly to discuss their requirements and provide your quote.
          </p>
          <p style="margin:0;color:#718096;font-size:13px;">
            If you're unavailable for this job, no action is needed.
          </p>
        `),
      };
    }

    case 'pilot_application_received':
      return {
        subject: 'Your pilot application has been received',
        html: wrapInLayout(`
          <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Thanks for applying, ${escapeHtml(data.applicantName)}!</h2>
          <p style="margin:0 0 16px;color:#2d3748;font-size:15px;line-height:1.6;">
            We've received your pilot application and our team will review it shortly.
          </p>
          <p style="margin:0 0 16px;color:#2d3748;font-size:15px;line-height:1.6;">
            We'll email you once your profile is live on the platform.
          </p>
          <p style="margin:0;color:#718096;font-size:13px;">
            If you have any questions in the meantime, just reply to this email.
          </p>
        `),
      };

    case 'pilot_approved': {
      const profileUrl = `${BASE_URL}/pilots/${data.slug}`;
      const confirmIntegrationUrl = `${BASE_URL}/api/pilots/${data.pilotId}/confirm-integration?token=${data.backlinkToken}`;
      const badgeEmbedCode = `&lt;a href=&quot;${escapeHtml(profileUrl)}&quot;&gt;&lt;img src=&quot;${escapeHtml(BASE_URL)}/badges/verified-operator.svg&quot; alt=&quot;Verified on HireDronePilot&quot; width=&quot;200&quot; height=&quot;60&quot;&gt;&lt;/a&gt;`;

      return {
        subject: 'Your HireDronePilot Profile Is Live',
        html: wrapInLayout(`
          <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Hi ${escapeHtml(data.pilotName)},</h2>
          <p style="margin:0 0 16px;color:#2d3748;font-size:15px;line-height:1.6;">
            Your HireDronePilot profile is now live:
          </p>
          ${ctaButton(profileUrl, 'View Your Profile')}
          <p style="margin:0 0 24px;color:#2d3748;font-size:15px;line-height:1.6;">
            You are listed as a <strong>Verified Operator</strong> within the directory.
          </p>

          <!-- Integrated Operator benefits -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
            <tr><td style="background-color:#f3f4f6;padding:10px 12px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">
              Upgrade to Integrated Operator
            </td></tr>
            <tr><td style="padding:16px 12px;">
              <p style="margin:0 0 12px;color:#2d3748;font-size:15px;line-height:1.6;">
                Embed a badge or link on your website to unlock additional benefits:
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 16px;">
                <tr><td style="padding:4px 0;color:#2d3748;font-size:14px;line-height:1.6;">
                  &#10003;&nbsp; <strong>Website Verified</strong> indicator on your profile
                </td></tr>
                <tr><td style="padding:4px 0;color:#2d3748;font-size:14px;line-height:1.6;">
                  &#10003;&nbsp; <strong>Increased visibility</strong> in the pilot directory
                </td></tr>
                <tr><td style="padding:4px 0;color:#2d3748;font-size:14px;line-height:1.6;">
                  &#10003;&nbsp; <strong>Priority leads</strong> for jobs in your area
                </td></tr>
              </table>
              <p style="margin:0 0 16px;color:#718096;font-size:14px;line-height:1.6;">
                There's no obligation to upgrade &mdash; but fully integrated profiles typically perform better within the platform.
              </p>

              <p style="margin:0 0 8px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Badge Embed Code</p>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr><td style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:4px;padding:8px 12px;font-family:monospace;font-size:12px;color:#374151;word-break:break-all;">
                  ${badgeEmbedCode}
                </td></tr>
              </table>
            </td></tr>
          </table>

          <p style="margin:0 0 8px;color:#2d3748;font-size:14px;line-height:1.6;">
            Once you've added the badge or link to your site, confirm it here:
          </p>
          ${ctaButton(confirmIntegrationUrl, "I've Added My Badge")}

          <p style="margin:0;color:#718096;font-size:13px;">
            Best,<br>HireDronePilot
          </p>
        `),
      };
    }

    case 'admin_backlink_confirmed': {
      const reviewUrl = `${BASE_URL}/admin/pilot-applications`;
      const website = data.websiteUrl ? escapeHtml(data.websiteUrl) : 'Not provided';
      return {
        subject: `Backlink confirmed: ${data.pilotName}`,
        html: wrapInLayout(`
          <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Backlink Confirmed</h2>
          <p style="margin:0 0 8px;color:#2d3748;font-size:15px;line-height:1.6;">
            <strong>${escapeHtml(data.pilotName)}</strong> (${escapeHtml(data.businessName)}) has confirmed they added a backlink to their website.
          </p>
          <p style="margin:0 0 16px;color:#2d3748;font-size:15px;line-height:1.6;">
            Website: <a href="${data.websiteUrl ? escapeHtml(data.websiteUrl) : '#'}" style="color:#f97316;text-decoration:none;">${website}</a>
          </p>
          ${ctaButton(reviewUrl, 'Review Applications')}
        `),
      };
    }

    case 'pilot_application_rejected':
      return {
        subject: 'Update on your HireDronePilot application',
        html: wrapInLayout(`
          <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Hi ${escapeHtml(data.applicantName)},</h2>
          <p style="margin:0 0 16px;color:#2d3748;font-size:15px;line-height:1.6;">
            Thank you for your interest in joining HireDronePilot. After reviewing your application, we're unable to approve it at this time.
          </p>
          ${data.reason ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
            <tr><td style="background-color:#fef2f2;padding:12px 16px;color:#991b1b;font-size:14px;line-height:1.6;">
              <strong>Reason:</strong> ${escapeHtml(data.reason)}
            </td></tr>
          </table>` : ''}
          <p style="margin:0 0 16px;color:#2d3748;font-size:15px;line-height:1.6;">
            If you believe this was in error or your circumstances have changed, you're welcome to re-apply at any time.
          </p>
          ${ctaButton(`${BASE_URL}/join-as-pilot`, 'Re-apply')}
          <p style="margin:0;color:#718096;font-size:13px;">
            If you have any questions, just reply to this email.
          </p>
        `),
      };

    case 'pilot_application_info_requested':
      return {
        subject: 'We need more information — HireDronePilot',
        html: wrapInLayout(`
          <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Hi ${escapeHtml(data.applicantName)},</h2>
          <p style="margin:0 0 16px;color:#2d3748;font-size:15px;line-height:1.6;">
            We've started reviewing your pilot application and need a bit more information before we can proceed.
          </p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
            <tr><td style="background-color:#fffbeb;padding:12px 16px;color:#92400e;font-size:14px;line-height:1.6;">
              ${escapeHtml(data.message)}
            </td></tr>
          </table>
          <p style="margin:0 0 16px;color:#2d3748;font-size:15px;line-height:1.6;">
            Please reply to this email with the requested information, or re-submit your application with the updated details.
          </p>
          ${ctaButton(`${BASE_URL}/join-as-pilot`, 'Update Application')}
          <p style="margin:0;color:#718096;font-size:13px;">
            If you have any questions, just reply to this email.
          </p>
        `),
      };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ---------------------------------------------------------------------------
// Send + log update
// ---------------------------------------------------------------------------

async function sendAndUpdateLog(
  emailLogId: string,
  recipient: string,
  data: EmailTemplateData,
): Promise<void> {
  const { subject, html } = renderTemplate(data);
  try {
    const result = await resend.emails.send({
      from: FROM,
      to: recipient,
      subject,
      html,
    });
    const providerMessageId = result.data?.id ?? null;
    await query(
      `UPDATE email_logs
       SET status = 'SENT'::email_status, sent_at = now(), provider_message_id = $2
       WHERE id = $1`,
      [emailLogId, providerMessageId],
    );
  } catch {
    await query(
      `UPDATE email_logs SET status = 'FAILED'::email_status WHERE id = $1`,
      [emailLogId],
    );
  }
}

// ---------------------------------------------------------------------------
// Public fire-and-forget wrapper
// ---------------------------------------------------------------------------

export function fireEmail(
  emailLogId: string,
  recipient: string,
  data: EmailTemplateData,
): void {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[email] RESEND_API_KEY not set — skipping email send for', data.templateKey);
    return;
  }
  sendAndUpdateLog(emailLogId, recipient, data).catch((err) => {
    console.error('[email] Unhandled error in sendAndUpdateLog:', err);
  });
}
