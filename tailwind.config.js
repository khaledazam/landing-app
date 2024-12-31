/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding:"1rem",
      screens:{
        lg:"1024px",
        xl:"1280px",
        "2xl":"1124px"
      }
    }, 
  },
  plugins: [],
}

