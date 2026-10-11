import { BadgeDollarSign, GitCompareArrows, Headset, ShieldCheck, SlidersHorizontal, Zap } from 'lucide-react';

const ITEMS = [
  {
    icon: BadgeDollarSign,
    title: 'Free car insurance rate check',
    text: 'Find out what you could pay for auto insurance with no cost and no obligation to buy.',
  },
  {
    icon: GitCompareArrows,
    title: 'Compare auto insurance in one call',
    text: 'Skip the hours of online forms. An agent compares your options while you stay on the line.',
  },
  {
    icon: Headset,
    title: 'Real, licensed agents',
    text: 'Talk to a person who can explain your coverage in plain English and answer your questions.',
  },
  {
    icon: Zap,
    title: 'Fast answers',
    text: 'Most callers have their auto insurance quotes in a matter of minutes, not days.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Coverage that fits your budget',
    text: 'Choose the limits and deductibles that make sense for you, from state minimums to full coverage.',
  },
  {
    icon: ShieldCheck,
    title: 'Help for every driver',
    text: 'New drivers, high-risk drivers, seniors, and families can all get help finding cheap car insurance.',
  },
];

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <h2 id="benefits-heading" className="max-w-[24ch] text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
          Why drivers call us for cheap car insurance
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-2xl border border-brand-100 bg-surface-alt p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-800 text-white">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-brand-900">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
