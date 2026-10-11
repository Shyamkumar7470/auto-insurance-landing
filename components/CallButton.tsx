'use client';

import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_E164 } from '@/lib/config';
import { trackCall } from '@/lib/analytics';

type Props = {
  /** Where the button sits, sent to analytics (e.g. "hero", "header", "mobile_bar"). */
  location: string;
  label?: string;
  /** Show the formatted phone number under the label. */
  showNumber?: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** "pulse" adds the subtle attention ring. Disabled automatically for reduced motion. */
  pulse?: boolean;
  className?: string;
};

const SIZES = {
  sm: 'min-h-[44px] px-4 text-base gap-2',
  md: 'min-h-[52px] px-6 text-lg gap-3',
  lg: 'min-h-[64px] px-7 text-xl sm:text-2xl gap-3',
} as const;

export default function CallButton({
  location,
  label = 'Call Now to Check Your Rates',
  showNumber = false,
  size = 'md',
  pulse = false,
  className = '',
}: Props) {
  return (
    <a
      href={`tel:${PHONE_E164}`}
      aria-label={`${label} at ${PHONE_DISPLAY}`}
      onClick={() => trackCall(location)}
      className={[
        'inline-flex items-center justify-center rounded-full bg-cta font-extrabold text-brand-950',
        'transition-colors hover:bg-cta-hover active:bg-cta-active',
        'focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:ring-4 focus-visible:ring-brand-950',
        pulse ? 'motion-safe:animate-call-pulse' : '',
        SIZES[size],
        className,
      ].join(' ')}
    >
      <Phone aria-hidden="true" className="h-[1.1em] w-[1.1em] shrink-0" strokeWidth={2.75} />
      <span className="flex flex-col items-start text-left leading-tight">
        <span>{label}</span>
        {showNumber && (
          <span className="text-[0.8em] font-bold tracking-wide text-brand-900">{PHONE_DISPLAY}</span>
        )}
      </span>
    </a>
  );
}
