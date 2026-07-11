import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css"; import "../css/operation.css";

import React, { useState, useEffect } from "react";
import DashedArcDecor from "../components/dashed_arc_decor";

// Carousel Finance Image Import
import finance_1 from "../assets/image/operations_carousel/finance (1).svg";
import finance_2 from "../assets/image/operations_carousel/finance (2).svg";
import finance_3 from "../assets/image/operations_carousel/finance (3).svg";

// Carousel HR & Scheduling Image Import
import hr_schedue_1 from "../assets/image/operations_carousel/hr-schedue (1).svg";
import hr_schedue_2 from "../assets/image/operations_carousel/hr-schedue (2).svg";
import hr_schedue_3 from "../assets/image/operations_carousel/hr-schedue (3).svg";

import kitchen_1 from "../assets/image/operations_carousel/kitchen (1).svg";
import kitchen_2 from "../assets/image/operations_carousel/kitchen (2).svg";
import kitchen_3 from "../assets/image/operations_carousel/kitchen (3).svg";

import procurement_1 from "../assets/image/operations_carousel/procuremnt (1).svg";
import procurement_2 from "../assets/image/operations_carousel/procuremnt (2).svg";
import procurement_3 from "../assets/image/operations_carousel/procuremnt (3).svg";


function operations() {

  const data = {
    "Finance & AI Analytics": [finance_1, finance_2, finance_3],
    "Kitchen & Processing": [kitchen_1, kitchen_2, kitchen_3],
    "Inventory & Procurement": [procurement_1, procurement_2, procurement_3],
    "HR & Schedulling": [hr_schedue_1, hr_schedue_2, hr_schedue_3],
  };

  const tabs = Object.keys(data);
  const [activeTab, setActiveTab] = useState("Finance & AI Analytics");
  const [currentSlide, setCurrentSlide] = useState(0);

  // autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev === data[activeTab].length - 1 ? 0 : prev + 1);}, 2000);
    return () => clearInterval(interval);}, [activeTab]
  );

  // reset slide when tab changes
  useEffect(() => { setCurrentSlide(0); }, [activeTab]);

  return (
    <>
    <section className="operations px-5 py-5 flex flex-col gap-4" id="Feature" style={{ position: "relative" }}>
      
      <header className="operation-header flex flex-col gap-1" data-aos="fade-up">
        <span className="text-amber-500 font-bold">WHAT SANDWICH DOES</span>
        <h2>Built for every layer of your operations</h2>
        <p>A fully integrated platform where every module share real-time data with every other module.</p>
      </header>


      <div className="container flex flex-col gap-2" >
        {/* Tabs */}
        <div className="tabs" data-aos="fade-up">
          {tabs.map((tab) => (
            <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>

        {/* Carousel */}
        <div className="carousel" data-aos="fade-up">
          {data[activeTab].map((img, index) => (
            <img key={index} loading="lazy" src={img} className={index === currentSlide ? "slide active" : "slide"}/> ))}
        </div>
      </div>

    </section>
    </>
  );
}

export default operations;