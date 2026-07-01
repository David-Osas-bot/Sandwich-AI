import React from "react"; 
import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css"; import "../css/cta_section.css";


function cta_section(){

  function book$demo(){window.open("https://calendly.com/sandwichrestaurantai/30min","_blank");}

  return(
    <>
      <section className="cta-section w-screen px-5 py-5" aria-label="cta action banner">
        <div className="cta-section-wrapper w-full py-2 flex flex-col gap-2 items-center">
          <label htmlFor="cta-section" className="text-amber-500 font-bold" data-aos="fade-up"> READY WHEN YOU ARE</label>
          <h2 className="cta-caption-heading text-white" data-aos="fade-up"> Stop managing your <br></br> restaurant <em>in the dark</em></h2>
          <p className="text-gray-100" data-aos="fade-up">
            Book a 30-minute live demo. We'll show you Sandwich running on a resturant like yours
            with your real use cases.
          </p>
          <div className="cta-btn-wrapper flex items-center gap-1" data-aos="fade-up">
            <button className="free-demo-btn flex items-center gap-5 bg-orange-500 text-white" onClick={book$demo}>
              <span>Book your free demo</span><i className="fa fa-arrow-right"></i>
            </button>
            <a href="https://wa.me/2349042569417" target="_blank">
              <button className="contact-chat-btn bg-amber-500 text-amber-800">Chat with Us</button>
            </a>
          </div>
          <div className="cta-bottom-label flex items-end" data-aos="fade-up">
            <img className="cta-bottom-icon" src="" alt="" />
            <span className="flex items-center gap-5 text-gray-300">
              No credit card required 
              <i className="fas fa-circle"></i> 22-week deployment guarantee <i className="fas fa-circle"></i> Full onboarding included
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default cta_section;