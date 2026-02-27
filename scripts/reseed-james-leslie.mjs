#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import pg from 'pg';
import { getDatabaseSslConfig } from './lib/db-ssl.mjs';

const { Pool } = pg;

const TARGET_EMAIL = (process.argv[2] || 'jamie@skykam.co.uk').trim().toLowerCase();
const VALID_RATINGS = new Set(['Intermediate', 'Advanced', 'Expert']);
const DRONE_NAME_HINTS = [
  /drone/i,
  /uav/i,
  /dji/i,
  /mavic/i,
  /matrice/i,
  /inspire/i,
  /phantom/i,
  /autel/i,
  /anafi/i,
  /wingtra/i,
  /sensefly/i,
  /skydio/i,
  /yuneec/i,
  /parrot/i,
];
const NON_AIRFRAME_HINTS = /(payload|lidar|sensor|camera|software|terra|pix4d|licen[cs]e|workflow|processing|point cloud|kit)/i;

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

function isRecord(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function asNonEmptyString(value, max = 160) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function toInt(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return Math.trunc(value);
  if (typeof value === 'string' && value.trim()) {
    const n = Number(value);
    if (Number.isFinite(n)) return Math.trunc(n);
  }
  return null;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function estimateDronesOwned(equipmentItemsJson) {
  if (!Array.isArray(equipmentItemsJson)) return null;
  let count = 0;
  for (const rawItem of equipmentItemsJson) {
    let name = '';
    if (typeof rawItem === 'string') {
      name = asNonEmptyString(rawItem);
    } else if (isRecord(rawItem)) {
      name = asNonEmptyString(rawItem.name);
    }
    if (!name) continue;
    if (NON_AIRFRAME_HINTS.test(name)) continue;
    if (DRONE_NAME_HINTS.some((hint) => hint.test(name))) {
      count += 1;
    }
  }
  if (count <= 0) return null;
  return clamp(count, 1, 200);
}

function estimateFlightHours(yearsExperience, totalProjectsCompleted) {
  const years = toInt(yearsExperience);
  const projects = toInt(totalProjectsCompleted);
  if (years === null && projects === null) return null;
  const byYears = years !== null ? years * 100 : 0;
  const byProjects = projects !== null ? projects * 3 : 0;
  const estimated = Math.max(byYears, byProjects);
  return clamp(estimated, 0, 500000);
}

function normalizeTopServiceRatings(topServiceSlugs, currentRatings) {
  const selectedSlugs = Array.isArray(topServiceSlugs)
    ? topServiceSlugs
        .map((slug) => asNonEmptyString(slug, 120).toLowerCase())
        .filter(Boolean)
    : [];
  const selectedSet = new Set(selectedSlugs);
  const nextRatings = {};

  if (isRecord(currentRatings)) {
    for (const [rawSlug, rawRating] of Object.entries(currentRatings)) {
      const slug = asNonEmptyString(rawSlug, 120).toLowerCase();
      const rating = asNonEmptyString(rawRating, 32);
      if (!slug || !selectedSet.has(slug) || !VALID_RATINGS.has(rating)) continue;
      nextRatings[slug] = rating;
    }
  }

  for (const slug of selectedSlugs) {
    if (!nextRatings[slug]) {
      nextRatings[slug] = 'Advanced';
    }
  }

  let needsUpdate = false;
  if (!isRecord(currentRatings)) {
    needsUpdate = selectedSlugs.length > 0;
  } else {
    const currentKeys = Object.keys(currentRatings);
    needsUpdate = currentKeys.length !== selectedSlugs.length;
    if (!needsUpdate) {
      needsUpdate = selectedSlugs.some((slug) => {
        const level = currentRatings[slug];
        return typeof level !== 'string' || !VALID_RATINGS.has(level);
      });
    }
  }

  return { selectedSlugs, nextRatings, needsUpdate };
}

async function run() {
  loadEnvFile(path.resolve(process.cwd(), '.env.local'));
  loadEnvFile(path.resolve(process.cwd(), '.env'));

  if (!TARGET_EMAIL) {
    throw new Error('Missing target email');
  }
  if (!process.env.DATABASE_URL) {
    throw new Error('Missing DATABASE_URL');
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: getDatabaseSslConfig(),
  });

  try {
    const result = await pool.query(
      `SELECT
        id,
        email,
        name,
        years_experience,
        total_projects_completed,
        drone_flight_hours_total,
        drones_owned_total,
        top_service_slugs,
        top_service_ratings_json,
        equipment_items_json
      FROM pilots
      WHERE lower(email) = lower($1)
      LIMIT 1`,
      [TARGET_EMAIL],
    );
    const pilot = result.rows[0];
    if (!pilot) {
      throw new Error(`Pilot not found for email: ${TARGET_EMAIL}`);
    }

    const estimatedFlightHours = estimateFlightHours(
      pilot.years_experience,
      pilot.total_projects_completed,
    );
    const estimatedDronesOwned = estimateDronesOwned(pilot.equipment_items_json);
    const { selectedSlugs, nextRatings, needsUpdate: needsRatingsUpdate } = normalizeTopServiceRatings(
      pilot.top_service_slugs,
      pilot.top_service_ratings_json,
    );

    const before = {
      drone_flight_hours_total: pilot.drone_flight_hours_total,
      drones_owned_total: pilot.drones_owned_total,
      top_service_ratings_json: pilot.top_service_ratings_json,
    };

    const updates = [];
    const values = [pilot.id];
    let idx = 2;

    if (pilot.drone_flight_hours_total === null && estimatedFlightHours !== null) {
      updates.push(`drone_flight_hours_total = $${idx}`);
      values.push(estimatedFlightHours);
      idx += 1;
    }
    if (pilot.drones_owned_total === null && estimatedDronesOwned !== null) {
      updates.push(`drones_owned_total = $${idx}`);
      values.push(estimatedDronesOwned);
      idx += 1;
    }
    if (needsRatingsUpdate && selectedSlugs.length > 0) {
      updates.push(`top_service_ratings_json = $${idx}::jsonb`);
      values.push(JSON.stringify(nextRatings));
      idx += 1;
    }

    if (updates.length === 0) {
      console.log(
        JSON.stringify(
          {
            status: 'noop',
            pilot: { id: pilot.id, email: pilot.email, name: pilot.name },
            before,
            after: before,
          },
          null,
          2,
        ),
      );
      return;
    }

    updates.push('updated_at = now()');

    const updated = await pool.query(
      `UPDATE pilots
       SET ${updates.join(', ')}
       WHERE id = $1
       RETURNING
         id,
         email,
         name,
         drone_flight_hours_total,
         drones_owned_total,
         top_service_ratings_json`,
      values,
    );

    const after = updated.rows[0];
    console.log(
      JSON.stringify(
        {
          status: 'updated',
          pilot: { id: after.id, email: after.email, name: after.name },
          before,
          after: {
            drone_flight_hours_total: after.drone_flight_hours_total,
            drones_owned_total: after.drones_owned_total,
            top_service_ratings_json: after.top_service_ratings_json,
          },
          derived: {
            estimated_flight_hours: estimatedFlightHours,
            estimated_drones_owned: estimatedDronesOwned,
          },
        },
        null,
        2,
      ),
    );
  } finally {
    await pool.end();
  }
}

run().catch((error) => {
  console.error('Reseed failed:', error instanceof Error ? error.message : error);
  process.exit(1);
});
