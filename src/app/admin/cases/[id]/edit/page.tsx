import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { CaseForm } from '@/components/admin/CaseForm';

export default async function EditCasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await prisma.case.findUnique({ where: { id } });
  if (!item) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Case&apos;ni tahrirlash</h1>
      <div className="mt-6">
        <CaseForm item={item} />
      </div>
    </div>
  );
}
