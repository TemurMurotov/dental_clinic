import { getTranslations, getLocale } from 'next-intl/server';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { serviceCategories } from '@/content/services';
import type { Locale } from '@/content/site-config';

export async function ServicesPreview() {
  const t = await getTranslations('services');
  const tc = await getTranslations('common');
  const locale = (await getLocale()) as Locale;

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={t('categoriesTitle')} title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((category, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[category.icon] ?? Icons.Stethoscope;
            return (
              <Reveal key={category.slug} delay={i * 0.08}>
                <Link href={`/services#${category.slug}`}>
                  <Card className="group h-full p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{category.title[locale]}</h3>
                    <p className="mt-2 text-sm text-muted">{category.description[locale]}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      {tc('readMore')} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
