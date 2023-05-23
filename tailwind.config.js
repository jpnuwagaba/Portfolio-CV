/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'space-mono': ["'Space Mono', monospace"],
      'jet-brains-mono': ["'JetBrains Mono', monospace"]
    },
    extend: {
      colors: {
        plum: '#f7aef8',
        lavender: '#b388eb',
        vistaBlue: '#8093f1',
        skyBlue: '#72ddf7',
      }
    },
  },
  plugins: [],
}