import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to <strong>Rudra Arts</strong>, where creativity meets passion.
        We bring ideas to life through{" "}
        <strong>design, storytelling, and art</strong>. Our mission is to create
        meaningful experiences that inspire and connect.
      </p>
      <p className="about-tagline">Your vision, our masterpiece.</p>
    </div>
  );
};

export default About;
