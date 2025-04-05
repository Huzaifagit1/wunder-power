import React from "react";

const VideoPart = () => {
  return (
    <div className="relative w-[90%] mx-auto h-[250px] md:h-[350px] my-8 rounded-lg overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          muted
          loop
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.sanity.io/files/wxj9gge9/production/afaa0bd80190642fa5b64e501d699f268d05e2cc.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
  
      {/* Text Content - centered overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w mx-auto text-white">
        <h2 className=" sm:text-[48px] md:text-[60px] lg:text-[72px] text-center font-serif font-semibold mb-4 sm:mb-2 leading-tight">
  Unlock revenue and<br />
  meet your ESG goals
</h2>


          <button className="relative bg-[#e3f88e] text-black px-6 py-3  shadow-md hover:bg-black transition-all duration-420 cursor-pointer text-sm md:text-base font-medium overflow-hidden group">
  {/* Background animation effect */}
  <span className="absolute left-0 top-0 bottom-0 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>

  {/* Arrow animation */}
  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    &#8594; {/* Right arrow symbol */}
  </span>
  
  {/* Button text */}
  <span className="relative z-10 group-hover:text-white transition-all duration-300">
    Schedule a Demo  
  </span>
</button>

  
          
        </div>
      </div>
    </div>
  );
};

export default VideoPart;