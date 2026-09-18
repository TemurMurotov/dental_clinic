import { ReactNode } from 'react';
import clsx from 'clsx';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary',
        className,
      )}
    >
      {children}
    </span>
  );
}
