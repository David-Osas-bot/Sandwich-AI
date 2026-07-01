import React from "react"; 

import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css"; import "../css/main_header.css";



// Image Imports
import header$logo from "../assets/image/logo.png";
import hamburger from "../assets/image/Hamburger_Menu.svg";



function main_header() {

  function OpenNavigation(){
    const mainNavigation = document.getElementById("mainNavigation");
    const openNav = document.getElementById("openNav");
    const closeNav = document.getElementById("closeNav");

    mainNavigation.classList.add("main-navigation-view");
    openNav.classList.add("close-navigation-btn-h");
    closeNav.classList.add("close-navigation-btn-v");

  }

  function CloseNavigation(){
    mainNavigation.classList.remove("main-navigation-view");
    openNav.classList.remove("close-navigation-btn-h");
    closeNav.classList.remove("close-navigation-btn-v");
  }

  function HomePage(){
    const headerLogo = document.getElementById("headerLogo");
    headerLogo.addEventListener("click",()=>{window.location.href = "index.html"});
  }

  
  // function loginAuth(){window.open("https://dash.sandwichai.co/login");}
  function signupAuth(){window.open("https://dash.sandwichai.co","_blank");}


  window.addEventListener("scroll", ()=>{
    const mainHeader = document.getElementById("mainHeader");
    if (window.scrollY > 150) {mainHeader.classList.add("main--header-scrollY");}
    if (window.scrollY < 150) {mainHeader.classList.remove("main--header-scrollY");}
  });



  return (
    <>
      <header className="main--header-section w-screen px-1" id='mainHeader' aria-label='header-section'>
        <div className="main--header-wrapper w-full flex justify-between items-center px-5 py-2">
          <div className="header-logo cursor-pointer" onClick={HomePage} id='headerLogo'>
            <img src={header$logo} width={200}/>
          </div>
          <nav className="main-navigation" id="mainNavigation">
            <ul className="main-navigation-wrapper">
              <li className="nav-list"><a href="#Feature" className="nav-link"><span>Features</span></a></li>
              <li className="nav-list"><a href="#who-is-it-for" className="nav-link"><span>Who is it for</span></a></li>
              <li className="nav-list"><a href="#Results" className="nav-link"><span>Result</span></a></li>
              {/* <li className="nav-list"><a href="" className="nav-link"><span>Pricing</span></a></li> */}
              {/* <li onClick={loginAuth} className="nav-list-login">
                <a href="" className="nav-link"><span>Login</span></a>
              </li> */}
              <li onClick={signupAuth} className="nav-list-signup">
                <a href="" className="nav-link"><span>Sign Up</span></a>
              </li>
            </ul>
          </nav>
          <div className="header-btn-wrapper flex gap-1">
            {/* <button className="login-authentication cursor-pointer" onClick={loginAuth}>Log in</button> */}
            <button className="signin-authentication cursor-pointer gap-5 flex items-center content-center" onClick={signupAuth}>
              <span>Sign Up</span><i className="fa fa-arrow-right"></i>
            </button>
            <button className="open-navigation cursor-pointer" onClick={OpenNavigation} id='openNav' title="open menu">
              <img src={hamburger} width={30}/>
            </button> 
            <button className="close-navigation cursor-pointer" onClick={CloseNavigation} id='closeNav' title="close menu">
              <i className="fa fa-close"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default main_header;
