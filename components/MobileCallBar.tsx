'use client';

import { useEffect, useState } from 'react';
import CallButton from './CallButton';

/**
 * Fixed bottom call bar on phones. The layout reserves matching bottom padding,
 * so showing/hiding it never shifts content. It tucks away while a primary
 * call-to-action (marked with data-primary-cta) is already on screen.
 */
export default function MobileCallBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-primary-cta]'));
    if (targets.length === 0 || typeof IntersectionObserver === 'undefined') return;

    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setHidden(visible.size > 0);
      },
      { threshold: 0.6 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={[
        'fixed inset-x-0 bottom-0 z-50 border-t border-brand-100 bg-white/95 px-4 pt-3 backdrop-blur md:hidden',
        'pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-200 motion-reduce:transition-none',
        hidden ? 'translate-y-full' : 'translate-y-0',
      ].join(' ')}
      aria-hidden={hidden}
      {...(hidden ? { inert: true } : {})}
    >
      <CallButton location="mobile_bar" size="md" showNumber className="w-full" />
    </div>
  );
}
