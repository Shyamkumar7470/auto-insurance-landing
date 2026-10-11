'use client';

import { useId, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/lib/faq-data';

/** Accessible accordion: heading > button[aria-expanded] controlling a labelled region. */
export default function FAQ({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(new Set());
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = items.length - 1;
    let target: number | null = null;
    if (e.key === 'ArrowDown') target = i === last ? 0 : i + 1;
    else if (e.key === 'ArrowUp') target = i === 0 ? last : i - 1;
    else if (e.key === 'Home') target = 0;
    else if (e.key === 'End') target = last;
    if (target !== null) {
      e.preventDefault();
      buttons.current[target]?.focus();
    }
  };

  return (
    <div className="divide-y divide-brand-100 rounded-2xl border border-brand-100 bg-white">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="flex min-h-[64px] w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-lg font-bold text-brand-900 hover:bg-brand-50 focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-brand-500"
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-6 w-6 shrink-0 text-brand-600 transition-transform motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="px-5 pb-5">
              <p className="max-w-[68ch] text-base leading-relaxed text-ink-soft">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
