import Image from "next/image";
// import Hero from "./components/hero";
import VideoSection from "./components/videosection";
import HeroWithVideo from "./components/videosection";
import BlackstoneWunder from "./components/blackstonepartner";
import WhyWunder from "./components/whywunder";
import RunningSlider from "./components/slider";
import HowWeWork from "./components/howwework";
import WorkSection from "./components/howwework";
import ConsultativeApproach from "./components/howwework";
import VideoPart from "./components/videopart";
import ProjectStructures from "./components/projectstructures";
import CaseStudy from "./components/casestudy";
import EnergyCarousel from "./components/casestudy";
import ImageSlid from "./components/imagelatest";
import Transform from "./components/transform";

export default function Home() {
  return (
    <div >
      
      
          
      <div className="h-15 text-center text-gray-600 sticky">header <br /> Hero Section Below</div>

      
      {/* <Hero/> */}
      <HeroWithVideo/>
      <BlackstoneWunder/>
      <WhyWunder/>
      <RunningSlider/>
      <ConsultativeApproach/>
      <VideoPart/>
      <ProjectStructures/>
      {/* <CaseStudy/> */}
      <EnergyCarousel/>
      <ImageSlid/>
      <Transform/>
         </div>
  );
}  
