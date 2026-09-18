import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { appointmentSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = appointmentSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const appointment = await prisma.appointment.create({
    data: {
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email || null,
      service: parsed.data.service,
      preferredDate: parsed.data.preferredDate,
      preferredTime: parsed.data.preferredTime,
      message: parsed.data.message || null,
    },
  });

  return NextResponse.json({ id: appointment.id }, { status: 201 });
}
