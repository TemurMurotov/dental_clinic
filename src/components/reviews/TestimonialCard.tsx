import { Quote, PlayCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { RatingStars } from './RatingStars';
import type { Testimonial } from '@prisma/client';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <Quote className="text-primary/30" size={28} />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">{testimonial.text}</p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <div>
          <div className="font-semibold text-foreground">{testimonial.patientName}</div>
          <RatingStars rating={testimonial.rating} />
        </div>
        {testimonial.videoUrl && (
          <a
            href={testimonial.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <PlayCircle size={18} /> Video
          </a>
        )}
      </div>
    </Card>
  );
}
