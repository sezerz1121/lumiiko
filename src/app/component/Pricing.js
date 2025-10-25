import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <>
         <div className="
                w-full
                min-h-screen
                
                flex
                flex-col
                items-center
                md:justify-around
                px-4
                py-10
                bg-white
                gap-15
                md:gap-6
                
                ">
                    <div className='font-poppins font-bold w-full flex items-center justify-center text-3xl md:text-4xl text-center'>
                        Simple & Affordable Pricing
                    </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-[90%] mx-auto gap-6 py-6">
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
                            <div className='font-albertSans font-medium bg-white flex justify-center items-center h-12 rounded-xl tracking-tight border border-[#737373]/50 cursor-pointer shadow-2xs 
                                            transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'>
                            Read More
                            </div>

                            <div className='font-albertSans font-medium bg-[#232323] text-white flex justify-center items-center h-12 rounded-xl tracking-tight border border-[#737373]/50 cursor-pointer shadow-2xs 
                                            transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'>
                            Enquire now
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
                            <p className='text-sm font-albertSans font-regular'>8+ Features</p>
                            </div>
                        </div>
                        </div>


                        <div className="bg-linear-to-b from-[#F9E9E5] via-[#F9E9E5] to-[#FFFFFF] 
                                        w-full sm:w-72 md:w-80 lg:w-96 p-6 rounded-xl border border-[#737373]/50 
                                        overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-all duration-200 min-h-[472px] sm:min-h-[472px] md:min-h-[472px]">

                            {/* Plan Title */}
                            <div className='font-albertSans font-semibold text-lg mb-1 tracking-[2%]'>
                                Standard Plan
                            </div>

                            {/* Prices */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className="font-albertSans font-semibold text-lg text-[#FF0303] line-through tracking-tight">
                                ₹ 20,000
                                </div>
                                <div className="font-albertSans font-semibold text-2xl tracking-tight">
                                ₹ 17,999
                                </div>
                            </div>

                            {/* Description */}
                            <div className='font-albertSans font-regular text-[#737373] text-sm text-justify tracking-tight mb-3'>
                                You get a complete professional website with hosting, domain, SEO. Buying these separately costs more and wastes time.
                            </div>

                            {/* Buttons */}
                            <div className='flex flex-col gap-2 mb-3'>
                                <div className='font-albertSans font-medium bg-white flex justify-center items-center h-12 rounded-xl tracking-tight border border-[#737373]/50 cursor-pointer shadow-2xs 
                                                transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'>
                                Read More
                                </div>

                                <div className='font-albertSans font-medium bg-[#232323] text-white flex justify-center items-center h-12 rounded-xl tracking-tight border border-[#737373]/50 cursor-pointer shadow-2xs 
                                                transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'>
                                Enquire now
                                </div>
                            </div>

                            {/* Divider */}
                            <hr className="border-[#737373]/50 my-3" />

                            {/* Features */}
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-start gap-2 max-w-full'>
                                <FaCheck className='text-xl mt-1' /> 
                                <p className='text-sm font-albertSans font-regular'>5–7 Page Website – Home, About, Services, Contact, etc.</p>
                                </div>
                                <div className='flex items-start gap-2 max-w-full'>
                                <FaCheck className='text-xl mt-1' /> 
                                <p className='text-sm font-albertSans font-regular'>Free .COM Domain (1 year)</p>
                                </div>
                                <div className='flex items-start gap-2 max-w-full'>
                                <FaCheck className='text-xl mt-1' /> 
                                <p className='text-sm font-albertSans font-regular'>9+ Features</p>
                                </div>
                            </div>
                            </div>


                        <div className="bg-linear-to-b from-[#BDEBBB] via-[#BDEBBB] to-[#FFFFFF] 
                                        w-full sm:w-72 md:w-80 lg:w-96 p-6 rounded-xl border border-[#737373]/50 
                                        overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-all duration-200 min-h-[472px] sm:min-h-[472px] md:min-h-[472px]">

                            {/* Plan Title */}
                            <div className='font-albertSans font-semibold text-lg mb-1 tracking-[2%]'>
                                Ecommerce Plan
                            </div>

                            {/* Prices */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className="font-albertSans font-semibold text-lg text-[#FF0303] line-through tracking-tight">
                                ₹ 27,000
                                </div>
                                <div className="font-albertSans font-semibold text-2xl tracking-tight">
                                ₹ 24,999
                                </div>
                            </div>

                            {/* Description */}
                            <div className='font-albertSans font-regular text-[#737373] text-sm text-justify tracking-tight mb-3'>
                               Launch your online store with everything you need- website, hosting, domain, payment integration, and SEO- all in one complete setup.
                            </div>

                            {/* Buttons */}
                            <div className='flex flex-col gap-2 mb-3'>
                                <div className='font-albertSans font-medium bg-white flex justify-center items-center h-12 rounded-xl tracking-tight border border-[#737373]/50 cursor-pointer shadow-2xs 
                                                transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'>
                                Read More
                                </div>

                                <div className='font-albertSans font-medium bg-[#232323] text-white flex justify-center items-center h-12 rounded-xl tracking-tight border border-[#737373]/50 cursor-pointer shadow-2xs 
                                                transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'>
                                Enquire now
                                </div>
                            </div>

                            {/* Divider */}
                            <hr className="border-[#737373]/50 my-3" />

                            {/* Features */}
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-start gap-2 max-w-full'>
                                <FaCheck className='text-xl mt-1' /> 
                                <p className='text-sm font-albertSans font-regular'>5–7 Page Website – Home, About, Services, Contact, etc.</p>
                                </div>
                                <div className='flex items-start gap-2 max-w-full'>
                                <FaCheck className='text-xl mt-1' /> 
                                <p className='text-sm font-albertSans font-regular'>Free .COM Domain (1 year)</p>
                                </div>
                                <div className='flex items-start gap-2 max-w-full'>
                                <FaCheck className='text-xl mt-1' /> 
                                <p className='text-sm font-albertSans font-regular'>11+ Features</p>
                                </div>
                            </div>
                            </div>

                        <div className="bg-linear-to-b from-[#DEE6FD] via-[#DEE6FD] to-[#FFFFFF] 
                                        w-full sm:w-72 md:w-80 lg:w-96 p-6 rounded-xl border border-[#737373]/50 
                                        overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-all duration-200 min-h-[472px] sm:min-h-[472px] md:min-h-[472px]">

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
                                <div className='font-albertSans font-medium bg-white flex justify-center items-center h-12 rounded-xl tracking-tight border border-[#737373]/50 cursor-pointer shadow-2xs 
                                                transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'>
                                Read More
                                </div>

                                <div className='font-albertSans font-medium bg-[#232323] text-white flex justify-center items-center h-12 rounded-xl tracking-tight border border-[#737373]/50 cursor-pointer shadow-2xs 
                                                transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'>
                                Enquire now
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
                                <p className='text-sm font-albertSans font-regular'>9+ Features</p>
                                </div>
                            </div>
                            </div>

                   </div>
                </div>
    </>
  )
}

export default Pricing