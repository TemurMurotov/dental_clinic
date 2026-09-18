import { getTranslations, getLocale, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQAccordion } from '@/components/services/FAQAccordion';
import { generalFaqs } from '@/content/faq';
import { siteConfig } from '@/content/site-config';
import type { Locale } from '@/content/site-config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq' });
  return { title: `${t('title')} — ${siteConfig.clinicName}` };
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params;
  setRequestLocale(paramLocale);

  const t = await getTranslations('faq');
  const locale = (await getLocale()) as Locale;

  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        <div className="mt-12">
          <FAQAccordion items={generalFaqs.map((f) => ({ question: f.question[locale], answer: f.answer[locale] }))} />
        </div>
      </Container>
    </section>
  );
}
