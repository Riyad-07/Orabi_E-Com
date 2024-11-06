/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'DM': ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#262626',
        'second': '#767676',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '30': '30px',
      }
    },
  },
  plugins: [],
}