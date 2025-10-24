/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neue: ['var(--font-neue)', 'sans-serif'],
        uxum: ['var(--font-uxum)', 'sans-serif'],
      },
    },
  },
  safelist: ['font-neue', 'font-uxum'],
  plugins: [],
};
