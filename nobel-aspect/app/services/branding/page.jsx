"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const Branding = () => {
  const [serviceData, setServiceData] = useState([
    {
      icon: "",
      content: `<b>Craft Your Identity:</b> Our branding services are designed to define and amplify your unique identity. We delve deep into your brand’s essence to create a compelling narrative that resonates with your audience and sets you apart from the competition.`,
    },
    {
      icon: "",
      content: `<b>Visual Impact:</b> We transform your brand’s story into visually captivating elements that convey your message effectively. From logos to color schemes, our design expertise ensures that every visual aspect of your brand is memorable and impactful.`,
    },
    {
      icon: "",
      content: `<b>Strategic Alignment:</b> Our approach integrates your brand’s goals with strategic insights to build a cohesive and engaging brand experience. We focus on aligning your branding efforts with market trends and audience expectations to maximize your reach and influence.`,
    },
    {
      icon: "",
      content: `<b>Long-Term Success:</b> At the heart of our branding strategy is a commitment to your long-term success. We build strong brand foundations that not only capture attention but also foster lasting connections, ensuring your brand evolves with the changing landscape.`,
    },
  ]);
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#CBF8DA] w-full flex justify-center">
        <div className="absolute w-full h-full z-0">
          <Image
            src={"/service_design.svg"}
            alt=""
            width={1400}
            height={200}
            className="w-full h-full object-cover object-left-bottom"
          />
        </div>
        <div className="max-w-screen-xl min-h-screen px-10 flex flex-col md:flex-row gap-10 lg:gap-24 items-center justify-center">
          <div className="w-full flex flex-col gap-5 order-2 md:order-none">
            <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-siteTextIcon-primary leading-[80px]">
              Branding
            </h2>
            <p className="text-base lg:text-lg text-siteTextIcon-disabled font-semibold">
              At Noble Aspect, LLC, we understand that a strong brand is the foundation of success. Our branding
              services are designed to create a powerful and authentic identity that resonates with your audience.
            </p>
          </div>
          <div className="w-full sm:w-2/3 md:w-full flex items-center justify-center order-1 md:order-none z-10">
            <Image src={"/branding.svg"} className="w-full h-full object-cover" alt="" width={1000} height={1000} />
          </div>
        </div>
      </section>

      {/* Details section */}
      <section className="bg-white">
        <div className="py-8 px-4 pb-8 mx-auto max-w-screen-xl text-center sm:py-16 sm:pb-32 lg:px-6 lg:pb-40">
          <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto w-full">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-siteTextIcon-primary">
              Branding{" "}
            </h2>
            <p className="text-gray-500 text-base lg:text-xl font-light text-siteTextIcon-disabled">
              Our battle-tested developers specialize in a wide range of web development services. Here are some of the
              solutions that we can deliver for you.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {serviceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  //   className="text-left border border-siteNeutral-300 p-5 rounded-2xl text-gray-500 dark:text-gray-400"
                  className={`text-left border border-siteNeutral-300 p-5 rounded-2xl text-gray-500 dark:text-gray-400 ${
                    !isEven ? "relative sm:top-20" : ""
                  }`}
                >
                  <div className="flex justify-center items-center mb-4 rounded-full bg-sitePrimary-700/15 h-14 w-14 p-2">
                    <div className="flex justify-center items-center rounded-full bg-white w-full h-full shadow-small">
                      <svg
                        className="w-5 h-5 text-siteTextIcon-primary lg:w-6 lg:h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" />
                          <path strokeLinecap="round" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer noDesign />
    </main>
  );
};

export default Branding;
