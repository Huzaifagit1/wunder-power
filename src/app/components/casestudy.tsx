"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

const logos = ["/logo-1.svg", "/logo-2.svg", "/logo-3.svg", "/logo-4.svg", "/logo-5.svg"]; // Your logos as images

const EnergyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const isAnimating = useRef(false);
  const statRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: "CA senior living leads with clean energy",
      description:
        "Oppidan, Harrison Street, and Watermark Retirement Communities engaged Wunder to deploy an on-site solar system at Hacienda San Luis Rey, a new 212-unit luxury senior living community located in Oceanside, CA. The 419 kilowatt solar system delivers substantial energy bill savings, tangible progress against aggressive ESG goals, and clean energy for Hacienda San Luis Rey’s new residents.",
      stats: ["$0", "420 kW", "659,720 kWh"],
      image: "/slide1.avif",
    },
    {
      title: "MA light industrial unlocks income",
      description: "Berkeley Partners, a national real estate firm with 11M square feet under management, engaged Wunder to deploy an on-site solar system at an industrial facility in eastern Massachusetts. The 335 kilowatt solar system supports Berkeley Partners’ ESG initiatives, all without requiring any out-of-pocket expense. The solar system came online in September of 2024 and is expected to generate 392,707 kilowatt hours of power in its first year of operation alone - offsetting more than 604,820 pounds of CO2 emissions.",
      stats: ["$1", "280 kW", "320,450 kWh"],
      image: "/slide2.avif",
    },
    {
      title: "MD warehouses power community",
      description: "Link Logistics, owner and operator of the largest U.S.-only portfolio of industrial real estate, engaged Wunder to deploy on-site solar systems across two Essex, MD warehouses. The solar systems —in aggregate, 555 kW— came online in August 2023 and are anticipated to generate 706,040 kilowatt hours of power in their first year of operation alone, offsetting more than 1,087,392 lbs of CO2 emissions",
      stats: ["$2", "360 kW", "410,300 kWh"],
      image: "/slide3.avif",
    },
    {
        title: "CA office campus saves with solar",
        description: "Jamestown, a global real estate investment and management firm with more than $11.7B in AUM, engaged Wunder to deploy a 350 kW solar energy system at The Exchange at Larkspur Landing, a 196,000 sf, 9.4-acre office campus north of San Francisco in Larkspur, California.The system came online in June 2024 and is expected to generate 570,320 kWh of power in its first year of operation, delivering energy cost savings while reducing the environmental impact of the property.",
        stats: ["$2", "360 kW", "410,300 kWh"],
        image: "/slide4.avif",
      },
      {
        title: "IL warehouse goes green",
        description: "LXP Industrial Trust (NYSE: LXP), a REIT focused on Class A warehouse and distribution investments, partnered with Wunder to deploy an on-site solar system at LXP’s Rockford, Illinois industrial facility.The 207 kW solar system came online in June 2024 and is anticipated to generate 261,990 kilowatt hours of power in its first year of operation alone, deliver substantial energy bill savings to the tenant and offsetting more than 403,500 pounds of CO2 emissions.",
        stats: ["$2", "System Size", "210,300 kWh"],
        image: "/slide5.avif",
      },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % slides[currentSlide].stats.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    lenisRef.current = new Lenis({ lerp: 0.1, smoothWheel: true });
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenisRef.current?.destroy();
  }, []);

  const changeSlide = (dir: "next" | "prev") => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const nextIndex = dir === "next"
      ? (currentSlide + 1) % slides.length
      : (currentSlide - 1 + slides.length) % slides.length;

    const currentImage = containerRef.current?.querySelector(".slide-img") as Element;
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(nextIndex);
        setCurrentStatIndex(0);
        isAnimating.current = false;
      },
    });

    tl.to(currentImage, {
      scaleX: 0,
      duration: 0.5,
      ease: "power2.inOut",
    })
      .set(currentImage, { backgroundImage: `url(${slides[nextIndex].image})` })
      .to(currentImage, {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
  };

  const animateTextFromLeft = () => {
    gsap.fromTo(
      ".carousel-text",
      { x: -500, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  };

  useEffect(() => {
    animateTextFromLeft(); // Animate text when the slide changes
  }, [currentSlide]);

  return (
    <div className="w-full py-12 border-t border-b border-[rgb(230,230,230)] relative">
      {/* Borders at corners and center */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-[2px] h-full bg-[rgb(230,230,230)]" />
        <div className="absolute top-0 right-0 w-[2px] h-full bg-[rgb(230,230,230)]" />
        <div className="absolute bottom-0 left-0 w-[2px] h-full bg-[rgb(230,230,230)]" />
        <div className="absolute bottom-0 right-0 w-[2px] h-full bg-[rgb(230,230,230)]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-[rgb(230,230,230)]" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 lg:px-12 space-y-8">
        {/* Top Row: Title and Logos */}
        <div className="flex justify-between items-start">
         
          <div>
            <p className="text-[12px] text-neutral-500 uppercase tracking-widest font-bold mb-2">
              Case Study
            </p>
            <h2 className="text-[36px] md:text-[48px] leading-tight font-serif text-neutral-900 max-w-xl carousel-text">
              {slides[currentSlide].title}
            </h2>
          </div>
          <div className="flex space-x-4 mt-2 justify-start">
  {/* Display only the first logo */}
  <div className="flex items-center space-x-2">
    <Image
      src={logos[currentSlide % logos.length]} // Dynamically choose logo based on slide index
      alt={`Logo ${currentSlide + 1}`}
      width={80}
      height={30}
    />
  </div>
</div>

        </div>
<div className="border border-[rgb(230,230,230)] w-full"></div>
        {/* Bottom Row */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Image */}
          <div className="lg:col-span-5 w-full overflow-hidden">
            <div
              className="slide-img h-[300px] lg:h-[450px] bg-cover bg-center origin-left transition-transform"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
          </div>

          {/* Description */}
          <div className="lg:col-span-4 space-y-4 lg:w-60">
            <p className="text-neutral-700 text-sm">{slides[currentSlide].description}</p>
            <button className="group relative mt-6 flex items-center space-x-2 px-4 py-2 rounded-md font-semibold text-gray-900 overflow-hidden cursor-pointer">
  {/* Background Fill Animation */}
  <span className="absolute inset-0 bg-[#e3f88e] w-[40px] group-hover:w-full transition-all duration-500 ease-out z-0 rounded-md"></span>

  {/* Content */}
  <span className="relative z-10 ">→</span>
  <span className="relative z-10 ml-1">Read Case Study</span>
</button>
          </div>

          {/* Running Stat */}
          <div className="lg:col-span-3 text-left space-y-1 border-l border-gray-300 pl-4">
  <p
    className="text-[36px] lg:text-[48px] font-semibold text-black transition-all duration-700"
    ref={statRef}
  >
    {slides[currentSlide].stats[currentStatIndex]}
  </p>
  <p className="text-sm text-gray-500">Energy Output</p>

  {/* Slide Controls */}
  <div className="flex space-x-3 absolute bottom-2 right-4 lg:w-[30%] w-full">
    <button
      onClick={() => changeSlide("prev")}
      className="w-1/2 h-10 text-gray-700 hover:text-gray-900 flex items-center justify-center border border-gray-300 cursor-pointer"
    >
      ←
    </button>
    <button
      onClick={() => changeSlide("next")}
      className="w-1/2 h-10 text-gray-700 hover:text-gray-900 flex items-center justify-center border border-gray-300 cursor-pointer"
    >
      →
    </button>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default EnergyCarousel;
    