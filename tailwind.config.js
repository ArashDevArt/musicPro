module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],  theme: {
    extend: { 
      boxShadow: {
        DEFAULT: '0px 0px 30px rgba(0, 0, 0, 0.06)',
      } , 
    },
    colors: {
      'bluee' : '#2B61D1',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    fontFamily: {
      sans: ['Vazirmatn', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}