"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import logo from "@/public/images/logo.png";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigationMenu = [
  
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#",
    label: "How we work",
  },
  {
    href: "#",
    label: "Our Mission",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Contact",
  },
];

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dimensions, setDimensions] = useState({height: 0, width: 0});

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    function handleResize() {
      // when the window is resized, we set the navOpen to false
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (dimensions > 768 && navOpen) {
        setNavOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <Link className="decoration-transparent" href="/">
                <Image src={logo} width={157} height={30} alt="FamSec Logo" />
              </Link>
            </div>
            {/* Navigation Menu */}
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7">
             
                {navigationMenu.map((item, idx) => (
                  <li key={item.label}>
                    <Link className="decoration-transparent" href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* CTA */}
            <div>
              
              <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="hidden lg:inline-flex w-full justify-center gap-x-1.5 rounded-full bg-primary text-white px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-heading">
            Options
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-lg bg-light shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/student"
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Student Section
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/employe"
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Employer Section
                  </Link>
                )}
              </Menu.Item>
            </div>
            
          </Menu.Items>
        </Transition>
      </Menu>

              <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <CgMenuMotion className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* for Mobile/Table Devices Nav Menu */}

      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 hidden fixed w-screen z-[9999]"
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileMenuHandler}
        ></div>
        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              className="flex items-center space-x-3"
              onClick={mobileMenuHandler}
            >
              <GrClose />
              <span>Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {navigationMenu.map((item, idx) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group decoration-transparent flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
