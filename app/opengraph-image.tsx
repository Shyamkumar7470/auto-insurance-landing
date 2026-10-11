import { OG_SIZE, renderOgImage } from '@/lib/og';

export const alt = 'Cheap auto insurance quotes: call for a free rate check';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage('Cheap Auto Insurance Quotes', 'Compare car insurance rates with one free call.');
}
