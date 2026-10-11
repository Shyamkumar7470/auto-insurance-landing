import { ImageResponse } from 'next/og';
import { AGENCY_NAME } from './config';

export const OG_SIZE = { width: 1200, height: 630 };

/** Shared by app/opengraph-image.tsx and app/twitter-image.tsx. */
export function renderOgImage(headline: string, sub: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #0B2250 0%, #1F52B8 100%)',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 34, fontWeight: 700 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              background: '#FF8A1F',
              marginRight: 16,
            }}
          />
          {AGENCY_NAME}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.5 }}>{headline}</div>
          <div style={{ fontSize: 36, marginTop: 24, color: '#DCE8FD' }}>{sub}</div>
        </div>
        <div
          style={{
            display: 'flex',
            alignSelf: 'flex-start',
            background: '#FF8A1F',
            color: '#0B2250',
            fontSize: 38,
            fontWeight: 800,
            padding: '18px 36px',
            borderRadius: 999,
          }}
        >
          Call Now to Check Your Rates
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
