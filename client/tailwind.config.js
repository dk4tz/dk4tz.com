/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tailwind-datepicker-react/dist/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        ct_overpass: ['Overpass', 'sans-serif'],
        ct_sourceSansPro: ['"Source Sans Pro"', 'sans-serif'],
      },
      colors: {
        'ct_ui-02': '#F5F7FB',
        'ct_ui-03': '#E0E3E6',
        'ct_card-body-white': '#EEEEEE',
        'ct_text-01': '#1A2834',
        'ct_text-02': '#5D6871',
        'ct_text-03': '#CED1D4',
        'ct_gold-01': '#FFCB05',
        'ct_gold-02': '#F7CD46',
        'ct_support-01': '#CE3336',
        'ct_support-02': '#6DA530',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
