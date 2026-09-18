'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales, type Locale } from '@/content/site-config';

const labels: Record<Locale, string> = { uz: "O'zbek", en: 'English', ru: 'Русский' };

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(next: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: next });
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="flex h-10 items-center gap-1.5 rounded-full border border-border px-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
      >
        <Globe size={16} />
        {locale.toUpperCase()}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl border border-border bg-surface-elevated py-1 shadow-lg z-50">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`block w-full px-4 py-2 text-left text-sm hover:bg-surface ${
                l === locale ? 'font-semibold text-primary' : 'text-foreground'
              }`}
            >
              {labels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
