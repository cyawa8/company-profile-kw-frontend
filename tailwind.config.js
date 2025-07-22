/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
      'slide-up': {
        '0%': { opacity: '0', transform: 'translateY(40px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      'slide-up': 'slide-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
    },

      colors: {
        primary: {
          0 : "#FFFFFF",
          50: "#F6F9EA",
          100: "#EDF2D5",
          200: "#E4ECBF",
          300: "#DBE6AA",
          400: "#D2DF95",
          500: "#C9D980",
          600: "#C0D26B",
          700: "#B7CC56",
          800: "#AEC640",
          900: "#A5BF2B",
          950: "#9CB916",
        },
        accent: {
          50: "#E8E7E7",
          100: "#D1D0D0",
          200: "#B9B9B9",
          300: "#A2A2A2",
          400: "#8B8B8B",
          500: "#747373",
          600: "#5D5C5C",
          700: "#464545",
          800: "#2E2E2E",
          900: "#171717",
          950: "#000000",
        },
        gray : {
          10 : "#F",
        }
      },
    },
  },
  plugins: [],
}

