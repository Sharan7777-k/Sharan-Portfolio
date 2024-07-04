/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skillbackground: "#2F2F2f",
        skills: "#F6F6F6",
        home: "#252525",
        bgblack: "#302A18",
        homebutton: "#FFCB74",
        header: "#1A1A1A",
        projects: "#FFE6BC",
        skills1: "#A32CC4",
      },
      fontFamily: {
        Raleway: ["Raleway"],
        poppins: ["Poppins"], 
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
