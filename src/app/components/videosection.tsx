'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

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
        className="absolute inset-0 w-full h-full translate-y-full z-20"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
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
        className="relative z-10 h-full flex flex-col lg:flex-row lg:items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 w-full space-y-8 lg:space-y-0 lg:space-x-16 lg:justify-center"
      >
        <div className="w-full lg:w-auto lg:flex-1 mb-8 lg:mb-0 lg:pr-8 flex justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[67px] font-serif text-[rgb(29,32,24)] mb-6 leading-tight tracking-tight w-full text-center sm:text-left max-w-4xl">
            Real estate's <span className="highlighted-text">most</span>
            <br />
            <span className="highlighted-text">trusted</span> energy
            <br />
            partner
          </h1>  
        </div>

        <div className="w-full lg:w-auto lg:flex-1 flex flex-col items-center justify-center">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-md text-center">
            Seamlessly deploy solar, battery storage, and EV chargers across your portfolio.
          </p>
          <button className="group relative mt-6 flex items-center space-x-2 px-4 py-2 rounded-md font-semibold text-gray-900 overflow-hidden cursor-pointer">
            {/* Background Fill Animation */}
            <span className="absolute inset-0 bg-[#e3f88e] w-[40px] group-hover:w-full transition-all duration-500 ease-out z-0 rounded-md"></span>

            {/* Content */}
            <span className="relative z-10 px-1">→</span>
            <span className="relative z-10">Explore Our Solutions</span>
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

          h1 {
            font-size: 2.5rem;
            line-height: 1.2;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 1036px) {
          h1 {
            font-size: 3rem; /* Medium screens */
            text-align: center; /* Center text on smaller screens */
            max-width: 80%; /* Prevent overflow */
            margin-left: auto; /* Center the text */
            margin-right: auto; /* Center the text */
          }
        }
      `}</style>
    </section>
  )
}
