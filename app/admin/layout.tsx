import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import AdminShell from '@/components/admin/AdminShell';
import { AuthError, requireAdminAccessFromSessionToken, SESSION_COOKIE_NAME } from '@/lib/server/auth';
import { noIndexMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = noIndexMetadata;

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  try {
    const cookieStore = await cookies();
    const rawSessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value ?? null;
    await requireAdminAccessFromSessionToken(rawSessionToken);
  } catch (error) {
    if (error instanceof AuthError) {
      redirect('/login');
    }
    throw error;
  }

  return <AdminShell>{children}</AdminShell>;
}
