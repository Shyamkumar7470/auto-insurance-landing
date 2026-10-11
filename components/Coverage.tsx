const COVERAGES = [
  {
    title: 'Liability coverage',
    text: 'Pays for injuries and property damage you cause to others in an accident. Required in almost every state and the base of any auto insurance policy.',
  },
  {
    title: 'Collision coverage',
    text: 'Helps pay to repair or replace your own car after a crash, whether you hit another vehicle or an object, regardless of fault.',
  },
  {
    title: 'Comprehensive coverage',
    text: 'Covers theft, vandalism, hail, fire, flooding, and animal strikes. Often required if your car is financed or leased.',
  },
  {
    title: 'Uninsured motorist coverage',
    text: 'Protects you and your passengers if you are hit by a driver with no insurance or too little of it.',
  },
  {
    title: 'Personal injury protection (PIP)',
    text: 'Pays medical bills and, in some states, lost wages for you and your passengers no matter who caused the accident.',
  },
  {
    title: 'Gap coverage',
    text: 'If your car is totaled and you owe more than it is worth, gap insurance helps cover the difference on your loan or lease.',
  },
];

export default function Coverage() {
  return (
    <section aria-labelledby="coverage-heading" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <h2 id="coverage-heading" className="max-w-[26ch] text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
          Auto insurance coverage types we can quote
        </h2>
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          The right mix of car insurance coverage depends on your car, your budget, and your state. Ask your agent
          about any of these when you compare auto insurance.
        </p>
        <dl className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {COVERAGES.map((c) => (
            <div key={c.title} className="border-l-4 border-brand-500 pl-5">
              <dt>
                <h3 className="text-xl font-bold text-brand-900">{c.title}</h3>
              </dt>
              <dd className="mt-1.5 text-base leading-relaxed text-ink-soft">{c.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
