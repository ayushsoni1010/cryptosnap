/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A5F7D",
        secondary: "#ECF0FF",
        danger: "#FF4D4D",
        success: "#00FFA3",
      },
      fontFamily: {
        "assets-tomorrow": ["Tomorrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
