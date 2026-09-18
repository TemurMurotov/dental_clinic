import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Phone, Send } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BookingForm } from '@/components/forms/BookingForm';
import { siteConfig } from '@/content/site-config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'booking' });
  return { title: `${t('title')} — ${siteConfig.clinicName}` };
}

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('booking');
  const tc = await getTranslations('common');

  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-10 rounded-3xl border border-border bg-surface-elevated p-6 shadow-sm md:p-10">
          <BookingForm />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted">
          <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2 hover:text-primary">
            <Phone size={16} /> {siteConfig.phone}
          </a>
          <a
            href={`https://t.me/${siteConfig.telegramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary"
          >
            <Send size={16} /> {tc('contactTelegram')}
          </a>
        </div>
      </Container>
    </section>
  );
}
