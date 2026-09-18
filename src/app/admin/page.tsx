import Link from 'next/link';
import { Newspaper, Images, CalendarCheck, Mail } from 'lucide-react';
import { prisma } from '@/lib/prisma';

export default async function AdminDashboardPage() {
  const [blogCount, caseCount, appointmentCount, pendingCount, messageCount] = await Promise.all([
    prisma.blogPost.count(),
    prisma.case.count(),
    prisma.appointment.count(),
    prisma.appointment.count({ where: { status: 'pending' } }),
    prisma.contactMessage.count(),
  ]);

  const cards = [
    { href: '/admin/blog', label: 'Blog maqolalari', value: blogCount, icon: Newspaper },
    { href: '/admin/cases', label: "Bemor case'lari", value: caseCount, icon: Images },
    { href: '/admin/appointments', label: `Navbatlar (${pendingCount} kutilmoqda)`, value: appointmentCount, icon: CalendarCheck },
    { href: '/admin/messages', label: 'Kontakt xabarlari', value: messageCount, icon: Mail },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Boshqaruv paneli</h1>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-2xl border border-border bg-surface-elevated p-6 transition-shadow hover:shadow-md"
          >
            <card.icon className="text-primary" size={24} />
            <div className="mt-4 text-3xl font-bold text-foreground">{card.value}</div>
            <div className="mt-1 text-sm text-muted">{card.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
