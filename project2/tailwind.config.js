/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open': ["Open Sans"],
      },
      colors: {
        'primary': '#1BBF00',
      },
      maxWidth: {
        'container': '1147px',
      }
    },
  },
  plugins: [],
}