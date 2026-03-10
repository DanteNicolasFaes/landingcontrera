/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1C2B4A',
          dark: '#0F1923',
          mid: '#162238',
          light: '#2A3F6A',
        },
        gold: {
          DEFAULT: '#C8A96E',
          light: '#D9BE8A',
          muted: 'rgba(200,169,110,0.15)',
          subtle: 'rgba(200,169,110,0.08)',
        },
        cream: {
          DEFAULT: '#F7F4EE',
          dark: '#EDE9E0',
          mid: '#E5E0D5',
        },
        foreground: '#1A1A2E',
        muted: '#5A6475',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'ticker': 'scrollTicker 35s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(200, 169, 110, 0.2)',
        'gold-lg': '0 8px 40px rgba(200, 169, 110, 0.3)',
        'navy': '0 4px 24px rgba(28, 43, 74, 0.15)',
        'navy-lg': '0 12px 48px rgba(28, 43, 74, 0.2)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C8A96E 0%, #D9BE8A 50%, #E8D4A0 100%)',
        'gradient-navy': 'linear-gradient(135deg, #0F1923 0%, #1C2B4A 60%, #162238 100%)',
        'gradient-cream': 'linear-gradient(180deg, #F7F4EE 0%, #EDE9E0 100%)',
      },
    },
  },
  plugins: [],
};