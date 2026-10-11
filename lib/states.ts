/**
 * Top 10 state pages.
 *
 * IMPORTANT: every `minimums` entry is a PLACEHOLDER and must be verified against the
 * state DMV / Department of Insurance before launch. Requirements change often.
 * Set `verified: true` once you have checked a state (the page then drops the "verify" notice).
 */

export type StateInfo = {
  slug: string;
  abbr: string;
  name: string;
  /** Short local flavor used in the intro copy. Keep it factual and generic. */
  intro: string;
  minimums: { label: string; value: string }[];
  note?: string;
  verified: boolean;
};

export const STATES: StateInfo[] = [
  {
    slug: 'california',
    abbr: 'CA',
    name: 'California',
    intro:
      'From dense Los Angeles commutes to long Central Valley drives, California drivers face a wide range of risk, and that shows up in car insurance rates.',
    minimums: [
      { label: 'Bodily injury (per person / per accident)', value: '$30,000 / $60,000' },
      { label: 'Property damage', value: '$15,000' },
    ],
    note: 'California raised its minimum limits in 2025. Verify with the California Department of Insurance.',
    verified: false,
  },
  {
    slug: 'texas',
    abbr: 'TX',
    name: 'Texas',
    intro:
      'Texas is big, and so is the spread in auto insurance rates between cities like Houston, Dallas, Austin, and smaller towns.',
    minimums: [
      { label: 'Bodily injury (per person / per accident)', value: '$30,000 / $60,000' },
      { label: 'Property damage', value: '$25,000' },
    ],
    note: 'Often called 30/60/25 coverage.',
    verified: false,
  },
  {
    slug: 'florida',
    abbr: 'FL',
    name: 'Florida',
    intro:
      'Florida is a no-fault state with its own rules, and weather, traffic, and uninsured drivers all influence what Floridians pay.',
    minimums: [
      { label: 'Personal injury protection (PIP)', value: '$10,000' },
      { label: 'Property damage liability', value: '$10,000' },
    ],
    note: 'Bodily injury liability is not required for most drivers, but is strongly worth considering.',
    verified: false,
  },
  {
    slug: 'new-york',
    abbr: 'NY',
    name: 'New York',
    intro:
      'New York drivers, from New York City to upstate, deal with high claim costs and some of the most detailed coverage rules in the country.',
    minimums: [
      { label: 'Bodily injury (per person / per accident)', value: '$25,000 / $50,000' },
      { label: 'Property damage', value: '$10,000' },
      { label: 'Personal injury protection (PIP)', value: '$50,000' },
      { label: 'Uninsured motorist', value: '$25,000 / $50,000' },
    ],
    verified: false,
  },
  {
    slug: 'pennsylvania',
    abbr: 'PA',
    name: 'Pennsylvania',
    intro:
      'Pennsylvania lets drivers choose between full and limited tort, which can change both your price and your rights after an accident.',
    minimums: [
      { label: 'Bodily injury (per person / per accident)', value: '$15,000 / $30,000' },
      { label: 'Property damage', value: '$5,000' },
      { label: 'First-party medical benefits', value: '$5,000' },
    ],
    verified: false,
  },
  {
    slug: 'illinois',
    abbr: 'IL',
    name: 'Illinois',
    intro:
      'Whether you drive in Chicago or downstate, Illinois requires uninsured motorist protection on top of standard liability coverage.',
    minimums: [
      { label: 'Bodily injury (per person / per accident)', value: '$25,000 / $50,000' },
      { label: 'Property damage', value: '$20,000' },
      { label: 'Uninsured motorist', value: '$25,000 / $50,000' },
    ],
    verified: false,
  },
  {
    slug: 'ohio',
    abbr: 'OH',
    name: 'Ohio',
    intro:
      'Ohio drivers in Columbus, Cleveland, Cincinnati, and rural counties can see noticeably different car insurance rates for the same coverage.',
    minimums: [
      { label: 'Bodily injury (per person / per accident)', value: '$25,000 / $50,000' },
      { label: 'Property damage', value: '$25,000' },
    ],
    verified: false,
  },
  {
    slug: 'georgia',
    abbr: 'GA',
    name: 'Georgia',
    intro:
      'Atlanta traffic and growing suburbs mean Georgia rates can swing a lot by ZIP code, which makes comparing auto insurance worthwhile.',
    minimums: [
      { label: 'Bodily injury (per person / per accident)', value: '$25,000 / $50,000' },
      { label: 'Property damage', value: '$25,000' },
    ],
    verified: false,
  },
  {
    slug: 'north-carolina',
    abbr: 'NC',
    name: 'North Carolina',
    intro:
      'North Carolina uses a safe-driver incentive plan that ties your premium to tickets and at-fault accidents, so your record matters here.',
    minimums: [
      { label: 'Bodily injury (per person / per accident)', value: '$30,000 / $60,000' },
      { label: 'Property damage', value: '$25,000' },
      { label: 'Uninsured/underinsured motorist', value: '$30,000 / $60,000 / $25,000' },
    ],
    verified: false,
  },
  {
    slug: 'michigan',
    abbr: 'MI',
    name: 'Michigan',
    intro:
      'Michigan reformed its no-fault system, giving drivers more choices on personal injury protection, so coverage decisions matter more than ever.',
    minimums: [
      { label: 'Bodily injury (per person / per accident)', value: '$50,000 / $100,000' },
      { label: 'Property damage', value: '$10,000' },
      { label: 'Personal injury protection (PIP)', value: 'Choice of levels (verify)' },
      { label: 'Property protection insurance (PPI)', value: '$1,000,000' },
    ],
    verified: false,
  },
];

export function getStateBySlug(slug: string): StateInfo | undefined {
  return STATES.find((s) => s.slug === slug);
}
