import CallButton from './CallButton';

const STEPS = [
  {
    title: 'Call',
    text: 'Tap the button to reach a licensed agent. Share a few details about your car, your driving record, and your ZIP code.',
  },
  {
    title: 'Compare',
    text: 'We compare auto insurance options and car insurance rates so you can see choices at different price points.',
  },
  {
    title: 'Save',
    text: 'Pick the coverage that fits and, if you qualify, start saving. There is no pressure and no obligation.',
  },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="bg-surface-alt py-14 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <h2 id="how-heading" className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
          How to compare auto insurance in 3 steps
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-4 md:flex-col">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cta text-2xl font-extrabold text-brand-950"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-2xl font-bold text-brand-900">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <CallButton location="how_it_works" />
        </div>
      </div>
    </section>
  );
}
