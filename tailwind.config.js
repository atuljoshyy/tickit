module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        blk: {
          50: '#181A1B',
          100: '#111314',
        },
      }
    },
    
  },
  plugins: [require("@tailwindcss/forms")],
}