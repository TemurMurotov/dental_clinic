import { getTranslations, getLocale, setRequestLocale } from 'next-intl/server';
import * as Icons from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Reveal } from '@/components/ui/Reveal';
import { serviceCategories, getServicesByCategory } from '@/content/services';
import { siteConfig } from '@/content/site-config';
import type { Locale } from '@/content/site-config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  return { title: `${t('title')} — ${siteConfig.clinicName}` };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params;
  setRequestLocale(paramLocale);

  const t = await getTranslations('services');
  const locale = (await getLocale()) as Locale;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-16 space-y-16">
          {serviceCategories.map((category) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[category.icon] ?? Icons.Stethoscope;
            const categoryServices = getServicesByCategory(category.slug);

            return (
              <div key={category.slug} id={category.slug} className="scroll-mt-24">
                <Reveal className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{category.title[locale]}</h2>
                    <p className="text-sm text-muted">{category.description[locale]}</p>
                  </div>
                </Reveal>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryServices.map((service, i) => (
                    <Reveal key={service.slug} delay={i * 0.05}>
                      <ServiceCard service={service} locale={locale} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
