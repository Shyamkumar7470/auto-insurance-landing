import type { Metadata, Viewport } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import { AGENCY_NAME, GSC_VERIFICATION, SITE_URL } from '@/lib/config';
import { agencySchema, websiteSchema } from '@/lib/schema';
import Analytics from '@/components/Analytics';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import MobileCallBar from '@/components/MobileCallBar';
import StickyHeader from '@/components/StickyHeader';

const sans = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: AGENCY_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  ...(GSC_VERIFICATION ? { verification: { google: GSC_VERIFICATION } } : {}),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B2250',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={sans.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-brand-900 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <StickyHeader />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
        <JsonLd data={agencySchema()} />
        <JsonLd data={websiteSchema()} />
        <Analytics />
      </body>
    </html>
  );
}
