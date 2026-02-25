#!/usr/bin/env node
import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';

import pg from 'pg';
import { getDatabaseSslConfig } from './lib/db-ssl.mjs';

const { Pool } = pg;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

async function run() {
  const emailArg = process.argv[2] || '';
  const email = emailArg.trim().toLowerCase();

  if (!email || !EMAIL_RE.test(email)) {
    console.error('Usage: node scripts/create-admin.mjs you@company.com');
    process.exit(1);
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
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

      const pilotConflict = await client.query(`SELECT id FROM pilots WHERE lower(email) = $1 LIMIT 1`, [email]);
      if (pilotConflict.rows[0]) {
        throw new Error('This email already belongs to a drone pilot. Use a different email for admin.');
      }

      const adminRes = await client.query(
        `INSERT INTO admins (email) VALUES ($1)
         ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
         RETURNING id`,
        [email],
      );
      const adminId = adminRes.rows[0].id;

      await client.query(
        `INSERT INTO user_identities (email, role, admin_id)
         VALUES ($1, 'ADMIN', $2)
         ON CONFLICT (email) DO UPDATE
           SET role = 'ADMIN',
               admin_id = EXCLUDED.admin_id,
               pilot_id = NULL`,
        [email, adminId],
      );

      await client.query('COMMIT');
      console.log(`Admin identity ready for: ${email}`);
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
  console.error('Failed to create admin:', error instanceof Error ? error.message : error);
  process.exit(1);
});
