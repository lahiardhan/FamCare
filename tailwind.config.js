/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '550px',
      sm: '650px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },
    extend: {
      colors: {
        purple: { DEFAULT: '#6248C2' },
        white: '#FCFCFC',
        black: '#071525',
        'light-blue': '#F1F3FA',
        'primary-color': '#28315E',
        'secondary-color': '#15B39F',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
};
