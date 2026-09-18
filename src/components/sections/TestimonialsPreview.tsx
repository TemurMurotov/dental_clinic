import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { TestimonialCard } from '@/components/reviews/TestimonialCard';
import { prisma } from '@/lib/prisma';

export async function TestimonialsPreview() {
  const t = await getTranslations('reviews');
  const tc = await getTranslations('common');

  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: 'desc' },
    take: 3,
  });

  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-surface">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/reviews" variant="outline">
            {tc('viewAll')}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
