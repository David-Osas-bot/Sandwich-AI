// import AOS from "aos";
import React, { useState } from "react";
import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css"; import "../css/faq_section.css";

function faq_section() {
  const [activeIndex, setActiveIndex] = useState(null);
  // useEffect(() => {AOS.refresh();}, [activeIndex]);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { 
      question: "Is Sandwich AI just another inventory tool?", 
      answer: 
      `
        Sandwich AI is far from being just another inventory tool, 
        it is the system that brings your entire restaurant operation together. 
        Sandwich AI connects inventory, procurement, kitchen workflows, and service
        into one intelligent platform. That means fewer errors, less waste, 
        tighter cost control, and complete visibility over your business — all in real time.
      ` 
    },
    { 
      question: "Will my team actually use it without friction?", 
      answer: 
      `
        Yes. Sandwich AI is built for busy kitchens, not only technical teams. 
        Every feature is designed to be simple, fast, and intuitive, so your staff 
        can get started almost immediately. No steep learning curve — just smoother, 
        more efficient daily operations from day one.
      ` 
    },
    { 
      question: "Who is Sandwich AI best suited for?", 
      answer: 
      `
        It’s designed for restaurant owners and operators who want more control without 
        added complexity. Whether you're running a single kitchen or scaling across 
        multiple locations, Sandwich AI gives you the structure and insight needed to grow confidently.
      `
    },
    { 
      question: "How much control do I have over access and visibility?", 
      answer: 
      `
        Complete control. You decide who sees what and who can take action. With flexible role-based permissions, 
        every team member gets exactly the level of access they need  improving accountability while keeping your data secure.
      ` 
    },
    { 
      question: "Can I manage multiple branches from one place?", 
      answer: 
      `
        Absolutely. Sandwich AI allows you to oversee all your branches from a single, centralized dashboard. 
        Track performance, enforce consistency, and make faster decisions across locations  
        without losing control at the ground level.
      ` 
    },
    { 
      question: "Can suppliers be part of the workflow?", 
      answer: 
      `
        Yes, and that’s where efficiency really improves. By integrating suppliers directly into your system, 
        you streamline ordering, reduce miscommunication, and speed up fulfillment. Everything becomes more predictable, 
        transparent, and easier to manage.
      `
    },
  ];

  return (
    <section className="faq-main-section w-screen px-5 py-5 my-2">
      <div className="faq-section-wrapper w-full flex flex-col gap-2">

        <div className="faq-header-section flex flex-col gap-1" data-aos="fade-up">
          <span className="faq-caption-label font-bold text-orange-500">FAIR QUESTIONS</span>
          <h2 className="faq-caption-heading">Things you're probably wondering</h2>
          <p className="faq-caption-paragraph">
            We'd rather answer your objections here than leave you with the wrong impression.
          </p>
        </div>

        <div className="faq-dropdown-wrapper flex flex-col gap-2" data-aos="fade-up">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-drowdown bg-white flex flex-col gap-2 ${
              activeIndex === index ? "faq-drowdown-open" : "" }`} onClick={() => toggleDropdown(index)} >
              <div className="faq-dropdown-header flex items-center justify-between">
                <h3>{faq.question}</h3> <i className={`fa ${ activeIndex === index ? "fa-caret-up" : "fa-plus" }`}></i>
              </div>
              {activeIndex === index && (<div className="faq-dropdown-answers"><p>{faq.answer}</p></div>)}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default faq_section;