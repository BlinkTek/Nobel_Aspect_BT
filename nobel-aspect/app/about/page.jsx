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
                <img
                  className="w-full md:w-[52%] dark:hidden"
                  src="/about_1.png"
                  alt="dashboard image"
                />
                <div className="mt-4 md:mt-0">
                  <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-medium text-siteTextIcon-primary dark:text-white uppercase">
                    Why choose us ?
                  </h2>
                  <p className="mb-6 text-base lg:text-lg font-light text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    neque ligula, elementum sit amet viverra eu, viverra eu
                    magna. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Quisque blandit
                    ipsum eu ligula ornare fringilla.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
              <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:flex sm:py-16 lg:px-6">
                <img
                  className="w-full md:w-[52%] dark:hidden order-2"
                  src="/about_2.png"
                  alt="dashboard image"
                />
                <div className="mt-4 md:mt-0 order-1">
                  <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-medium text-siteTextIcon-primary dark:text-white uppercase">
                    Our VALUE
                  </h2>
                  <p className="mb-6 text-base lg:text-lg font-light text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    neque ligula, elementum sit amet viverra eu, viverra eu
                    magna. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Quisque blandit
                    ipsum eu ligula ornare fringilla.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
              <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:flex sm:py-16 lg:px-6">
                <img
                  className="w-full md:w-[52%] dark:hidden"
                  src="/about_3.png"
                  alt="dashboard image"
                />
                <div className="mt-4 md:mt-0">
                  <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-medium text-siteTextIcon-primary dark:text-white uppercase">
                    OUR MISSION
                  </h2>
                  <p className="mb-6 text-base lg:text-lg font-light text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    neque ligula, elementum sit amet viverra eu, viverra eu
                    magna. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Quisque blandit
                    ipsum eu ligula ornare fringilla.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer noDesign />
    </main>
  );
};

export default Designing;
