/**
 * Call tracking. Pushes to dataLayer (GTM) and calls gtag / fbq if they exist.
 * Safe on the server and when no analytics scripts are loaded.
 */

type DataLayerEvent = { event: string; [key: string]: unknown };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackCall(location: string): void {
  if (typeof window === 'undefined') return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'call_button_clicked', location });
  } catch {
    /* never block the call */
  }

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'call_button_clicked', { location });
    }
  } catch {
    /* ignore */
  }

  try {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Contact', { location });
    }
  } catch {
    /* ignore */
  }
}
