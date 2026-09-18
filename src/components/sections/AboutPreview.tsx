import { getTranslations, getLocale } from 'next-intl/server';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { doctorProfile, siteConfig } from '@/content/site-config';
import type { Locale } from '@/content/site-config';

export async function AboutPreview() {
  const t = await getTranslations('about');
  const tc = await getTranslations('common');
  const locale = (await getLocale()) as Locale;

  return (
    <section className="py-20 md:py-28 bg-surface">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border shadow-xl">
          <Image
            src={doctorProfile.photo}
            alt={siteConfig.doctorName}
            fill
            sizes="(max-width: 768px) 90vw, 400px"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">{t('title')}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">{siteConfig.doctorName}</h2>
          <p className="mt-5 text-muted leading-relaxed">{doctorProfile.bio[locale][0]}</p>

          <ul className="mt-6 space-y-3">
            {doctorProfile.education[locale].slice(0, 3).map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <ButtonLink href="/about" variant="outline" className="mt-8">
            {tc('readMore')}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
