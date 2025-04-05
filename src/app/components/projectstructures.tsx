import React from "react";
import Image from "next/image";

const ProjectStructures = () => {
  return (
    <div className="w-full bg-white border border-[rgb(230,230,230)] relative">
      {/* Center vertical border */}
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-[rgb(230,230,230)] z-10 lg:block hidden" />

      {/* Section 1 */}
      <div className="w-full px-5 sm:px-3 py-12 sm:py-16 border-b border-[rgb(230,230,230)] relative z-20">
        <div className="max-w-full mx-auto py-10 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left content */}
            <div className="lg:w-1/2">
              <h2 className="text-[12px] font-bold text-[rgb(79,88,79)] mb-4">
                PROJECT STRUCTURES
              </h2>
              <h3
                className="text-[24px] sm:text-[35px] leading-[45px] font-serif"
                style={{ color: "rgb(29, 32, 24)" }}
              >
                Structuring energy projects to meet your needs
              </h3>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p
                  className="text-[14px] mt-2 leading-[23px] font-normal"
                  style={{
                    fontFamily: "Sohne, sans-serif",
                    color: "rgb(79, 88, 79)",
                  }}
                >
                  We employ a number of structures that are designed to help
                  our clients capitalize on energy opportunities. Based on your
                  properties, capabilities, and goals, we&apos;ll help you evaluate
                  whether project ownership makes sense for you, or whether a
                  no-cost solution is optimal. The right structure may vary from
                  property to property. We are committed to delivering the
                  solution that works best for you and your portfolio.
                </p>
              </div>

              <button className="group relative mt-6 flex items-center space-x-2 px-4 py-2 rounded-md font-semibold text-gray-900 overflow-hidden cursor-pointer">
                <span className="absolute inset-0 bg-[#e3f88e] w-[40px] group-hover:w-full transition-all duration-500 ease-out z-0 rounded-md"></span>
                <span className="relative z-10">→</span>
                <span className="relative z-10 ml-1">Learn More</span>
              </button>
            </div>

            {/* Right image */}
            <div className="lg:w-1/2 relative">
              <Image
                src="/solar.avif"
                alt="Solar energy project"
                width={500}
                height={300}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full px-5 sm:px-3 pt-4 pb-12 sm:pb-16 relative z-20">
        <div className="max-w-full mx-auto py-10 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left image */}
            <div className="lg:w-1/2 relative order-last lg:order-first">
              <Image
                src="/projects.avif"
                alt="Projects"
                width={500}
                height={300}
                className="object-cover"
                priority
              />
            </div>

            {/* Right content */}
            <div className="lg:w-1/2">
              <h2 className="text-[12px] font-bold text-[rgb(79,88,79)] mb-4">
                TECHNOLOGY
              </h2>
              <h3
                className="text-[24px] sm:text-[35px] leading-[45px] font-serif"
                style={{ color: "rgb(29, 32, 24)" }}
              >
                Meet Astra, the industry-leading energy platform
              </h3>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p
                  className="text-[14px] mt-2 leading-[23px] font-normal"
                  style={{
                    fontFamily: "Sohne, sans-serif",
                    color: "rgb(79, 88, 79)",
                  }}
                >
                  Seamlessly manage your national energy strategy with our
                  centralized data-driven platform. Track portfolio progress,
                  get project updates, receive notifications about emerging
                  opportunities, monitor real-time production, and engage
                  tenants with on-site system performance kiosks. And when
                  reporting season arrives, your data is just a click away.
                </p>
              </div>

              <button className="group relative mt-6 flex items-center space-x-2 px-4 py-2 rounded-md font-semibold text-gray-900 overflow-hidden cursor-pointer">
                <span className="absolute inset-0 bg-[#e3f88e] w-[40px] group-hover:w-full transition-all duration-500 ease-out z-0 rounded-md"></span>
                <span className="relative z-10">→</span>
                <span className="relative z-10 ml-1">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStructures;
  