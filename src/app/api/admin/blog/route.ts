import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { saveUploadedFile } from '@/lib/uploads';

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const form = await request.formData();
  const coverImageFile = form.get('coverImage');
  let coverImage: string | undefined;
  if (coverImageFile instanceof File && coverImageFile.size > 0) {
    coverImage = await saveUploadedFile(coverImageFile);
  }

  const post = await prisma.blogPost.create({
    data: {
      slug: String(form.get('slug')),
      locale: String(form.get('locale')),
      title: String(form.get('title')),
      excerpt: String(form.get('excerpt')),
      content: String(form.get('content')),
      category: String(form.get('category')),
      published: form.get('published') === 'on' || form.get('published') === 'true',
      coverImage,
    },
  });

  revalidatePath('/', 'layout');

  return NextResponse.json({ id: post.id }, { status: 201 });
}
