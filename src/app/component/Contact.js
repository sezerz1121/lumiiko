"use client"; 
import React, { useEffect, useRef ,useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FiMail } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineBulb } from "react-icons/ai";
import { useSearchParams } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const searchParams = useSearchParams();
  const planFromQuery = searchParams.get("plan") || "";
  console.log(planFromQuery)
  const [selectedPlan, setSelectedPlan] = useState(planFromQuery);

  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current;

    // Animate the two main children separately: form and info section
    const containers = el.querySelectorAll(".form-section, .info-section");

    gsap.fromTo(
      containers,
      { y: 30, opacity: 0, scale: 0.98, willChange: "transform, opacity" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true, // prevents re-triggering
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
// Update selected plan if query changes
  useEffect(() => {
    if (planFromQuery) setSelectedPlan(planFromQuery);
  }, [planFromQuery]);
  return (
    <div
      id="contact"
      ref={sectionRef}
      className="w-full min-h-screen md:min-h-[90vh] flex flex-col items-center px-4 sm:px-6 md:px-8 py-10 bg-white gap-10"
    >
      <div className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-center leading-snug">
        Contact Us
      </div>

      <div className="flex flex-col md:flex-row justify-around items-start md:items-center w-full gap-10 md:gap-0">
        {/* Form */}
        <div className="form-section w-full md:w-[50%] flex flex-col items-center gap-[2] md:pag-[-1]">
          <p className="w-[80%] md:w-[40%] mb-2">Name</p>
          <input placeholder="Enter Name" className="font-albertSans font-regular border border-[#FB744F] pl-5 w-[80%] md:w-[40%] h-9 rounded-lg active:border-[#FB744F] mb-3" />
          <p className="w-[80%] md:w-[40%] mb-2">Email</p>
          <input placeholder="Enter Email" className="font-albertSans font-regular border border-[#FB744F] pl-5 w-[80%] md:w-[40%] h-9 rounded-lg active:border-[#FB744F] mb-3" />
          <p className="w-[80%] md:w-[40%] mb-2">Phone no</p>
          <input placeholder="Enter Phone no" className="font-albertSans font-regular border border-[#FB744F] pl-5 w-[80%] md:w-[40%] h-9 rounded-lg active:border-[#FB744F] mb-3" />
            <p className="w-[80%] md:w-[40%] mb-2">Subject</p>
            <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            className="font-albertSans font-regular border border-[#FB744F] pl-5 pr-10 w-[80%] md:w-[40%] h-9 rounded-lg active:border-[#FB744F] mb-3 appearance-none bg-white cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>Select Subject</option>
             <option value="Other">Other</option>
            <option value="basic">Basic Plan</option>
            <option value="standard">Standard Plan</option>
            <option value="ecommerce">Ecommerce Plan</option>
            <option value="premium">Premium Plan</option>
          </select>

          
          <p className="w-[80%] md:w-[40%] mb-2">Your Requirements</p>
          <textarea
  placeholder="Enter Your Requirements"
  className="font-albertSans font-regular border border-[#FB744F] pl-5 pt-3 w-[80%] md:w-[40%] h-40 rounded-lg active:border-[#FB744F] mb-3 text-top "
></textarea>
          <div className="font-albertSans font-regular border border-[#FB744F] w-[80%] md:w-[40%] h-9 flex items-center justify-center rounded-lg bg-[#FFEBE5] cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]">
            Submit
          </div>
        </div>

        {/* Info Section */}
        <div className="info-section w-full md:w-[50%] flex flex-col items-center gap-6">
          <div className="font-albertSans font-bold text-xl md:text-2xl w-[80%] md:w-[40%] flex items-center gap-4 justify-center text-center">
            Let’s Build Your Website
          </div>
          <div className="font-albertSans font-bold text-xs text-[#737373] w-[80%] md:w-[40%] flex items-center gap-4 justify-center text-center ">
            Tell us about your business – we’ll reply in 24 hours.
          </div>
          <div className="font-albertSans font-bold text-xs flex flex-col items-center gap-2 justify-center">
            <div className="font-albertSans font-semibold text-sm md:text-lg w-full flex items-center gap-4 cursor-pointer"
                onClick={() => window.location.href = "mailto:Lumiiko@gmail.com"}>
              <FiMail />
              <p>Lumiiko@gmail.com</p>
            </div>

            <div className="font-albertSans font-semibold text-sm md:text-lg w-full flex items-center gap-4 cursor-pointer"
                onClick={() => window.location.href = "tel:9265856366"}>
              <FaPhone />
              <p>9265856366</p>
            </div>

            <div className="font-albertSans font-semibold text-sm md:text-lg w-full flex items-center gap-4 cursor-pointer">
              <AiOutlineBulb />
              <p>From ideas to reality.</p>
            </div>

          </div>
          <div className="font-albertSans font-bold text-sm md:text-lg w-[80%] md:w-[40%] flex items-center gap-4 justify-center text-center">
            Your vision. Our expertise. Let’s talk.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
