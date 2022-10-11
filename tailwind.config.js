/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  plugins: [require("@tailwindcss/typography")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["AlbertSans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "indigo-dye": "#234e70",
        silver: "#BFC0C0",
        "cyber-yellow": "#ffce00",
        "black-coral": "#4f5d75",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-4px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(4px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(4px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(4px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.7s ease-out",
        "fade-out-down": "fade-out-down 0.7s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out",
        "fade-out-up": "fade-out-up 0.7s ease-out",
      },
    },
  },
};
