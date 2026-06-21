/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Every shade below is backed by a CSS variable (see src/index.css
        // :root vs .dark). That means dark mode flips automatically across
        // every existing `text-teal-700`, `bg-sand-50`, etc. utility in the
        // app — no need to add `dark:` variants one by one. In dark mode the
        // whole "teal" scale is remapped to a deep red/garnet palette, which
        // is the visual switch that powers the light/dark-red toggle.
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        teal: {
          50: 'rgb(var(--color-teal-50) / <alpha-value>)',
          100: 'rgb(var(--color-teal-100) / <alpha-value>)',
          200: 'rgb(var(--color-teal-200) / <alpha-value>)',
          300: 'rgb(var(--color-teal-300) / <alpha-value>)',
          400: 'rgb(var(--color-teal-400) / <alpha-value>)',
          500: 'rgb(var(--color-teal-500) / <alpha-value>)',
          600: 'rgb(var(--color-teal-600) / <alpha-value>)',
          700: 'rgb(var(--color-teal-700) / <alpha-value>)',
          800: 'rgb(var(--color-teal-800) / <alpha-value>)',
          900: 'rgb(var(--color-teal-900) / <alpha-value>)'
        },
        sand: {
          50: 'rgb(var(--color-sand-50) / <alpha-value>)',
          100: 'rgb(var(--color-sand-100) / <alpha-value>)',
          200: 'rgb(var(--color-sand-200) / <alpha-value>)'
        },
        gold: {
          400: 'rgb(var(--color-gold-400) / <alpha-value>)',
          500: 'rgb(var(--color-gold-500) / <alpha-value>)',
          600: 'rgb(var(--color-gold-600) / <alpha-value>)'
        },
        coral: {
          400: 'rgb(var(--color-coral-400) / <alpha-value>)',
          500: 'rgb(var(--color-coral-500) / <alpha-value>)'
        }
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', '"Noto Sans Ethiopic"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      borderRadius: {
        arch: '999px 999px 12px 12px'
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(15, 61, 56, 0.25)'
      }
    }
  },
  plugins: []
};
