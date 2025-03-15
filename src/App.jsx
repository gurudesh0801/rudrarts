import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      {/* <h1 className="text-center">Jay Shree Ram</h1> */}
      <Home />
    </div>
  );
};

export default App;
