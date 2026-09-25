import type { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { routing } from '@/i18n/routing';
import { services } from '@/content/services';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

const staticPaths = [
  '',
  '/about',
  '/services',
  '/before-after',
  '/reviews',
  '/blog',
  '/booking',
  '/contact',
  '/faq',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({ url: `${BASE_URL}/${locale}${path}`, lastModified: new Date() });
    }
    for (const service of services) {
      entries.push({
        url: `${BASE_URL}/${locale}/services/${service.category}/${service.slug}`,
        lastModified: new Date(),
      });
    }
  }

  const posts = await prisma.blogPost.findMany({ where: { published: true } });
  for (const post of posts) {
    entries.push({ url: `${BASE_URL}/${post.locale}/blog/${post.slug}`, lastModified: post.updatedAt });
  }

  return entries;
}
