/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "300px",
      sm: "576px",
      md: "960px",
      lg: "1400px",
      xl: "16000px",
      xxl: "1800px",
    },
  },
  plugins: [],
};
