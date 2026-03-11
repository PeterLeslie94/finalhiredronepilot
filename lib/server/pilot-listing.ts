import { query } from '@/lib/server/database';

let hasPilotListingLiveAtColumnPromise: Promise<boolean> | null = null;

export async function hasPilotListingLiveAtColumn(): Promise<boolean> {
  if (!hasPilotListingLiveAtColumnPromise) {
    hasPilotListingLiveAtColumnPromise = (async () => {
      try {
        const result = await query<{ exists: boolean }>(
          `SELECT EXISTS (
             SELECT 1
             FROM information_schema.columns
             WHERE table_schema = 'public'
               AND table_name = 'pilots'
               AND column_name = 'listing_live_at'
           ) AS exists`,
        );
        return result.rows[0]?.exists ?? false;
      } catch {
        return false;
      }
    })();
  }

  return hasPilotListingLiveAtColumnPromise;
}

export function publicPilotWhereClause(
  hasListingLiveAtColumn: boolean,
  options: { alias?: string; requireSlug?: boolean } = {},
): string {
  const alias = options.alias ? `${options.alias}.` : '';
  const requireSlug = options.requireSlug ?? true;
  const clauses = [`${alias}active = true`];

  if (hasListingLiveAtColumn) {
    clauses.push(`${alias}listing_live_at IS NOT NULL`);
  }

  if (requireSlug) {
    clauses.push(`${alias}slug IS NOT NULL`);
  }

  return clauses.join(' AND ');
}

export function listingLiveAtSelect(
  hasListingLiveAtColumn: boolean,
  options: { alias?: string; castToText?: boolean } = {},
): string {
  const alias = options.alias ? `${options.alias}.` : '';

  if (hasListingLiveAtColumn) {
    return `${alias}listing_live_at${options.castToText ? '::text' : ''} AS listing_live_at`;
  }

  return options.castToText
    ? `NULL::text AS listing_live_at`
    : `NULL::timestamptz AS listing_live_at`;
}
