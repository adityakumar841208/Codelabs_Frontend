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

    },
  },
  plugins: [],
}

