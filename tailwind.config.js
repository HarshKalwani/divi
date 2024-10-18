/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('./assets/shraddha2.jpeg')",
        'hero2':"url('./assets/1.jpg')",
        'hero3':"url('./assets/2.jpg')",
        'hero4':"url('./assets/necklace (3).jpg')",
        'hero5':"url('./assets/Hat.jpg')",
      },
    },
  },
  plugins: [],
}

