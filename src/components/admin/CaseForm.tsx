'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { compressImagesInFormData } from '@/lib/compress-image';
import type { Case } from '@prisma/client';

export function CaseForm({ item }: { item?: Case }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    await compressImagesInFormData(formData, ['beforeImage', 'afterImage']);
    const url = item ? `/api/admin/cases/${item.id}` : '/api/admin/cases';
    const res = await fetch(url, { method: 'POST', body: formData });

    setLoading(false);
    if (!res.ok) {
      setError(
        res.status === 413
          ? 'Rasm hajmi juda katta, kichikroq rasm tanlang'
          : 'Xatolik yuz berdi, maydonlarni tekshiring',
      );
      return;
    }

    router.push('/admin/cases');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Sarlavha</label>
          <input
            name="title"
            required
            defaultValue={item?.title}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-base outline-none sm:text-sm focus:border-primary"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Til</label>
          <select
            name="locale"
            defaultValue={item?.locale || 'uz'}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-base outline-none sm:text-sm focus:border-primary"
          >
            <option value="uz">O&apos;zbek</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Kategoriya</label>
        <input
          name="category"
          required
          defaultValue={item?.category}
          placeholder="masalan: Estetik tiklash"
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-base outline-none sm:text-sm focus:border-primary"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Tavsif</label>
        <textarea
          name="description"
          required
          rows={3}
          defaultValue={item?.description}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-base outline-none sm:text-sm focus:border-primary"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            &quot;Oldin&quot; rasmi {item && '(yangi tanlamasangiz, eskisi saqlanadi)'}
          </label>
          <input
            type="file"
            name="beforeImage"
            accept="image/*"
            required={!item}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-base outline-none sm:text-sm focus:border-primary"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            &quot;Keyin&quot; rasmi {item && '(yangi tanlamasangiz, eskisi saqlanadi)'}
          </label>
          <input
            type="file"
            name="afterImage"
            accept="image/*"
            required={!item}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-base outline-none sm:text-sm focus:border-primary"
          />
        </div>
      </div>

      {error && <p className="text-sm text-warning">{error}</p>}

      <Button type="submit" disabled={loading}>
        {loading ? 'Saqlanmoqda...' : 'Saqlash'}
      </Button>
    </form>
  );
}
