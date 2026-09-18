'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';

export function DeleteButton({ url }: { url: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("O'chirishni tasdiqlaysizmi?")) return;
    setLoading(true);
    await fetch(url, { method: 'DELETE' });
    setLoading(false);
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-warning hover:bg-warning/10"
      aria-label="Delete"
    >
      <Trash2 size={16} />
    </button>
  );
}
