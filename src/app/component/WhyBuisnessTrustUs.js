import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const WhyBuisnessTrustUs = () => {
  return (
    <>
         <div className="
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
        
        ">
            <div className='font-poppins font-bold w-full flex items-center justify-center text-3xl md:text-4xl text-center'>
                Why Businesses Trust Us
            </div>
            <div className=' w-full md:w-[90%] flex items-center justify-around'>
                <div className='hidden md:flex '>
                    <img src="/TrustLaptop.png" className='scale-114' alt='laptop'/>
                </div>
                <div className='flex flex-col items-center md:items-start gap-6'>
                    <div className='text-xl md:text-2xl font-semibold font-poppins'>Custom Websites Made for Local Success</div>
                    <div className='flex flex-col items-start gap-2'>
                        <div className='flex items-center gap-2'><FaArrowRightLong /><p className='text-sm md:text-lg font-semibold font-poppins'> Clear & Honest Pricing – No hidden charges</p></div>
                        <div className='flex items-center gap-2'><FaArrowRightLong /><p className='text-sm md:text-lg font-semibold font-poppins'> Fast Delivery – Websites ready in just 7–10 days</p></div>
                        <div className='flex items-center gap-2'><FaArrowRightLong /><p className='text-sm md:text-lg font-semibold font-poppins'> Mobile + SEO Ready – Customers can find you easily</p></div>
                        <div className='flex items-center gap-2'><FaArrowRightLong /><p className='text-sm md:text-lg font-semibold font-poppins'> Personal Support – Call or WhatsApp anytime</p></div>
                    </div>
                    <div className="text-sm md:text-lg font-semibold font-poppins text-justify max-w-sm md:max-w-lg leading-relaxed">
                        Get a powerful website that builds trust, attracts customers, and grows your business. Whether it’s a restaurant, shop, or service, we make websites that are affordable, fast, and designed for results.
                    </div>

                </div>
            </div>
            
        </div>
    </>
  )
}

export default WhyBuisnessTrustUs