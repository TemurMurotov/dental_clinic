import { ReactNode } from 'react';
import clsx from 'clsx';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted text-balance">{subtitle}</p>}
    </div>
  );
}
