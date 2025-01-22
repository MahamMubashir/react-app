/** @type {import('tailwindcss').Config} */
module.exports = {
  important: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px", // Customize 'lg' to start at 1025px
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
