import CallButton from './CallButton';

export default function FinalCTA({ location = 'final_cta' }: { location?: string }) {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-brand-900 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 id="final-cta-heading" className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ready to see your car insurance rates?
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-lg leading-relaxed text-brand-100">
          One free phone call is all it takes to compare auto insurance and find out if you could save.
        </p>
        <div className="mt-8" data-primary-cta>
          <CallButton location={location} size="lg" showNumber pulse className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
