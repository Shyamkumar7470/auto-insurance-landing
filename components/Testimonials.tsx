import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/testimonials';

export default function Testimonials() {
  const showDevNote = process.env.NODE_ENV !== 'production' && TESTIMONIALS.some((t) => t.placeholder);

  return (
    <section aria-labelledby="testimonials-heading" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <h2 id="testimonials-heading" className="max-w-[26ch] text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
          What callers say about their rate check
        </h2>
        {showDevNote && (
          <p className="mt-4 rounded-lg bg-cta-ring/40 px-4 py-3 text-sm font-semibold text-brand-950">
            Dev note: these are placeholder testimonials (lib/testimonials.ts). Replace them with real,
            permissioned reviews before launch.
          </p>
        )}
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <li key={i}>
              <figure className="h-full rounded-2xl border border-brand-100 bg-surface-alt p-6">
                <div role="img" aria-label="5 out of 5 stars" className="flex gap-1 text-cta-active">
                  {Array.from({ length: 5 }).map((_, n) => (
                    <Star key={n} aria-hidden="true" className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-base font-bold text-brand-900">
                  {t.name}
                  <span className="block text-sm font-medium text-ink-muted">{t.location}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
