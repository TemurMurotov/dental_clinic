import { getTranslations } from 'next-intl/server';
import { CalendarCheck, Send } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/content/site-config';

export async function CTASection() {
  const t = await getTranslations('hero');

  return (
    <section className="py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-8 py-16 text-center text-white md:py-20">
          <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold text-balance">{t('headline')}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90 text-balance">{t('subheadline')}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/booking" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-none">
              <CalendarCheck size={18} /> {t('cta1')}
            </ButtonLink>
            <ButtonLink
              href={`https://t.me/${siteConfig.telegramUsername}`}
              external
              size="lg"
              className="bg-white/15 text-white hover:bg-white/25 shadow-none"
            >
              <Send size={18} /> {t('cta2')}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
