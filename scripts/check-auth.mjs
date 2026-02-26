import pg from 'pg';
import fs from 'fs';
import process from 'node:process';
import { getDatabaseSslConfig } from './lib/db-ssl.mjs';

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
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: getDatabaseSslConfig() });

// Check user_identities
const ids = await pool.query(`SELECT id, email, role, admin_id, pilot_id FROM user_identities ORDER BY email LIMIT 20`);
console.log('User identities:', JSON.stringify(ids.rows, null, 2));

// Check magic links
const links = await pool.query(`SELECT id, identity_id, used_at, expires_at, created_at FROM auth_magic_links ORDER BY created_at DESC LIMIT 5`);
console.log('Recent magic links:', JSON.stringify(links.rows, null, 2));

// Check admins
const admins = await pool.query(`SELECT id, email FROM admins`);
console.log('Admins:', JSON.stringify(admins.rows, null, 2));

await pool.end();
