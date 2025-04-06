"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./new.css"
import Image from "next/image";

const slides = [
  { 
    type: "video", 
    src: "/video-1.mp4",
    title: "Solar",
    content: "Harness the full potential of your property with our comprehensive solar solutions. By leveraging unused rooftops, ground space, and parking lots, we can deliver revenue-generating assets that also reduce tenant energy bills and help you meet ESG targets. From single projects to nationwide deployments, we make deploying solar painless."
  },
  { 
    type: "image", 
    src: "/image-2.avif",
    title: "EV Charging",
    content: "Future-proof your properties and attract premium tenants with our turnkey EV charging solutions. We handle everything from design and installation to ongoing management, ensuring your property is ready for the electrified future while creating new revenue streams."
  },
  { 
    type: "image", 
    src: "/image-3.avif",
    title: "Energy Storage",
    content: "Maximize your energy independence and resilience with our advanced storage solutions. Our battery systems help reduce demand charges, provide backup power during outages, and enable greater use of on-site renewable generation."
  },
  { 
    type: "video", 
    src: "/video-4.mp4",
    title: "Building Automation",
    content: "Transform your properties into intelligent, efficient spaces with our building automation systems. Our solutions optimize energy use, enhance tenant comfort, and provide real-time insights into building performance, leading to significant operational savings."
  },
  { 
    type: "image", 
    src: "/image-5.avif",
    title: "Sustainability Planning",
    content: "Achieve your ESG goals with our comprehensive sustainability planning services. We create customized roadmaps that align with your business objectives, helping you reduce carbon emissions, decrease operational costs, and enhance property value."
  },
];

export default function MultiMediaScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mediaContainerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileSlideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileContentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Set initial positions for desktop slides
    slideRefs.current.forEach((slide, index) => {
      if (slide && index > 0) {
        gsap.set(slide, { 
          y: "100%",
          opacity: 0
        });
      }
    });

    // Set initial positions for mobile slides
    mobileSlideRefs.current.forEach((slide, index) => {
      if (slide && index > 0) {
        gsap.set(slide, {
          opacity: 0,
          y: 50
        });
      }
    });

    const setupDesktopAnimations = () => {
      if (!mediaContainerRef.current || !containerRef.current) return;

      // Media scroll animation
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: "top top",
      //     end: "bottom bottom",
      //     scrub: 1,
      //     pin: mediaContainerRef.current,
      //     anticipatePin: 1,
      //   },
      // });

      // Content sections animations
      contentRefs.current.forEach((content, i) => {
        if (!content) return;

        ScrollTrigger.create({
          trigger: content,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => {
            if (i > 0 && slideRefs.current[i]) {
              gsap.to(slideRefs.current[i], {
                y: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                zIndex: 10,
              });

              if (i > 0 && slideRefs.current[i - 1]) {
                gsap.to(slideRefs.current[i - 1], {
                  y: "100%",
                  opacity: 0,
                  duration: 0.8,
                  ease: "power2.in",
                  zIndex: 1,
                });
              }
            }
          },
          onLeaveBack: () => {
            if (i > 0 && slideRefs.current[i]) {
              gsap.to(slideRefs.current[i], {
                y: "100%",
                opacity: 0,
                duration: 0.8,
                ease: "power2.in",
                zIndex: 1,
              });

              if (i > 0 && slideRefs.current[i - 1]) {
                gsap.to(slideRefs.current[i - 1], {
                  y: "0%",
                  opacity: 1,
                  duration: 0.8,
                  ease: "power2.out",
                  zIndex: 10,
                });
              }
            }
          }
        });
      });
    };

    const setupMobileAnimations = () => {
      mobileContentRefs.current.forEach((content, i) => {
        if (!content) return;

        ScrollTrigger.create({
          trigger: content,
          start: "top 80%",
          end: "top 30%",
          onEnter: () => {
            if (mobileSlideRefs.current[i]) {
              gsap.to(mobileSlideRefs.current[i], {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
              });

              // Scale down the previous slide
              if (i > 0 && mobileSlideRefs.current[i - 1]) {
                gsap.to(mobileSlideRefs.current[i - 1], {
                  scale: 0.95,
                  opacity: 0.7,
                  duration: 0.8,
                  ease: "power2.in",
                });
              }
            }
          },
          onLeaveBack: () => {
            if (i > 0 && mobileSlideRefs.current[i]) {
              gsap.to(mobileSlideRefs.current[i], {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.in",
              });

              // Restore the previous slide
              if (i > 0 && mobileSlideRefs.current[i - 1]) {
                gsap.to(mobileSlideRefs.current[i - 1], {
                  scale: 1,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power2.out",
                });
              }
            }
          }
        });
      });
    };

    // Setup animations based on screen size
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    
    const handleResize = () => {
      if (mediaQuery.matches) {
        setupDesktopAnimations();
      } else {
        setupMobileAnimations();
      }
    };

    // Initial setup
    handleResize();
    
    // Listen for changes
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div className="w-full bg-white md:px-20 py-8 md:py-16 px-6">
        <p className="text-xl md:text-base uppercase tracking-tight font-sohne" style={{ color: 'rgb(79, 88, 79)', fontSize: '12px', fontFamily: 'sans-serif', fontWeight: '600' }}>
          ENERGY SOLUTIONS
        </p>

        <h1 className="text-[20px] sm:text-[32px] md:text-[40px] lg:text-[56px] leading-[1.2] tracking-[-0.5px] text-[rgb(29,32,24)] font-serif max-w-xl w-full" style={{ fontFamily: 'Merriweather', fontWeight: '400' }}>
  Transforming your real estate with smart energy solutions
