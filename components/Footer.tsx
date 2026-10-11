import Link from 'next/link';
import { AGENCY_NAME, LICENSE_NUMBER, PHONE_DISPLAY, PHONE_E164 } from '@/lib/config';
import { STATES } from '@/lib/states';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-950 pb-[calc(5rem+env(safe-area-inset-bottom))] text-brand-100 md:pb-0">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xl font-extrabold text-white">{AGENCY_NAME}</p>
            <p className="mt-1 text-base">{LICENSE_NUMBER}</p>
            <p className="mt-4 text-base">
              Call us:{' '}
              <a
                href={`tel:${PHONE_E164}`}
                className="font-bold text-white underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="mt-2 text-sm">Calls may be recorded for quality and training purposes.</p>
          </div>

          <nav aria-label="Auto insurance by state">
            <h2 className="text-lg font-bold text-white">Auto insurance by state</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
              {STATES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/auto-insurance/${s.slug}`}
                    className="inline-block py-1 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Car insurance in {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-brand-800 pt-6 text-sm leading-relaxed">
          Rates vary by state, driver profile, and coverage. Savings are not guaranteed. Not all applicants will qualify.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm">
          <p>
            &copy; {year} {AGENCY_NAME}. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex gap-5">
              <li>
                <Link href="/privacy" className="py-1 underline underline-offset-4 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="py-1 underline underline-offset-4 hover:text-white">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
