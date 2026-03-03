import { NextRequest, NextResponse } from 'next/server';

import { AuthError, requireAdminAccess } from '@/lib/server/auth';
import { query } from '@/lib/server/database';
import { ENQUIRY_STATUSES, isInSet } from '@/lib/server/enums';
import { jsonError } from '@/lib/server/http';

export const runtime = 'nodejs';
const ALL_STATUS = 'ALL';
type EnquiryStatusFilter = (typeof ENQUIRY_STATUSES)[number] | typeof ALL_STATUS;

function parseCursor(cursor: string | null): { createdAt: string; id: string } | null {
  if (!cursor) return null;
  const [createdAt, id] = cursor.split('|');
  if (!createdAt || !id) return null;
  return { createdAt, id };
}

function parseStatusFilter(raw: string | null): EnquiryStatusFilter | null {
  if (!raw) return ALL_STATUS;
  const normalized = raw.trim().toUpperCase();
  if (normalized === ALL_STATUS) return ALL_STATUS;
  if (isInSet(normalized, ENQUIRY_STATUSES)) return normalized;
  return null;
}

export async function GET(request: NextRequest) {
  try {
    await requireAdminAccess(request);

    const statusFilter = parseStatusFilter(request.nextUrl.searchParams.get('status'));
    if (!statusFilter) {
      return jsonError('Invalid status filter', 400);
    }

    const queryText = request.nextUrl.searchParams.get('q')?.trim() || '';
    const parsedLimit = Number(request.nextUrl.searchParams.get('limit') || 100);
    const limit = Number.isFinite(parsedLimit) ? parsedLimit : 100;
    const cursor = parseCursor(request.nextUrl.searchParams.get('cursor'));
    const pageSize = Math.max(1, Math.min(limit, 200));

    const listValues: unknown[] = [];
    const listWhere: string[] = [];

    if (queryText) {
      listValues.push(`%${queryText}%`);
      const queryParam = `$${listValues.length}`;
      listWhere.push(
        `(e.name ILIKE ${queryParam}
          OR e.email ILIKE ${queryParam}
          OR e.service_slug ILIKE ${queryParam}
          OR e.site_location_text ILIKE ${queryParam}
          OR e.postcode ILIKE ${queryParam})`,
      );
    }

    if (statusFilter !== ALL_STATUS) {
      listValues.push(statusFilter);
      listWhere.push(`e.status = $${listValues.length}::enquiry_status`);
    }

    if (cursor) {
      listValues.push(cursor.createdAt, cursor.id);
      listWhere.push(`(e.created_at, e.id) < ($${listValues.length - 1}::timestamptz, $${listValues.length}::uuid)`);
    }

    listValues.push(pageSize);
    const limitParam = `$${listValues.length}`;

    const [result, countsResult] = await Promise.all([
      query(
        `
        SELECT
          e.id,
          e.name,
          e.email,
          e.phone,
          e.service_slug,
          e.date_needed,
          e.date_flexibility,
          e.site_location_text,
          e.postcode,
          e.status,
          e.created_at,
          e.updated_at,
          COUNT(DISTINCT pi.id) AS invite_count
        FROM enquiries e
        LEFT JOIN pilot_invitations pi ON pi.enquiry_id = e.id
        ${listWhere.length ? `WHERE ${listWhere.join(' AND ')}` : ''}
        GROUP BY e.id
        ORDER BY e.created_at DESC, e.id DESC
        LIMIT ${limitParam}
        `,
        listValues,
      ),
      query(
        `
        SELECT
          COUNT(*)::int AS all_count,
          COUNT(*) FILTER (WHERE e.status = 'NEW')::int AS new_count,
          COUNT(*) FILTER (WHERE e.status = 'ACK_SENT')::int AS ack_sent_count,
          COUNT(*) FILTER (WHERE e.status = 'INVITES_SENT')::int AS invites_sent_count,
          COUNT(*) FILTER (WHERE e.status = 'CLOSED')::int AS closed_count
        FROM enquiries e
        ${
          queryText
            ? `WHERE (
              e.name ILIKE $1
              OR e.email ILIKE $1
              OR e.service_slug ILIKE $1
              OR e.site_location_text ILIKE $1
              OR e.postcode ILIKE $1
            )`
            : ''
        }
        `,
        queryText ? [`%${queryText}%`] : [],
      ),
    ]);

    const rows = result.rows as Array<{ id: string; created_at: string }>;
    const last = rows.at(-1);
    const nextCursor = rows.length === pageSize && last ? `${last.created_at}|${last.id}` : null;
    const countsRow = countsResult.rows[0] as
      | {
          all_count: number;
          new_count: number;
          ack_sent_count: number;
          invites_sent_count: number;
          closed_count: number;
        }
      | undefined;

    return NextResponse.json({
      items: rows,
      next_cursor: nextCursor,
      status_counts: {
        ALL: Number(countsRow?.all_count || 0),
        NEW: Number(countsRow?.new_count || 0),
        ACK_SENT: Number(countsRow?.ack_sent_count || 0),
        INVITES_SENT: Number(countsRow?.invites_sent_count || 0),
        CLOSED: Number(countsRow?.closed_count || 0),
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load enquiries';
    const status = error instanceof AuthError ? 401 : 500;
    return jsonError(message, status);
  }
}
