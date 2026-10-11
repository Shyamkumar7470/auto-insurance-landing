/**
 * PLACEHOLDER testimonials. Replace with real, permissioned customer reviews before launch.
 * Publishing invented reviews can violate FTC rules and state insurance advertising laws.
 */
export type Testimonial = { quote: string; name: string; location: string; placeholder: boolean };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'I made one call and the agent walked me through my options. It was easy and I did not have to fill out a single online form.',
    name: 'Customer Name',
    location: 'City, ST',
    placeholder: true,
  },
  {
    quote: 'After a ticket I was worried about my car insurance rates. The agent explained everything in plain English and found a plan that fit my budget.',
    name: 'Customer Name',
    location: 'City, ST',
    placeholder: true,
  },
  {
    quote: 'As a new family we needed more coverage without a huge bill. The call took a few minutes and the agent answered every question.',
    name: 'Customer Name',
    location: 'City, ST',
    placeholder: true,
  },
];
