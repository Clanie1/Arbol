/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          50: "#3E8989",
        },
        light: {
          50: "#DCEDFF",
        },
        dark: {
          50: "#1D1E18",
        },
      },
    },
  },
  plugins: [],
};
