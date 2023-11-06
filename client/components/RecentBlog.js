/* eslint-disable react/jsx-key */
"use client";
import React, { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const blogContent = {
  heading: {
    headingSubTitle: "Our Writeups",
    headingTitle: "Our Latest Articles",
    description:
      "We are a team of professionals with a passion for writing about technology and career development. We are committed to providing you with the best content to help you grow in your career.",
  },
  recentBlog: [
    {
      permalink: "#_",
      featuredImg: "/images/post-1-min.jpg",
      title: "How to Become a Software Engineer",
      excerpt:
        "Software engineering is one of the most in-demand jobs in the world. It is also one of the most lucrative jobs in the world. In this article, we will discuss how to become a software engineer.",
      author: {
        img: "/images/person-1-min.jpg",
        name: "Alisa Richardson",
        titleRole: "Editor, CEO ,Co-Founder",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-2-min.jpg",
      title: "The Best Programming Languages to Learn in 2023",
      excerpt:
        "Understanding the best programming languages to learn in 2023 is important for any developer. This article will help you understand the best programming languages to learn in 2023.",
      author: {
        img: "/images/person-2-min.jpg",
        name: "Jane Cooper",
        titleRole: "Senior Developer, CEO ,Co-Founder",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-3-min.jpg",
      title: "A Comprehensive Overview of the Software Development Life Cycle",
      excerpt:
        "Best practices for software development life cycle management are essential to the success of any software project. This article will provide a comprehensive overview of the software development life cycle and its best practices.",
      author: {
        img: "/images/person-3-min.jpg",
        name: "Davon Larson",
        titleRole: "Product Manager, CEO ,Co-Founder",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-1-min.jpg",
      title: "Understand what company culture is and why it matters",
      excerpt:
        "Knowing what company culture is and why it matters is important for any business. This article will help you understand what company culture is and why it matters.",
      author: {
        img: "/images/person-2-min.jpg",
        name: "Davon Larson",
        titleRole: "Product Manager, CEO ,Co-Founder",
      },
    },

    {
      permalink: "#_",
      featuredImg: "/images/post-2-min.jpg",
      title: "Giving you a great opportunity to join different companies",
      excerpt:
        "Knowing what company culture is and why it matters is important for any business. This article will help you understand what company culture is and why it matters.",
      author: {
        img: "/images/person-3-min.jpg",
        name: "Davon Larson",
        titleRole: "Product Manager ,Co-Founder",
      },
    },
  ],

  cta: {
    href: "#_",
    label: "View All Articles",
    labelSuffix: "Click Here",
  },
};

const RecentBlog = () => {
  const [slideindex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsEnd(sliderRef.current?.swiper.isEnd);
    setIsBeginning(sliderRef.current?.swiper.isBeginning);
  });

  const prevHandler = useCallback(()=>{
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  })

  const nextHandler = useCallback(()=>{
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  })

  return (
    <section className=" py-20  bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-10">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {blogContent.heading.headingSubTitle && (
              <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10">
                {blogContent.heading.headingSubTitle}
              </span>
            )}

            {blogContent.heading.headingTitle && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                {blogContent.heading.headingTitle}
              </h2>
            )}

            {blogContent.heading.description && (
              <p className="text-body leading-relaxed">
                {blogContent.heading.description}
              </p>
            )}
          </div>
          <div className="lg:w-5/12 text-left lg:text-right">
            <div className="inline-flex ml-auto space-x-3">
              <div
                onClick={prevHandler}
                className={`${
                  isBeginning == true
                    ? "opacity-30 bg-[#E1E7EA] cursor-auto "
                    : "opacity-100 hover:bg-primary"
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex  justify-center items-center `}
              >
                <BiChevronLeft
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isBeginning == true
                      ? "group-hover:!text-primary"
                      : " group-hover:text-white"
                  }`}
                />
              </div>
              <div
                onClick={nextHandler}
                className={`${
                  isEnd == true
                    ? "opacity-30 bg-[#E1E7EA] cursor-auto "
                    : "opacity-100 hover:bg-primary"
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex  justify-center items-center `}
              >
                <BiChevronRight
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isEnd == true
                      ? "group-hover:!text-primary"
                      : " group-hover:text-white"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            968: {
              width: 968,
              slidesPerView: 2,
            },
          }}
          ref={sliderRef}
          speed={700}
          spaceBetween={30}
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          className="z-50 py-32 mb-24 relative flex items-stretch !overflow-visible before:content-[''] before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light"
        >
          {blogContent.recentBlog.map((blog, idx) => (
            <SwiperSlide className="overflow-visible h-full select-none" key={blog.title}>
              <div className="p-6 rounded-lg bg-white relative mt-10">
                <Link
                  href={blog.permalink}
                  className="relative -mt-10 inline-block overflow-hidden rounded-lg mb-4 decoration-transparent"
                >
                  <Image
                    src={blog.featuredImg}
                    width={782}
                    height={467}
                    alt="iammradarsh.com"
                  />
                </Link>
                <h2 className="text-heading text-lg font-bold leading-7 mb-5">
                  <Link href={blog.permalink} className="relative text-heading decoration-transparent">
                    {blog.title}
                  </Link>
                </h2>
                <p className="relative mb-6">{blog.excerpt}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={blog.author.img}
                      width={50}
                      height={50}
                      className="rounded-full object-cover w-14 h-14"
                      alt="iammradarsh.com"
                    />
                  </div>
                  <div className="leading-5">
                    <strong className="text-primary">{blog.author.name}</strong>
                    <span className="block text-sm ">
                      {blog.author.titleRole}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mx-auto flex items-center justify-center ">
          <Link href={blogContent.cta.href} className="duration-300 decoration-transparent transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400">
            {blogContent.cta.label}{" "}
            <strong className="text-primary pl-1 font-semibold">
              {blogContent.cta.labelSuffix}
            </strong>
            <span className="text-gray-300">|</span>
            <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
              <BiChevronRight className="w-6 h-6 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
