import Link from 'next/link';
import Image from 'next/image';
import { Plus, Pencil } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import { DeleteButton } from '@/components/admin/DeleteButton';

export default async function AdminCasesListPage() {
  const cases = await prisma.case.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-foreground">Bemor case&apos;lari</h1>
        <Link
          href="/admin/cases/new"
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          <Plus size={16} /> Qo&apos;shish
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-2xl border border-border bg-surface-elevated">
            <div className="grid grid-cols-2">
              <div className="relative aspect-square">
                <Image src={item.beforeImage} alt="Before" fill sizes="200px" className="object-cover" />
              </div>
              <div className="relative aspect-square">
                <Image src={item.afterImage} alt="After" fill sizes="200px" className="object-cover" />
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs uppercase text-muted">{item.locale}</div>
              <div className="font-medium text-foreground">{item.title}</div>
              <div className="mt-3 flex items-center gap-1">
                <Link
                  href={`/admin/cases/${item.id}/edit`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-primary hover:bg-primary-light"
                >
                  <Pencil size={16} />
                </Link>
                <DeleteButton url={`/api/admin/cases/${item.id}`} />
              </div>
            </div>
          </div>
        ))}
        {cases.length === 0 && <p className="text-muted">Hozircha case&apos;lar yo&apos;q</p>}
      </div>
    </div>
  );
}
