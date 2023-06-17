/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryDarkBlue: 'var(--primaryDarkBlue)',
        primaryRed: 'var(--primaryRed)',
        primaryWhite: 'var(--primaryWhite)',
        primaryGreishBlue: 'var(--primaryGreishBlue)',
        primarySemiDarkBlue: 'var(--primarySemiDarkBlue)',
      },
    },
  },
  plugins: [],
};
