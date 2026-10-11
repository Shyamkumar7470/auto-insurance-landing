import Image from 'next/image';
import Link from 'next/link';
import { AGENCY_NAME, PHONE_DISPLAY, PHONE_E164 } from '@/lib/config';
import CallButton from './CallButton';

export default function StickyHeader() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-brand-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex h-full max-w-content items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          aria-label={`${AGENCY_NAME} home`}
        >
          <Image src="/logo.svg" alt="" width={36} height={36} className="h-9 w-9 shrink-0" />
          <span className="truncate text-lg font-extrabold tracking-tight text-brand-900">{AGENCY_NAME}</span>
        </Link>

        <div className="flex shrink-0 items-center gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="hidden rounded-md text-lg font-bold text-brand-800 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-500 md:inline"
          >
            {PHONE_DISPLAY}
          </a>
          <CallButton location="header" label="Call Now" size="sm" />
        </div>
      </div>
    </header>
  );
}
