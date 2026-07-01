import React from "react";
import "../assets/library/flaticon/css/all.css";
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css";
import "../css/resources_section.css";

const resources_list = [
  {
    type: "YouTube Tutorial",
    icon: "fa fa-play-circle",
    title: "Getting Started with Sandwich AI",
    description: "A quick walkthrough of setting up orders, inventory, and staff scheduling.",
    href: "https://youtube.com/@sandwichai",
  },
  {
    type: "Guide",
    icon: "fa fa-book",
    title: "Streamlining Daily Operations",
    description: "Best practices for running a leaner, faster restaurant with Sandwich AI.",
    href: "https://sandwichai.co/guides/daily-operations",
  },
  {
    type: "Article",
    icon: "fa fa-file-text",
    title: "Payments & Inventory, Explained",
    description: "How our automated payment and inventory tools work together.",
    href: "https://sandwichai.co/blog/payments-inventory",
  },
];

function resources_section() {
  return (
    <section className="resources-section px-5 w-screen" aria-label="resources section" id="main$resources" data-aos="fade-up">
      <div className="resources-section-wrapper py-5 items-center w-full flex flex-col content-center gap-1">

        <div className="hero-caption-label-rounded flex items-center gap-5 text-orange-500">
          <i className="fa fa-circle"></i><label>Learn Sandwich AI</label>
        </div>

        <h2 className="resources-heading text-center text-orange-500">
          <em>Resources</em>
        </h2>

        <p className="resources-paragraph text-center">
          Tutorials, guides, and articles to help you get the most out of Sandwich AI.
        </p>

        <div className="resources-grid w-full flex flex-wrap justify-center gap-3 mt-2">
          {resources_list.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card flex flex-col gap-1"
            >
              <div className="resource-card-icon text-orange-500">
                <i className={item.icon}></i>
              </div>
              <span className="resource-card-type text-orange-500">{item.type}</span>
              <h3 className="resource-card-title">{item.title}</h3>
              <p className="resource-card-desc">{item.description}</p>
              <span className="resource-card-link text-orange-500">
                View resource <i className="fa fa-arrow-right"></i>
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default resources_section;