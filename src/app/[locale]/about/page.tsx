import { getTranslations, getLocale, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { GraduationCap, Target, Award } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { doctorProfile, siteConfig } from '@/content/site-config';
import type { Locale } from '@/content/site-config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: `${t('title')} — ${siteConfig.clinicName}` };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params;
  setRequestLocale(paramLocale);

  const t = await getTranslations('about');
  const locale = (await getLocale()) as Locale;

  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border shadow-xl">
                <Image src={doctorProfile.photo} alt={siteConfig.doctorName} fill sizes="400px" className="object-cover" />
              </div>
            </Reveal>

            <div className="lg:col-span-3">
              <SectionHeading eyebrow={t('subtitle')} title={siteConfig.doctorName} align="left" className="mx-0" />

              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                {doctorProfile.bio[locale].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <Reveal delay={0.1} className="mt-10">
                <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <GraduationCap className="text-primary" size={22} />
                  {t('educationTitle')}
                </div>
                <ul className="mt-4 space-y-3">
                  {doctorProfile.education[locale].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.15}>
                <Card className="mt-10 flex items-start gap-4 p-6">
                  <Target className="mt-1 shrink-0 text-primary" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground">{t('missionTitle')}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{doctorProfile.mission[locale]}</p>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionHeading eyebrow={<Award className="mx-auto mb-2" size={28} />} title={t('certificatesTitle')} />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctorProfile.certificates.map((cert, i) => (
              <Reveal key={cert.titleKey} delay={i * 0.1}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={cert.image} alt="Certificate" fill sizes="400px" className="object-cover" />
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
