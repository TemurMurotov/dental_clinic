import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { CalendarDays, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/ui/Reveal';
import { prisma } from '@/lib/prisma';
import { siteConfig } from '@/content/site-config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post) return {};
  return { title: `${post.title} — ${siteConfig.clinicName}`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: paramLocale, slug } = await params;
  setRequestLocale(paramLocale);

  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post || !post.published) notFound();

  const t = await getTranslations('blog');

  return (
    <article className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            <ArrowLeft size={16} /> {t('backToBlog')}
          </Link>

          <Badge className="mt-6">{post.category}</Badge>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">{post.title}</h1>
          <div className="mt-4 flex items-center gap-1.5 text-sm text-muted">
            <CalendarDays size={16} />
            {t('publishedOn')} {new Date(post.publishedAt).toLocaleDateString()}
          </div>

          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-border">
            <Image src={post.coverImage || '/images/blog-placeholder.svg'} alt={post.title} fill sizes="800px" className="object-cover" />
          </div>

          <div className="mt-8 whitespace-pre-line text-base leading-relaxed text-foreground">
            {post.content}
          </div>
        </Reveal>
      </Container>
    </article>
  );
}
