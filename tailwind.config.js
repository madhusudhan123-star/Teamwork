/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        spinStar: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
        'star-spin': 'spinStar 3s linear infinite'
      },
      fontFamily: {
        'bilbo-swash-caps': ['"Bilbo Swash Caps"', 'cursive'],
        'funnel-display': ['"Funnel Display"', 'sans-serif'],
        'libre-franklin': ['"Libre Franklin"', 'sans-serif'],
        'montserrat-alternates': ['"Montserrat Alternates"', 'sans-serif'],
        'nanum-myeongjo': ['"Nanum Myeongjo"', 'serif'],
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
        'oswald': ['"Oswald"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'sora': ['"Sora"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}