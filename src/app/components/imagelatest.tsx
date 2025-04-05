'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';  // Import the Image component from Next.js

const PressSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);    

  if (!isMounted) return null;

  const pressItems = [
    {
      title: 'Metro Self Storage Partners With Wunder to Deploy Solar Across Portfolio',
      source: 'Inside Self Storage',
    },
    {
      title: 'Berkeley Partners Engages Wunder to Deploy Solar at MA Industrial Facility',
      source: 'Yahoo Finance',
    },
    {
      title: 'LXP Industrial Trust Partners With Wunder to Expand Solar Initiatives',
      source: 'Business Wire',
    },
    {
      title: 'Wunder Capital Announces Major Solar Deployment With National Storage Provider',
      source: 'Renewable Energy World',
    },
    {
      title: 'Self-Storage Sector Embraces Solar Through Wunder Partnership',
      source: 'Commercial Property Executive',
    },
  ];

  return (
    <div className="w-full bg-[#f4f5eb] border-t border-[#e5e3df]">
      {/* 🔄 Image Slider Section */}
      <div className="py-12 w-full border-b border-[#e5e3df] overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
          style={{ width: '100%' }} // Ensure the width is set to 100%
        >
          {[...Array(16)].map((_, index) => {
            const imageNum = (index % 8) + 1;
            return (
              <div
                key={`img-${imageNum}-${index}`}
                className="flex-shrink-0 px-3"
                style={{ width: '180px' }}
              >
                <div className="relative h-[120px] w-full overflow-hidden rounded-lg shadow-sm">
                  {/* Use next/image for optimized image rendering */}
                  <Image
                    src={`/imageslide-${imageNum}.avif`}
                    alt={`Slide ${imageNum}`}
                    className="absolute h-full w-full object-cover"
                    width={180}   // Set the width
                    height={120}   // Set the height
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 📰 Featured Press Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column */}
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div className="p-10">
                <h3 className="text-[10px] text-sm uppercase tracking-widest text-gray-500 mb-2">
                  The Latest
                </h3>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Featured Press</h2>
                <button className="group relative mt-6 flex items-center space-x-2 px-4 py-2 rounded-md font-semibold text-gray-900 overflow-hidden cursor-pointer">
                  {/* Background Fill Animation */}
                  <span className="absolute inset-0 bg-[#e3f88e] w-[40px] group-hover:w-full transition-all duration-500 ease-out z-0 rounded-md"></span>

                  {/* Content */}
                  <span className="relative z-10">→</span>
                  <span className="relative z-10 ml-1">View All</span>
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 border-l border-[#e5e3df]">
              <div className="flex flex-col">
                {pressItems.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between border-b border-[#e5e3df] pb-4 transition-colors duration-200 hover:bg-[#f8f8f8] px-2"
                  >
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-1 text-gray-900">{item.title}</h3>
                      <p className="text-[10px] text-sm text-gray-500">{item.source}</p>
                    </div>
                    {/* Arrow Box */}
                    <div className="transition-all duration-200 group-hover:translate-x-1 group-hover:text-black text-gray-400 text-xl">
                      →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressSection;
