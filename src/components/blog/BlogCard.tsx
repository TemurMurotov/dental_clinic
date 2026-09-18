import Image from 'next/image';
import { CalendarDays } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { BlogPost } from '@prisma/client';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group h-full overflow-hidden">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={post.coverImage || '/images/blog-placeholder.svg'}
            alt={post.title}
            fill
            sizes="400px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <Badge>{post.category}</Badge>
          <h3 className="mt-3 text-lg font-semibold text-foreground line-clamp-2">{post.title}</h3>
          <p className="mt-2 text-sm text-muted line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
            <CalendarDays size={14} />
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
        </div>
      </Card>
    </Link>
  );
}
