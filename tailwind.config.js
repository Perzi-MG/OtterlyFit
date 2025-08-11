/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      darkGreen: "#004030",
      lightGreen: "#4A9782",
      beige: "#DCD0A8",
      lightBeige: "#FFF9E5",
      brandBlack: "#2C2C2C",
    },
    extend: {},
  },
  plugins: [],
}