import type { MetadataRoute } from 'next';
import { AGENCY_NAME } from '@/lib/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${AGENCY_NAME} | Auto Insurance Quotes`,
    short_name: AGENCY_NAME,
    description: 'Call for a free auto insurance rate check.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#0B2250',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
