#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import pg from 'pg';
import { getDatabaseSslConfig } from './lib/db-ssl.mjs';

const { Pool } = pg;

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const text = fs.readFileSync(filePath, 'utf8');
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (!key) continue;
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(path.resolve(process.cwd(), '.env.local'));
loadEnvFile(path.resolve(process.cwd(), '.env'));

function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function randomTokenHex(bytes) {
  return crypto.randomBytes(bytes).toString('hex');
}

function printUsage() {
  // eslint-disable-next-line no-console
  console.log(`
Seed demo data (enquiries, drone pilots, invites) into the configured DATABASE_URL.

Usage:
  node scripts/seed-demo.mjs --confirm
  node scripts/seed-demo.mjs --confirm --reset

Safety:
  This only touches records tagged with:
    enquiries.source_form = 'seed-demo'
    pilots.notes = 'seed-demo'
    pilot_applications.review_notes = 'seed-demo'
`.trim());
}

async function clearSeedData(client) {
  const seedEnquiriesRes = await client.query(
    `SELECT id FROM enquiries WHERE source_form = 'seed-demo'`,
  );
  const seedEnquiryIds = seedEnquiriesRes.rows.map((r) => r.id);

  const seedPilotsRes = await client.query(
    `SELECT id FROM pilots WHERE notes = 'seed-demo'`,
  );
  const seedPilotIds = seedPilotsRes.rows.map((r) => r.id);

  const seedApplicationsRes = await client.query(
    `SELECT id FROM pilot_applications WHERE review_notes = 'seed-demo'`,
  );
  const seedApplicationIds = seedApplicationsRes.rows.map((r) => r.id);

  if (seedEnquiryIds.length > 0) {
    await client.query(
      `DELETE FROM pilot_invitations WHERE enquiry_id = ANY($1::uuid[])`,
      [seedEnquiryIds],
    );
    await client.query(
      `DELETE FROM enquiry_events WHERE enquiry_id = ANY($1::uuid[])`,
      [seedEnquiryIds],
    );
    await client.query(
      `DELETE FROM enquiries WHERE id = ANY($1::uuid[])`,
      [seedEnquiryIds],
    );
  }

  if (seedApplicationIds.length > 0) {
    await client.query(
      `DELETE FROM pilot_application_events WHERE pilot_application_id = ANY($1::uuid[])`,
      [seedApplicationIds],
    );
    await client.query(
      `DELETE FROM pilot_applications WHERE id = ANY($1::uuid[])`,
      [seedApplicationIds],
    );
  }

  if (seedPilotIds.length > 0) {
    await client.query(
      `DELETE FROM pilot_invitations WHERE pilot_id = ANY($1::uuid[])`,
      [seedPilotIds],
    );
    // Deleting pilots cascades user_identities (and sessions/magic-links) via FK.
    await client.query(
      `DELETE FROM pilots WHERE id = ANY($1::uuid[])`,
      [seedPilotIds],
    );
  }
}

