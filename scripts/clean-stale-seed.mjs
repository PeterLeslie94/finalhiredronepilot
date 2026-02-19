import pg from 'pg';
import fs from 'fs';
import process from 'node:process';

const envFile = fs.readFileSync('.env.local', 'utf8');
for (const line of envFile.split('\n')) {
  const l = line.trim();
  if (l.length === 0 || l.startsWith('#')) continue;
  const idx = l.indexOf('=');
  if (idx === -1) continue;
  const key = l.slice(0, idx).trim();
  let val = l.slice(idx + 1).trim();
  if (process.env[key] === undefined) process.env[key] = val;
}

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.DB_SSL === 'false' ? false : { rejectUnauthorized: false } });

const client = await pool.connect();
try {
  await client.query('BEGIN');

  // Clean stale pilot applications with seed emails
  const appRes = await client.query(`SELECT id FROM pilot_applications WHERE lower(email) LIKE 'seed.%'`);
  const appIds = appRes.rows.map(r => r.id);
  if (appIds.length > 0) {
    await client.query(`DELETE FROM pilot_application_events WHERE pilot_application_id = ANY($1::uuid[])`, [appIds]);
    await client.query(`DELETE FROM pilot_applications WHERE id = ANY($1::uuid[])`, [appIds]);
    console.log(`Deleted ${appIds.length} stale pilot applications`);
  }

  // Clean stale pilots with seed emails
  const pilotRes = await client.query(`SELECT id FROM pilots WHERE lower(email) LIKE 'seed.%'`);
  const pilotIds = pilotRes.rows.map(r => r.id);
  if (pilotIds.length > 0) {
    await client.query(`DELETE FROM pilot_invitations WHERE pilot_id = ANY($1::uuid[])`, [pilotIds]);
    await client.query(`DELETE FROM user_identities WHERE pilot_id = ANY($1::uuid[])`, [pilotIds]);
    await client.query(`DELETE FROM pilots WHERE id = ANY($1::uuid[])`, [pilotIds]);
    console.log(`Deleted ${pilotIds.length} stale pilots`);
  }

  // Clean stale enquiries with seed source
  const enqRes = await client.query(`SELECT id FROM enquiries WHERE lower(email) LIKE 'seed.%'`);
  const enqIds = enqRes.rows.map(r => r.id);
  if (enqIds.length > 0) {
    await client.query(`DELETE FROM pilot_invitations WHERE enquiry_id = ANY($1::uuid[])`, [enqIds]);
    await client.query(`DELETE FROM enquiry_events WHERE enquiry_id = ANY($1::uuid[])`, [enqIds]);
    await client.query(`DELETE FROM enquiries WHERE id = ANY($1::uuid[])`, [enqIds]);
    console.log(`Deleted ${enqIds.length} stale enquiries`);
  }

  await client.query('COMMIT');
  console.log('Stale seed data cleaned');
} catch(e) {
  await client.query('ROLLBACK');
  console.error('Error:', e.message);
} finally {
  client.release();
  await pool.end();
}
