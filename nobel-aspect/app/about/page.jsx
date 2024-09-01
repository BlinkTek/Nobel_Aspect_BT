"use client";

import React from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Contact from "../components/Contact";

const Designing = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Banner section */}
      <section className="bg-white">
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="w-full h-full">
            <Image
              src={"/about_banner.svg"}
              alt=""
              width={1400}
              height={200}
              className="w-full h-full object-cover object-left-bottom"
            />
          </div>
        </div>
      </section>

      {/* about details Section */}
      <section className="bg-white">
        <div className="py-8 mx-auto max-w-screen-xl sm:py-16">
          <div className="max-w-screen-md flex flex-col gap-3 mb-8 lg:mb-16 text-center mx-auto w-full">
            <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-medium text-siteTextIcon-primary">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-gray-500 text-base sm:text-xl font-light text-siteTextIcon-disabled">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            </p>
          </div>
          <div className="space-y-8 md:space-y-0">
            <section className="bg-white dark:bg-gray-900">
              <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:flex sm:py-16 lg:px-6">
                <Image width={500} height={500} className="w-full md:w-[52%] dark:hidden" src="/about_1.png" alt="dashboard image" />
                <div className="mt-4 md:mt-0">
                  <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-medium text-siteTextIcon-primary dark:text-white uppercase">
                    Why choose us ?
                  </h2>
                  <p className="mb-6 text-base lg:text-lg font-light text-gray-500 dark:text-gray-400">
                    At Noble Aspect, LLC, we believe that every brand has a story waiting to be told, a narrative that
                    sets it apart in a crowded digital landscape. Located in the heart of New York City’s vibrant
                    downtown, our forward-thinking digital marketing agency is dedicated to crafting compelling brand
                    experiences that resonate, engage, and inspire. As a team of creative visionaries and strategic
                    thinkers, we specialise in transforming ordinary ideas into extraordinary digital realities, pushing
                    the boundaries of what’s possible in the realm of marketing.
                    <br /><br />
                    Our expertise lies in our ability to blend creativity with strategy. From designing visually
                    stunning websites that captivate the eye to developing robust digital marketing campaigns that drive
                    engagement and conversions, we bring a full suite of services tailored to meet the unique needs of
                    our clients. Our approach is rooted in understanding your brand, your goals, and your audience. We
                    don’t just offer one-size-fits-all solutions; instead, we craft personalised strategies that align
                    with your vision, ensuring that every project we undertake not only meets but exceeds your
                    expectations.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
              <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:flex sm:py-16 lg:px-6">
                <Image width={500} height={500} className="w-full md:w-[52%] dark:hidden order-2" src="/about_2.png" alt="dashboard image" />
                <div className="mt-4 md:mt-0 order-1">
                  <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-medium text-siteTextIcon-primary dark:text-white uppercase">
                    Our VALUE
                  </h2>
                  <p className="mb-6 text-base lg:text-lg font-light text-gray-500 dark:text-gray-400">
                    Innovation is at the core of everything we do at Noble Aspect. In a rapidly evolving digital world,
                    staying ahead of trends is crucial. Our team is constantly exploring new tools, technologies, and
                    techniques to ensure that we are always delivering cutting-edge solutions. Whether its leveraging
                    the latest in SEO, social media marketing, content creation, or user experience design, we are
                    committed to keeping our clients at the forefront of their industries.
                    <br /><br />
                    But it’s not just about the tools and techniques; it’s about the relationships we build. At Noble
                    Aspect, we view our clients as partners. We believe in open communication, collaboration, and
                    transparency. By working closely with you, we gain a deep understanding of your brand’s aspirations,
                    allowing us to create marketing strategies that truly reflect your brand’s voice and values. Our
                    goal is to become an extension of your team, sharing in your vision and contributing to your
                    success.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
              <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:flex sm:py-16 lg:px-6">
                <Image width={500} height={500} className="w-full md:w-[52%] dark:hidden" src="/about_3.png" alt="dashboard image" />
                <div className="mt-4 md:mt-0">
                  <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-medium text-siteTextIcon-primary dark:text-white uppercase">
                    OUR MISSION
                  </h2>
                  <p className="mb-6 text-base lg:text-lg font-light text-gray-500 dark:text-gray-400">
                    Every brand is unique, and so is our approach. We pride ourselves on our flexibility and
                    adaptability, ensuring that we can meet the diverse needs of a wide range of industries. Whether
                    you’re a startup looking to make your mark or an established brand seeking to redefine your digital
                    presence, Noble Aspect is equipped to handle projects of all sizes and scopes. Our comprehensive
                    services include brand strategy, web design and development, digital advertising, SEO, content
                    marketing, and more, all designed to help your brand shine.
                    <br /><br />
                    What truly sets Noble Aspect apart is our commitment to excellence. We are passionate about what we
                    do, and it shows in our work. Our team of dedicated professionals is driven by a desire to produce
                    outstanding results and make a lasting impact. We measure our success by the success of our clients,
                    taking pride in knowing that our efforts contribute to their growth and achievements.
                    <br /><br />
                    Join us at Noble Aspect, LLC, and let’s embark on a journey to elevate your brand. Together, we can
                    create a digital presence that not only stands out but stands the test of time. Let’s build a future
                    where your brand’s digital reality is as noble and dynamic as your aspirations.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer />
    </main>
  );
};

export default Designing;
