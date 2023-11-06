"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import Aos from "aos";

const statContent = {
  stats: [
    {
      number: "99.9%",
      label: "Job Update Solutions",
    },
    {
      number: "3,912",
      label: "Happy Users",
    },
    {
      number: "4.5",
      label: "Rating Reviews",
    },
  ],
  getStarted: {
    heading: "Get started with our service?",
    description:
      "We are here to help you with your Job Finding and projects and ideas.",
    img: "/images/illustration-woman.svg",
    cta: {
      cta_href: "#_",
      cta_label: "Learn more",
    },
  },
};

const Stats = () => {

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "slide",
      once: true,
    });

  });

  return (
    <section className="pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0">
          <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-3">
              {statContent.stats.map((stat, index) => {
                index *=100;
                return(
                <div className="text-center lg:text-left" key={stat.label} data-aos="fade-up" data-aos-delay={index}>
                  <strong className="text-primary text-4xl xl:text=[52px] font-bold block leading-tight" >
                    {stat.number}
                  </strong>
                  <span>{stat.label}</span>
                </div>
              )})}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="bg-light py-10 px-7 lg:px-10 !pr-28 md:!pr-32 lg:!pr-40 rounded-lg relative" data-aos="fade-in">
              {statContent.getStarted.img && (
                <img
                  src={statContent.getStarted.img}
                  alt="iammradarsh.com"
                  className="absolute right-0 lg:right-6 -top-14 w-24"
                />
              )}
              {statContent.getStarted.heading && (
                <h3 className="text-heading font-bold text-xl mb-3">
                  {statContent.getStarted.heading}
                </h3>
              )}
              {statContent.getStarted.description && (
                <p className="text-md mb-5">
                  {statContent.getStarted.description}
                </p>
              )}
              {statContent.getStarted.cta.cta_label && (
                <Link
                  href={statContent.getStarted.cta.cta_href}
                  className="flex space-x-2 decoration-transparent outline-none items-center font-semibold text-primary group"
                >
                  <span>{statContent.getStarted.cta.cta_label}</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary">

                    <BiChevronRight className="text-lg" />
                      
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
