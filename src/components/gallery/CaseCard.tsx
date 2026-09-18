import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import type { Case } from '@prisma/client';

export function CaseCard({ item }: { item: Case }) {
  return (
    <Card className="overflow-hidden p-4">
      <BeforeAfterSlider beforeImage={item.beforeImage} afterImage={item.afterImage} />
      <div className="mt-4">
        <Badge>{item.category}</Badge>
        <h3 className="mt-2 font-semibold text-foreground">{item.title}</h3>
        <p className="mt-1 text-sm text-muted">{item.description}</p>
      </div>
    </Card>
  );
}
