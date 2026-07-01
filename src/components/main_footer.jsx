import React from "react"; import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css"; 
import "../dist/style.css"; import "../css/main_footer.css";

import footer$logo from "../assets/image/logo.png";
import apple$logo from "../assets/image/Apple-black.svg";
import playstore$logo from "../assets/image/Playstore.svg";

function main_footer(){
  function return$Home(){window.open("https://dash.sandwichai.co","_blank");}
  function appleLink(){
    window.open("https://apps.apple.com/ng/app/sandwichai/id6761379344","_blank");
  }

  return(
    <>
      <footer className="main-footer-section bg-white w-screen py-2 px-5" id="main$header">
        <div className="main-footer-wrapper w-full flex flex-wrap items-center gap-1">
          <button onClick={return$Home}><img src={footer$logo} width={150} className="cursor-pointer"/></button>
          <div className="app-download-wrapper flex items-center gap-5">
            <label htmlFor="app-download">Download the app:</label>
            <button onClick={appleLink} className="apple-store-btn flex items-center gap-5"><img src={apple$logo}/><span>App Store</span></button>
            <button className="google-store-btn flex items-center gap-5"><img src={playstore$logo}/><span>Google Play</span></button>
          </div>
          <nav className="main-footer-navigation" id="main$footer$nav">
            <ul className="main-footer-nav-wrapper">
              <li className="footer-nav-list"><a href=""><span>Privacy Policy</span></a></li>
              <li className="footer-nav-list"><a href=""><span>Terms of use</span></a></li>
              <li className="footer-nav-list"><a href=""><span>Security</span></a></li>
              <li className="footer-nav-list"><a href=""><span>Contact</span></a></li>
            </ul>
          </nav>
          <div className="footer-copy-right-txt"><span>&copy;2026 Sandwich, All rights reserved.</span></div>
        </div>
      </footer>
    </>
  )
}

export default main_footer;