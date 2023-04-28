/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        lightWhite: "#f2f2f2",
        blue: "#0057ff",
      },
      screens: {
        tablet: "481px",
        laptop: "769px",
        desktop: "1025px",
      },
    },
  },
  plugins: [],
};
