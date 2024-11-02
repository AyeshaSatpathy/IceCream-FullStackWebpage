/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        muthiara: ['"Muthiara -Demo Version-"', 'sans-serif'],
      },

      container: {
        center: true,
        padding: {
        DEFAULT: "1 rem", 
        sm: "2rem", 
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}

