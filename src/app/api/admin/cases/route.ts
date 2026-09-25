import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { saveUploadedFile } from '@/lib/uploads';

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const form = await request.formData();
  const beforeFile = form.get('beforeImage');
  const afterFile = form.get('afterImage');

  if (!(beforeFile instanceof File) || beforeFile.size === 0 || !(afterFile instanceof File) || afterFile.size === 0) {
    return NextResponse.json({ error: 'both images are required' }, { status: 400 });
  }

  const beforeImage = await saveUploadedFile(beforeFile);
  const afterImage = await saveUploadedFile(afterFile);

  const item = await prisma.case.create({
    data: {
      locale: String(form.get('locale')),
      title: String(form.get('title')),
      description: String(form.get('description')),
      category: String(form.get('category')),
      beforeImage,
      afterImage,
    },
  });

  revalidatePath('/', 'layout');

  return NextResponse.json({ id: item.id }, { status: 201 });
}
