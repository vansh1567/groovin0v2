/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['"Quicksand"', 'Arial', 'sans-serif'],
      },
      safelist: [
        'animate__animated',
        'animate__fadeIn',
        // Add other animations you'll use
      ]
    }
  },
  plugins: [],
}