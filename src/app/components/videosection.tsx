'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import "./videosection.css"

export default function HeroWithGrid() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const textContainerRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
    }  
  }, [])

  useEffect(() => {
    if (!isClient) return

    const loadGSAP = async () => {
      const { default: ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (containerRef.current && videoRef.current && textContainerRef.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: true,
            pin: true,
            anticipatePin: 1
          }
        })
        .to(videoRef.current, {
          y: '0%',
          ease: 'none',
          duration: 2,
        })
        .to(textContainerRef.current, {
          opacity: 0.2,
          ease: 'power1.in',
          duration: 2,
        }, "<")
      }
    }

    loadGSAP()
  }, [isClient])

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
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
  
    {/* Video overlay */}
    <div
      ref={videoRef}
      className="absolute inset-0 w-full h-[90vh] translate-y-full z-20"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[90vh] object-cover"
      >
        <source
          src="https://cdn.sanity.io/files/wxj9gge9/production/c0b64236bd7a5a9a425ddf69d7448af74435b652.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  
    {/* Hero Content */}
<div 
  ref={textContainerRef}
  className="relative z-10 h-full flex flex-col lg:flex-row items-center px-6 sm:px-10 md:px-16 lg:px-20 w-full space-y-4 lg:space-y-0 lg:space-x-16"
>
  {/* Left Container */}
  <div className="w-[100%] lg:w-[60%] mb-8 lg:mb-0 flex justify-start ">
    <h1 className="text-4xl lg:text-[60px] font-serif text-[rgb(29,32,24)] mb-6 leading-tight tracking-tight sm:text-left">
      Real estate’s <span className="highlighted-text pr-3">most</span><span className="highlighted-text"> trusted</span> energy partner
    </h1>  
  </div>

  {/* Right Container */}
  <div className="w-[100%] lg:w-[40%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-lg:items-start max-lg:justify-start ">
    <p className="mb-6 sm:mb-8 max-w-md max-lg:min-w-[100%] max-lg:text-left hero-section-desc">
      Seamlessly deploy solar, battery storage, and EV chargers across your portfolio.
    </p>
    <button className="group relative mt-6 flex space-x-2 px-4 py-2 rounded-md hero-section-btn overflow-hidden cursor-pointer">
      <span className="absolute inset-0 bg-[#e3f88e] w-[40px] group-hover:w-full transition-all duration-500 ease-out z-0 rounded-md"></span>

      <span className="relative z-10">→</span>
      <span className="relative z-10 ml-2">Explore Our Solutions</span>
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
  
      /* Ensure content doesn't overflow on small screens */
      @media (max-width: 1024px) {
        section {
          padding-top: 80px;
          padding-bottom: 80px;
          height: auto;
          min-height: 100vh;
        }
      }

    `}</style>
  </section>
  
  )
}
