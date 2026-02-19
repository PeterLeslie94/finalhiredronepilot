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

const res = await pool.query(`SELECT id, email, status, review_notes FROM pilot_applications WHERE lower(email) IN ('seed.applicant1@example.com','seed.applicant2@example.com','seed.applicant3@example.com')`);
console.log('Existing applications:', JSON.stringify(res.rows, null, 2));

const res2 = await pool.query(`SELECT id, email FROM pilots WHERE lower(email) LIKE 'seed.%'`);
console.log('Existing seed pilots:', JSON.stringify(res2.rows, null, 2));

await pool.end();
