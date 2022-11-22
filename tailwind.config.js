/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#F96162',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.png')`
      }
    },
  },
  plugins: [],
};
