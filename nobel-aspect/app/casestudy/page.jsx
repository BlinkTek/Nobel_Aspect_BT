"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Contact from "../components/Contact";
import axios from "axios";
import { useRouter } from "next/navigation";

const Designing = () => {
  const router = useRouter();
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredDiv(index);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  const [caseStudy, setCaseStudy] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.nobleaspect.com/api/caseStudy/list`);
      setCaseStudy(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Banner section */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mb-8 lg:mb-16 mx-auto w-full">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-siteTextIcon-primary">
              Case Studies
            </h2>
            <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
              At Noble Aspect, LLC, we believe in results, not just promises. Explore how our digital marketing, branding, and design prowess has reshaped businesses. These aren’t just case studies but the stepping stones for your brand’s journey. Ready to take the next step?
            </p>
          </div>
          <div className="w-full h-full">
            {/* <Image
              src={"/casestudy.svg"}
              alt=""
              width={1400}
              height={200}
              className="w-full h-full object-cover object-left-bottom"
            /> */}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="py-0 px-4 mx-auto max-w-screen-xl text-center sm:py-0 lg:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudy &&
              caseStudy.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative bg-sitePrimary-100 border flex flex-col gap-3 group transition-all duration-300 ${
                    hoveredDiv === index ? "h-fit z-20" : "h-80"
                  } border-siteNeutral-300 p-5 rounded-2xl text-gray-500 dark:text-gray-400 overflow-hidden ${
                    hoveredDiv === index && (index + 3 < caseStudy.length || index + 2 < caseStudy.length || index + 1 < caseStudy.length) ? "-mb-[520px]" : ""
                  }`}
                  onClick={() => router.push(`/casestudy/${item.casestudyTitle}`)}
                >
                  <h2 className="mb-4 text-2xl tracking-tight font-medium text-siteTextIcon-primary">
                    {item?.casestudyTitle}
                  </h2>
                  <div className="w-full h-full">
                    <Image src={item?.image} alt="" width={500} height={20} className="w-full h-full object-contain" />
                  </div>
                  {hoveredDiv === index && (
                    <p className="text-base tracking-tight font-medium text-siteTextIcon-disabled transition-opacity duration-300 ease-in-out opacity-100">
                      {item?.information}
                    </p>
                  )}
                </div>
              ))}
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
