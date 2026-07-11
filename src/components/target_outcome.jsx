import React from "react"; 
import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css"; import "../css/target_outcome.css";

import Counter from "./counter";

function target_outcome(){
  return(
    <>
    <section className="target-outcome-section bg-orange-500 px-0 w-screen" id="Results">
      <div className="target-outcome-wrapper px-5 w-full py-5 flex flex-col gap-4">
        <div className="target-outcome-caption flex flex-col gap-1" data-aos="fade-up">
          <span className="outcome-caption-span text-amber-500">TARGET OUTCOMES</span>
          <h2 className="outcome-caption-heading text-white">Numbers our platform is designed to move</h2>
          <p className="outcome-caption-paragraph text-gray-300">
            These are operational KPIs Sandwich was designed around.
          </p>
        </div>
        <div className="target-outcome-grid w-full">
          <div className="target-outcome-grid-wrapper">

            <div className="target-outcome-card text-white py-1 px-2" data-aos="fade-up">
              <div className="target-outcome-card-wrapper flex flex-col gap-5">
                {/* <h3 className="target-percentage text-white">80<em className="font-normal text-amber-500">%</em></h3> */}
                <Counter target={80}/>
                <p>Reduction in stock discrpancies within 60 days</p>
                <span className="text-gray-100">Platform success metric tracked per account</span>
              </div>
            </div>

            <div className="target-outcome-card text-white py-1 px-2" data-aos="fade-up">
              <div className="target-outcome-card-wrapper flex flex-col gap-5">
                {/* <h3 className="target-percentage text-white">30<em className="font-normal text-amber-500">%</em></h3> */}
                <Counter target={30}/>
                <p>Fast order-to-service time with kitchen coordination</p>
                <span className="text-gray-100">Measured across pilot resturant cohort</span>
              </div>
            </div>

            <div className="target-outcome-card text-white py-1 px-2" data-aos="fade-up">
              <div className="target-outcome-card-wrapper flex flex-col gap-5">
                {/* <h3 className="target-percentage text-white">25<em className="font-normal text-amber-500">%</em></h3> */}
                <Counter target={25}/>
                <p>Less food waste through AI tracking and alerts</p>
                <span className="text-gray-100">Phase 1 deployment target</span>
              </div>
            </div>

            <div className="target-outcome-card text-white py-1 px-2" data-aos="fade-up">
              <div className="target-outcome-card-wrapper flex flex-col gap-5">
                {/* <h3 className="target-percentage text-white">15<em className="font-normal text-amber-500">%</em></h3> */}
                <Counter target={15}/>
                <p>Operational cost reduction through procurement optimization</p>
                <span className="text-gray-100">Based on typical inventory inefficiency benchmarks</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default target_outcome;