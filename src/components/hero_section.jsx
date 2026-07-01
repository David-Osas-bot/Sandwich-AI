import React from "react"; 
import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css"; import "../css/hero_section.css";


import img_profile from "../assets/image/user_profile.svg";
import team_img_1 from "../assets/image/0 (1).png"

function hero_section(){
  function signupAuth(){window.open("https://dash.sandwichai.co","_blank");}

  return(
    <>
      <main className="main-hero-section px-5 w-screen" aria-label="hero section" id="main$hero" data-aos="fade-up">
        <div className="main-hero-section-wrapper px-1 py-5 items-center w-full flex flex-col content-center gap-1">
          <div className="hero-caption-label-rounded flex items-center gap-5 text-orange-500">
            <i className="fa fa-circle"></i><label>Restaurant Operations Platform</label>
          </div>
          <h1 className="main-caption-heading text-center text-orange-500">
            <em>One Platform.</em><br></br> Every <br></br> Department.
          </h1>
          <div className="hero-caption-label-rounded-gold text-orange-500"><h2>Zero guesswork</h2></div>
          <p className="hero-caption-paragraph">
            Sandwich connects your kitchen, procurement, stock control, finance, and HR into a single 
            real time system so your restaurant runs on insight, not instinct.
          </p>
          <div className="call-to-action-wrapper flex items-center gap-1">
            <button className="live-preview-btn bg-orange-500 flex items-center gap-5 text-white" onClick={signupAuth}>
              <span>See it running live</span><i className="fa fa-arrow-right"></i>
            </button>
            <a href="https://wa.me/2349042569417" target="_blank">
              <button className="chat-contact-btn"><span>Chat with Us</span></button>
            </a>
          </div>
          <div className="users-proof-wrapper flex items-center my-1 gap-5">
            <img src={img_profile}/><span>15+ restaurant operators already running on Sandwich</span>
          </div>
        </div>
      </main>

      <section className="hero-footer-sponsor my-4" data-aos="fade-up">
        <div className="hero-footer-sponsor-wrapper py-1 flex items-center gap-1 px-5">
          <h4>TRUSTED BY TEAMS AT:</h4>
          <img src={team_img_1} width={50}/>
          {/* <nav className="sponsor-nav py-1 px-2">
            <ul className="sponsor-nav-wrapper flex-wrap flex gap-2 justify-center">
              <li className="sponsor-nav-list-act"><span>TRUSTED BY TEAMS AT</span></li>
              <li className="sponsor-nav-list"><span>TheFork Group</span></li>
              <li className="sponsor-nav-list"><span>Chop Now</span></li>
              <li className="sponsor-nav-list"><span>Kitchen Republic</span></li>
              <li className="sponsor-nav-list"><span>GrillHouse Lagos</span></li>
              <li className="sponsor-nav-list"><span>SkillRoute</span></li>
            </ul>
          </nav> */}


        </div>
      </section>

    </>
  );
}

export default hero_section;