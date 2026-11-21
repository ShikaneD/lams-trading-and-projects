/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ink matches the logo's own background so it sits seamlessly on dark areas
        ink: { DEFAULT: '#1a1a1a', soft: '#242424', line: '#3a3a3a' },
        gold: { DEFAULT: '#c9a24b', light: '#e2c27a', dark: '#8a6a1f' },
        bone: { DEFAULT: '#f6f2ea', dark: '#e9e2d3' },
        stone: { DEFAULT: '#6f685f', light: '#a8a196' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
