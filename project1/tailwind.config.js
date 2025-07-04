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
        'papri': ["Paprika"],
      },
      colors: {
        'primary': "#1BBF00",
        'secondary': "#160C6D",
        'thrid': "#141135",
        'four': "#726E9E",
        'five': "#F6F5FF",
      },
      maxWidth: {
        "container": "1170px"
      }
      ,
      backgroundImage: {
        "banner": "url('./assets/banner.png')"
      },
      spacing: {
        '100': '100px',
      }
    },
  },
  plugins: [],
}

//#EFF4FA
//#1BBF00