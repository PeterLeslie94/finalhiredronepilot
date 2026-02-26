export function normalizeEmail(value: string | null | undefined): string {
  return (value || '').trim().toLowerCase();
}

export function getConfiguredAdminLoginEmail(): string | null {
  const configured = normalizeEmail(process.env.AUTH_ADMIN_LOGIN_EMAIL);
  return configured || null;
}

export function isAllowedAdminLoginEmail(email: string): boolean {
  const configured = getConfiguredAdminLoginEmail();
  if (!configured) return true;
  return normalizeEmail(email) === configured;
}
