/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkpink' : '#D14D72',
        'salmon' : '#FFABAB',
        'soft' : '#FCC8D1',
        'whitepink' : '#FEF2F4',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}