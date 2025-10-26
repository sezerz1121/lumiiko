"use client";
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar2 from '../component/Navbar2'
import { useRouter, usePathname } from "next/navigation";

const page = () => {
      const router = useRouter();
  const pathname = usePathname();

  // Smooth scroll or navigate to home if on another page
  const navigateToSection = (id, plan) => {
  if (pathname !== "/") {
    router.push(`/?plan=${plan}#contact`);
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
  return (
    <>
        <Navbar2/>
        <div className='min-h-screen flex flex-col sm:flex-row items-center justify-center w-full max-w-[90%] mx-auto gap-6 py-24 md:py-6'>
           <div className="bg-linear-to-b from-[#DEE6FD] via-[#DEE6FD] to-[#FFFFFF] w-full sm:w-72 md:w-80 lg:w-96 p-6 rounded-xl border border-[#737373]/50 overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-all duration-200 min-h-[472px] sm:min-h-[472px] md:min-h-[472px]">
          
                                  {/* Plan Title */}
                                  <div className='font-albertSans font-semibold text-lg mb-1 tracking-[2%]'>
                                      Premium Plan
                                  </div>
          
                                  {/* Prices */}
                                  <div className="flex items-center gap-2 mb-3">
                                      <div className="font-albertSans font-semibold text-lg text-[#FF0303] line-through tracking-tight">
                                      ₹ 32,000
                                      </div>
                                      <div className="font-albertSans font-semibold text-2xl tracking-tight">
                                      ₹ 29,999
                                      </div>
                                  </div>
          
                                  {/* Description */}
                                  <div className='font-albertSans font-regular text-[#737373] text-sm text-justify tracking-tight mb-3'>
                                      You get more pages, better Google ranking, and a stunning design. Perfect for businesses wanting to stand out and attract more clients.
                                  </div>
          
                                  {/* Buttons */}
                                  <div className='flex flex-col gap-2 mb-3'>
                                      <div
                                      onClick={() => navigateToSection("contact", "premium")}
                                       className='font-albertSans font-medium bg-white flex justify-center items-center h-12 rounded-xl tracking-tight border border-[#737373]/50 cursor-pointer shadow-2xs 
                                                      transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'>
                                      Get Started
                                      </div>
          
                                  </div>
          
                                  {/* Divider */}
                                  <hr className="border-[#737373]/50 my-3" />
          
                                  {/* Features */}
                                  <div className='flex flex-col gap-2'>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Up to 15 Pages + Blog/Portfolio</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Free .COM Domain (1 year)</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>VPS Hosting (1 year) – Fast & secure server</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Advanced SEO Setup – More visibility on Google</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Custom Design + Animations – Sleek & professional look</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Lead Forms & CTAs – Capture inquiries directly from your site</p>
                                      </div>
                                       <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Social Media Integration – Link your Facebook, Instagram, LinkedIn, etc.</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Free SSL – Security padlock for trust</p>
                                      </div>
                                        <div className='font-albertSans font-semibold text-lg mt-4 tracking-[2%]'>
                                        Renewal After 1 Year
                                        </div>
                                        <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Domain: ₹1,534/year</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Hosting: (~₹11,328/year)</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Other Charges: ₹100</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Free SSL Certificate</p>
                                      </div>
                                      <div className='font-albertSans font-semibold text-sm mt-4 tracking-[2%]'>
                                        Total Renewal ≈ ₹12,962/year→ Just ₹35/day
                                        </div>
                                      
                                      
                                  </div>
                                  </div>
        </div>
    </>
  )
}

export default page