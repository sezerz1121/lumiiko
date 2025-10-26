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
           <div className="bg-linear-to-b from-[#BAEAFD] via-[#BAEAFD] to-[#FFFFFF] w-full sm:w-72 md:w-80 lg:w-96 p-6 rounded-xl border border-[#737373]/50 overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-all duration-200 min-h-[472px] sm:min-h-[472px] md:min-h-[472px]">
          
                                  {/* Plan Title */}
                                  <div className='font-albertSans font-semibold text-lg mb-1 tracking-[2%]'>
                                      Basic Plan
                                  </div>
          
                                  {/* Prices */}
                                  <div className="flex items-center gap-2 mb-3">
                                      <div className="font-albertSans font-semibold text-lg text-[#FF0303] line-through tracking-tight">
                                      ₹ 15,000
                                      </div>
                                      <div className="font-albertSans font-semibold text-2xl tracking-tight">
                                      ₹ 12,999
                                      </div>
                                  </div>
          
                                  {/* Description */}
                                  <div className='font-albertSans font-regular text-[#737373] text-sm text-justify tracking-tight mb-3'>
                                      A simple, professional website to get your business online quickly. Perfect for startups, small shops, and freelancers.
                                  </div>
          
                                  {/* Buttons */}
                                  <div className='flex flex-col gap-2 mb-3'>
                                      <div
                                      onClick={() => navigateToSection("contact", "basic")}
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
                                      <p className='text-sm font-albertSans font-regular'>3–4 Page Website – Home, About, Services, Contact</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Free .COM Domain (1 year)</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Shared Hosting (1 Year) – Fast & Secure</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Mobile-Friendly Design</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>WhatsApp Contact Button</p>
                                      </div>
                                      <div className='flex items-start gap-2 max-w-full'>
                                      <FaCheck className='text-xl mt-1' /> 
                                      <p className='text-sm font-albertSans font-regular'>Free SSL Certificate</p>
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
                                      <p className='text-sm font-albertSans font-regular'>Hosting: (~₹6,466/year)</p>
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
                                        Total Renewal ≈ ₹8000/year→ Just ₹22/day
                                        </div>
                                      
                                      
                                  </div>
                                  </div>
        </div>
    </>
  )
}

export default page