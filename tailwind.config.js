/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "primary" : "#422684"
      },
      backgroundColor: {
        "primary" : "#422684"
      },
      gridTemplateColumns : {
        'auto' : 'repeat(auto-fill, minmax(200px,1fr))'
       },
      
    },
  },
  plugins: [],
}