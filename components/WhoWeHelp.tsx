const GROUPS = [
  {
    title: 'New drivers',
    text: 'No driving history yet? We help teens and first-time drivers find car insurance rates that will not break the budget.',
  },
  {
    title: 'High-risk drivers',
    text: 'Accidents, tickets, or a lapse in coverage? You still have options, and comparing matters even more.',
  },
  {
    title: 'Seniors',
    text: 'Ask about mature-driver discounts, low-mileage savings, and coverage that fits retirement budgets.',
  },
  {
    title: 'Families',
    text: 'Insuring multiple drivers and cars? An agent can look for multi-car and bundling discounts.',
  },
  {
    title: 'SR-22 insurance',
    text: 'Need an SR-22 or FR-44 filing? We can help you find coverage and get your paperwork filed.',
  },
];

export default function WhoWeHelp() {
  return (
    <section aria-labelledby="who-heading" className="bg-surface-alt py-14 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <h2 id="who-heading" className="max-w-[26ch] text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
          Auto insurance for every kind of driver
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <li key={g.title} className="rounded-2xl bg-white p-6 ring-1 ring-brand-100">
              <h3 className="text-xl font-bold text-brand-900">{g.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">{g.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
