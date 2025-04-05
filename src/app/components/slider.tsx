'use client';

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "5B+ sf", label: "Aggregate Client Footprint" },
  { value: "40+", label: "States Serviced" },
  { value: "624,451 kW", label: "Solar Capacity Deployed" },
  { value: "6M+ sf", label: "Square Footage Covered" },
];

const RunningSlider = () => {
  return (
    <div className="overflow-hidden bg-white py-10">
      <motion.div
        className="flex space-x-16"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...stats, ...stats].map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[250px]"
          >
            <span className="text-5xl font-bold font-serif text-black whitespace-nowrap">
              {stat.value}
            </span>
            <span className="text-black text-sm mt-2 whitespace-nowrap">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RunningSlider;
