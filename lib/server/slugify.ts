import { PoolClient } from 'pg';

export function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function generateUniqueSlug(name: string, client: PoolClient): Promise<string> {
  const base = nameToSlug(name);
  if (!base) throw new Error('Cannot generate slug from empty name');

  const existing = await client.query<{ slug: string }>(
    `SELECT slug FROM pilots WHERE slug = $1 OR slug ~ $2`,
    [base, `^${base}-\\d+$`],
  );

  const taken = new Set(existing.rows.map((r) => r.slug));
  if (!taken.has(base)) return base;

  let counter = 2;
  while (taken.has(`${base}-${counter}`)) counter++;
  return `${base}-${counter}`;
}
