'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';
import Image from 'next/image'; // Import Image component for the images in WhyWunder

export default function ConsultativeApproach() {
  const [isClient, setIsClient] = useState(false);  // To handle hydration issue

  useEffect(() => {
    setIsClient(true); // Ensure we only run this on the client-side
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  if (!isClient) return null; // Prevent rendering until after the client-side has mounted

  return (
    <div className="bg-[rgb(244,245,235)] text-[#111]">
      {/* Section: How We Work */}
      <div className="px-6 md:px-20 py-20 ">
      <div className="max-w-6xl  mb-24 lg:w-1/2">
  <p className="text-sm font-semibold mb-3 text-[#3b403c]">HOW WE WORK</p>
  <h2 className="text-4xl  font-serif font-semibold mb-6">A consultative approach</h2>
  <p className="text-[14px]   leading-relaxed text-[#3b403c]">
    Based on your assets, capabilities, and goals, we’ll help you tailor an energy
    strategy that maximizes value capture from your existing properties and
    development pipeline. We’ll then work on your behalf to expedite timelines,
    optimize outcomes, and manage logistics.
  </p>
</div>
  

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-gray-200 divide-x divide-gray-200">
          {[
            {
              number: '01',
              title: 'Identify',
              text: 'We analyze your real estate to identify the best opportunities, based on property dynamics, energy programs, and available incentives.',
            },
            {
              number: '02',
              title: 'Inform',
              text: "We'll help you make informed energy decisions, stepping you through any tradeoffs and identifying project structures that meet your goals.",
            },
            {
              number: '03',
              title: 'Streamline',
              text: 'We manage every aspect of a project, from design to installation and operation, unlocking value for your firm no matter your resourcing.',
            },
            {
              number: '04',
              title: 'Deliver',
              text: 'Our deployment strategy will be designed around your needs and engineered to reliably deliver successful outcomes at any scale.',
            },
          ].map(({ number, title, text }, idx) => (
            <div key={idx} className="p-8">
              <div className="text-3xl text-gray-400 font-serif mb-2">{number}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-[#3b403c] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-70 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://cdn.sanity.io/files/wxj9gge9/production/24839084e044ffb0a88b77bf36d27fd3f43418c3.mp4"
        ></video>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-300 mb-24"></div>

      {/* RFP Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center p-4">
        <div className="md:w-1/2">
        <p className="text-sm sm:text-base md:text-2xl lg:text-4xl font-serif mb-6">
  Competitive RFPs to secure market pricing
</p>

          <p className="text-[#3b403c] text-[13px]  leading-relaxed">
            To ensure you capture the most value possible, we always run robust Request For
            Proposal (RFP) processes to secure multiple bids from pre-screened vendors,
            energy integrators, and hardware distributors. Where possible, we batch
            projects—sometimes across multiple clients—to unlock economies of scale and
            enable RFP participants to bid more aggressively.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-[#EEFFA4] p-8 rounded-md text-[#1c1c1c] shadow-md">
            <p className="uppercase text-sm font-semibold mb-2">Maximize your value</p>
            <div className="flex items-end space-x-4">
              <span className="text-[6rem] font-serif font-bold leading-none">95%</span>
              <span className="text-lg font-medium">
                of total project cost is <br />
                Installation Labor and <br />
                System Hardware
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Wunder Section */}
      <div className="bg-[rgb(244,245,235)] py-16 px-8 md:px-16 lg:px-20 flex flex-col md:flex-row justify-between border-b border-gray-300 font-serif">
        {/* Left Section */}
        <div className="md:w-1/2 p-2 pb-8 md:pb-0 md:border-r border-gray-300 md:pr-8">
  <p className="text-gray-500 uppercase font-semibold text-sm mb-2 text-[10px]">Wunder’s Industry-first</p>
  <h2 className="text-4xl font-bold mt-2 text-gray-900 mb-4">Upside guarantee</h2>
  <p className="text-[12px] leading-[23px] font-[Sohne, sans-serif]" style={{ color: 'rgb(79, 88, 79)' }}>
    With Wunder, you can move forward with confidence knowing that you're the beneficiary of any project value. Even after contracts are signed, if we uncover opportunities to improve project economics further—expected or unexpected—we’ll amend the agreements so you benefit.
    <br />  
    <span className="mt-6 block">
      While other solar providers may keep those benefits, we prioritize transparency and always put your interests first.
    </span>
  </p>
</div>


        {/* Right Section */}
        <div className="md:w-1/2 space-y-6 mt-8 md:mt-0 flex flex-col md:pl-8">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4">
            <div className="">
              <div className='flex justify-between w-full'>
              <h4 className="text-lg text-black">New programs
              </h4>
              <Image
              src="/new-programs.svg"
              alt="New Programs"
              width={40}
              height={40}
              className="mt-2 md:mt-0"
            />
              </div>
              <p className="text-gray-600 text-sm">
              If a new incentive or energy program becomes available that improves project economics, you benefit.
              </p>
            </div>
            
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-300 pt-4">
            <div className="">
              <div className='flex justify-between w-full'>
              <h4 className="text-lg text-black">Installation costs
              </h4><Image
              src="/installation-costs.avif"
              alt="Installation Costs"
              width={40}
              height={40}
              className="mt-2 md:mt-0"
            />
              </div>
              <p className="text-gray-600 text-sm">
              While we leverage unrivaled market data to estimate costs, if RFP bids come in lower than expected, you benefit.
              </p>
            </div>
            
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-300 pt-4">
            <div className="">
              <div className='flex justify-between w-full'>
              <h4 className="text-lg text-black">Hardware</h4>
              <Image
              src="/hardware.svg"
              alt="Hardware"
              width={40}
              height={40}
              className="mt-2 md:mt-0"
            />
              </div>
              <p className="text-gray-600 text-sm">
              If market aberrations and supply chain logistics lead to significant hardware cost compression, you benefit.
              </p>
            </div>
           
          </div>

          {/* Item 4 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-300 pt-4">
            <div className="">
              <div className='flex justify-between w-full '><h4 className="text-lg text-black">Higher rates
              </h4>
              <Image
              src="/higher-rates.avif"
              alt="Higher Rates"
              width={50}
              height={50}
              className="mt-2 md:mt-0 "
            /></div>
              <p className="text-gray-600 text-sm">
              If utility rates, tariffs, or other system revenue drivers are ultimately higher than expected, you benefit.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
