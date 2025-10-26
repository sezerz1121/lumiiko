"use client";

import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <div 
      onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
      className='h-[5vh] md:h-[7vh] bg-[#FFEBE5] flex justify-center items-center cursor-pointer font-semibold'
    >
      © {currentYear} Lumiiko. All rights reserved.
    </div>
  )
}

export default Footer
