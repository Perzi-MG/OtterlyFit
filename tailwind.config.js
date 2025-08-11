/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      brandGray: "#252526",
      brandBlack: "0D0D0D",
      lightBlue: "#C5C8D9",
      beige: "#D9D59C",
      lightBeige: "#D8D9B4",
    },
    extend: {},
  },
  plugins: [],
}