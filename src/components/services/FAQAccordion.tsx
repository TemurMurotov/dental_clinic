'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export interface FAQAccordionItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQAccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-foreground">{item.question}</span>
              <ChevronDown size={18} className={clsx('shrink-0 text-muted transition-transform', open && 'rotate-180')} />
            </button>
            <div
              className={clsx(
                'grid overflow-hidden px-5 text-sm text-muted transition-all duration-300',
                open ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
