import { OG_SIZE, renderOgImage } from '@/lib/og';
import { getStateBySlug, STATES } from '@/lib/states';

export const alt = 'Cheap car insurance quotes by state: call for a free rate check';
export const size = OG_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const name = getStateBySlug(state)?.name ?? 'Your State';
  return renderOgImage(`Cheap Car Insurance in ${name}`, 'Call for a free auto insurance rate check.');
}
