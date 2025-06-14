module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b08968",
        secondary: "#f6e7d8",
        accent: "#a98467",
        background: "#fff8f0",
        brown: {
          700: "#8B4513",
          800: "#654321",
          900: "#3E2723",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}; 