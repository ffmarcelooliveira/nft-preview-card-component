/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-250": "hsl(215, 51%, 70%)",
        "blue-1500": "hsl(217, 54%, 11%)",
        "blue-1200": "hsl(216, 50%, 16%)",
        "blue-1000": "hsl(215, 32%, 27%)",
      },
    },
  },
  plugins: [],
};