</h1>

      </div>
  
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col lg:flex-row w-full p-10 ml-10">
        {/* Left side - Media */}
        <div ref={mediaContainerRef} className="lg:w-[45%] w-full lg:sticky top-20 overflow-hidden bg-black h-[400px] relative rounded-sm left-2">
          <div className="overlay absolute inset-0 bg-black opacity-50 z-20"></div>
          {slides.map((slide, index) => (
            <div
              key={`desktop-${index}`}
              ref={(el) => { slideRefs.current[index] = el; }}
              className="absolute inset-0 z-10"
              style={{
                transform: index === 0 ? 'translateY(0%)' : 'translateY(100%)',
                opacity: index === 0 ? 1 : 0
              }}
            >
              {slide.type === "video" ? (
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div ref={containerRef} className="lg:w-[50%] w-full bg-white p-6 md:p-10">
          {slides.map((slide, index) => (
            <div 
              key={`desktop-content-${index}`} 
              ref={(el) => { contentRefs.current[index] = el; }} 
              className="min-h-[50vh] lg:min-h-screen flex flex-col justify-center px-4 md:px-6"
            >
              <h2 className="text-[32px] md:text-[48px] lg:text-[52px] font-normal mb-4 md:mb-6 whitespace-nowrap" style={{ color: 'rgb(29, 32, 24)' }}>
                {slide.title}
              </h2>
              <p className="text-[16px] leading-relaxed font-sans" style={{ color: 'rgb(79, 88, 79)' }}>
                {slide.content}
              </p>
              <button className="group relative mt-6 flex items-center space-x-2 px-4 py-2 rounded-md font-semibold text-gray-900 overflow-hidden cursor-pointer">
                <span className="absolute inset-0 bg-[#e3f88e] w-[40px] group-hover:w-[50%] transition-all duration-500 ease-out z-0 rounded-md"></span>
                <span className="relative z-10 px-1">→</span>
                <span className="relative z-10">Explore Our Solutions</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full">
        {slides.map((slide, index) => (
          <div 
            key={`mobile-${index}`} 
            className="relative min-h-[100vh] flex flex-col"
          >
            {/* Media container with overlay effect */}
            <div 
              ref={(el) => { mobileSlideRefs.current[index] = el; }}
              className="w-full h-[50vh] sticky top-0 overflow-hidden"
              style={{
                opacity: index === 0 ? 1 : 0,
                transform: index === 0 ? 'translateY(0)' : 'translateY(50px)',
                zIndex: slides.length - index // Stacking context for overlay effect
              }}
            >
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              {slide.type === "video" ? (
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Content container */}
            <div 
              ref={(el) => { mobileContentRefs.current[index] = el; }}
              className="flex-1 bg-white p-6 flex flex-col justify-center"
              style={{ zIndex: slides.length - index + 1 }}
            >
              <h2 className="text-[32px] md:text-[48px] font-normal mb-4 md:mb-6" style={{ color: 'rgb(29, 32, 24)' }}>
                {slide.title}
              </h2>
              <p className="text-[16px] leading-relaxed font-sans" style={{ color: 'rgb(79, 88, 79)' }}>
                {slide.content}
              </p>
              <button className="group relative mt-6 flex items-center space-x-2 px-4 py-2 rounded-md font-semibold text-gray-900 overflow-hidden cursor-pointer">
                <span className="absolute inset-0 bg-[#e3f88e] w-[40px] group-hover:w-[50%] transition-all duration-500 ease-out z-0 rounded-md"></span>
                <span className="relative z-10 px-1">→</span>
                <span className="relative z-10">Explore Our Solutions</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}