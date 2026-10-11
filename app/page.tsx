import Benefits from '@/components/Benefits';
import Coverage from '@/components/Coverage';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import JsonLd from '@/components/JsonLd';
import Testimonials from '@/components/Testimonials';
import WhoWeHelp from '@/components/WhoWeHelp';
import { faqSchema } from '@/lib/schema';
import { STATES } from '@/lib/states';
import Link from 'next/link';
import type { Metadata } from 'next';
import { HOME_DESCRIPTION, HOME_TITLE, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: '/' });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Coverage />
      <WhoWeHelp />
      <Testimonials />

      <section aria-labelledby="states-heading" className="bg-surface-alt py-14 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <h2 id="states-heading" className="max-w-[26ch] text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            Find auto insurance quotes in your state
          </h2>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
            Car insurance rates and minimum coverage rules change from state to state. Pick your state to see what is
            required and call for a free rate check.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {STATES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/auto-insurance/${s.slug}`}
                  className="flex min-h-[56px] items-center rounded-xl bg-white px-4 py-3 text-base font-bold text-brand-800 ring-1 ring-brand-100 hover:bg-brand-50 hover:ring-brand-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  Car insurance in {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection />
      <FinalCTA />
      <JsonLd data={faqSchema()} />
    </>
  );
}
