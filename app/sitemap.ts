import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { STATES } from '@/lib/states';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...STATES.map((s) => ({
      url: `${SITE_URL}/auto-insurance/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
