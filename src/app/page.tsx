
// import Hero from "./components/hero";
import HeroWithVideo from "./components/videosection";
import BlackstoneWunder from "./components/blackstonepartner";
import WhyWunder from "./components/whywunder";
import RunningSlider from "./components/slider";
import ConsultativeApproach from "./components/howwework";
import VideoPart from "./components/videopart";
import ProjectStructures from "./components/projectstructures";

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
