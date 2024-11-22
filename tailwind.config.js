/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        customBorder:'rgb(44 52 55)'
      },
      colors:{
        text:'#000000',
        primary:'rgb(24 118 45)',
        primaryHover:'rgb(15 75 28)',
        bg:'#94a3b8',
        bglite:'#e2e8f0',
      },
    },
  },
  plugins: [],
}

