import type { Metadata } from 'next';
import { getSession } from '@/lib/auth';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export const metadata: Metadata = { title: 'Admin — Dr. Alisher Muratbayev Dental Studio' };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session) {
    return <div className="min-h-screen bg-surface">{children}</div>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-surface md:flex-row">
      <AdminSidebar email={session.email} />
      <main className="min-w-0 flex-1 p-4 sm:p-6 md:p-10">{children}</main>
    </div>
  );
}
