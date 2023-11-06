"use client";
import styles from "./page.module.css"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Suspense } from "react";
import { asyncapplyinternshipemploye, asyncapplyjobemploye } from "@/store/Actions/employeActions";
import Link from "next/link";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";



const page = () => {
  const dispatch = useDispatch();
  const { employe} = useSelector(
    (state) => state.employeReducer
  );


  return (
    <div className="px-20 h-screen flex flex-col items-center gap-4 lg:gap-10">
    <h1 className=" text-heading font-semibold text-5xl">welcome to employe section</h1>
    <div className="p-20 flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-5 h-52 ">
    <Link className="text-xs lg:text-2xl text-white px-12 lg:px-10 whitespace-nowrap py-5 shadow-xl bg-primary rounded-full" href="/employe/auth/create/job" >Create Job</Link>
    <br />
    
    <Link className="text-xs lg:text-2xl text-white px-12 lg:px-10 whitespace-nowrap py-5 shadow-xl bg-secondary rounded-full" href="/employe/auth/create/internship" >Create Internship</Link>
    </div>
    
    <span className="relative duration-300 transition-all ease-in-out group-hover:opacity-100">

    <BiChevronUp className="text-4xl"/>
    </span>

    <p className="group transition-all duration-300 ease-in-out cursor-pointer text-xl hover:bg-gray-600 hover:text-gray-100 tracking-wide border py-3 px-6 rounded-full">
      Lets get started
    </p>
    
    
    
    </div>
  );
};

export default page;
