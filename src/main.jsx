import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactUs from "./ContactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* <button
        onClick={toggleDarkMode}
        className="px-4 py-2 m-4 bg-gray-200 dark:bg-gray-800 rounded"
      >
        Toggle Dark Mode
      </button> */}
      <Home darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <ContactUs darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
