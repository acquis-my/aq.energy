/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["AlbertSans"],
      },
      colors: {
        "indigo-dye": "#234e70",
        silver: "#BFC0C0",
        "cyber-yellow": "#ffce00",
        "black-coral": "#4f5d75",
      },
    },
  },
  plugins: [],
};
