'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (newPassword !== confirmPassword) {
      setError("Yangi parollar mos kelmadi");
      return;
    }

    setLoading(true);
    const res = await fetch('/api/admin/change-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(
        data?.error === 'wrong_current_password'
          ? "Joriy parol noto'g'ri"
          : "Xatolik yuz berdi, qaytadan urinib ko'ring",
      );
      return;
    }

    setSuccess(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Joriy parol</label>
        <input
          type="password"
          required
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-base outline-none sm:text-sm focus:border-primary"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Yangi parol</label>
        <input
          type="password"
          required
          minLength={6}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-base outline-none sm:text-sm focus:border-primary"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Yangi parolni takrorlang</label>
        <input
          type="password"
          required
          minLength={6}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-base outline-none sm:text-sm focus:border-primary"
        />
      </div>

      {error && <p className="text-sm text-warning">{error}</p>}
      {success && (
        <p className="flex items-center gap-1.5 text-sm text-success">
          <CheckCircle2 size={16} /> Parol muvaffaqiyatli yangilandi
        </p>
      )}

      <Button type="submit" disabled={loading}>
        {loading ? 'Saqlanmoqda...' : 'Parolni yangilash'}
      </Button>
    </form>
  );
}
