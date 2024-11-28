/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'subtle': '1px 1px 2px rgba(0, 0, 0, 0.3)', // A subtle shadow
        'glow': '0 0 5px rgba(255, 255, 255, 0.8)', // Glow effect
        'deep': '2px 2px 5px rgba(0, 0, 0, 0.3)', // A deep shadow
      },
      boxShadow: {
        'bottom-only': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(0, 123, 255, 0.6)', // Example for a glowing effect
      },
      height:{
        vh:"83vh"
      },
      backgroundImage:{
        'coverImg':'./public/bg.jpg'
      },
      borderColor: {
        customBorder:'rgb(44 52 55)'
      },
      colors:{
        text:'#000000',
        primary:'rgb(24 118 45)',
        primaryHover:'rgb(15 75 28)',
        bg:"rgb(207, 211, 216)",
        customDark:'#030220',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

