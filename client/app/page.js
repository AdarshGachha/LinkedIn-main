"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { asynccurrentstudent } from "@/store/Actions/studentActions";
import { useDispatch } from "react-redux";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Testimonial from "@/components/Testimonial";
import RecentBlog from "@/components/RecentBlog";
import Navigation from "./ui/Navigation";
import Footer from "./ui/Footer";


const page = () => {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Solutions />
      <Testimonial />
      <RecentBlog />
      <Footer />
    </div>
  );
};

export default page;
