"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Smooth scroll or navigate to home if on another page
  const navigateToSection = (id) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  // Mobile click helper
  const handleMobileClick = (id) => {
    navigateToSection(id);
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-poppins flex items-center justify-between px-6 py-4 bg-white">
      {/* Logo */}
      <div
        className="font-bold text-[#FB744F] cursor-pointer text-2xl"
        onClick={() => navigateToSection("home")}
      >
        Lumiiko
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-15">
        {["home", "about", "ourwork", "pricing", "faq"].map((id) => (
          <div
            key={id}
            className="font-medium text-lg cursor-pointer hover:text-[#FB744F] active:scale-[0.98]"
            onClick={() => navigateToSection(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1).replace("ourwork", "Our Work")}
          </div>
        ))}
      </div>

      {/* Contact Button */}
      <div
        onClick={() => navigateToSection("contact")}
        className="hidden md:flex bg-[#FB744F] px-8 py-1 text-white rounded-2xl text-lg items-center justify-center cursor-pointer hover:bg-[#e06340] transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
      >
        Contact
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#FB744F] focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden py-4 space-y-4">
          {["home", "about", "ourwork", "pricing", "faq"].map((id) => (
            <div
              key={id}
              className="font-medium text-xl cursor-pointer hover:text-[#FB744F] active:scale-[0.98]"
              onClick={() => handleMobileClick(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace("ourwork", "Our Work")}
            </div>
          ))}
          <div
            onClick={() => handleMobileClick("contact")}
            className="bg-[#FB744F] px-6 py-2 text-white rounded-2xl cursor-pointer hover:bg-[#e06340] transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
