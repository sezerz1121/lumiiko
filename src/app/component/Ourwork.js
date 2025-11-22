"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Ourwork = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  itemsRef.current = [];
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    itemsRef.current.forEach((item, index) => {
      const img = item.querySelector("img");
      const text = item.querySelector("p");

      // Animate image
      if (img) {
        gsap.fromTo(
          img,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 75%", // 25% visible
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate text
      if (text) {
        gsap.fromTo(
          text,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2, // slight delay after image
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
    id="ourwork"
      ref={containerRef}
      className="
        w-full
        min-h-screen
        md:min-h-[80vh]
        flex
        flex-col
        items-center
        justify-between
        px-4
        py-10
        bg-white
        gap-6
        mb-6
      "
    >
      <div className='font-poppins font-bold w-full flex items-center justify-center text-3xl md:text-4xl '>
        Our Recent Work
      </div>
      <div className="h-[80%] w-[80%] md:w-full flex flex-col md:flex-row gap-6 items-center justify-around ">
        {[
          {
            href: "https://myhnh.in/",
            img: "/ourworkecommerce.png",
            text: "Ecommerce Website for Single Product",
          },
          {
            href: "https://hcbrother-waitlist.vercel.app/",
            img: "/ourworkwaitlist.png",
            text: "Waiting list Website for Streetwear Brand",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            ref={addToRefs}
            className="flex flex-col items-start gap-4"
          >
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <img src={item.img} className="cursor-pointer" alt="" />
            </a>
            <p className='font-poppins font-semibold text-sm sm:text-base md:text-lg'>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourwork;
