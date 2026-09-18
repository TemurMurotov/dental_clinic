'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);
    if (!res.ok) {
      setError("Email yoki parol noto'g'ri");
      return;
    }

    router.push('/admin');
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-surface-elevated p-8 shadow-lg">
        <div className="flex flex-col items-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            <Stethoscope size={22} />
          </span>
          <h1 className="mt-4 text-lg font-bold text-foreground">Admin panelga kirish</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Login</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Parol</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          {error && <p className="text-sm text-warning">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Kirilmoqda...' : 'Kirish'}
          </Button>
        </form>
      </div>
    </div>
  );
}
