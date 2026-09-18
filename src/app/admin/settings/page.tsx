import { getSession } from '@/lib/auth';
import { ChangePasswordForm } from '@/components/admin/ChangePasswordForm';

export default async function AdminSettingsPage() {
  const session = await getSession();

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Sozlamalar</h1>
      <p className="mt-1 text-sm text-muted">Login: {session?.email}</p>

      <div className="mt-8 rounded-2xl border border-border bg-surface-elevated p-6">
        <h2 className="font-semibold text-foreground">Parolni o&apos;zgartirish</h2>
        <div className="mt-5">
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
