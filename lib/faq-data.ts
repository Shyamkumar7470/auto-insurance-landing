export type FaqItem = { question: string; answer: string };

/** One list powers both the visible FAQ accordion and the FAQPage JSON-LD. */
export const FAQS: FaqItem[] = [
  {
    question: 'How much is car insurance per month?',
    answer:
      'There is no single price. Monthly car insurance rates depend on your state, ZIP code, age, driving record, vehicle, and the coverage you choose. Two drivers on the same street can pay very different amounts. The fastest way to find out what you would pay is a free rate check by phone, where an agent can compare auto insurance options for your exact situation.',
  },
  {
    question: 'What affects my auto insurance rate?',
    answer:
      'Insurers look at where you live, how much you drive, your driving history, your age and experience, the car you drive, your coverage limits and deductibles, and in most states your credit-based insurance score. Past claims, lapses in coverage, and recent violations can also raise car insurance rates.',
  },
  {
    question: 'Is full coverage worth it?',
    answer:
      'Full coverage usually means liability plus collision and comprehensive. It is often worth it if your car is newer, financed, or leased, or if you could not easily pay for repairs or a replacement out of pocket. For an older car with a low market value, you might choose to drop collision and save. An agent can run both options so you can compare the cost.',
  },
  {
    question: 'How can I lower my premium?',
    answer:
      'Compare auto insurance quotes every year, ask about discounts (multi-car, bundling, good driver, good student, safety features, low mileage), raise your deductible if you can afford it, keep continuous coverage, and drive safely. Reviewing your coverage with an agent can also catch protection you are paying for but do not need.',
  },
  {
    question: 'How do I get cheap car insurance?',
    answer:
      'Cheap car insurance usually comes from comparing several options and matching coverage to your needs instead of buying the first quote you see. Call for a free rate check and an agent will look at discounts you may qualify for and show you choices at different price points.',
  },
  {
    question: 'Can I get auto insurance if I have a bad driving record or need an SR-22?',
    answer:
      'Often, yes. Some insurers specialize in drivers with accidents, tickets, a DUI, or a lapse in coverage, and an agent can help you file an SR-22 or FR-44 where your state requires one. Rates are typically higher, so comparing is especially important.',
  },
  {
    question: 'What is the minimum auto insurance I need?',
    answer:
      'Minimum coverage is set by each state, and most states require at least liability insurance. Requirements change, so check your state page on this site and verify the current numbers with your state insurance department. Minimum limits are low, so many drivers choose higher limits for better protection.',
  },
  {
    question: 'Is there a cost or obligation to call for a quote?',
    answer:
      'No. A rate check is free and there is no obligation to buy. Calls may be recorded for quality and training purposes. Rates vary by state, driver profile, and coverage, and not all applicants will qualify.',
  },
];
