import { AGENCY_NAME, PHONE_E164, SITE_URL } from './config';
import { FAQS } from './faq-data';

export function agencySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': `${SITE_URL}/#agency`,
    name: AGENCY_NAME,
    url: SITE_URL,
    telephone: PHONE_E164,
    areaServed: 'US',
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}/opengraph-image`,
    description:
      'Call for a free auto insurance rate check. Compare car insurance rates and get help finding cheap auto insurance for your state and driving profile.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE_E164,
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: AGENCY_NAME,
    url: SITE_URL,
    inLanguage: 'en-US',
    publisher: { '@id': `${SITE_URL}/#agency` },
  };
}

/** Built from the same FAQS array that renders the visible accordion. */
export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href}`,
    })),
  };
}
