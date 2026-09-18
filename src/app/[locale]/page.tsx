import { getTranslations, setRequestLocale } from 'next-intl/server';
import { siteConfig } from '@/content/site-config';
import { Hero } from '@/components/sections/Hero';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { BeforeAfterPreview } from '@/components/sections/BeforeAfterPreview';
import { TestimonialsPreview } from '@/components/sections/TestimonialsPreview';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { CTASection } from '@/components/sections/CTASection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  return {
    title: `${siteConfig.clinicName} — ${t('headline')}`,
    description: t('subheadline'),
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <BeforeAfterPreview />
      <TestimonialsPreview />
      <BlogPreview />
      <CTASection />
    </>
  );
}
