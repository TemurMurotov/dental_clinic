import Link from 'next/link';
import { Plus, Pencil } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import { DeleteButton } from '@/components/admin/DeleteButton';

export default async function AdminBlogListPage() {
  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-foreground">Blog maqolalari</h1>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          <Plus size={16} /> Qo&apos;shish
        </Link>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface-elevated">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-surface text-left text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Sarlavha</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">Til</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">Kategoriya</th>
              <th className="px-4 py-3 font-medium">Holat</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <div className="font-medium text-foreground">{post.title}</div>
                  <div className="mt-0.5 text-xs text-muted sm:hidden">
                    <span className="uppercase">{post.locale}</span> · {post.category}
                  </div>
                </td>
                <td className="hidden px-4 py-3 uppercase text-muted sm:table-cell">{post.locale}</td>
                <td className="hidden px-4 py-3 text-muted sm:table-cell">{post.category}</td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className={post.published ? 'text-success' : 'text-muted'}>
                    {post.published ? "e'lon qilingan" : 'qoralama'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-primary hover:bg-primary-light"
                    >
                      <Pencil size={16} />
                    </Link>
                    <DeleteButton url={`/api/admin/blog/${post.id}`} />
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted">
                  Hozircha maqolalar yo&apos;q
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
