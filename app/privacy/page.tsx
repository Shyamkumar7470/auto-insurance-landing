import type { Metadata } from 'next';
import { AGENCY_NAME, LICENSE_NUMBER, PHONE_DISPLAY } from '@/lib/config';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy | Auto Insurance Quotes',
  description: 'How we collect, use, and protect your information when you visit our site or call us.',
  path: '/privacy',
});

/** PLACEHOLDER. Replace with a Privacy Policy reviewed by an attorney licensed in your state. */
export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900">Privacy Policy</h1>
        <p className="mt-4 rounded-lg border-l-4 border-cta-active bg-surface-alt px-4 py-3 text-base font-semibold">
          Placeholder: replace this page with your attorney-reviewed Privacy Policy before launch.
        </p>
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink-soft">
          <p>
            {AGENCY_NAME} ({LICENSE_NUMBER}) operates this website. Questions? Call {PHONE_DISPLAY}.
          </p>
          <p>
            Calls may be recorded for quality and training purposes. Rates vary by state, driver profile, and coverage.
            Savings are not guaranteed. Not all applicants will qualify.
          </p>
        </div>
      </div>
    </section>
  );
}
