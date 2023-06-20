/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "50": "#333333",
        "100": "#000",
      },
      white: {
        "50": "#A09FAF",
        "100": "#fff",
      },
      purple: {
        "50": "rgba(233, 70, 218, 0.3)",
        "100": "#C004DE",
      },
      green: {
        "50": "#158135",
        "100": "#5CBF3B",
      },
    },
    fontFamily: {
      'montserat': ["'Montserrat', sans-serif"],
      'lato': ["'Lato', sans-serif"],
      'mulish': ["'Mulish', sans-serif"],
      'oswald': ["'Oswald', sans-serif"]
    }
  },
  plugins: [],
}
