import { FAQS } from '@/lib/faq-data';
import FAQ from './FAQ';

/** Server wrapper so the heading ships as static HTML; only the accordion is a client component. */
export default function FAQSection() {
  return (
    <section aria-labelledby="faq-heading" className="bg-surface-alt py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="faq-heading" className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
          Car insurance questions, answered
        </h2>
        <div className="mt-8">
          <FAQ items={FAQS} />
        </div>
      </div>
    </section>
  );
}
