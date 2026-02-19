export const DATE_FLEXIBILITY = ['FIXED', 'WITHIN_WEEK', 'WITHIN_MONTH', 'ASAP'] as const;
export type DateFlexibility = (typeof DATE_FLEXIBILITY)[number];

export const ENQUIRY_STATUSES = [
  'NEW',
  'ACK_SENT',
  'INVITES_SENT',
  'CLOSED',
] as const;
export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

export const INVITE_STATUSES = ['SENT', 'OPENED', 'EXPIRED', 'DECLINED'] as const;
export type InviteStatus = (typeof INVITE_STATUSES)[number];

export const PILOT_APPLICATION_STATUSES = [
  'SUBMITTED',
  'UNDER_REVIEW',
  'APPROVED',
  'REJECTED',
  'NEEDS_INFO',
] as const;
export type PilotApplicationStatus = (typeof PILOT_APPLICATION_STATUSES)[number];

export function isInSet<T extends string>(value: string, set: readonly T[]): value is T {
  return set.includes(value as T);
}
