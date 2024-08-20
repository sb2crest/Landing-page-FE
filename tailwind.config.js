/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neturalSilver: "#F5F7FA",
        neturalDGrey: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        naturalGrey: "#717171",
      },
    },
  },
  plugins: [],
});
