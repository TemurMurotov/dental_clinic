'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X, Stethoscope } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('nav');
  const tc = useTranslations('common');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/before-after', label: t('beforeAfter') },
    { href: '/reviews', label: t('reviews') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
            <Stethoscope size={18} />
          </span>
          Dr. Muratbayev
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? 'text-primary' : 'text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <ButtonLink href="/booking" size="sm">
            {tc('bookAppointment')}
          </ButtonLink>
        </div>

        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-3 pt-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <ButtonLink href="/booking" className="mt-3 w-full">
              {tc('bookAppointment')}
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
