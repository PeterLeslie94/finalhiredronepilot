/**
 * Shared formatting utilities for pilot dashboard and admin pages.
 */

/** Strip `drone-` prefix, replace hyphens with spaces, and title-case. */
export function formatServiceSlug(slug: string): string {
  return slug
    .replace(/^drone-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Format a number (or numeric string) as GBP currency. */
export function formatGBP(pounds: string | number): string {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(
    typeof pounds === 'string' ? parseFloat(pounds) : pounds,
  );
}

/** Format an ISO / Date value as date + time in en-GB locale. */
export function toLocalDateTime(value: string | Date): string {
  const d = typeof value === 'string' ? new Date(value) : value;
  if (isNaN(d.getTime())) return 'N/A';
  return d.toLocaleString('en-GB');
}

/** Format an ISO / Date value as date-only in en-GB locale. */
export function toLocalDate(value: string | Date): string {
  const d = typeof value === 'string' ? new Date(value) : value;
  if (isNaN(d.getTime())) return 'N/A';
  return d.toLocaleDateString('en-GB');
}

/** Return a human-readable countdown label and urgency flag for a deadline. */
export function deadlineLabel(isoString: string | null): { text: string; urgent: boolean } {
  if (!isoString) return { text: 'Not set', urgent: false };
  const deadline = new Date(isoString);
  if (isNaN(deadline.getTime())) return { text: 'Invalid date', urgent: false };

  const now = new Date();
  const diffMs = deadline.getTime() - now.getTime();

  if (diffMs <= 0) return { text: 'Expired', urgent: true };

  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffHours < 24) return { text: `${diffHours}h left`, urgent: true };
  if (diffDays === 1) return { text: '1 day left', urgent: true };
  if (diffDays <= 3) return { text: `${diffDays} days left`, urgent: true };
  return { text: `${diffDays} days left`, urgent: false };
}

/** Map date_flexibility enum values to human-readable labels. */
export function flexibilityLabel(flex: string): string {
  const map: Record<string, string> = {
    FIXED: 'Fixed Date',
    ASAP: 'As Soon as Possible',
    FLEXIBLE: 'Flexible',
    WITHIN_WEEK: 'Within a Week',
    WITHIN_MONTH: 'Within a Month',
  };
  return map[flex] || flex;
}
