import React from "react"; 
import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css"; import "../css/testimonial.css";

import image_1 from "../assets/image/Ellipse 4.jpg";
import image_2 from "../assets/image/Ellipse 4.png";
import image_3 from "../assets/image/Ellipse 3.png";

function testimonial(){
  return(
    <>
      <section className="testimonial-section w-screen py-5 px-5">
        <div className="testimonial-section-wrapper w-full flex flex-col gap-0">
          <div className="testimonial-header-section my-4">
            <div className="testimonial-header-wrapper flex flex-col gap-1">
              <span className="text-orange-500 font-bold">FROM RESTURANT OPERATORS</span>
              <h2 className="testimonial-heading-txt">What changes when the whole resturant is connected</h2>
            </div>
          </div>

          <div className="testimonial-infinite-scroll py-1">
            <div className="testimonial-infinite-wrapper flex gap-2">

              <div className="testimonial-card px-2 py-2">
                <div className="testimonial-card-wrapper flex flex-col gap-2">
                  <div className="rating-section text-amber-500 flex gap-5">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <div className="testimonial-caption">
                    <p>
                      "Before Sandwich AI, my procurement team was odering based on gut feel.
                      Now we have <em>demand forecast before we place a single order</em>. Our food
                      dropded four point in the first month."
                    </p>
                  </div>
                  <div className="profile-scetion flex items-center gap-5">
                    <div className="profile-img"><img src={image_1} alt="" /></div>
                    <div className="profile-txt flex flex-col">
                      <h4 className="text-amber-800">Sophie Adams</h4><p>Operational Director, TechPro Solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card px-2 py-2">
                <div className="testimonial-card-wrapper flex flex-col gap-2">
                  <div className="rating-section text-amber-500 flex gap-5">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <div className="testimonial-caption">
                    <p>
                      “Our finance officer used to spend Monday’s rebuilding last weeks 
                      P&L from five sources. Now it’s  in her inbox by 7am 
                       <em> automatically, every single day</em>”
                    </p>
                  </div>
                  <div className="profile-scetion flex items-center gap-5">
                    <div className="profile-img"><img src={image_2} alt="" /></div>
                    <div className="profile-txt flex flex-col">
                      <h4 className="text-amber-800">Taiwo Musa</h4><p>Restaurant Owner, Blend Boutique</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card px-2 py-2">
                <div className="testimonial-card-wrapper flex flex-col gap-2">
                  <div className="rating-section text-amber-500 flex gap-5">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <div className="testimonial-caption">
                    <p>
                      “The BCG matrix for our menu made our GM stop guessing about what to push , 
                      we cut 3 under performing items and <em>gross margin improved within two weeks</em> ”
                    </p>
                  </div>
                  <div className="profile-scetion flex items-center gap-5">
                    <div className="profile-img"><img src={image_3} alt="" /></div>
                    <div className="profile-txt flex flex-col">
                      <h4 className="text-amber-800">Hannah Chen</h4><p>Finance Manager, Silk Route</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="testimonial-infinite-scroll-2 py-1">
            <div className="testimonial-infinite-wrapper flex gap-2">

              <div className="testimonial-card px-2 py-2">
                <div className="testimonial-card-wrapper flex flex-col gap-2">
                  <div className="rating-section text-amber-500 flex gap-5">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <div className="testimonial-caption">
                    <p>
                      "Before Sandwich AI, my procurement team was odering based on gut feel.
                      Now we have <em>demand forecast before we place a single order</em>. Our food
                      dropded four point in the first month."
                    </p>
                  </div>
                  <div className="profile-scetion flex items-center gap-5">
                    <div className="profile-img"><img src={image_1} alt="" /></div>
                    <div className="profile-txt flex flex-col">
                      <h4 className="text-amber-800">Sophie Adams</h4><p>Operational Director, TechPro Solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card px-2 py-2">
                <div className="testimonial-card-wrapper flex flex-col gap-2">
                  <div className="rating-section text-amber-500 flex gap-5">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <div className="testimonial-caption">
                    <p>
                      “Our finance officer used to spend Monday’s rebuilding last weeks 
                      P&L from five sources. Now it’s  in her inbox by 7am 
                       <em> automatically, every single day</em>”
                    </p>
                  </div>
                  <div className="profile-scetion flex items-center gap-5">
                    <div className="profile-img"><img src={image_2} alt="" /></div>
                    <div className="profile-txt flex flex-col">
                      <h4 className="text-amber-800">Taiwo Musa</h4><p>Restaurant Owner, Blend Boutique</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card px-2 py-2">
                <div className="testimonial-card-wrapper flex flex-col gap-2">
                  <div className="rating-section text-amber-500 flex gap-5">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <div className="testimonial-caption">
                    <p>
                      “The BCG matrix for our menu made our GM stop guessing about what to push , 
                      we cut 3 under performing items and <em>gross margin improved within two weeks</em> ”
                    </p>
                  </div>
                  <div className="profile-scetion flex items-center gap-5">
                    <div className="profile-img"><img src={image_3} alt="" /></div>
                    <div className="profile-txt flex flex-col">
                      <h4 className="text-amber-800">Hannah Chen</h4><p>Finance Manager, Silk Route</p>
                    </div>
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

export default testimonial;