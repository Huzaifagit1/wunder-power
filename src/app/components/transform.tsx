'use client';

import { useRef } from 'react';

export default function HeroWithGrid() {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-full h-[400px]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 grid grid-cols-8 w-full h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`col-${i}`} className="border-r border-gray-200 h-full"></div>
          ))}  
        </div>
        <div className="absolute inset-0 grid grid-rows-6 w-full h-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`row-${i}`} className="border-b border-gray-200 w-full"></div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div 
        ref={textContainerRef}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:p-20 w-full space-y-8 "
      >
        <div className="w-full lg:w-auto flex-1 mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-3xl lg:text-7xl xl:text-[67px] font-serif text-[rgb(29,32,24)] mb-6 leading-tight tracking-tight w-full text-center  " >
            Ready to  <span className="highlighted-text mr-3">transform </span>
            your energy 
            <br className='max-lg:hidden' />  
            <span> strategy</span>       
          </h1>  
        </div>

        <div className="w-full lg:w-auto flex-1 flex flex-col items-center justify-center">
          <button className="relative bg-[#e3f88e] text-black px-8 py-5  shadow-md hover:bg-black transition-all duration-420 cursor-pointer text-sm md:text-base font-medium overflow-hidden group">
            {/* Background animation effect */}
            <span className="absolute left-0 top-0 bottom-0 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>

            {/* Arrow animation */}
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              &#8594; {/* Right arrow symbol */}
            </span>
            
            {/* Button text */}
            <span className="relative z-10 group-hover:text-white transition-all duration-300 text-[12px]">
              Schedule a Consultation  
            </span>  
          </button>
        </div>
      </div>

      <style jsx global>{`
        .highlighted-text {
          color: black;
          position: relative;
          display: inline-block;
          -webkit-text-stroke-color: rgb(175, 188, 64);
          text-shadow: rgb(241, 255, 115) 0px 0px 4.67763px, rgb(241, 255, 115) 0px 0px 7.48421px;
          -webkit-text-stroke-width: 0.1px;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
