/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      backgroundImage: {
        'authbg': "url('./src/assets/others/authentication.png)",
        'authmain': "url('./src/assets/others/authentication1.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

