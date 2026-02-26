export const HONEYPOT_FIELD_NAME = 'company_contact_reference';

export function getHoneypotValue(payload: Record<string, unknown>): string {
  const raw = payload[HONEYPOT_FIELD_NAME];
  return typeof raw === 'string' ? raw.trim() : '';
}

export function isHoneypotTripped(payload: Record<string, unknown>): boolean {
  return getHoneypotValue(payload).length > 0;
}
