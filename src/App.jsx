import React, { useRef } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import "./App.css";

const App = () => {
  const aboutRef = useRef(null);

  // Function to scroll to the About section smoothly
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <Home onScrollDown={scrollToAbout} />
      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  );
};

export default App;
