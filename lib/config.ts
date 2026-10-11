/**
 * Single source of truth for business details.
 * Edit values in .env.local (see .env.example). Never hardcode these elsewhere.
 *
 * NOTE: process.env.NEXT_PUBLIC_* must be referenced literally (not via a variable)
 * so Next.js can inline them into the client bundle at build time.
 */

const FALLBACK_PHONE_E164 = '+18005550123';
const FALLBACK_SITE_URL = 'http://localhost:3000';
const FALLBACK_AGENCY_NAME = 'Your Agency Name';
const FALLBACK_LICENSE = 'Lic. #0000000';

/** Accepts "+15551234567", "555-123-4567", "(555) 123 4567", "1 555 123 4567" and returns "+1XXXXXXXXXX". */
export function normalizePhoneToE164(raw: string | undefined | null): string {
  const digits = (raw ?? '').replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return FALLBACK_PHONE_E164;
}

/** "+15551234567" -> "(555) 123-4567". Falls back to the raw value if it is not a US number. */
export function formatPhoneDisplay(e164: string): string {
  const digits = e164.replace(/\D/g, '');
  const ten = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  if (ten.length !== 10) return e164;
  return `(${ten.slice(0, 3)}) ${ten.slice(3, 6)}-${ten.slice(6)}`;
}

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const url = explicit || (vercel ? `https://${vercel}` : FALLBACK_SITE_URL);
  return url.replace(/\/+$/, '');
}

export const PHONE_E164: string = normalizePhoneToE164(process.env.NEXT_PUBLIC_PHONE_NUMBER);
export const PHONE_DISPLAY: string = formatPhoneDisplay(PHONE_E164);
export const SITE_URL: string = resolveSiteUrl();
export const AGENCY_NAME: string = process.env.NEXT_PUBLIC_AGENCY_NAME?.trim() || FALLBACK_AGENCY_NAME;
export const LICENSE_NUMBER: string = process.env.NEXT_PUBLIC_LICENSE_NUMBER?.trim() || FALLBACK_LICENSE;

/** Optional integrations (all safe to leave empty). */
export const GTM_ID: string = process.env.NEXT_PUBLIC_GTM_ID?.trim() || '';
export const GA_ID: string = process.env.NEXT_PUBLIC_GA_ID?.trim() || '';
export const FB_PIXEL_ID: string = process.env.NEXT_PUBLIC_FB_PIXEL_ID?.trim() || '';
export const GSC_VERIFICATION: string = process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim() || '';
