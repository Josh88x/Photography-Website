/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "Roboto": ["Roboto", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

