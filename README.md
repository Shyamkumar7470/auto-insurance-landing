# Auto Insurance Landing Page (Next.js 15 · App Router · TypeScript · Tailwind)

Single conversion goal: a phone call. Every call button reads the number from `lib/config.ts`,
which reads `.env.local`.

## Quick start

```bash
npm install
cp .env.example .env.local     # then edit the values
npm run dev                    # http://localhost:3000
npm run build && npm run start # production check
```

Starting from scratch instead of this zip:

```bash
npx create-next-app@15 auto-insurance --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
cd auto-insurance
npm install lucide-react
```

(then copy the files from this project over the generated ones; this project pins Tailwind 3.4
because it uses `tailwind.config.ts` with custom tokens.)

## Change the phone number

1. Edit `NEXT_PUBLIC_PHONE_NUMBER` in `.env.local` (format `+1XXXXXXXXXX`).
2. Restart `npm run dev`, or redeploy. `NEXT_PUBLIC_*` values are baked in at build time.
3. On Vercel: Project > Settings > Environment Variables > edit the value > Redeploy.

The display format `(555) 123-4567`, the `tel:` links, JSON-LD `telephone`, and ARIA labels all update
automatically. No component hardcodes the number.

## Deploy to Vercel

```bash
git init && git add . && git commit -m "Initial landing page"
# push to GitHub, then at vercel.com/new import the repo (framework: Next.js, no config needed)
```

Add these environment variables (Production, and Preview if you like):
`NEXT_PUBLIC_PHONE_NUMBER`, `NEXT_PUBLIC_SITE_URL` (your final https URL, no trailing slash),
`NEXT_PUBLIC_AGENCY_NAME`, `NEXT_PUBLIC_LICENSE_NUMBER`, plus optional `NEXT_PUBLIC_GTM_ID`,
`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_FB_PIXEL_ID`, `NEXT_PUBLIC_GSC_VERIFICATION`.
Then add your domain under Settings > Domains and redeploy so canonical URLs and the sitemap use it.

## Before you launch (required)

- [ ] Replace placeholder testimonials in `lib/testimonials.ts` with real, permissioned reviews.
- [ ] Verify each state's minimum coverage in `lib/states.ts`, then set `verified: true`.
- [ ] Replace `public/logo.svg`, `app/icon.svg`, and `app/apple-icon.tsx` with your branding.
- [ ] Have an attorney review `app/privacy/page.tsx` and `app/terms/page.tsx`.
- [ ] Review all copy and claims against your state insurance advertising rules and your carrier
      relationships (the page does not claim specific carriers, savings amounts, or ratings).
- [ ] If you run paid ads with call tracking numbers, confirm TCPA and call-recording consent rules
      for the states you serve.

## Post-launch SEO checklist

1. **Google Search Console**: add the property (URL prefix), verify (set `NEXT_PUBLIC_GSC_VERIFICATION`
   or use DNS), then Sitemaps > submit `https://YOURDOMAIN/sitemap.xml`. Use URL Inspection >
   Request indexing for the home page and a few state pages.
2. **Rich Results Test** (search.google.com/test/rich-results): test the home page (FAQ) and a state
   page (breadcrumbs). Also validate at validator.schema.org.
3. **PageSpeed Insights** (pagespeed.web.dev): test mobile for `/` and one state page. Target 95+ on
   Performance, Accessibility, Best Practices, SEO. Re-test after adding analytics tags.
4. **Google Business Profile**: create or claim your profile, use the same agency name, phone, and
   website URL, choose "Insurance agency", add hours, services, and photos. Keep NAP details
   consistent everywhere.
5. Check Search Console > Pages and Enhancements weekly for the first month; fix any "Crawled, not indexed".
6. Add real reviews, then build local citations (Yelp, BBB, state agent directories) with identical NAP.
7. Confirm call tracking: in GTM/GA4 check the `call_button_clicked` event fires with a `location`
   parameter (`hero`, `header`, `mobile_bar`, `final_cta`, ...), and mark it as a conversion.
8. Add content over time (one page per state or city you actually serve, plus helpful guides) and
   link them from the home page and footer.

## How the pieces fit

- `lib/config.ts` single source of truth for phone, site URL, agency name, license number.
- `lib/faq-data.ts` powers both the visible FAQ and the FAQPage JSON-LD.
- `lib/states.ts` powers state pages, sitemap, footer links, and home page state links.
- Client components: `CallButton`, `FAQ`, `MobileCallBar` only.
