/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#222a60',
          orange: '#f89431',
          slate: '#626b7d',
          sand: '#d8cfca',
          black: '#06070a',
        },
      },
    },
  },
  plugins: [],
}

