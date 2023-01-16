/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base100: "#0f0f10",
        base200: "#1b1c22",
        base300: "#24252C",
        // electricBlue: "#256cd3",
      }
    },
  },
}