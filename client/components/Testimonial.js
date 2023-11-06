"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";

const testimonialContent = {
  heading: {
    headingSubTitle: "Jobseekers Says ",
    headingTitle: "Hear What Students Say",
    description:
      "From Heartwarming testimonials to constructive feedback, we are proud to share our clients’ experiences with you.",
    cta: {
      cta_href: "#_",
      cta_label: "Get Started",
    },
  },
  testimonials: [
    {
      img: "/images/person-1-min.jpg",
      name: "Accenture : Jane Cooper",
      titleRole: "SDE-1-Dallas, TX",
      testimony:
        "“I am very happy with the services provided by Future Generations. They are very professional and have a great team. I would highly recommend them to anyone looking for a job.”",
    },
    {
      img: "/images/person-2-min.jpg",
      name: "Wipro : Alisa Richardson",
      titleRole: "Developer-Miami, FL",
      testimony:
        "“I am very happy with the services provided by Future Generations. They are very professional and have a great team. I would highly recommend them to anyone looking for a job.”",
    },
    {
      img: "/images/person-3-min.jpg",
      name: "Capgemmni : Davon Mckenny ",
      titleRole: "Customer-Seatle, WA",
      testimony:
        "“I am very happy with the services provided by Future Generations. They are very professional and have a great team. I would highly recommend them to anyone looking for a job.”",
    },
  ],
};

const Testimonial = () => {
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
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            {testimonialContent.heading.headingSubTitle && (
              <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10" data-aos="fade-up">               {testimonialContent.heading.headingSubTitle}
              </span>
            )}
            {testimonialContent.heading.headingTitle && (
              <h2 className="text-heading text-2xl  lg:text-4xl font-bold mb-5" data-aos="fade-up" data-aos-delay="100">
                {testimonialContent.heading.headingTitle}
              </h2>
            )}
            {testimonialContent.heading.description && (
              <p className="text-body leading-relaxed mb-10" data-aos="fade-up" data-aos-delay="200">
                {testimonialContent.heading.description}
              </p>
            )}

            {testimonialContent.heading.cta.cta_label && (
              <p>
                <Link
                  href="{testimonialContent.heading.cta.cta_href}"
                  className="py-3 px-5 bg-primary decoration-transparent text-white rounded-[100px] duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg relative top-0 inline-block hover:-top-1"
                  data-aos="fade-up" data-aos-delay="300"
                >
                  {testimonialContent.heading.cta.cta_label}
                </Link>
              </p>
            )}
          </div>
          <div className="lg:w-8/12 ">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              <div className="md:w-6/12 mb-6 md:mb-0" data-aos="fade-in">
                {testimonialContent.testimonials.map((testimonial, index) =>{
                  if (index == 2) return null;
                  return (
                  <div
                    key={index}
                    className={`bg-white p-7 rounded-lg w-full ${
                      index == 1 ? "" : "mb-6"
                    }`}
                  >
                    <div className="flex space-x-4 items-center mb-4">
                      <div className="relative">
                        <Image
                          src={testimonial.img}
                          width={579}
                          height={720}
                          className="object-cover h-14 w-14 rounded-full  "
                          alt="Iammradarsh.com"
                        />
                        <span className="absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Image
                            src={"/images/quote.svg"}
                            width={12}
                            height={15}
                            alt="iammradarsh.com"
                          />
                        </span>
                      </div>
                      <div className="leading-3">
                        {testimonial.name && (
                          <strong className="block text-heading text-lg">
                            {testimonial.name}
                          </strong>
                        )}
                        {testimonial.titleRole && (
                          <span className="text-sm">
                            {testimonial.titleRole}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                          <blockquote>
                            {testimonial.testimony}
                          </blockquote>
                    </div>
                  </div>
                )})}
              </div>
              <div className="md:w-6/12">
                <div>
                  <div className="w-16 h-16 hidden md:block bg-greenLight rounded-full mb-6 "></div>
                  <div className="bg-white p-7 rounded-lg w-full mb-6" data-aos="fade-in">
                    <div className="flex space-x-4 items-center mb-4">
                      <div className=" relative" >
                        <Image src={testimonialContent.testimonials[2].img} width={579} height={720} className="object-cover h-14 w-14 rounded-full" alt="iammradarsh.com" />
                        <span className="absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Image src={"/images/quote.svg"} width={14} height={9} alt="Iammradarsh.com"/>
                        </span>
                      </div>
                      <div className="leading-3">
                        {testimonialContent.testimonials[2].name && (
                          <strong className="block text-heading text-lg">
                            {testimonialContent.testimonials[2].name}
                          </strong>
                        )}
                        {testimonialContent.testimonials[2].titleRole && (
                          <span className="text-sm">
                            {testimonialContent.testimonials[2].titleRole}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                    <blockquote>
                            {testimonialContent.testimonials[2].testimony}
                          </blockquote>
                    </div>
                  </div>
                  <div className="bg-[#F27763] hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]">

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
