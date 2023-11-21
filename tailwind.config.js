/**  @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'maroon': '#800000', // Define a custom maroon color
      },
    },
  },
  plugins: [],
}

