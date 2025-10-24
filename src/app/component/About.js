import React from "react";

const About = () => {
  return (
    <div className="
      w-full
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      py-10
      bg-white
    ">
      <div
        className="
          flex
          flex-col
          md:flex-row
          w-full
          md:w-[90%]
          items-center
          justify-around
          gap-10
          md:gap-16
        "
      >
        {/* LEFT TEXT SECTION */}
        <div className="
          w-full
          md:w-1/2
          md:p-[5%]
          text-center
          md:text-left
          
        ">
          <h2 className="font-uxum font-bold text-2xl sm:text-3xl md:text-4xl text-[#FB744F] mb-3">
            Who We Are
          </h2>

          <p className="font-neue font-bold text-base sm:text-lg md:text-xl text-[#474747] leading-[194.7%] mb-6 sm:mb-8 text-justify md:text-left ">
            We are a small, dedicated team that loves working with businesses.
            Whether you run a beauty parlour, medical clinic, restaurant, or
            coaching class – we help you build a strong online presence.
            </p>


          <h3 className="font-uxum font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-left">
            Our mission is simple
          </h3>

          <p className="font-neue font-bold text-base sm:text-lg md:text-xl text-[#474747] text-justify md:text-left leading-[194.7%]">
            Affordable websites that actually bring leads, not just look good.
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="
          w-full
          md:w-1/2
          flex
          justify-center
          md:p-[5%]
        ">
          <img
            src="/aboutpeople.png"
            alt="vector of group"
            className="w-[80%] sm:w-[90%] md:w-full scale-95 sm:scale-120"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
