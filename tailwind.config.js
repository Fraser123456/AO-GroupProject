/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#DEC20B",
      white: "#FFF",
      gray: "#808080",
      lightGray: "#f1f1f1",
      lighterGray: "#ccc",
      black: "#000000",
      error: "#f55742",
    },
    screens: {
      lg: { max: "1800px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    fontFamily: {
      raleway: ["Raleway"],
      lato: ["Lato"],
    },
    extend: {
      animation: {
        fadeRightMini: "fadeRightMini 1s ease-in-out",
        fadeLeftMini: "fadeRightMini 1s ease-in-out",
        grow: "grow 700ms ease-in",
      },
      keyframes: {
        fadeLeftMini: {
          "0%": { opacity: 0, transform: "translate3d(-40%, 0, 0)" },
          "100%": { opacity: 1, transform: "translateZ(0)" },
        },
        fadeRightMini: {
          "0%": { opacity: 0, transform: "translate3d(40%, 0, 0)" },
          "100%": { opacity: 1, transform: "translateZ(0)" },
        },
        grow: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
