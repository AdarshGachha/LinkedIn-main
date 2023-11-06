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

import logo from "../../public/images/logo.png";

import {
  asynccurrentstudent,
  asyncsignoutstudent,
  asyncstudentdelete,
} from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



const navigationMenu = [

  
  {
    href: "/student/auth/profile",
    label: "Profile",
  },
  {
    href: "/student/auth/resume",
    label: "Resume",
  },
  {
    href: "/student/auth/applied",
    label: "Applications",
  },
  {
    href: "/student",
    label: "SignOut" ,
  },
];

const navigationMenu2 = [
  
  {
    href: "/",
    label: "Home",
  },
];




const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dimensions, setDimensions] = useState({height: 0, width: 0});




  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  const { student } = useSelector((state) => state.studentReducer);
  console.log(isAuthenticated);
  useEffect(() => {
    dispatch(asynccurrentstudent());
    if (isAuthenticated) {
      router.push("/student/auth");
    }
    // if(!isAuthenticated){
    //   router.push('/student/signin');
    // }
  }, [isAuthenticated]);

  const SignoutHandler = () => {
    dispatch(asyncsignoutstudent());
    toast.error("LogOut", {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: true,
    });
  };

  const StudentDeleteHandler = () => {
    dispatch(asyncstudentdelete());
    toast.error("Account Deleted", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
    });
    
  };



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
              <Link href={isAuthenticated ? "/student/auth" : "/student"}>
          Student Home{" "}
        </Link>

        {isAuthenticated ? (
          <>
            
            <Link href="/student/auth/resume">Resume</Link>
            <Link href="/student/auth/applied">Applications</Link>
            
          </>
        ) : (
          <>
            <Link href="/"> HomePage </Link>
          </>
        )}
              
              </ul>
            </div>
            {/* CTA */}
            <div>
              
              <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="hidden lg:inline-flex w-full justify-center gap-x-1.5 rounded-full bg-primary text-white px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-inset ring-transparent hover:ring-gray-300 hover:bg-gray-50 hover:text-heading">
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
                  isAuthenticated ? ( <Link onClick={SignoutHandler}
                    href="/student"
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Sign Out
                  </Link>):( <Link
                    href="/student"
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Student Section
                  </Link>)
                 
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  isAuthenticated ? ( <Link
                    href="/student/auth/profile"
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Profile
                  </Link>):(
                    <Link
                    href="/employe"
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Employer Section
                  </Link>
                  )
                  
                )}
              </Menu.Item>


              <Menu.Item>
                {({ active }) => (
                  isAuthenticated ? ( <Link onClick={StudentDeleteHandler}
                    href="/student/signin"
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Delete Account
                  </Link>):(
                    <Link
                    href="/student/signup"
                    className={classNames(
                      active ? "bg-gray-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Sign Up
                  </Link>
                  )
                  
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
              
            <Link href={isAuthenticated ? "/student/auth" : "/student"}>
          Student Home{" "}
        </Link>
            {isAuthenticated ? (
          navigationMenu.map((item, idx) => (
           
            <li key={item.label} >
              <Link  onClick={item.label === "SignOut" ? SignoutHandler : null}
                href={item.href}
                className="group decoration-transparent flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
              >
                <span>{item.label}</span>
                <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                  <BiChevronRight className="text-xl" />
                </span>
              </Link>
            </li>
            
          
            
          ))
          
        ) : (
          navigationMenu2.map((item, idx) => (
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
          ))
        )}
             
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
