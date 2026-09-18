import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { saveUploadedFile } from '@/lib/uploads';

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const { id } = await params;
  const form = await request.formData();

  const beforeFile = form.get('beforeImage');
  const afterFile = form.get('afterImage');
  const beforeImage = beforeFile instanceof File && beforeFile.size > 0 ? await saveUploadedFile(beforeFile) : undefined;
  const afterImage = afterFile instanceof File && afterFile.size > 0 ? await saveUploadedFile(afterFile) : undefined;

  await prisma.case.update({
    where: { id },
    data: {
      locale: String(form.get('locale')),
      title: String(form.get('title')),
      description: String(form.get('description')),
      category: String(form.get('category')),
      ...(beforeImage ? { beforeImage } : {}),
      ...(afterImage ? { afterImage } : {}),
    },
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const { id } = await params;
  await prisma.case.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