async function seedDemo(client) {
  const now = Date.now();

  const toIso = (hoursFromNow) => new Date(now + hoursFromNow * 60 * 60 * 1000).toISOString();
  const toDate = (daysFromNow) => new Date(now + daysFromNow * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const pickPilots = (allPilotIds, count, offset) => {
    const chosen = [];
    for (let i = 0; i < count; i += 1) {
      chosen.push(allPilotIds[(offset + i) % allPilotIds.length]);
    }
    return chosen;
  };

  const pilots = [
    {
      name: 'SkyVista Aerial',
      business_name: 'SkyVista Aerial Ltd',
      email: 'seed.skyvista@example.com',
      phone: '07123 000001',
      licence_level: 'Operator ID, Flyer ID, A2 CofC',
      website_url: 'https://example.com/skyvista',
      two_sentence_summary: 'Dual-operator team focused on inspection and survey deliverables. Fast turnaround, clear documentation.',
      insurance_provider: 'Coverdrone',
      insurance_expiry_days: 240,
      flyer_id: 'FLY-SV-1234',
      operator_id: 'OP-SV-5678',
    },
    {
      name: 'NorthPeak UAV',
      business_name: 'NorthPeak UAV',
      email: 'seed.northpeak@example.com',
      phone: '07123 000002',
      licence_level: 'Operator ID, Flyer ID, GVC',
      website_url: 'https://example.com/northpeak',
      two_sentence_summary: 'Construction and infrastructure drone services across the North. Strong experience with stakeholders and site workflows.',
      insurance_provider: 'Moonrock',
      insurance_expiry_days: 420,
      flyer_id: 'FLY-NP-2345',
      operator_id: 'OP-NP-6789',
    },
    {
      name: 'Coastline Drone Ops',
      business_name: 'Coastline Drone Ops',
      email: 'seed.coastline@example.com',
      phone: '07123 000003',
      licence_level: 'Operator ID, Flyer ID',
      website_url: 'https://example.com/coastline',
      two_sentence_summary: 'General aerial photography and inspection work. Flexible scheduling for short-notice jobs.',
      insurance_provider: 'Coverdrone',
      insurance_expiry_days: -15,
      flyer_id: 'FLY-CD-3456',
      operator_id: 'OP-CD-7890',
    },
    {
      name: 'Atlas Mapping',
      business_name: 'Atlas Mapping',
      email: 'seed.atlas@example.com',
      phone: '07123 000004',
      licence_level: 'Operator ID, Flyer ID, GVC',
      website_url: 'https://example.com/atlas',
      two_sentence_summary: 'Mapping-focused team delivering orthomosaics, DSM/DTM, and photogrammetry outputs. Clear QA process.',
      insurance_provider: 'Flock Cover',
      insurance_expiry_days: 25,
      flyer_id: 'FLY-AM-4567',
      operator_id: 'OP-AM-8901',
    },
    {
      name: 'RidgeLine Thermal',
      business_name: 'RidgeLine Thermal',
      email: 'seed.ridgeline@example.com',
      phone: '07123 000005',
      licence_level: 'Operator ID, Flyer ID, A2 CofC',
      website_url: 'https://example.com/ridgeline',
      two_sentence_summary: 'Thermal and visual inspection capture for buildings and assets. Straightforward deliverables and reporting.',
      insurance_provider: 'Moonrock',
      insurance_expiry_days: 300,
      flyer_id: 'FLY-RT-5678',
      operator_id: 'OP-RT-9012',
    },
    {
      name: 'Metro Survey Drones',
      business_name: 'Metro Survey Drones',
      email: 'seed.metro@example.com',
      phone: '07123 000006',
      licence_level: 'Operator ID, Flyer ID, GVC',
      website_url: 'https://example.com/metro',
      two_sentence_summary: 'City-centre operations with strong planning and comms. Experienced with constrained sites and permissions.',
      insurance_provider: 'Coverdrone',
      insurance_expiry_days: 180,
      flyer_id: 'FLY-MS-6789',
      operator_id: 'OP-MS-0123',
    },
  ];

  const pilotIds = [];
  for (const pilot of pilots) {
    const insuranceExpiry = pilot.insurance_expiry_days != null
      ? toDate(pilot.insurance_expiry_days)
      : null;

    const inserted = await client.query(
      `
      INSERT INTO pilots
        (
          name,
          business_name,
          email,
          phone,
          website_url,
          two_sentence_summary,
          active,
          licence_level,
          notes,
          insurance_provider,
          insurance_expiry,
          flyer_id,
          operator_id
        )
      VALUES ($1,$2,$3,$4,$5,$6,true,$7,'seed-demo',$8,$9,$10,$11)
      RETURNING id
      `,
      [
        pilot.name,
        pilot.business_name,
        pilot.email.toLowerCase(),
        pilot.phone,
        pilot.website_url,
        pilot.two_sentence_summary,
        pilot.licence_level,
        pilot.insurance_provider ?? null,
        insuranceExpiry,
        pilot.flyer_id ?? null,
        pilot.operator_id ?? null,
      ],
    );
    const pilotId = inserted.rows[0].id;
    pilotIds.push(pilotId);

    await client.query(
      `
      INSERT INTO user_identities (email, role, pilot_id)
      VALUES ($1, 'DRONE_PILOT', $2)
      ON CONFLICT (email) DO UPDATE SET role = 'DRONE_PILOT', pilot_id = EXCLUDED.pilot_id, admin_id = NULL
      `,
      [pilot.email.toLowerCase(), pilotId],
    );
  }

  // Seed a few applications to make the admin applications page useful.
  const pilotApplications = [
    {
      pilot_name: 'AerialWorks UK',
      business_name: 'AerialWorks UK',
      email: 'seed.applicant1@example.com',
      phone: '07123 100001',
      website_url: 'https://example.com/aerialworks',
      profile_photo_url: null,
      two_sentence_summary: 'Experienced across roof and facade inspections with visual + thermal capture. Comfortable on live sites with inductions.',
      insurance_provider: 'Not provided',
      insurance_expiry: null,
      flyer_id: 'FLY-EXAMPLE-123',
      operator_id: 'OP-EXAMPLE-123',
      licence_level: 'Operator ID, Flyer ID, A2 CofC',
      status: 'SUBMITTED',
    },
    {
      pilot_name: 'GreenField UAV',
      business_name: 'GreenField UAV',
      email: 'seed.applicant2@example.com',
      phone: '07123 100002',
      website_url: 'https://example.com/greenfield',
      profile_photo_url: null,
      two_sentence_summary: 'Agriculture and environmental capture across the Midlands. Delivers clear outputs and basic reporting.',
      insurance_provider: 'Not provided',
      insurance_expiry: null,
      flyer_id: 'FLY-EXAMPLE-456',
      operator_id: 'OP-EXAMPLE-456',
      licence_level: 'Operator ID, Flyer ID, GVC',
      status: 'UNDER_REVIEW',
    },
    {
      pilot_name: 'UrbanFlight Ops',
      business_name: 'UrbanFlight Ops',
      email: 'seed.applicant3@example.com',
      phone: '07123 100003',
      website_url: 'https://example.com/urbanflight',
      profile_photo_url: null,
      two_sentence_summary: 'City-centre missions with focus on comms and safety briefings. Happy to provide RAMS templates.',
      insurance_provider: 'Not provided',
      insurance_expiry: null,
      flyer_id: 'FLY-EXAMPLE-789',
      operator_id: 'OP-EXAMPLE-789',
      licence_level: 'Operator ID, Flyer ID',
      status: 'NEEDS_INFO',
    },
  ];

  for (const application of pilotApplications) {
    await client.query(
      `
      INSERT INTO pilot_applications
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
          status,
          review_notes,
          consent_to_pilot_terms,
          pilot_terms_version,
          consent_timestamp,
          consent_source_page
        )
      VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,'seed-demo',true,'pilot-terms-v1',now(),'/pilots/apply')
      `,
      [
        application.pilot_name,
        application.business_name,
        application.email.toLowerCase(),
        application.phone,
        application.website_url,
        application.profile_photo_url,
        application.two_sentence_summary,
        application.insurance_provider,
        application.insurance_expiry,
        application.flyer_id,
        application.operator_id,
        application.licence_level,
        application.status,
      ],
    );
  }

  const adminIdRes = await client.query(
    `SELECT id FROM admins ORDER BY created_at ASC LIMIT 1`,
  );
  let seedAdminId = adminIdRes.rows[0]?.id ?? null;
  if (!seedAdminId) {
    const seedEmail = 'seed.admin@example.com';
    const insertedAdmin = await client.query(
      `INSERT INTO admins (email) VALUES ($1) RETURNING id`,
      [seedEmail],
    );
    seedAdminId = insertedAdmin.rows[0].id;
    await client.query(
      `INSERT INTO user_identities (email, role, admin_id)
       VALUES ($1, 'ADMIN', $2)
       ON CONFLICT (email) DO NOTHING`,
      [seedEmail, seedAdminId],
    );
  }

  const jobs = [
    {
      name: 'Alex Morgan',
      email: 'seed.client1@example.com',
      phone: '07900 000101',
      service_slug: 'drone-roof-survey',
      date_needed: null,
      date_flexibility: 'WITHIN_WEEK',
      site_location_text: 'Manchester city centre',
      postcode: 'M1 1AE',
      job_details: 'Roof condition survey for a mixed-use building. Need high-res stills and a short findings summary. Access constraints: busy street frontage.',
      status: 'NEW',
      created_offset_hours: -2,
      events: ['SEEDED'],
    },
    {
      name: 'Chloe Price',
      email: 'seed.client2@example.com',
      phone: '07900 000102',
      service_slug: 'drone-site-survey',
      date_needed: null,
      date_flexibility: 'ASAP',
      site_location_text: 'Sheffield',
      postcode: 'S1 2HH',
      job_details: 'Quick site survey to support early-stage planning. Deliverables: stills + short note on constraints.',
      status: 'ACK_SENT',
      created_offset_hours: -6,
      events: ['SEEDED', 'ACK_SENT'],
    },
    {
      name: 'Priya Shah',
      email: 'seed.client3@example.com',
      phone: '07900 000103',
      service_slug: 'lidar-mapping',
      date_needed: null,
      date_flexibility: 'WITHIN_MONTH',
      site_location_text: 'Rural site near Leeds',
      postcode: 'LS1 2AB',
      job_details: 'LiDAR mapping requirement for vegetation-heavy corridor. Deliverables: point cloud + contours. Budget-sensitive but needs accuracy.',
      status: 'ACK_SENT',
      created_offset_hours: -12,
      events: ['SEEDED', 'ACK_SENT'],
    },
    {
      name: 'Sophie Williams',
      email: 'seed.client6@example.com',
      phone: '07900 000106',
      service_slug: 'drone-construction-monitoring',
      date_needed: toDate(3),
      date_flexibility: 'WITHIN_WEEK',
      site_location_text: 'London Zone 2',
      postcode: 'E2 8AA',
      job_details: 'Progress capture for a construction site. Deliverables: 4K video + 20 stills. Repeatable workflow preferred. Induction required.',
      status: 'ACK_SENT',
      created_offset_hours: -28,
      events: ['SEEDED', 'ACK_SENT'],
    },
    {
      name: 'Hannah Brown',
      email: 'seed.client8@example.com',
      phone: '07900 000108',
      service_slug: 'drone-bridge-inspection',
      date_needed: null,
      date_flexibility: 'WITHIN_MONTH',
      site_location_text: 'Cardiff',
      postcode: 'CF10 1AA',
      job_details: 'Bridge inspection visuals for engineering review. Deliverables: close-range stills, 4K video, and capture notes. Traffic control handled by client.',
      status: 'INVITES_SENT',
      created_offset_hours: -40,
      invites: [
        { pilot_count: 3, statuses: ['SENT', 'OPENED', 'DECLINED'] },
      ],
      events: ['SEEDED', 'INVITES_SENT'],
    },
    {
      name: 'Omar Ali',
      email: 'seed.client9@example.com',
      phone: '07900 000109',
      service_slug: 'drone-roof-survey',
      date_needed: null,
      date_flexibility: 'WITHIN_WEEK',
      site_location_text: 'Newcastle',
      postcode: 'NE1 4ST',
      job_details: 'Roof survey for refurbishment scope. Deliverables: stills + annotated roof plan (simple).',
      status: 'INVITES_SENT',
      created_offset_hours: -52,
      invites: [
        { pilot_count: 3, statuses: ['OPENED', 'SENT', 'EXPIRED'] },
      ],
      events: ['SEEDED', 'INVITES_SENT'],
    },
    {
      name: 'Emily Carter',
      email: 'seed.client10@example.com',
      phone: '07900 000110',
      service_slug: 'drone-site-survey',
      date_needed: null,
      date_flexibility: 'WITHIN_WEEK',
      site_location_text: 'Bristol outskirts',
      postcode: 'BS1 4DJ',
      job_details: 'Site survey for planning visuals. Deliverables: stills + basic mapping. Quick turnaround appreciated.',
      status: 'INVITES_SENT',
      created_offset_hours: -60,
      invite_specs: [
        { status: 'OPENED' },
        { status: 'OPENED' },
        { status: 'SENT' },
      ],
      events: ['SEEDED', 'INVITES_SENT'],
    },
    {
      name: 'Liam Patel',
      email: 'seed.client11@example.com',
      phone: '07900 000111',
      service_slug: 'drone-photogrammetry-survey',
      date_needed: null,
      date_flexibility: 'WITHIN_MONTH',
      site_location_text: 'Leicester',
      postcode: 'LE1 1AA',
      job_details: 'Photogrammetry mapping for an industrial site. Deliverables: ortho + basic 3D model. Clear comms preferred.',
      status: 'INVITES_SENT',
      created_offset_hours: -72,
      invite_rounds: [
        {
          round: 1,
          invite_specs: [
            { status: 'OPENED' },
            { status: 'OPENED' },
          ],
        },
        {
          round: 2,
          invite_specs: [
            { status: 'SENT' },
          ],
        },
      ],
      events: ['SEEDED', 'INVITES_SENT'],
    },
    {
      name: 'Fiona Clarke',
      email: 'seed.client16@example.com',
      phone: '07900 000116',
      service_slug: 'drone-facade-survey',
      date_needed: toDate(7),
      date_flexibility: 'WITHIN_WEEK',
      site_location_text: 'Edinburgh',
      postcode: 'EH1 1AA',
      job_details: 'Facade inspection for a 4-storey office building. Deliverables: high-res stills + annotated summary. Access via courtyard.',
      status: 'INVITES_SENT',
      created_offset_hours: -36,
      _skyvista_invite: true,
      events: ['SEEDED', 'INVITES_SENT'],
    },
    {
      name: 'Ethan Brooks',
      email: 'seed.client15@example.com',
      phone: '07900 000115',
      service_slug: 'drone-measured-building-survey',
      date_needed: null,
      date_flexibility: 'WITHIN_WEEK',
      site_location_text: 'Cambridge',
      postcode: 'CB2 1TN',
      job_details: 'Measured building visuals to support drawings. Deliverables: stills + coverage notes. Client will provide access.',
      status: 'CLOSED',
      created_offset_hours: -240,
      closed_at_hours_from_now: 0,
      events: ['SEEDED', 'CLOSED'],
    },
  ];

  const tokenLog = [];
  const enquiryIds = [];
  for (let jobIndex = 0; jobIndex < jobs.length; jobIndex += 1) {
    const enquiry = jobs[jobIndex];
    const createdAt = enquiry.created_offset_hours ? toIso(enquiry.created_offset_hours) : toIso(-1);
    const updatedAt = createdAt;
    const closedAt =
      typeof enquiry.closed_at_hours_from_now === 'number'
        ? toIso(enquiry.closed_at_hours_from_now)
        : null;

    const inserted = await client.query(
      `
      INSERT INTO enquiries
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
          source_page,
          source_form,
          status,
          created_at,
          updated_at,
          closed_at
        )
      VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,true,$10,'marketplace-terms-v1',$11,'seed-demo',$12,$13,$14,$15)
      RETURNING id
      `,
      [
        enquiry.name,
        enquiry.email.toLowerCase(),
        enquiry.phone,
        enquiry.service_slug,
        enquiry.date_needed,
        enquiry.date_flexibility,
        enquiry.site_location_text,
        enquiry.postcode,
        enquiry.job_details,
        'marketplace-consent-v2',
        '/quote',
        enquiry.status,
        createdAt,
        updatedAt,
        closedAt,
      ],
    );

    const enquiryId = inserted.rows[0].id;
    enquiryIds.push(enquiryId);

    // Events
    const eventTypes = Array.isArray(enquiry.events) ? enquiry.events : ['SEEDED'];
    for (let i = 0; i < eventTypes.length; i += 1) {
      const eventType = eventTypes[i];
      await client.query(
        `
        INSERT INTO enquiry_events (enquiry_id, actor_type, actor_id, event_type, payload_json)
        VALUES ($1,'SYSTEM',NULL,$2,$3::jsonb)
        `,
        [enquiryId, eventType, JSON.stringify({ tag: 'seed-demo' })],
      );
    }

    const insertInvite = async (pilotId, inviteRound, spec, idx) => {
      const rawToken = randomTokenHex(24);
      const tokenHash = hashToken(rawToken);
      const sentAt = toIso(-0.25 - idx * 0.5);

      tokenLog.push({
        rawToken,
        enquiryName: enquiry.name,
        pilotIndex: pilotIds.indexOf(pilotId),
        pilotName: pilots[pilotIds.indexOf(pilotId)]?.name ?? 'unknown',
        status: spec.status,
      });

      const openedAt =
        spec.status === 'OPENED' || spec.status === 'DECLINED'
          ? toIso(-0.1 - idx * 0.2)
          : null;

      await client.query(
        `
        INSERT INTO pilot_invitations
          (enquiry_id, pilot_id, invite_round, token_hash, status, sent_at, opened_at)
        VALUES
          ($1,$2,$3,$4,$5,$6,$7)
        RETURNING id
        `,
        [
          enquiryId,
          pilotId,
          inviteRound,
          tokenHash,
          spec.status,
          sentAt,
          openedAt,
        ],
      );
    };

    // Invites (two supported shapes: invite_specs OR invite_rounds OR simple invites array).
    if (Array.isArray(enquiry.invite_specs) && enquiry.invite_specs.length > 0) {
      const chosenPilots = pickPilots(pilotIds, enquiry.invite_specs.length, jobIndex);
      for (let idx = 0; idx < enquiry.invite_specs.length; idx += 1) {
        await insertInvite(chosenPilots[idx], 1, enquiry.invite_specs[idx], idx);
      }
    } else if (Array.isArray(enquiry.invite_rounds) && enquiry.invite_rounds.length > 0) {
      let offset = jobIndex;
      for (const round of enquiry.invite_rounds) {
        const specs = Array.isArray(round.invite_specs) ? round.invite_specs : [];
        const chosenPilots = pickPilots(pilotIds, specs.length, offset);
        for (let idx = 0; idx < specs.length; idx += 1) {
          await insertInvite(chosenPilots[idx], round.round, specs[idx], idx);
        }
        offset += specs.length + 1;
      }
    } else if (Array.isArray(enquiry.invites) && enquiry.invites.length > 0) {
      for (const inviteGroup of enquiry.invites) {
        const count = inviteGroup.pilot_count || inviteGroup.statuses?.length || 0;
        const statuses = Array.isArray(inviteGroup.statuses) ? inviteGroup.statuses : [];
        const chosenPilots = pickPilots(pilotIds, count, jobIndex);
        for (let idx = 0; idx < count; idx += 1) {
          const status = statuses[idx] || 'SENT';
          await insertInvite(chosenPilots[idx], 1, { status }, idx);
        }
      }
    }

    // Explicit SkyVista invite for testing.
    if (enquiry._skyvista_invite) {
      await insertInvite(pilotIds[0], 1, { status: 'SENT' }, 0);
      await insertInvite(pilotIds[2], 1, { status: 'SENT' }, 1);
      await insertInvite(pilotIds[4], 1, { status: 'SENT' }, 2);
    }
  }

  // Print raw invite tokens for /invite/{token} testing.
  if (tokenLog.length > 0) {
    // eslint-disable-next-line no-console
    console.log('\n--- Raw Invite Tokens (for /invite/{token} testing) ---');
    for (const entry of tokenLog) {
      // eslint-disable-next-line no-console
      console.log(
        `  Enquiry: ${entry.enquiryName} | Pilot: ${entry.pilotName} | Status: ${entry.status}\n` +
        `    Token: ${entry.rawToken}\n` +
        `    URL:   /invite/${entry.rawToken}`,
      );
    }
    // eslint-disable-next-line no-console
    console.log('--- End Tokens ---\n');
  }

  return {
    pilots: pilotIds.length,
    enquiries: enquiryIds.length,
    note: 'Use /login and enter a seeded drone pilot email to view the /drone-pilot area in dev.',
  };
}

async function run() {
  const args = new Set(process.argv.slice(2));
  const confirm = args.has('--confirm');
  const reset = args.has('--reset');

  if (!confirm) {
    printUsage();
    process.exit(1);
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    // eslint-disable-next-line no-console
    console.error('Missing DATABASE_URL');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: databaseUrl,
    ssl: getDatabaseSslConfig(),
  });

  try {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      await clearSeedData(client);
      if (!reset) {
        const result = await seedDemo(client);
        await client.query('COMMIT');
        // eslint-disable-next-line no-console
        console.log('Seed complete:', result);
      } else {
        await client.query('COMMIT');
        // eslint-disable-next-line no-console
        console.log('Seed reset complete.');
      }
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } finally {
    await pool.end();
  }
}

run().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Seed failed:', error instanceof Error ? error.message : error);
  process.exit(1);
});
