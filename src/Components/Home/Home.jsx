import React, { useRef } from "react";
import "./Home.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const firstImgRef = useRef(null);
  const secondImgRef = useRef(null);
  const headingRef = useRef(null);

  // Function to handle scroll-based animations
  const handleScroll = () => {
    const scrollY = window.scrollY; // Get current scroll position

    gsap.to(firstImgRef.current, {
      y: -scrollY * 0.5, // Moves first image at half scroll speed
      ease: "power1.out",
    });

    gsap.to(secondImgRef.current, {
      y: -scrollY * 0.3, // Moves second image at a slower speed
      ease: "power1.out",
    });

    gsap.to(headingRef.current, {
      y: -scrollY * 0.2, // Moves heading slightly
      ease: "power1.out",
    });
  };

  // Attach scroll event listener
  window.onscroll = handleScroll;

  return (
    <div ref={containerRef} className="container">
      <h1 ref={headingRef} className="heading1">
        Rudra Arts
      </h1>

      <div ref={firstImgRef} className="firstImg"></div>
      <div ref={secondImgRef} className="secondImg"></div>
    </div>
  );
};

export default Home;
