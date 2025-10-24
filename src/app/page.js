"use client"
import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import About from "./component/About";

export default function Home() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update screen size
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial size
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("height"+screenSize.height);
    console.log("Width"+screenSize.width);

  return (
  <>
     <Navbar/>
     <HeroSection/>
     <About/>
  </>
  );
}
