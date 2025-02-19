/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          softOrange: "hsl(35, 77%, 62%)",
          softRed: "hsl(5, 85%, 63%)",
          offWhite: "hsl(36, 100%, 99%)",
          grayishBlue: "hsl(233, 8%, 79%)",
          darkGrayishBlue: "hsl(276, 13.10%, 42.00%)",
          veryDarkBlue: "hsl(240, 100%, 5%)",
        },
      },
    },
    plugins: [],
  };