import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** apple-touch-icon (180x180), generated at build time. Swap for your real logo PNG when ready. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#12306E',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 12.5l5 5L20 6.5"
            stroke="#FF8A1F"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
