/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors:{
        "bookmark-purple":"#5267df",
        "bookmark-red":"#fa5959",
        "bookmark-blue":"#242a45",
        "bookmark-grey":"#9194a2",
        "bookmark-white":"#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
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

