"use client" 
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // helper for mobile link click
  const handleMobileClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close navbar after click
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-poppins flex items-center justify-between px-6 py-4 bg-white">
      {/* Logo */}
      <div
        className="font-bold text-[#FB744F] cursor-pointer text-2xl"
        onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
      >
        Lumiiko
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-15">
        <div className="font-medium text-lg cursor-pointer hover:text-[#FB744F] active:scale-[0.98]" onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>Home</div>
        <div className="font-medium text-lg cursor-pointer hover:text-[#FB744F] active:scale-[0.98]" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</div>
        <div className="font-medium text-lg cursor-pointer hover:text-[#FB744F] active:scale-[0.98]" onClick={() => document.getElementById("ourwork")?.scrollIntoView({ behavior: "smooth" })}>Our Work</div>
        <div className="font-medium text-lg cursor-pointer hover:text-[#FB744F] active:scale-[0.98]" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>Pricing</div>
        <div className="font-medium text-lg cursor-pointer hover:text-[#FB744F] active:scale-[0.98]" onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}>FAQ</div>
      </div>

      {/* Contact Button */}
      <div 
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
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
          <div className="font-medium text-xl cursor-pointer hover:text-[#FB744F] active:scale-[0.98]" onClick={() => handleMobileClick("home")}>Home</div>
          <div className="font-medium text-xl cursor-pointer hover:text-[#FB744F] active:scale-[0.98]" onClick={() => handleMobileClick("about")}>About</div>
          <div className="font-medium text-xl cursor-pointer hover:text-[#FB744F] active:scale-[0.98]" onClick={() => handleMobileClick("ourwork")}>Our Work</div>
          <div className="font-medium text-xl cursor-pointer hover:text-[#FB744F] active:scale-[0.98]" onClick={() => handleMobileClick("pricing")}>Pricing</div>
          <div className="font-medium text-xl cursor-pointer hover:text-[#FB744F] active:scale-[0.98]" onClick={() => handleMobileClick("faq")}>FAQ</div>
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

export default Navbar;

