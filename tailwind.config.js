/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      
      'sm': '360px',
      // => @media (min-width: 640px) { ... } 
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
    minHeight:{
      "6vh":"60vh",
      "7vh":"70vh",
      "8vh":"80vh",
      "1vh":"10vh",
      "9vh":"90vh",
      "10vh":"100vh"

    },
    screens:{
      "ph":"390px",
    },

      height:{
        "7xl":"70vh",
        eigthVH:"80vh",
        "87vh":"87vh",
      },
      width:{
        "seven":"70vw"
      },
      fontFamily:{
       "font1":"Lora",
       "font2":["Source Sans Pro","sans-serif"],
       "castora":['Castoro Titling', 'cursive'],
       "bai":['Bai Jamjuree', 'sans-serif'],
       "basker":['Baskervville', 'serif']
      },
      borderRadius:{
        "4xl":"30px",
        "5xl":"40px",
      },
      spacing:{
        "100vh":"100vw",

      }

    },
    
  },
  plugins: [],
}

