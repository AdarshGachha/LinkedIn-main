"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";

const servicesContent = {
  heading: {
    headingSubTitle: "Our Awsome Services",
    headingTitle: "Our Services",
    description:
      "We are providing the best services and opportunities for students to learn and grow and make their future bright by applying their skills and knowledge in the real world. and apply for the best jobs in the market.",
  },
  items: [
    {
      icon: "/images/icon-1.svg",
      title: "job placement",
      description:
        "job placement options for students to apply for the best jobs in the market.",
    },
    {
      icon: "/images/icon-2.svg",
      title: "Employer hiring",
      description:
        "Employer are more likely to hire students who have done internships and gained experience in their field.",
    },
    {
      icon: "/images/icon-3.svg",
      title: "Top Safety",
      description:
        "Most secure and safe platform for students to learn and grow and make their future bright.",
    },
    {
      icon: "/images/icon-4.svg",
      title: "Financial Support",
      description:
        "Financial support for students to help them in their studies and make their future bright.",
    },
    {
      icon: "/images/icon-5.svg",
      title: "Easier Access",
      description:
        "Easier access to the your preferred job and internship opportunities in the market.",
    },
    {
      icon: "/images/icon-6.svg",
      title: "Apply for secure future",
      description:
        "Future Generations company is providing the best services and opportunities for students to learn and grow and make their future bright by applying their skills and knowledge in the real world. and apply for the best jobs in the market.",
    },
  ],
};

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });
  return (
    <section className="py-20 bg-light">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-20" data-aos="fade-in">
          {servicesContent.heading.headingSubTitle && (
            <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10">
              {servicesContent.heading.headingSubTitle}
            </span>
          )}

          {servicesContent.heading.headingTitle && (
            <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
              {servicesContent.heading.headingTitle}
            </h2>
          )}

          {servicesContent.heading.description && (
            <p className="text-body leading-relaxed  ">
              {servicesContent.heading.description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {servicesContent.items.map((item, index) => (
            <div className="flex space-x-10" key={item.title} data-aos="fade-in" data-aos-delay="100">
              <div className="w-14 shrink-0">
                <span className="inline-flex items-center justify-center p-2 w=[70px] h=[70px] rounded-lg bg-white shadow-2xl"> 
                <Image src={item.icon} width={62} height={62} alt="iammradarsh.com"/>
                </span>
              </div>
              <div>
              {item.title && (
                <h3 className="text-heading font-bold text-md mb-3">{item.title}</h3>
              )}
              {item.description && (
                <p className="leading-relaxed">{item.description}</p>
              )}
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
