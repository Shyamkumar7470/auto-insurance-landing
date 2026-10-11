import Image from 'next/image';
import { BadgeCheck, Clock, ShieldCheck } from 'lucide-react';
import CallButton from './CallButton';

type Props = {
  h1?: string;
  sub?: string;
  /** Rendered above the H1 (e.g. breadcrumbs on state pages). */
  top?: React.ReactNode;
  ctaLocation?: string;
};

const DEFAULT_H1 = 'Cheap Auto Insurance Quotes in the USA: Call for Your Free Rate Check';
const DEFAULT_SUB =
  'Looking for cheap car insurance? Call a licensed agent to compare auto insurance and see car insurance rates for your state, your vehicle, and your driving record. Searching for auto insurance near me? Our agents help drivers in every state, with no online forms to fill out.';

const BADGES = [
  { icon: BadgeCheck, text: 'Licensed insurance agents' },
  { icon: Clock, text: 'Most rate checks take minutes' },
  { icon: ShieldCheck, text: 'Free, no-obligation quotes' },
];

export default function Hero({ h1 = DEFAULT_H1, sub = DEFAULT_SUB, top, ctaLocation = 'hero' }: Props) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-gradient-to-b from-brand-900 to-brand-700 text-white"
    >
      <div className="mx-auto grid max-w-content items-center gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-16">
        <div>
          {top && <div className="mb-5">{top}</div>}
          <h1
            id="hero-heading"
            className="text-balance text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
          >
            {h1}
          </h1>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-brand-50 sm:text-xl">{sub}</p>

          <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {BADGES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-base font-semibold">
                <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-cta" />
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-8" data-primary-cta>
            <CallButton location={ctaLocation} size="lg" showNumber pulse className="w-full sm:w-auto" />
            <p className="mt-3 text-sm text-brand-100">Free to call. Calls may be recorded.</p>
          </div>
        </div>

        {/* Reserve the exact aspect ratio (640x480) to avoid layout shift. */}
        <div className="mx-auto w-full max-w-md md:max-w-none">
          <Image
            src="/hero-car.svg"
            alt="Illustration of a family car protected by an auto insurance shield with a checkmark"
            width={640}
            height={480}
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
            className="h-auto w-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
