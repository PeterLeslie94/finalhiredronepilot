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

const sqlFile = process.argv[2];
if (!sqlFile) { console.error('Usage: node scripts/run-migration.mjs <file.sql>'); process.exit(1); }

const sql = fs.readFileSync(sqlFile, 'utf8');
pool.query(sql)
  .then(() => { console.log(`Migration applied: ${sqlFile}`); return pool.end(); })
  .catch(e => { console.error(e.message); pool.end(); process.exit(1); });
