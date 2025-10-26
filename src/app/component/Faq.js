"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const faqs = [
    {
      question: "How long does it take to build my website?",
      answer:
        "Most projects are completed within 7–10 days, depending on size and complexity. Smaller websites can be ready in less than a week.",
    },
    {
      question: "Will my website work on mobile devices?",
      answer:
        "Absolutely. Every site we build is fully responsive and looks great on phones, tablets, and desktops.",
    },
    {
      question: "Do I need to pay separately for hosting or a domain?",
      answer:
        "No extra cost — we include reliable hosting and a domain name for your first year, completely free.",
    },
    {
      question: "Can I make changes to my website later?",
      answer:
        "After your website is completed, no further edits or updates are included. If you’d like to make changes or add new features in the future, we can take care of that as a separate service.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    faqRefs.current.forEach((faq, i) => {
      if (!faq) return;

      // Animate the card
      gsap.fromTo(
        faq,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faq,
            start: "top 75%", // triggers when 25% of element is in view
          },
          delay: i * 0.1, // stagger
        }
      );

      // Animate any images inside the card
      const images = faq.querySelectorAll("img");
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: faq,
              start: "top 75%",
            },
          }
        );
      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen md:min-h-[70vh] flex flex-col items-center px-4 sm:px-6 md:px-8 py-10 bg-white gap-10">
      <div className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-center leading-snug">
        Frequently Asked Questions
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-4 sm:gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            className="bg-[#f9f9f9] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.05)] p-4 sm:p-6 transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center text-left font-poppins font-semibold text-base sm:text-lg md:text-xl focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              <span className="flex-1 pr-4">{faq.question}</span>
              <IoIosArrowDown
                size={26}
                className={`flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } cursor-pointer`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-[300px] opacity-100 mt-3 sm:mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 font-poppins text-sm sm:text-base md:text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
