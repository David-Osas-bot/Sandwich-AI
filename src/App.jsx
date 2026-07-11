import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


// import { Routes, Route } from "react-router-dom";

import './App.css'
import MainHeader from "./components/main_header"; import HeroSection from "./components/hero_section";
import TargetOutcome from "./components/target_outcome"; import FaqSection from "./components/faq_section";
import CtaSection from './components/cta_section'; import MainFooter from './components/main_footer';
import DeaprtmentObj from './components/department_obj'; import Testimonial from './components/testimonial';
import OperationSec from './components/operations'; 
import Sandwichmobile from "./components/mobile_section"; import Loader from "./components/loader";
import ResourcesSection from "./components/resources_section"; import AiChatbot from "./components/ai_chatbot";  
import SectionBreakArc from "./components/section_break_arc"; 


function App() {
  useEffect(() => {AOS.init({duration: 1000, once: true, easing: "ease-in-out",});}, []);
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {const timer = setTimeout(() => { setLoading(false); }, 1500); return () => clearTimeout(timer);}, []);

  return (
    <> 
      {loading && <Loader />}
      <MainHeader/> <HeroSection /> 
      <OperationSec />
      <div style={{ position: "relative", overflow: "visible" }}>
        <SectionBreakArc 
          radius={250}        
          start_angle={-100} 
          end_angle={190} 
          left={-100}         
          top={-260}           
          rotation={93}       
          z_index={1} 
        />
        <DeaprtmentObj />
        <TargetOutcome/> 
      </div>
      <Testimonial/>
      <FaqSection /> <Sandwichmobile /> <ResourcesSection /> <CtaSection /> <MainFooter />
      <AiChatbot />
    </>
  )
}

export default App;