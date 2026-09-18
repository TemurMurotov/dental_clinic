import { getTranslations, getLocale, setRequestLocale } from 'next-intl/server';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { InstagramIcon } from '@/components/ui/icons';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/content/site-config';
import type { Locale } from '@/content/site-config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: `${t('title')} — ${siteConfig.clinicName}` };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params;
  setRequestLocale(paramLocale);

  const t = await getTranslations('contact');
  const locale = (await getLocale()) as Locale;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
              <MapPin className="mt-0.5 shrink-0 text-primary" size={22} />
              <div>
                <div className="text-sm font-semibold text-foreground">{t('addressLabel')}</div>
                <div className="mt-1 text-sm text-muted">{siteConfig.address[locale]}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
              <Phone className="mt-0.5 shrink-0 text-primary" size={22} />
              <div>
                <div className="text-sm font-semibold text-foreground">{t('phoneLabel')}</div>
                <a href={`tel:${siteConfig.phoneHref}`} className="mt-1 block text-sm text-muted hover:text-primary">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
              <Clock className="mt-0.5 shrink-0 text-primary" size={22} />
              <div>
                <div className="text-sm font-semibold text-foreground">{t('hoursLabel')}</div>
                <div className="mt-1 text-sm text-muted">{siteConfig.workingHours[locale]}</div>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={`https://t.me/${siteConfig.telegramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-white"
              >
                <Send size={16} /> Telegram
              </a>
              <a
                href={`https://instagram.com/${siteConfig.instagramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-white"
              >
                <InstagramIcon size={16} /> Instagram
              </a>
            </div>

            <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-border bg-surface text-sm text-muted">
              {t('mapPlaceholder')}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">{t('formTitle')}</h3>
            <div className="mt-4 rounded-2xl border border-border bg-surface-elevated p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
