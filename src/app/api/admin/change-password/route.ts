import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { changePasswordSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const body = await request.json();
  const parsed = changePasswordSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const admin = await prisma.adminUser.findUnique({ where: { email: session.email } });
  if (!admin || !(await bcrypt.compare(parsed.data.currentPassword, admin.passwordHash))) {
    return NextResponse.json({ error: 'wrong_current_password' }, { status: 400 });
  }

  const passwordHash = await bcrypt.hash(parsed.data.newPassword, 10);
  await prisma.adminUser.update({ where: { email: session.email }, data: { passwordHash } });

  return NextResponse.json({ ok: true });
}
