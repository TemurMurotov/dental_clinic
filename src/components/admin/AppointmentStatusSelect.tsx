'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const statusStyles: Record<string, string> = {
  pending: 'text-warning',
  confirmed: 'text-success',
  cancelled: 'text-muted',
};

export function AppointmentStatusSelect({ id, status }: { id: string; status: string }) {
  const router = useRouter();
  const [value, setValue] = useState(status);
  const [loading, setLoading] = useState(false);

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value;
    setValue(newStatus);
    setLoading(true);
    await fetch(`/api/admin/appointments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    setLoading(false);
    router.refresh();
  }

  return (
    <select
      value={value}
      onChange={handleChange}
      disabled={loading}
      className={`rounded-lg border border-border bg-background px-2.5 py-1.5 text-base font-medium outline-none sm:text-sm ${statusStyles[value]}`}
    >
      <option value="pending">kutilmoqda</option>
      <option value="confirmed">tasdiqlangan</option>
      <option value="cancelled">bekor qilingan</option>
    </select>
  );
}
