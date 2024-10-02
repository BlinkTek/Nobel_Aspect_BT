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

      {/* about details Section */}
      <section className="bg-white">
        <div className="py-8 mx-auto max-w-screen-xl sm:py-16">
          <div className="space-y-8 md:space-y-0">
            <section className="bg-white dark:bg-gray-900">
              <h2 className="px-4 mb-4 header1 text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-siteTextIcon-primary">
                About Us
              </h2>{" "}
              <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:flex sm:py-16 lg:px-6">
                <Image
                  width={500}
                  height={500}
                  className="w-full md:w-[52%] dark:hidden"
                  src="/about_1.png"
                  alt="dashboard image"
                />
                <div className="mt-4 md:mt-0 w-full md:w-1/2">
                  <h2 className="mb-4 header2 text-xl md:text-2xl lg:text-3xl font-medium text-siteTextIcon-primary dark:text-white uppercase">
                    Digital Solutions with a Noble Touch
                  </h2>
                  <p className="mb-6 header3 text-base lg:text-lg font-light text-gray-500 dark:text-gray-400">
                    Noble Aspect, LLC is a forward thinking and innovative digital marketing agency located in New York
                    City’s most vibrant downtown. We excel at creating captivating brand experiences, premium designs,
                    and effective digital marketing strategies. By tailoring our approach to the unique needs of each
                    client, we ensure that every project not only meets but exceeds expectations.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
              <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:flex sm:py-16 lg:px-6">
                <Image
                  width={500}
                  height={500}
                  className="w-full md:w-[52%] dark:hidden order-2"
                  src="/about_3.png"
                  alt="dashboard image"
                />
                <div className="mt-4 md:mt-0 w-full md:w-1/2 order-1">
                  <h2 className="mb-4 header2 text-xl md:text-2xl lg:text-3xl font-medium text-siteTextIcon-primary dark:text-white uppercase">
                    Our Vision & Mission
                  </h2>
                  <p className="mb-6 header3 text-base lg:text-lg font-light text-gray-500 dark:text-gray-400">
                    At Noble Aspect, LLC we envision a digital realm where creativity, authenticity, and purpose
                    converge seamlessly. Our goal is to shape it so that every interaction is not only meaningful but
                    also transformative.
                    <br />
                    <br />
                    Noble Aspect, LLC’s mission is to empower businesses and individuals by crafting tailored digital
                    solutions that transform their digital landscapes. We strive to create a dynamic fusion between
                    technology and human experience, amplifying connectivity and driving meaningful positive change.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
              <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:flex sm:py-16 lg:px-6">
                <Image
                  width={500}
                  height={500}
                  className="w-full md:w-[52%] dark:hidden"
                  src="/about_2.png"
                  alt="dashboard image"
                />
                <div className="mt-4 md:mt-0 w-full md:w-1/2">
                  <h2 className="mb-4 header2 text-xl md:text-2xl lg:text-3xl font-medium text-siteTextIcon-primary dark:text-white uppercase">
                    Our Core Values
                  </h2>
                  <div className="mb-6 header3 text-base lg:text-lg font-light text-gray-500 dark:text-gray-400">
                    <ol>
                      <li>
                        <b className="font-bold">Quality:</b> We relentlessly pursue quality in everything we do. Our
                        commitment to quality drives us to exceed expectations and deliver exceptional results.
                      </li>
                      <li>
                        <b className="font-bold">Creativity:</b> Our aim to bring prospective concepts to life. We
                        create a unique and memorable experience for our clients and their customers through creative
                        solutions.
                      </li>
                      <li>
                        <b className="font-bold">Innovation:</b> We thrive on innovation. Curiosity fuels our
                        exploration of new ideas, technologies, and methodologies. We embrace change as an opportunity
                        for growth.
                      </li>
                      <li>
                        <b className="font-bold">Partnership:</b> We believe in the power of partnership. By fostering
                        diverse perspectives and working together, we create solutions that resonate with our clients
                        and their audiences.
                      </li>
                      <li>
                        <b className="font-bold">Integrity:</b> Honesty, transparency, and ethical conduct are integral
                        to our values. We build trust through our actions, maintaining unwavering ethical principles.
                      </li>
                      <li>
                        <b className="font-bold">Empathy:</b> Understanding the needs, concerns, and aspirations of our
                        clients and their stakeholders is essential. We approach every project with empathy, ensuring
                        that our solutions align with real-world impact.
                      </li>
                    </ol>
                  </div>
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
