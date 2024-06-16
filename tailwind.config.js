/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': 'IBM Plex Sans'
      },
      colors: {
        'primary': '#2F6CE5'
      },
      backgroundImage: {
        'main': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.60)), url("https://i.ibb.co/zQdxkxW/Rectangle-2.png")',
      }
    },
  },
  plugins: [],
}