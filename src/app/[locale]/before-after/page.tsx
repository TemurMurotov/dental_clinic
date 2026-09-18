import { getTranslations, getLocale, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CaseCard } from '@/components/gallery/CaseCard';
import { CTASection } from '@/components/sections/CTASection';
import { prisma } from '@/lib/prisma';
import { siteConfig } from '@/content/site-config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'beforeAfter' });
  return { title: `${t('title')} — ${siteConfig.clinicName}` };
}

export default async function BeforeAfterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params;
  setRequestLocale(paramLocale);

  const t = await getTranslations('beforeAfter');
  const locale = await getLocale();

  const cases = await prisma.case.findMany({
    where: { locale },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />

          {cases.length === 0 ? (
            <p className="mt-12 text-center text-muted">—</p>
          ) : (
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cases.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 0.08}>
                  <CaseCard item={item} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
      <CTASection />
    </>
  );
}
