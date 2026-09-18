import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ShieldCheck, Award, Users } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { TestimonialCard } from '@/components/reviews/TestimonialCard';
import { CTASection } from '@/components/sections/CTASection';
import { prisma } from '@/lib/prisma';
import { siteConfig, doctorProfile } from '@/content/site-config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'reviews' });
  return { title: `${t('title')} — ${siteConfig.clinicName}` };
}

export default async function ReviewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params;
  setRequestLocale(paramLocale);

  const t = await getTranslations('reviews');

  const testimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } });
  const videoTestimonials = testimonials.filter((tm) => tm.videoUrl);

  const trustPoints = [
    { icon: ShieldCheck, label: t('trustTitle') },
    { icon: Award, label: `${doctorProfile.experienceYears}+ years` },
    { icon: Users, label: doctorProfile.patientsCount },
  ];

  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="flex items-center gap-2 text-sm font-medium text-muted">
                <point.icon size={18} className="text-primary" />
                {point.label}
              </div>
            ))}
          </div>

          {videoTestimonials.length > 0 && (
            <div className="mt-16">
              <h2 className="text-center text-xl font-bold text-foreground">{t('videoTitle')}</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {videoTestimonials.map((tm, i) => (
                  <Reveal key={tm.id} delay={i * 0.08}>
                    <TestimonialCard testimonial={tm} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((tm, i) => (
                <Reveal key={tm.id} delay={(i % 3) * 0.08}>
                  <TestimonialCard testimonial={tm} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
