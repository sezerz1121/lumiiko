import React from 'react'

const Ourwork = () => {
  return (
    <>
        <div className="
        w-full
        min-h-screen
        md:min-h-[80vh]
        flex
        flex-col
        items-center
        justify-between
        px-4
        py-10
        bg-white
        gap-6
        mb-6
        ">
             <div className='font-poppins font-bold w-full flex items-center justify-center text-3xl md:text-4xl '>
                Our Recent Work
            </div>
            <div className="h-[80%] w-[80%] md:w-full flex flex-col md:flex-row gap-6 items-center justify-around ">
                <div className='flex flex-col items-start gap-4'>
                    <a href="https://rajpalassociates-fe.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src="/ourworkrealestate.png" className="cursor-pointer" alt="Real Estate Website" />
                    </a>
                    <p className='font-poppins font-semibold text-sm sm:text-base md:text-lg'>Website for Real Estate Developer</p>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <a href="https://myhnh.in/" target="_blank" rel="noopener noreferrer">
                        <img src="/ourworkecommerce.png" className="cursor-pointer" alt="Real Estate Website" />
                    </a>
                    <p className='font-poppins font-semibold text-sm sm:text-base md:text-lg'>Ecommerce Website for Single Product</p>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <a href="https://hcbrother-waitlist.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src="/ourworkwaitlist.png" className="cursor-pointer" alt="Real Estate Website" />
                    </a>
                    <p className='font-poppins font-semibold text-sm sm:text-base md:text-lg'>Waiting list Website for Streetwear Brand</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ourwork