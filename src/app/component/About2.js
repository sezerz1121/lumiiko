"use client"; 
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About2 = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const boxesRef = useRef([]);

  boxesRef.current = [];
  const addToRefs = (el) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    // Smooth animation for image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%", // triggers when 25% visible
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate boxes with stagger
    boxesRef.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="
        w-full
        min-h-screen
        md:min-h-[80vh]
        flex
        flex-col
        items-center
        justify-around
        px-4
        py-10
        bg-white
        gap-6
      "
    >
      <div className='font-poppins font-bold w-full flex items-center justify-center text-3xl md:text-4xl '>
        What We Do
      </div>
      <div className=' w-full md:w-[90%] flex items-center justify-around'>
        <div className='hidden md:flex'>
          <img ref={imageRef} src="/about2Laptop.png" />
        </div>
        <div content=' w-full md:w-1/2 flex-col items-center gap-4'>
          {[
            "Modern websites that look<br />good on mobile & computer.",
            "Get found on Google by your<br /> customers.",
            "Turn visitors into paying<br /> customers with direct leads.",
            "Friendly support on call &<br />  WhatsApp – always available.",
          ].map((text, idx) => (
            <div
              key={idx}
              ref={addToRefs}
              className="flex items-center justify-start w-full z-10 mb-4"
            >
              <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-[4px_4px_60px_5px_rgba(251,116,79,0.35)] sm:min-w-[320px] md:min-w-[368px] w-full max-w-[420px]">
                <img src="/about2CheckMark.png" alt="check" />
                <p
                  className="text-[#474747] font-semibold font-poppins text-sm sm:text-base md:text-lg leading-snug"
                  dangerouslySetInnerHTML={{ __html: text }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='h-[5%]'></div>
    </div>
  );
};

export default About2;
