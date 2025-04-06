import React from "react";
import Image from "next/image";

const WhyWunder = () => {
  return (
    <div className="bg-white py-16 px-5 md:px-16 lg:px-22 flex flex-col md:flex-row justify-between border-b border-gray-300 font-serif">
      {/* Left Section */}
      <div className="md:w-1/2 pb-8 md:pb-0 md:border-r border-gray-300 md:pr-8">
        <h6 className="text-gray-500 uppercase font-semibold text-sm">Why Wunder</h6>
        <h2 className="text-xl md:text-3xl lg:text-4xl leading-snug mt-2 text-gray-900 md:w-[80%]">
          Get more value out of your properties with Wunder
        </h2>
  
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-6 mt-5 md:mt-0 flex flex-col md:pl-8">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 max-md:border-t max-md:border-gray-300">
          <div className="">
            <div className="flex justify-between w-full">
              <h4 className="text-lg text-black">Trusted experts</h4>
              <Image
                src="/trusted-experts.png"
                alt="Trusted experts"
                width={40}
                height={40}
                className="mt-2 md:mt-0 md:ml-4"
              />
            </div>  
            <p className="text-gray-600 text-sm ">
              We understand energy isn’t your primary business. As your advocate and consultant, we’ll help you craft and execute an energy strategy based on your assets, capabilities, and goals.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-300 pt-4">
          <div className="">
            <div className="flex justify-between w-full">
              <h4 className="text-lg text-black">Long-term vision</h4>
              <Image
                src="/long-term-vision.png"
                alt="Long-term vision"
                width={40}
                height={40}
                className="mt-2 md:mt-0 md:ml-4"
              />
            </div>
            <p className="text-gray-600 text-sm ">
              Long-lasting energy infrastructure demands a long-term partner. We provide full-lifecycle solutions, managing everything from design and engineering to finance and operations.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-300 pt-4">
          <div className="">
            <div className="flex justify-between w-full">
              <h4 className="text-lg text-black">Relationship-focused</h4>
              <Image
                src="/relationship-focused.png"
                alt="Relationship focused"
                width={40}
                height={40}
                className="mt-2 md:mt-0 md:ml-4"
              />
            </div>
            <p className="text-gray-600 text-sm ">
              We focus on delivering a transparent, industry-leading client experience. Our goal is to help you scale your energy strategy across your portfolio and acquisitions.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-300 pt-4">
          <div className="">
            <div className="flex justify-between w-full">
              <h4 className="text-lg text-black">Outcome oriented</h4>
              <Image
                src="/outcome-oriented.png"
                alt="Outcome oriented"
                width={40}
                height={40}
                className="mt-2 md:mt-0 md:ml-4"
              />
            </div>  
            <p className="text-gray-600 text-sm ">
              We optimize the deployment process to reduce costs, unlock opportunities, and deliver successful outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWunder;
