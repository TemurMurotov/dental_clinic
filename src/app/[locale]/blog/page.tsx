import { getTranslations, getLocale, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { BlogCard } from '@/components/blog/BlogCard';
import { prisma } from '@/lib/prisma';
import { siteConfig } from '@/content/site-config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  return { title: `${t('title')} — ${siteConfig.clinicName}` };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params;
  setRequestLocale(paramLocale);

  const t = await getTranslations('blog');
  const locale = await getLocale();

  const posts = await prisma.blogPost.findMany({
    where: { locale, published: true },
    orderBy: { publishedAt: 'desc' },
  });

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        {posts.length === 0 ? (
          <p className="mt-12 text-center text-muted">{t('noPosts')}</p>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.id} delay={(i % 3) * 0.08}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
