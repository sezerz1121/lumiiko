"use client";
import React, { useRef, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyBuisnessTrustUs = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const imageRef = useRef(null);

  itemsRef.current = [];
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current;

    // Animate image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 50, opacity: 0, scale: 0.95, willChange: "transform, opacity" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // Animate all text elements together with stagger
    gsap.fromTo(
      itemsRef.current,
      { y: 30, opacity: 0, willChange: "transform, opacity" },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="
        w-full
        min-h-[60vh]
        md:min-h-[80vh]
        flex
        flex-col
        items-center
        md:justify-around
        px-4
        py-10
        bg-white
        gap-15
        md:gap-6
      "
    >
      <div
        ref={addToRefs}
        className='font-poppins font-bold w-full flex items-center justify-center text-3xl md:text-4xl text-center'
      >
        Why Businesses Trust Us
      </div>

      <div className=' w-full md:w-[90%] flex items-center justify-around'>
        <div className='hidden md:flex'>
          <img
            ref={imageRef}
            src="/TrustLaptop.png"
            className='scale-114'
            alt='laptop'
          />
        </div>

        <div className='flex flex-col items-center md:items-start gap-6'>
          <div ref={addToRefs} className='text-xl md:text-2xl font-semibold font-poppins'>
            Custom Websites Made for Local Success
          </div>

          <div className='flex flex-col items-start gap-2'>
            {[
              "Clear & Honest Pricing – No hidden charges",
              "Fast Delivery – Websites ready in just 7–10 days",
              "Mobile + SEO Ready – Customers can find you easily",
              "Personal Support – Call or WhatsApp anytime",
            ].map((text, idx) => (
              <div
                ref={addToRefs}
                key={idx}
                className='flex items-center gap-2'
              >
                <FaArrowRightLong />
                <p className='text-sm md:text-lg font-semibold font-poppins'>{text}</p>
              </div>
            ))}
          </div>

          <div
            ref={addToRefs}
            className="text-sm md:text-lg font-semibold font-poppins text-justify max-w-sm md:max-w-lg leading-relaxed"
          >
            Get a powerful website that builds trust, attracts customers, and grows your business. Whether it’s a restaurant, shop, or service, we make websites that are affordable, fast, and designed for results.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBuisnessTrustUs;
