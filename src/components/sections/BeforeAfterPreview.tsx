import { getTranslations, getLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { CaseCard } from '@/components/gallery/CaseCard';
import { prisma } from '@/lib/prisma';

export async function BeforeAfterPreview() {
  const t = await getTranslations('beforeAfter');
  const tc = await getTranslations('common');
  const locale = await getLocale();

  const cases = await prisma.case.findMany({
    where: { locale },
    orderBy: { createdAt: 'desc' },
    take: 3,
  });

  if (cases.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <CaseCard item={item} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/before-after" variant="outline">
            {tc('viewAll')}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
