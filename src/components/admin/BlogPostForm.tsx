'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import type { BlogPost } from '@prisma/client';

export function BlogPostForm({ post }: { post?: BlogPost }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const url = post ? `/api/admin/blog/${post.id}` : '/api/admin/blog';
    const res = await fetch(url, { method: 'POST', body: formData });

    setLoading(false);
    if (!res.ok) {
      setError('Xatolik yuz berdi, maydonlarni tekshiring');
      return;
    }

    router.push('/admin/blog');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Slug (URL)</label>
          <input
            name="slug"
            required
            defaultValue={post?.slug}
            placeholder="masalan-shu-tarzda"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Til</label>
          <select
            name="locale"
            defaultValue={post?.locale || 'uz'}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="uz">O&apos;zbek</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Sarlavha</label>
        <input
          name="title"
          required
          defaultValue={post?.title}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Kategoriya</label>
        <input
          name="category"
          required
          defaultValue={post?.category}
          placeholder="masalan: Preventive Care"
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Qisqa tavsif</label>
        <textarea
          name="excerpt"
          required
          rows={2}
          defaultValue={post?.excerpt}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Matn</label>
        <textarea
          name="content"
          required
          rows={10}
          defaultValue={post?.content}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Muqova rasmi {post?.coverImage && '(yangi tanlamasangiz, eskisi saqlanadi)'}
        </label>
        <input
          type="file"
          name="coverImage"
          accept="image/*"
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-foreground">
        <input type="checkbox" name="published" defaultChecked={post?.published ?? true} />
        Saytda ko&apos;rinsin (published)
      </label>

      {error && <p className="text-sm text-warning">{error}</p>}

      <Button type="submit" disabled={loading}>
        {loading ? 'Saqlanmoqda...' : 'Saqlash'}
      </Button>
    </form>
  );
}
