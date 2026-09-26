'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Newspaper, Images, CalendarCheck, Mail, LogOut, Stethoscope, Settings, Menu, X } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { href: '/admin', label: 'Boshqaruv paneli', icon: LayoutDashboard },
  { href: '/admin/blog', label: 'Blog maqolalari', icon: Newspaper },
  { href: '/admin/cases', label: "Bemor case'lari", icon: Images },
  { href: '/admin/appointments', label: 'Navbat so\'rovlari', icon: CalendarCheck },
  { href: '/admin/messages', label: 'Kontakt xabarlari', icon: Mail },
  { href: '/admin/settings', label: 'Sozlamalar', icon: Settings },
];

function Brand() {
  return (
    <div className="flex items-center gap-2 px-2 font-bold text-foreground">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
        <Stethoscope size={18} />
      </span>
      Admin
    </div>
  );
}

export function AdminSidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  const content = (
    <>
      <nav className="mt-8 flex-1 space-y-1">
        {links.map((link) => {
          const active = link.href === '/admin' ? pathname === link.href : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
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
    </>
  );

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-3 md:hidden">
        <Brand />
        <button
          onClick={() => setOpen(true)}
          aria-label="Menyuni ochish"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground hover:bg-surface"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-surface-elevated p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <Brand />
              <button
                onClick={() => setOpen(false)}
                aria-label="Menyuni yopish"
                className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground hover:bg-surface"
              >
                <X size={22} />
              </button>
            </div>
            {content}
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-surface-elevated p-5 md:flex">
        <Brand />
        {content}
      </aside>
    </>
  );
}
