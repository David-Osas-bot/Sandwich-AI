import React from "react"; 
import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css"; import "../css/department_obj.css";

import DashedArcDecor from "../components/dashed_arc_decor";


// import image

import kitchen$analysis$img from "../assets/image/KitchenAnalysis.svg";
import resturant$manager$img from "../assets/image/ContentAnalysis.svg";

// image imports
import res$manager$img from "../assets/image/res-manager-img.svg";
import supp$man$img from "../assets/image/supp-man-img.svg";
import hr$man$img from "../assets/image/hr-man-img.svg";
import kitchen$man$img from "../assets/image/kitchen-man-img.svg";
import fin$man$img from "../assets/image/fin-man-img.svg";

function deaprtment_obj(){
  return(
    <>
    
      <section className="target-audience-section w-[80%] h-auto flex items-center justify-center py-5 px-5" id="who-is-it-for" style={{ position: "relative" }}>
        <div className="target-audience-wrapper w-full flex flex-col gap-4">
          <div className="target-audience-header flex flex-col gap-1" data-aos="fade-up">
            <span className="tagert-aud-label font-bold text-orange-500">BUILT FOR EVERY ROLE</span>
            <h2 className="text-amber-100">One Platform, <br/> Five power Users</h2>
            <p className="target-aud-paragraph">
              Every department gets a dashboard built for how they actually work.
            </p>
          </div>

          <div className="target-audience-grid">
            <div className="target-audience-grid-wrapper flex gap-1">

              <div className="resturant-manager-card" data-aos="fade-up">
                <div className="resturant-manager-card-wrapper px-2 py-2">
                  <div className="resturant-manager-caption-section flex-col flex gap-1">
                    <img src={res$manager$img} width={55}/> <h3>Resturant Manager</h3><p>Full operational visibility</p>
                    <ul className="resturant-management-info-list py-1">
                      <li className="rest-man-list"><i className="fa fa-arrow-right"></i> <span> Real time-sales & order tracking</span></li>
                      <li className="rest-man-list"><i className="fa fa-arrow-right"></i> <span> Cross-department workflow oversight</span></li>
                      <li className="rest-man-list"><i className="fa fa-arrow-right"></i> <span> Approval workflows for procurement</span></li>
                      <li className="rest-man-list"><i className="fa fa-arrow-right"></i> <span> System-wide alerts and notification</span></li>
                    </ul>
                  </div>
                  <div className="resturant-manager-image-section"><img src={resturant$manager$img} width={350}/></div>
                </div>
              </div>

              <div className="multi-department-grid-wrapper flex gap-2 flex-col">

                <div data-aos="fade-up" className="kitchen-staff-card px-2 py-2 flex gap-4 items-center justify-between">

                  <div className="kitchen-staff-card-txt">
                    <div className="kitchen-staff-card-header flex items-center gap-1">
                      <img src={kitchen$man$img} width={55}/>
                      <div className="kitchen-staff-header-txt">
                        <h3 className="text-white font-bold">Kitchen Staff</h3>
                        <span className="text-red-500">Prep & execution focus</span>
                      </div>
                    </div>
                    <ul className="kitchen-staff-info-list">
                      <li className="kitchen-st-list"><i className="fa fa-arrow-right"></i><span>Recipe cards with AI yield calc</span></li>
                      <li className="kitchen-st-list"><i className="fa fa-arrow-right"></i><span>Real-time ingredient availability</span></li>
                      <li className="kitchen-st-list"><i className="fa fa-arrow-right"></i><span>Waste logging with one tap</span></li>
                      <li className="kitchen-st-list"><i className="fa fa-arrow-right"></i><span>3D kitchen activity visualization</span></li>
                    </ul>
                  </div>
                  <img src={kitchen$analysis$img} width={420}/>
                </div>

                <div className="management-grid-wrapper flex gap-1">

                  <div className="department-staff-card px-2 py-2 flex flex-col gap-1" data-aos="fade-up">
                    <div className="department-staff-card-header flex flex-col gap-1">
                      <img src={hr$man$img} width={55} />
                      <div className="department-staff-header-txt"><h3>HR <em>&</em> Admin</h3><span>People & compliance</span></div>
                    </div>
                    <ul className="department-staff-info-list">
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> Shift scheduling & management</span></li>
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> Digital onboarding workflows</span></li>
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> Performance tracking & appraisals</span></li>
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> Communication audit trails</span></li>
                    </ul>
                  </div>

                  <div className="department-staff-card px-2 py-2 flex flex-col gap-1" data-aos="fade-up">
                    <div className="department-staff-card-header flex flex-col gap-1">
                      <img src={fin$man$img} width={55}/>
                      <div className="department-staff-header-txt"><h3>Finance Officer</h3><span>Profitability control</span></div>
                    </div>
                    <ul className="department-staff-info-list">
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> Automated daily P&L statements</span></li>
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> Menu profitability & BCG analysis</span></li>
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> Cost ratio tracking by item</span></li>
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> Export to QuickBooks / Xero</span></li>
                    </ul>
                  </div> 

                  <div className="department-staff-card px-2 py-2 flex flex-col gap-1" data-aos="fade-up">
                    <div className="department-staff-card-header flex flex-col gap-1">
                      <img src={supp$man$img} width={55}/>
                      <div className="department-staff-header-txt"><h3>Supplier</h3><span>Procurement partner portal</span></div>
                    </div>
                    <ul className="department-staff-info-list">
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> Receive & confirm purchase orders</span></li>
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> Update delivery schedules & ETAs</span></li>
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> View performance ratings & history</span></li>
                      <li className="department-st-list"><i className="fa fa-arrow-right"></i> <span> Submit invoices & pricing updates</span></li>
                    </ul>
                  </div>


                </div>
              </div>

            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default deaprtment_obj;

















