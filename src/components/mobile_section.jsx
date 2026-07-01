
import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css"; import "../css/mobile_section.css";

// Using placeholders for the phone screens - replace with your actual exported assets
import React, { useState, useEffect } from 'react';

import employe_login from "../assets/image/mobile-ops/op-3.svg";
import stock_control from "../assets/image/mobile-ops/op-2.svg";
import order_creation from "../assets/image/mobile-ops/op-4.svg";
import pos_dashboard from "../assets/image/mobile-ops/op-1.svg";

import employe_icon from "../assets/image/profile-icon.svg";
import pos_icon from "../assets/image/pos-icon.svg";
import stockc_icon from "../assets/image/stock-control.svg";
import order_icon from "../assets/image/order-icon.svg";

import apple_icon from "../assets/image/Apple-white.svg";
import play_icon from "../assets/image/Playstore.svg";

const featureData = [
  { 
    id: 'login', title: 'Employee Login', 
    description: 'Role-based access from any device', 
    image: employe_login, icon: employe_icon,
  },
  { 
    id: 'order', title: 'Order Creation', 
    description: 'Take & send orders live from the floor', 
    image: order_creation, icon: order_icon,
  },
  { 
    id: 'stock', title: 'Stock Control', 
    description: 'Log transfers, validate deliveries, flag waste', 
    image: stock_control, icon: stockc_icon,
  },
  { 
    id: 'pos', title: 'POS Dashboard', 
    description: 'Full point-of-sale & payment processing', 
    image: pos_dashboard, icon: pos_icon,
  }
];

const mobile_section = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set up the interval
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex === featureData.length - 1 ? 0 : prevIndex + 1);
    }, 1500); // 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [activeIndex]); // Re-run effect when activeIndex changes to reset the 3s clock

  const activeTab = featureData[activeIndex];

  function appleLink(){
    window.open("https://apps.apple.com/ng/app/sandwichai/id6761379344","_blank");
  }

  return (
    <div className="sandwich-container flex flex-col relative px-5 py-5">

      <header className="header-section flex flex-col gap-1" data-aos="fade-up">
        <span className="text-orange-500">SANDWICH MOBILE</span>
        <h1>Your restaurant operation in every employee's pocket</h1>
        <p>
          The Sandwich mobile app puts employee login, order creation, stock control, and a full
          POS dashboard easy and convenient for your team to work  anywhere, anytime in your restaurant.
        </p>
      </header>

      <div className="interactive-layout flex w-full items-center flex-wrap justify-evenly">

        <div className="tabs-container" data-aos="fade-up">
          {featureData.map((feature, index) => (
            <button
              key={feature.id}
              className={`feature-tab ${activeIndex === index ? 'active' : ''}`} onClick={() => setActiveIndex(index)}
              style={{backgroundColor: activeIndex === index ? '#FF0000' : '#1A1A1A'}}
            >
              <div className="tab-content flex gap-1">
                <img src={feature.icon}/>
                <div className="tab-conetent-txt flex flex-col">
                  <span className="tab-title">{feature.title}</span><span className="tab-desc">{feature.description}</span>
                </div>
              </div>
            </button>
          ))}

          <div className="d-btnwrapper gap-1 flex flex-col">
            <span className="d-btn-span">Download the app free your Sandwich plan</span>
            <div className="download-app-btn-wrapper flex gap-1 items-center">
              <button className="download-apple-app text-white flex items-center" onClick={appleLink}>
                <img src={apple_icon} width={20}/>
                <div className="download-apple-txt"><span>Download on the</span><h4>App Store</h4></div>
              </button>

              <button className="download-play-app text-white flex items-center">
                <img src={play_icon} width={20}/>
                <div className="download-play-txt"><span>Download on the</span><h4>Google Play</h4></div>
              </button>
            </div>
          </div>

        </div>

        <div className="mockup-display" data-aos="fade-up">
          <div className="phone-frame"><img key={activeTab.id} src={activeTab.image} width={700} className="phone-screen-image"/></div>
        </div>
      </div>

    </div>
  );
};


export default mobile_section;