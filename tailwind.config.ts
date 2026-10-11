import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Trust blue scale (navy -> sky). All text/background pairs used meet WCAG AA.
        brand: {
          50: '#EFF5FF',
          100: '#DCE8FD',
          200: '#BCD2FA',
          300: '#8DB3F5',
          400: '#5A8DEB',
          500: '#2F6BDB',
          600: '#1F52B8',
          700: '#183F8F',
          800: '#12306E',
          900: '#0B2250',
          950: '#071636',
        },
        // Call-to-action orange. Use navy text on it (contrast ~7:1).
        cta: {
          DEFAULT: '#FF8A1F',
          hover: '#FF9D44',
          active: '#F07800',
          ring: '#FFC58A',
        },
        ink: {
          DEFAULT: '#0F1B33',
          soft: '#3D4A63',
          muted: '#56627A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F4F7FC',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        callPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(255,138,31,0.55)' },
          '70%': { boxShadow: '0 0 0 14px rgba(255,138,31,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255,138,31,0)' },
        },
      },
      animation: {
        'call-pulse': 'callPulse 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
