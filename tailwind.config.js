/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['poppins'],
        titalium: ['titalium'],

      },
      colors:{
        'primary':'rgba(255,137,126,1)',
        'secondary':"rgba(1,26,81,0.82)"
      }
    },
  },
  plugins: [],
}