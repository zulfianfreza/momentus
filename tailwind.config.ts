import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');
const svgToDataUri = require('mini-svg-data-uri');

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: '#840ED8',
          100: '#F4CDFD',
          200: '#E49DFB',
          300: '#CA6AF3',
          400: '#AD45E7',
          500: '#840ED8',
          600: '#660AB9',
          700: '#4C079B',
          800: '#36047D',
          900: '#260267',
        },
        secondary: {
          DEFAULT: '#e0f434',
          100: '#FCFED6',
          200: '#F8FDAD',
          300: '#F1FB84',
          400: '#EAF865',
          500: '#e0f434',
          600: '#BED126',
          700: '#9CAF1A',
          800: '#7C8D10',
          900: '#657509',
        },
        alt: {
          DEFAULT: '#e0f434',
          100: '#CFEAFE',
          200: '#A0D1FD',
          300: '#70B4FB',
          400: '#4D99F7',
          500: '#146EF2',
          600: '#0E55D0',
          700: '#0A3FAE',
          800: '#062C8C',
          900: '#031E74',
        },
        dark: {
          DEFAULT: '#e0f434',
          100: '#F1F1F3',
          200: '#E3E3E7',
          300: '#B4B4B9',
          400: '#6F6F73',
          500: '#151516',
          600: '#0F0F12',
          700: '#0A0A0F',
          800: '#06060C',
          900: '#04040A',
        },
        light: {
          DEFAULT: '#e0f434',
          100: '#FFFDF8',
          200: '#FFFBF1',
          300: '#FFF9EB',
          400: '#FFF7E6',
          500: '#fff4de',
          600: '#DBC6A2',
          700: '#B79A6F',
          800: '#937246',
          900: '#7A542A',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}

export default config;
