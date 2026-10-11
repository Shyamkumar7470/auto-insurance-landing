import type { Metadata } from 'next';
import { AGENCY_NAME } from './config';

export const HOME_TITLE = 'Cheap Auto Insurance Quotes | Free Rate Check by Phone';
export const HOME_DESCRIPTION =
  'Compare auto insurance quotes and car insurance rates with one free call. Licensed agents help you find cheap car insurance fast. Call now to check your rates.';

type Args = { title: string; description: string; path: string };

/**
 * Per-page metadata: canonical, Open Graph and Twitter in one place.
 * (Next.js replaces, not merges, nested openGraph objects, so each page sets its own.)
 * Image comes from app/opengraph-image.tsx and app/twitter-image.tsx automatically.
 */
export function pageMetadata({ title, description, path }: Args): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: AGENCY_NAME,
      title,
      description,
      url: path,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}
