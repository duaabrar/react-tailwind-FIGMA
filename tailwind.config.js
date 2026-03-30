/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Isse 'font-sans' class Octarine use karegi
        sans: ['Octarine', 'sans-serif'],
      },
    },
  },
  plugins: [],
}