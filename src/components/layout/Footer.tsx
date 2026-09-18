import { useTranslations, useLocale } from 'next-intl';
import { Send, Phone, MapPin, Clock, Stethoscope } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { InstagramIcon } from '@/components/ui/icons';
import { siteConfig } from '@/content/site-config';
import type { Locale } from '@/content/site-config';

export function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const locale = useLocale() as Locale;
  const year = new Date().getFullYear();

  const links = [
    { href: '/about', label: tn('about') },
    { href: '/services', label: tn('services') },
    { href: '/before-after', label: tn('beforeAfter') },
    { href: '/blog', label: tn('blog') },
    { href: '/faq', label: tn('faq') },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
              <Stethoscope size={18} />
            </span>
            Dr. Muratbayev
          </Link>
          <p className="mt-4 text-sm text-muted max-w-xs">{t('tagline')}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={`https://t.me/${siteConfig.telegramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-white"
              aria-label="Telegram"
            >
              <Send size={16} />
            </a>
            <a
              href={`https://instagram.com/${siteConfig.instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-white"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">{t('quickLinks')}</h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">{t('contactInfo')}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{siteConfig.address[locale]}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-primary" />
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-primary">
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">{t('workingHours')}</h3>
          <p className="mt-4 flex items-start gap-2.5 text-sm text-muted">
            <Clock size={16} className="mt-0.5 shrink-0 text-primary" />
            {siteConfig.workingHours[locale]}
          </p>
        </div>
      </Container>

      <div className="border-t border-border py-5">
        <Container className="text-center text-xs text-muted">
          © {year} {siteConfig.clinicName}. {t('rights')}
        </Container>
      </div>
    </footer>
  );
}
