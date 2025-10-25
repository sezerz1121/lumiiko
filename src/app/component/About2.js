import React from 'react'

const About2 = () => {
  return (
    <>
        <div className="
        w-full
        min-h-screen
        flex
        flex-col
        items-center
        justify-around
        px-4
        py-10
        bg-white
        gap-6
        ">
            <div className='font-poppins font-bold w-full flex items-center justify-center text-3xl md:text-4xl '>
                What We Do
            </div>
            <div className=' w-full md:w-[90%] flex items-center justify-around'>
                <div className='hidden md:flex '>
                    <img src="/about2Laptop.png"/>
                </div>
                <div content=' w-full md:w-1/2 flex-col items-center gap-4'>
                   <div className="flex items-center justify-start w-full z-10 mb-4">
                    <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-[4px_4px_60px_5px_rgba(251,116,79,0.35)] sm:min-w-[320px] md:min-w-[368px] w-full max-w-[420px]">
                        <img
                        src="/about2CheckMark.png"
                        alt="check"
                        className=""
                        />
                        <p className="text-[#474747] font-semibold font-poppins text-sm sm:text-base md:text-lg leading-snug">
                        Modern websites that look<br />good on mobile & computer.
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center justify-start w-full z-10 mb-4">
                    <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-[4px_4px_60px_5px_rgba(251,116,79,0.35)] sm:min-w-[320px] md:min-w-[368px] w-full max-w-[420px]">
                        <img
                        src="/about2CheckMark.png"
                        alt="check"
                        className=""
                        />
                        <p className="text-[#474747] font-semibold font-poppins text-sm sm:text-base md:text-lg leading-snug">
                        Get found on Google by your<br /> customers.
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center justify-start w-full z-10 mb-4 ">
                    <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-[4px_4px_60px_5px_rgba(251,116,79,0.35)] sm:min-w-[320px] md:min-w-[368px] w-full max-w-[420px]">
                        <img
                        src="/about2CheckMark.png"
                        alt="check"
                        className=""
                        />
                        <p className="text-[#474747] font-semibold font-poppins text-sm sm:text-base md:text-lg leading-snug">
                        Turn visitors into paying<br /> customers with direct leads.
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center justify-start w-full z-10 mb-4 ">
                    <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-[4px_4px_60px_5px_rgba(251,116,79,0.35)] sm:min-w-[320px] md:min-w-[368px] w-full max-w-[420px]">
                        <img
                        src="/about2CheckMark.png"
                        alt="check"
                        className=""
                        />
                        <p className="text-[#474747] font-semibold font-poppins text-sm sm:text-base md:text-lg leading-snug">
                        Friendly support on call &<br />  WhatsApp – always available.
                        </p>
                    </div>
                    </div>
                    

                    

               
                </div>
            </div>
            <div className='h-[5%]'>

            </div>
        </div>
    </>
  )
}

export default About2