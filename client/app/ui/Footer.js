/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

import { HiLocationMarker } from "react-icons/hi";
import { HiPhone, HiMiniGlobeAmericas, HiMiniHeart } from "react-icons/hi2";

const footerContent = {
  about: {
    logo: "/images/logo.png",
    description:
      "From the beginning, we’ve been obsessed with providing the best user experience possible. Whether we’re designing a new Internet browser or a new tweak to the look of the homepage, we take great care to ensure that they will ultimately serve you, rather than our own internal goal or bottom line.",
    cta: {
      href: "#_",
      label: "Learn more",
    },
  },
  footerLinks: [
    {
      heading: "Company",
      links: [
        {
          href: "#_",
          label: "Home",
        },
        {
          href: "#_",
          label: "How we work",
        },
        {
          href: "#_",
          label: "Our mission",
        },
        {
          href: "#_",
          label: "About us",
        },
        {
          href: "#_",
          label: "Careers",
        },
        {
          href: "#_",
          label: "Contact us",
        },
      ],
    },
    {
      heading: "Resources",
      links: [
        {
          href: "#_",
          label: "Blog",
        },
        {
          href: "#_",
          label: "Support",
        },
        {
          href: "#_",
          label: "Terms & Conditions",
        },
        {
          href: "#_",
          label: "Privacy Policy",
        },
      ],
    },
  ],
  contact: {
    heading: "Contact",
    description:
      "Please feel free to contact us if you have any questions or comments. We would love to hear from you!",
    address: {
      street: "Hoshangabad Road, MP Nagar, Bhopal, Madhya Pradesh, India",
      phone: "+91 1234567890",
      website: "www.example.com",
    },
  },
  copyright: {
    labelOne: "© 2023 Designed with",
    labelTwo: "by Adarsh Gachha. All rights reserved.",
  },
};

const Footer = () => {
  return (
    <footer role="contentinfo" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10 ">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <Link href="/" className="mb-4 inline-block decoration-transparent">
              <Image
                src={footerContent.about.logo}
                width={157}
                height={30}
                alt="iammradarsh.com"
              />
            </Link>
            <p className="leading-relaxed mb-7">
              {footerContent.about.description}
            </p>
            <p>
              <Link
                href={footerContent.about.cta.href}
                className="flex space-x-2 outline-none items-center font-semibold text-primary group decoration-transparent"
              >
                <span>{footerContent.about.cta.label}</span>
                <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary">
                  <BiChevronRight className="text-lg" />
                </span>
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-heading mb-5">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, idx) => (
                      <li className="mb-3" key={idx}>
                        <Link
                          href={link.href}
                          className="group flex items-center duration-300 transition-all ease-in-out hover:text-primary decoration-transparent"
                        >
                          <span className="text-sm">{link.label}</span>
                          <span className="left-2 relative   duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                            <BiChevronRight className="text-xl" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <h3 className="font-semibold text-heading mb-5">
              {footerContent.contact.heading}
            </h3>
            <p className="leading-relaxed mb-5">
              {footerContent.contact.description}
            </p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <HiLocationMarker className="text-primary text-xl" />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiPhone className="text-primary text-xl" />
                <span>{footerContent.contact.address.phone}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiMiniGlobeAmericas className="text-primary text-xl" />
                <span>{footerContent.contact.address.website}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-gray-200">
            <p>
                {footerContent.copyright.labelOne}{" "}
                <HiMiniHeart className="text-red-500 inline-block" />{" "}
                {footerContent.copyright.labelTwo}
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
