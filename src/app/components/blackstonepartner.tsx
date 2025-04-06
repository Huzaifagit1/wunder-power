import React from "react";
import "./Blackstonewunder.css"

const BlackstoneWunder = () => {
  return (
    <div className="bg-[#f6f7f2] flex flex-col-reverse md:flex-row items-center justify-between p-16 rounded-lg">
      {/* Left Section */}
      <div className="md:w-[40%]">
        <p className="text-gray-600 text-sm md:text-sm xl:text-xs main-title">
          Through our $650M partnership with Blackstone, Wunder has the
          funding and capital to seamlessly deploy no-CapEx energy solutions for clients nationwide.
        </p>
        <button className="group relative mt-6 flex items-center space-x-2 px-4 py-2 rounded-md font-semibold text-gray-900 overflow-hidden cursor-pointer learn-more-btn text-xs">
          {/* Background Fill Animation */}
          <span className="absolute inset-0 bg-[#e3f88e] w-[40px] group-hover:w-full transition-all duration-500 ease-out z-0 rounded-md"></span>

          {/* Content */}
          <span className="relative z-10 ">→</span>
          <span className="relative z-10 ml-4">Learn More</span>
        </button>

      </div>    

      {/* Right Section */}
      <div className="md:w-[50%] flex justify-center max-md:mb-10 md:mt-0">
        <div className="flex items-center space-x-4">
          <div className="bg-black text-white px-4 py-2 rounded-md font-semibold">Blackstone</div>
          <span className="text-gray-500 text-xl">×</span>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-700">
              <path d="M12 0c-1.2 0-2.3.5-3.1 1.3L1.3 8.8a4.3 4.3 0 000 6.4l7.6 7.5a4.4 4.4 0 006.3 0l7.6-7.5a4.3 4.3 0 000-6.4l-7.6-7.5A4.2 4.2 0 0012 0zm0 1.8c.8 0 1.7.3 2.3.9l7.6 7.5c1.3 1.2 1.3 3.2 0 4.4l-7.6 7.5a3.3 3.3 0 01-4.6 0l-7.6-7.5a3.2 3.2 0 010-4.4l7.6-7.5c.6-.6 1.5-.9 2.3-.9z" />
            </svg>
            <span className="font-semibold text-gray-700">Wunder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackstoneWunder;
