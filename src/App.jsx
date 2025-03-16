import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About/About";
import { Element } from "react-scroll";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Element name="home">
                  <Home />
                </Element>
                <Element name="about">
                  <AboutUs />
                </Element>
                <Element name="Blogs">
                  <Blogs />
                </Element>
                <Element name="Products">
                  <Products />
                </Element>
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
