import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import Coverage from '@/components/Coverage';
import FinalCTA from '@/components/FinalCTA';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, type Crumb } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { getStateBySlug, STATES, type StateInfo } from '@/lib/states';

type Params = { state: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return STATES.map((s) => ({ state: s.slug }));
}

function stateCopy(s: StateInfo) {
  return {
    title: `Cheap Car Insurance in ${s.name} | Free Phone Quotes`,
    description: `Compare cheap car insurance in ${s.name}. Call now for a free ${s.abbr} auto insurance rate check, see state minimum coverage, and talk to a licensed agent today.`,
    h1: `Cheap Car Insurance in ${s.name}: Call for Free Auto Insurance Quotes`,
    sub: `Looking for auto insurance quotes in ${s.name}? Call a licensed agent to compare car insurance rates, check ${s.abbr} coverage requirements, and find cheap auto insurance for your car and driving record. It is free and there is no obligation.`,
  };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { state } = await params;
  const s = getStateBySlug(state);
  if (!s) return {};
  const c = stateCopy(s);
  return pageMetadata({ title: c.title, description: c.description, path: `/auto-insurance/${s.slug}` });
}

export default async function StatePage({ params }: { params: Promise<Params> }) {
  const { state } = await params;
  const s = getStateBySlug(state);
  if (!s) notFound();

  const c = stateCopy(s);
  // Same list drives the visible breadcrumbs and the BreadcrumbList JSON-LD.
  const crumbs: Crumb[] = [
    { name: 'Home', href: '/' },
    { name: `Auto Insurance in ${s.name}`, href: `/auto-insurance/${s.slug}` },
  ];
  const others = STATES.filter((o) => o.slug !== s.slug);

  return (
    <>
      <Hero
        h1={c.h1}
        sub={c.sub}
        ctaLocation={`state_${s.abbr.toLowerCase()}_hero`}
        top={<Breadcrumbs crumbs={crumbs} />}
      />

      <section aria-labelledby="state-intro-heading" className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="state-intro-heading" className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            Auto insurance rates in {s.name}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{s.intro}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Your {s.name} car insurance rate depends on your ZIP code, age, driving history, vehicle, and the coverage
            you choose. Because every insurer weighs those factors differently, the cheapest option for your neighbor
            may not be the cheapest for you. A quick call lets an agent compare auto insurance for your exact
            situation.
          </p>
          <div className="mt-8">
            <CallButton location={`state_${s.abbr.toLowerCase()}_intro`} label={`Call for ${s.name} Rates`} />
          </div>
        </div>
      </section>

      <section aria-labelledby="state-min-heading" className="bg-surface-alt py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="state-min-heading" className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            {s.name} minimum auto insurance requirements
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl bg-white ring-1 ring-brand-100">
            <table className="w-full min-w-[20rem] text-left text-base">
              <caption className="sr-only">Typical minimum auto insurance coverage in {s.name}</caption>
              <thead className="bg-brand-50 text-brand-900">
                <tr>
                  <th scope="col" className="px-5 py-3 font-bold">
                    Coverage
                  </th>
                  <th scope="col" className="px-5 py-3 font-bold">
                    Minimum
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {s.minimums.map((m) => (
                  <tr key={m.label}>
                    <th scope="row" className="px-5 py-3 font-semibold text-ink">
                      {m.label}
                    </th>
                    <td className="px-5 py-3 text-ink-soft">{m.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {s.note && <p className="mt-4 text-base text-ink-soft">{s.note}</p>}
          {!s.verified && (
            <p className="mt-4 rounded-lg border-l-4 border-cta-active bg-white px-4 py-3 text-base font-semibold text-ink">
              Verify: minimum requirements change. Confirm current {s.name} limits with the state Department of
              Insurance or DMV before you buy. Minimum limits are low, and many drivers choose more protection.
            </p>
          )}
        </div>
      </section>

      <Coverage />

      <section aria-labelledby="other-states-heading" className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <h2 id="other-states-heading" className="text-2xl font-extrabold tracking-tight text-brand-900 sm:text-3xl">
            Compare auto insurance in other states
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/auto-insurance/${o.slug}`}
                  className="inline-block py-1 text-base font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  Cheap car insurance in {o.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-ink-soft">
            <Link href="/" className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900">
              Back to the home page for nationwide auto insurance quotes
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA location={`state_${s.abbr.toLowerCase()}_final`} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
