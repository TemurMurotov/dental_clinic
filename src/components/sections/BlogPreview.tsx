import { getTranslations, getLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { BlogCard } from '@/components/blog/BlogCard';
import { prisma } from '@/lib/prisma';

export async function BlogPreview() {
  const t = await getTranslations('blog');
  const tc = await getTranslations('common');
  const locale = await getLocale();

  const posts = await prisma.blogPost.findMany({
    where: { locale, published: true },
    orderBy: { publishedAt: 'desc' },
    take: 3,
  });

  if (posts.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.1}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/blog" variant="outline">
            {tc('viewAll')}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
