import React from "react";
import "../assets/library/flaticon/css/all.css";
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css";
import "../css/resources_section.css";

const resources_list = [
  {
    icon: "fa fa-play-circle",
    title: "Video Tutorials",
    description: "Step-by-step walkthroughs of every module, from procurement to POS.",
    link_text: "Watch on YouTube",
    href: "https://youtube.com/@sandwichai",
  },
  {
    icon: "fa fa-book",
    title: "Setup Guides",
    description: "Written guides that get each department fully onboarded in a day.",
    link_text: "Browse guides",
    href: "https://sandwichai.co/guides/daily-operations",
  },
  {
    icon: "fa fa-question-circle",
    title: "Help Center",
    description: "Answers to common setup, billing, and integration questions.",
    link_text: "Visit Help Center",
    href: "https://sandwichai.co/help",
  },
];

function resources_section() {
  return (
    <section className="resources-section px-5 w-screen" aria-label="resources section" id="main$resources" data-aos="fade-up">
      <div className="resources-section-wrapper w-full flex flex-col gap-1">

        <span className="resources-label text-orange-500">RESOURCES</span>

        <h2 className="resources-heading">Learn Sandwich, your way</h2>

        <p className="resources-paragraph">
          Tutorials, guides, and playbooks to help every department get the most out of the platform.
        </p>

        <div className="resources-grid w-full flex flex-wrap gap-2 mt-3">
          {resources_list.map((item, index) => (
            <div key={index} className="resource-card flex flex-col gap-1">
              <div className="resource-card-icon-wrap flex items-center justify-center">
                <i className={`${item.icon} text-orange-500`}></i>
              </div>
              <h3 className="resource-card-title">{item.title}</h3>
              <p className="resource-card-desc">{item.description}</p>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="resource-card-link text-orange-500 flex items-center gap-1">
                <span>{item.link_text}</span><i className="fa fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default resources_section;