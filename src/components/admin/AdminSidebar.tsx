'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Newspaper, Images, CalendarCheck, Mail, LogOut, Stethoscope, Settings } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { href: '/admin', label: 'Boshqaruv paneli', icon: LayoutDashboard },
  { href: '/admin/blog', label: 'Blog maqolalari', icon: Newspaper },
  { href: '/admin/cases', label: "Bemor case'lari", icon: Images },
  { href: '/admin/appointments', label: 'Navbat so\'rovlari', icon: CalendarCheck },
  { href: '/admin/messages', label: 'Kontakt xabarlari', icon: Mail },
  { href: '/admin/settings', label: 'Sozlamalar', icon: Settings },
];

export function AdminSidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-surface-elevated p-5 md:flex">
      <div className="flex items-center gap-2 px-2 font-bold text-foreground">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
          <Stethoscope size={18} />
        </span>
        Admin
      </div>

      <nav className="mt-8 flex-1 space-y-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                active ? 'bg-primary text-white' : 'text-foreground hover:bg-surface',
              )}
            >
              <link.icon size={18} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border pt-4">
        <div className="truncate px-2 text-xs text-muted">{email}</div>
        <button
          onClick={handleLogout}
          className="mt-2 flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
        >
          <LogOut size={18} />
          Chiqish
        </button>
      </div>
    </aside>
  );
}
