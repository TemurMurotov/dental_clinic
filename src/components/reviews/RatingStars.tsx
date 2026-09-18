import { Star } from 'lucide-react';
import clsx from 'clsx';

export function RatingStars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={clsx(i < rating ? 'fill-warning text-warning' : 'fill-border text-border')}
        />
      ))}
    </div>
  );
}
