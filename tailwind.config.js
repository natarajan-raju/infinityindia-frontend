/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./src/components/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto','Raleway','Outfit','sans-serif'],

        
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

