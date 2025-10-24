"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-poppins flex items-center justify-between px-6 py-4 bg-white">
      {/* Logo */}
      <div className="font-bold text-[#FB744F] cursor-pointer text-2xl">Lumiiko</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-15">
        <div className="font-medium text-lg cursor-pointer hover:text-[#FB744F]">Home</div>
        <div className="font-medium text-lg cursor-pointer hover:text-[#FB744F]">About</div>
        <div className="font-medium text-lg cursor-pointer hover:text-[#FB744F]">Our Work</div>
        <div className="font-medium text-lg cursor-pointer hover:text-[#FB744F]">Pricing</div>
        <div className="font-medium text-lg cursor-pointer hover:text-[#FB744F]">FAQ</div>
      </div>

      {/* Contact Button */}
      <div className="hidden md:flex bg-[#FB744F] px-8 py-1 text-white rounded-2xl text-lg items-center justify-center cursor-pointer hover:bg-[#e06340]">
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
          <div className="font-medium text-xl cursor-pointer hover:text-[#FB744F]">Home</div>
          <div className="font-medium text-xl cursor-pointer hover:text-[#FB744F]">About</div>
          <div className="font-medium text-xl cursor-pointer hover:text-[#FB744F]">Our Work</div>
          <div className="font-medium text-xl cursor-pointer hover:text-[#FB744F]">Pricing</div>
          <div className="font-medium text-xl cursor-pointer hover:text-[#FB744F]">FAQ</div>
          <div className="bg-[#FB744F] px-6 py-2 text-white rounded-2xl cursor-pointer hover:bg-[#e06340]">
            Contact
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
