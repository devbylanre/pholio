/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Inter Tight, Helvetica, Arial, sans-serif',
      },
      boxShadow: {
        light: '0 0 25px 1px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
