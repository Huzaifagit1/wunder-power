'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const mediaTabs = [
  { id: 1, type: 'video', src: '/video-1.mp4', label: 'Video 1', description: 'This is the description for Video 1.' },
  { id: 2, type: 'image', src: '/image-2.avif', label: 'Image 2', description: 'This is the description for Image 2.' },
  { id: 3, type: 'image', src: '/image-3.avif', label: 'Image 3', description: 'This is the description for Image 3.' },
  { id: 4, type: 'video', src: '/video-4.mp4', label: 'Video 4', description: 'This is the description for Video 4.' },
  { id: 5, type: 'image', src: '/image-5.avif', label: 'Image 5', description: 'This is the description for Image 5.' },
]

gsap.registerPlugin(ScrollTrigger)

export default function MediaScrollSections() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])
  
  useEffect(() => {
    // Loop over all sections and apply scroll triggers for each
    sectionsRef.current.forEach((section) => {
      if (!section) return

      // Scroll animation for the left side (image or video)
      gsap.fromTo(
        section.querySelector('.media-left'),
        { y: 100, opacity: 0 }, // Starting position and opacity
        {
          y: 0, // Final position
          opacity: 1, // Final opacity
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', // Trigger when the top of the section reaches 80% of the viewport height
            toggleActions: 'play none none reverse', // Play the animation when the section is in view
            markers: false, // Set to `true` if you want to debug and see the trigger positions
          },
        }
      )

      // Scroll animation for the right side (text content)
      gsap.fromTo(
        section.querySelector('.media-right'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', // Same trigger for smooth scrolling effect
            toggleActions: 'play none none reverse',
            markers: false, // Turn off markers to avoid debug markers
          },
        }
      )
    })
  }, [])

  return (
    <section className="w-full px-4 py-16 max-w-6xl mx-auto space-y-24">
      {mediaTabs.map((item, index) => (
        <div
          key={item.id}
          ref={el => (sectionsRef.current[index] = el)}
          className="flex flex-col md:flex-row gap-10 items-center opacity-0"
        >
          {/* Left side: Image or video with scroll-triggered animation */}
          <div className="media-left w-full md:w-1/2 relative overflow-hidden">
            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-xl shadow-lg"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.label}
                width={800}
                height={450}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            )}
          </div>

          {/* Right side: Text content */}
          <div className="media-right w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{item.label}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
