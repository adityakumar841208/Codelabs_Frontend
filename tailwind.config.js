/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(circle, rgba(18,56,7,0.98) 0%, rgba(19,21,34,1) 38%)',
      },
      borderColor: {
        customBorder:'rgb(44 52 55)'
      },
      colors:{
        primary:'rgb(24 118 45)'
      },
    },
  },
  plugins: [],
}

