'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CalendarCheck, Send, Phone } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { siteConfig, doctorProfile } from '@/content/site-config';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-light/60 to-background pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-sm font-semibold text-primary">
            {t('eyebrow')}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            {t('headline')}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted text-balance">{t('subheadline')}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/booking" size="lg">
              <CalendarCheck size={18} /> {t('cta1')}
            </ButtonLink>
            <ButtonLink href={`https://t.me/${siteConfig.telegramUsername}`} external variant="secondary" size="lg">
              <Send size={18} /> {t('cta2')}
            </ButtonLink>
            <ButtonLink href={`tel:${siteConfig.phoneHref}`} external variant="outline" size="lg">
              <Phone size={18} /> {t('cta3')}
            </ButtonLink>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <div className="text-3xl font-bold text-primary">{doctorProfile.experienceYears}+</div>
              <div className="text-sm text-muted">{t('statExperience')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">{doctorProfile.patientsCount}</div>
              <div className="text-sm text-muted">{t('statPatients')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">16+</div>
              <div className="text-sm text-muted">{t('statServices')}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl">
            <Image
              src={doctorProfile.photo}
              alt={siteConfig.doctorName}
              fill
              sizes="(max-width: 768px) 90vw, 480px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
