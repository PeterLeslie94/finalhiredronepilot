#!/usr/bin/env node
/**
 * Send all transactional email templates with sample data to a test address.
 *
 * Usage:
 *   RESEND_API_KEY=re_xxx node scripts/send-test-emails.mjs [recipient]
 *
 * If recipient is omitted it defaults to peterlesliepay@gmail.com
 */
import process from 'node:process';
import { Resend } from 'resend';

const API_KEY = process.env.RESEND_API_KEY;
if (!API_KEY) {
  console.error('RESEND_API_KEY env var is required');
  process.exit(1);
}

const resend = new Resend(API_KEY);
const FROM = process.env.RESEND_FROM_EMAIL || 'HireDronePilot <noreply@hiredronepilot.uk>';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://hiredronepilot.uk';
const RECIPIENT = process.argv[2] || 'peterlesliepay@gmail.com';

// ── Shared helpers (mirrored from lib/server/email.ts) ──────────────────────

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wrapInLayout(bodyHtml) {
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

function ctaButton(href, label) {
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

function formatServiceSlug(slug) {
  return slug.replace(/^drone-/, '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function flexibilityLabel(flex) {
  const map = {
    FIXED: 'Fixed Date',
    ASAP: 'As Soon as Possible',
    FLEXIBLE: 'Flexible',
    WITHIN_WEEK: 'Within a Week',
    WITHIN_MONTH: 'Within a Month',
  };
  return map[flex] || flex;
}

function formatDate(value) {
  if (!value) return 'Not specified';
  const d = new Date(value);
  if (isNaN(d.getTime())) return 'Not specified';
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ── Templates ───────────────────────────────────────────────────────────────

const templates = [
  {
    key: 'auth_magic_link',
    subject: '[TEST] Your login link for HireDronePilot',
    html: wrapInLayout(`
      <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Sign in to HireDronePilot</h2>
      <p style="margin:0 0 8px;color:#2d3748;font-size:15px;line-height:1.6;">
        Click the button below to log in. This link expires in 15 minutes.
      </p>
      ${ctaButton(`${BASE_URL}/api/auth/verify?token=sample-token`, 'Log in to HireDronePilot')}
      <p style="margin:0;color:#718096;font-size:13px;">
        If you didn't request this link, you can safely ignore this email.
      </p>
    `),
  },
  {
    key: 'client_acknowledgement',
    subject: "[TEST] We've received your drone survey enquiry",
    html: wrapInLayout(`
      <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Thanks, ${escapeHtml('John Smith')}!</h2>
      <p style="margin:0 0 8px;color:#2d3748;font-size:15px;line-height:1.6;">
        We've received your enquiry for <strong>${escapeHtml(formatServiceSlug('drone-roof-survey'))}</strong>.
      </p>
      <p style="margin:0 0 8px;color:#2d3748;font-size:15px;line-height:1.6;">
        We've shared your enquiry with experienced drone pilots in your area. They'll contact you directly to discuss your requirements and provide a quote.
      </p>
      <p style="margin:16px 0 0;color:#718096;font-size:13px;">
        If you have any questions in the meantime, just reply to this email.
      </p>
    `),
  },
  (() => {
    const pilotName = 'Alex Thompson';
    const serviceSlug = 'drone-facade-survey';
    const postcode = 'SW1A 1AA';
    const siteLocationText = 'Westminster, Central London';
    const dateNeeded = '2026-03-15';
    const dateFlexibility = 'WITHIN_WEEK';
    const jobDetails = 'We need a detailed facade inspection of a 4-storey Victorian building. There are concerns about cracking on the upper floors and we need high-resolution imagery for the structural engineer\'s report.';
    const clientName = 'Sarah Mitchell';
    const clientEmail = 'sarah.mitchell@example.com';
    const clientPhone = '+44 7700 900123';

    const dateDisplay = formatDate(dateNeeded);
    const flexDisplay = flexibilityLabel(dateFlexibility);

    return {
      key: 'pilot_invite',
      subject: `[TEST] New drone survey opportunity near ${postcode}`,
      html: wrapInLayout(`
        <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Hi ${escapeHtml(pilotName)}, you have a new job opportunity!</h2>
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
                <td style="padding:4px 0;color:#1f2937;font-size:14px;font-weight:600;">${escapeHtml(formatServiceSlug(serviceSlug))}</td>
              </tr>
              <tr>
                <td style="padding:4px 0;color:#6b7280;font-size:13px;vertical-align:top;">Location</td>
                <td style="padding:4px 0;color:#1f2937;font-size:14px;">${escapeHtml(siteLocationText)}, ${escapeHtml(postcode)}</td>
              </tr>
              <tr>
                <td style="padding:4px 0;color:#6b7280;font-size:13px;vertical-align:top;">Date</td>
                <td style="padding:4px 0;color:#1f2937;font-size:14px;">${escapeHtml(dateDisplay)} (${escapeHtml(flexDisplay)})</td>
              </tr>
            </table>
          </td></tr>
          <tr><td style="padding:0 12px 12px;">
            <p style="margin:8px 0 4px;color:#6b7280;font-size:13px;">Job Details</p>
            <p style="margin:0;color:#2d3748;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(jobDetails)}</p>
          </td></tr>
        </table>

        <!-- Client Contact -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
          <tr><td style="background-color:#f3f4f6;padding:10px 12px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">
            Client Contact
          </td></tr>
          <tr><td style="padding:6px 12px;color:#1f2937;font-size:14px;font-weight:600;line-height:1.5;">
            ${escapeHtml(clientName)}
          </td></tr>
          <tr><td style="padding:6px 12px;color:#2d3748;font-size:14px;line-height:1.5;">
            <a href="mailto:${escapeHtml(clientEmail)}" style="color:#f97316;text-decoration:none;">${escapeHtml(clientEmail)}</a>
          </td></tr>
          <tr><td style="padding:6px 12px;color:#2d3748;font-size:14px;line-height:1.5;">
            <a href="tel:${escapeHtml(clientPhone)}" style="color:#f97316;text-decoration:none;">${escapeHtml(clientPhone)}</a>
          </td></tr>
        </table>

        <p style="margin:0 0 8px;color:#2d3748;font-size:15px;line-height:1.6;">
          Contact the client directly to discuss their requirements and provide your quote.
        </p>
        <p style="margin:0;color:#718096;font-size:13px;">
          If you're unavailable for this job, no action is needed.
        </p>
      `),
    };
  })(),
  {
    key: 'pilot_application_received',
    subject: '[TEST] Your pilot application has been received',
    html: wrapInLayout(`
      <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Thanks for applying, ${escapeHtml('Alex Thompson')}!</h2>
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
  },
  (() => {
    const pilotName = 'Alex Thompson';
    const pilotId = '00000000-0000-0000-0000-000000000001';
    const slug = 'alex-thompson';
    const backlinkToken = 'sample-backlink-token-abc123';
    const profileUrl = `${BASE_URL}/pilots/${slug}`;
    const confirmIntegrationUrl = `${BASE_URL}/api/pilots/${pilotId}/confirm-integration?token=${backlinkToken}`;
    const badgeEmbedCode = `&lt;a href=&quot;${escapeHtml(profileUrl)}&quot;&gt;&lt;img src=&quot;${escapeHtml(BASE_URL)}/badges/verified-operator.svg&quot; alt=&quot;Verified on HireDronePilot&quot; width=&quot;200&quot; height=&quot;60&quot;&gt;&lt;/a&gt;`;

    return {
      key: 'pilot_approved',
      subject: '[TEST] Your HireDronePilot Profile Is Live',
      html: wrapInLayout(`
        <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Hi ${escapeHtml(pilotName)},</h2>
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
  })(),
  {
    key: 'admin_backlink_confirmed',
    subject: '[TEST] Backlink confirmed: Alex Thompson',
    html: wrapInLayout(`
      <h2 style="margin:0 0 16px;color:#1f2937;font-family:'Space Grotesk','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:20px;">Backlink Confirmed</h2>
      <p style="margin:0 0 8px;color:#2d3748;font-size:15px;line-height:1.6;">
        <strong>${escapeHtml('Alex Thompson')}</strong> (${escapeHtml('Thompson Aerial Surveys')}) has confirmed they added a backlink to their website.
      </p>
      <p style="margin:0 0 16px;color:#2d3748;font-size:15px;line-height:1.6;">
        Website: <a href="https://www.alexthompsondrones.co.uk" style="color:#f97316;text-decoration:none;">https://www.alexthompsondrones.co.uk</a>
      </p>
      ${ctaButton(`${BASE_URL}/admin/pilot-applications`, 'Review Applications')}
    `),
  },
];

// ── Send ────────────────────────────────────────────────────────────────────

console.log(`Sending ${templates.length} test emails to ${RECIPIENT}...\n`);

let sent = 0;
let failed = 0;

for (const t of templates) {
  try {
    const result = await resend.emails.send({
      from: FROM,
      to: RECIPIENT,
      subject: t.subject,
      html: t.html,
    });
    console.log(`  ✓ ${t.key} — id: ${result.data?.id}`);
    sent++;
    // Small delay to avoid rate limits
    await new Promise((r) => setTimeout(r, 500));
  } catch (err) {
    console.error(`  ✗ ${t.key} — ${err.message}`);
    failed++;
  }
}

console.log(`\nDone: ${sent} sent, ${failed} failed.`);
