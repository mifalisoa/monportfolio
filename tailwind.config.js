/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          ocr: ['"Roboto Mono"', 'monospace'], // Alternative si OCR-A n'est pas disponible
          body: ['"Lato"', 'sans-serif'],     // Police principale pour le corps
        },
      },
    },
    plugins: [],
  };