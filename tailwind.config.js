/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./home/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        first: "#6A1E55",
        second: "#3B1C32",
        third: "#1A1A1D",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
