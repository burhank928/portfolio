import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0d',
        surface: '#111111',
        'surface-elevated': '#161616',
        border: {
          DEFAULT: '#1c1c1c',
          strong: '#2a2a2a',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#888888',
          muted: '#555555',
          faint: '#333333',
        },
        accent: {
          green: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      fontSize: {
        'hero-name': ['clamp(34px, 9vw, 52px)', { lineHeight: '1.1', letterSpacing: '-1px', fontWeight: '500' }],
        'section-label': ['9px', { lineHeight: '1.4', letterSpacing: '2px', fontWeight: '500' }],
        body: ['13px', { lineHeight: '1.7' }],
      },
      spacing: {
        'section-x': '64px',
        'section-x-sm': '24px',
        'section-y': '48px',
        'section-y-sm': '32px',
        'section-gap': '24px',
      },
      borderRadius: {
        card: '8px',
        button: '6px',
        pill: '3px',
        badge: '100px',
      },
    },
  },
  plugins: [],
};

export default config;
