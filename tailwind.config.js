/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'eerie': '#111111',
      'platinum': '#E9E4E0',
      'dslr': '#D03E16',
      'astro': '#CC2525',
      'film': '#FAB617',
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}