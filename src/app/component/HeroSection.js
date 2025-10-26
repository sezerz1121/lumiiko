"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const leftEl = leftRef.current;
    const rightEl = rightRef.current;

    // Animate left content
    gsap.from(leftEl, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // trigger when top of section hits 75% of viewport
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate right image
    gsap.from(rightEl, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // same trigger
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2, // slight delay for staggered feel
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="
        bg-[url('/herosectionbg.png')]
        bg-cover
        bg-center
        w-full
        h-screen
        flex
        items-center
        justify-center
        px-4
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-6xl gap-6 mt-6 md:p-0">
        {/* Left Content */}
        <div ref={leftRef} className="flex flex-col items-center md:items-start gap-15 md:gap-4 md:w-1/2 md:p-[5%]">
          <h1 className="text-xl w-[80%] md:w-[90%] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-left">
            Professional Websites for <span className="text-[#FB744F]">Businesses</span> in India
          </h1>
          <p className="text-base leading-[248%] md:leading-[150%] w-[90%] sm:text-base md:text-lg lg:text-xl text-[#474747] text-center md:text-left max-w-md md:max-w-full">
            From salons to shops, doctors to restaurants – we create modern, mobile-friendly websites that bring you more customers.
          </p>
          <button className="bg-[#FB744F] hover:bg-[#e06340] text-white font-medium rounded-3xl px-6 py-3 text-lg mt-4 cursor-pointer">
            Get Your Free Quote
          </button>
        </div>

        {/* Right Image */}
        <div ref={rightRef} className="hidden md:flex md:w-1/2 justify-center">
          <img src="/herosectionphone.png" alt="Phone mockup" className="w-full scale-80 lg:scale-95" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
