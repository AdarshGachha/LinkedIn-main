"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";

const heroContent = {
  text: {
    subheading: "Welcome to our World",
    heading: "We are a team of professionals",
    description:
      "We understand that what is neccesary for our future is to be able to adapt to the changes that are coming, that is why we are here to help you with your projects and ideas.",
  },
  images: {
    img1: "/images/hero-img-1-min.jpg",
    img2: "/images/hero-img-2-min.jpg",
    img3: "/images/hero-img-3-min.jpg",
    img4: "/images/hero-img-4-min.jpg",
    img5: "/images/hero-img-5-min.jpg",
  },
};

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "slide",
      once: true,
    });

  });
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {heroContent.text.subheading && (
              <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]" data-aos="fade-up">
                {heroContent.text.subheading}
              </span>
            )}
            {heroContent.text.heading && (
              <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7" data-aos="fade-up" data-aos-delay="100">
                {heroContent.text.heading}
              </h1>
            )}

            {heroContent.text.description && (
              <p className="leading-relaxed text-body mb-10" data-aos="fade-up" data-aos-delay="200">
                {heroContent.text.description}
              </p>
            )}

            <div className="flex space-x-3" data-aos="fade-up" data-aos-delay="300">
              <Link
                href="/student"
                className="py-3 px-5 bg-primary decoration-transparent text-white rounded-full duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg relative top-0 inline-block hover:-top-1"
              >
                Student
              </Link>

              <Link
                href="/employe"
                className="py-3 px-5 bg-secondary decoration-transparent text-white rounded-full duration-300 transition-all ease-in-out hover:bg-[#179792] hover:shadow-lg relative top-0 inline-block hover:-top-1"
              >
               Employer
              </Link>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-6/12 h-72">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    alt="iammradarsh.com"
                    className="object-cover h-full w-full rounded-2xl"
                   data-aos="fade-in"></Image>
                )}
              </div>
              <div className="w-3/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        alt="iammradarsh.com"
                        className="object-cover h-full w-full rounded-2xl" data-aos="fade-in" data-aos-delay="100"
                      ></Image>
                    </div>
                  )}
                  <div className="bg-yellowLight rounded-2xl rounded-tr-[200px]"></div>
                </div>
                {heroContent.images.img3 && (
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="iammradarsh.com"
                      className="object-cover h-full w-full rounded-2xl" data-aos="fade-in" data-aos-delay="200"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
                    {heroContent.images.img4 && (
                        <div>
                            <Image src={heroContent.images.img4} width={394} height={394} alt="iammradarsh.com" className="object-cover h-full w-full rounded-2xl" data-aos="fade-in" data-aos-delay="300"></Image>
                        </div>
                    )}
                </div>
              </div>
              <div className="w-5/12">
                {heroContent.images.img5 && (
                    <Image src={heroContent.images.img5} width={446} height={495} alt="iammradarsh.com" className="object-cover h-full w-full rounded-2xl" data-aos="fade-in" data-aos-delay="400" />
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Hero;
