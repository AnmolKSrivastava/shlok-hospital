/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81',
          dark: '#0d3d66',
        },
        secondary: {
          DEFAULT: '#2BB3A3',
          dark: '#249a8b',
        },
        accent: {
          DEFAULT: '#E63946',
          dark: '#d32f3c',
        },
      },
    },
  },
  plugins: [],
}
