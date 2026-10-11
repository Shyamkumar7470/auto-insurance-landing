import type { Metadata } from 'next';
import Link from 'next/link';
import CallButton from '@/components/CallButton';
import { STATES } from '@/lib/states';

export const metadata: Metadata = {
  title: 'Page Not Found | Auto Insurance Quotes',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="nf-heading" className="bg-surface-alt py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h1 id="nf-heading" className="text-4xl font-extrabold tracking-tight text-brand-900">
          We could not find that page
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          The link may be old or mistyped. You can still get your auto insurance rates with one quick call.
        </p>
        <div className="mt-8">
          <CallButton location="not_found" />
        </div>
        <p className="mt-10 text-base text-ink-soft">
          <Link href="/" className="font-semibold text-brand-700 underline underline-offset-4">
            Go to the home page
          </Link>{' '}
          or pick your state:
        </p>
        <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1">
          {STATES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/auto-insurance/${s.slug}`}
                className="inline-block py-1 font-semibold text-brand-700 underline underline-offset-4"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
