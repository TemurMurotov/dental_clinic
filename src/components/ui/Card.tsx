import { ReactNode } from 'react';
import clsx from 'clsx';

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-border bg-surface-elevated shadow-sm transition-shadow duration-300 hover:shadow-xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
