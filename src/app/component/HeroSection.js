import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="
        bg-[url('/herosectionbg.png')]
        bg-cover
        bg-center
        w-full
        h-screen
        flex
        items-center
        justify-center
        px-4
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-6xl gap-6 mt-6 md:p-0">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start gap-15 md:gap-4 md:w-1/2 md:p-[5%]">
          <h1 className="text-xl  w-[80%] md:w-[90%] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-left">
            Professional Websites for <span className="text-[#FB744F]">Businesses</span> in India
          </h1>
          <p className="text-base leading-[248%] md:leading-[150%] w-[90%] sm:text-base md:text-lg lg:text-xl text-[#474747] text-center md:text-left max-w-md md:max-w-full">
            From salons to shops, doctors to restaurants – we create modern, mobile-friendly websites that bring you more customers.
          </p>
          <button className="bg-[#FB744F] hover:bg-[#e06340] text-white font-medium rounded-3xl px-6 py-3 text-lg mt-4">
            Get Your Free Quote
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <img src="/herosectionphone.png" alt="Phone mockup" className="w-full scale-60 lg:scale-75" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
