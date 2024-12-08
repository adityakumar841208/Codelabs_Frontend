const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enables class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes src folder
    "app/**/*.{ts,tsx}", // Includes app folder
    "components/**/*.{ts,tsx}", // Includes components folder
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        text: "#000000",
        primary: "rgb(24 118 45)",
        primaryHover: "rgb(15 75 28)",
        bg: "rgb(207, 211, 216)",
        customDark: "#030220",
      },
      textShadow: {
        subtle: "1px 1px 2px rgba(0, 0, 0, 0.3)", // A subtle shadow
        glow: "0 0 5px rgba(255, 255, 255, 0.8)", // Glow effect
        deep: "2px 2px 5px rgba(0, 0, 0, 0.3)", // A deep shadow
      },
      boxShadow: {
        "bottom-only": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        glow: "0 0 15px rgba(0, 123, 255, 0.6)", // Example for a glowing effect
      },
      height: {
        vh: "83vh",
      },
      backgroundImage: {
        coverImg: "url('./public/bg.jpg')", // Path to background image
      },
      borderColor: {
        customBorder: "rgb(44 52 55)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 15s linear infinite",
        "marquee-vertical": "marquee-vertical 15s linear infinite", // var(--duration)
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"), // Adds text-shadow utilities
    require("tailwindcss-animate"), // Adds animation utilities
  ],
};
