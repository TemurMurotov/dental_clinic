import { notFound } from 'next/navigation';
import { getTranslations, getLocale, setRequestLocale } from 'next-intl/server';
import * as Icons from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { FAQAccordion } from '@/components/services/FAQAccordion';
import { ServiceCard } from '@/components/services/ServiceCard';
import { CTASection } from '@/components/sections/CTASection';
import { services, getServiceBySlug, getServicesByCategory } from '@/content/services';
import { siteConfig } from '@/content/site-config';
import type { Locale } from '@/content/site-config';

export function generateStaticParams() {
  return services.map((s) => ({ category: s.category, slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale, category, slug } = await params;
  const service = getServiceBySlug(category, slug);
  if (!service) return {};
  return {
    title: `${service.title[locale as Locale]} — ${siteConfig.clinicName}`,
    description: service.shortDescription[locale as Locale],
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale: paramLocale, category, slug } = await params;
  setRequestLocale(paramLocale);

  const service = getServiceBySlug(category, slug);
  if (!service) notFound();

  const t = await getTranslations('services');
  const tc = await getTranslations('common');
  const locale = (await getLocale()) as Locale;
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Stethoscope;
  const related = getServicesByCategory(service.category).filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                  <Icon size={28} />
                </span>
                <h1 className="mt-5 text-3xl md:text-4xl font-bold text-foreground text-balance">
                  {service.title[locale]}
                </h1>
                <p className="mt-4 text-lg text-muted leading-relaxed">{service.description[locale]}</p>
              </Reveal>

              <Reveal delay={0.1} className="mt-10">
                <h2 className="text-xl font-bold text-foreground">{t('benefitsTitle')}</h2>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.benefits[locale].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.15} className="mt-10">
                <h2 className="text-xl font-bold text-foreground">{t('processTitle')}</h2>
                <ol className="mt-4 space-y-4">
                  {service.process[locale].map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary">
                        {i + 1}
                      </span>
                      <span className="pt-1 text-sm text-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal delay={0.2} className="mt-10">
                <h2 className="text-xl font-bold text-foreground">{t('faqTitle')}</h2>
                <div className="mt-4">
                  <FAQAccordion
                    items={service.faqs.map((f) => ({ question: f.question[locale], answer: f.answer[locale] }))}
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold text-foreground">{tc('bookAppointment')}</h3>
                <p className="mt-2 text-sm text-muted">{service.shortDescription[locale]}</p>
                <ButtonLink href="/booking" className="mt-5 w-full">
                  {tc('bookAppointment')}
                </ButtonLink>

                {related.length > 0 && (
                  <div className="mt-8 border-t border-border pt-6">
                    <h4 className="text-sm font-semibold text-foreground">{t('relatedServices')}</h4>
                    <div className="mt-4 space-y-4">
                      {related.map((s) => (
                        <ServiceCard key={s.slug} service={s} locale={locale} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
