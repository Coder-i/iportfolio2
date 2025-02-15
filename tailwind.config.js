/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require('tailwind-scrollbar')],
  daisyui: {
    themes: true,
  },
}