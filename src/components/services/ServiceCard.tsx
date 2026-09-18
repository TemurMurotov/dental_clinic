import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Card } from '@/components/ui/Card';
import type { Service } from '@/content/services';
import type { Locale } from '@/content/site-config';

export function ServiceCard({ service, locale }: { service: Service; locale: Locale }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Stethoscope;

  return (
    <Link href={`/services/${service.category}/${service.slug}`}>
      <Card className="group h-full p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <Icon size={22} />
        </div>
        <h3 className="mt-4 font-semibold text-foreground">{service.title[locale]}</h3>
        <p className="mt-2 text-sm text-muted line-clamp-2">{service.shortDescription[locale]}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </Card>
    </Link>
  );
}
