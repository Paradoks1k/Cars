/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xl: "1440px",
      md: "1024px",
    },
    extend: {
      colors: {
        "almost-white": "#FFFFFF",
        "almost-blue": "#0066FF",
        "almost-black": "#151515",
        "almost-gray": "#E8E8E8",
      },
    },
  },
  plugins: [],
};
