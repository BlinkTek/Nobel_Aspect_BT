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
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/caseStudy/list`);
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
              Growth-marketing app for business
            </h2>
            <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque ligula, elementum sit amet viverra eu,
              viverra eu magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Quisque blandit ipsum eu ligula ornare fringilla. Etiam ac ligula erat. Ut eu nisi tincidunt,
              consequat lorem sed, feugiat tellus. Duis eget mauris diam. Phasellus eu nibh fringilla, auctor nulla a,
              vulputate mauris. Aenean consequat lacus in ligula iaculis, ac mollis odio convallis. Aenean non placerat
              nunc, vitae semper urna. Ut sit amet convallis tellus. Nunc mollis convallis tellus, vel interdum libero
              consectetur in. Vivamus aliquam posuere risus, vel iaculis dolor mollis ac. Ut nisi dui, laoreet nec
              ultricies nec, ultrices varius odio.
            </p>
          </div>
          <div className="w-full h-full">
            <Image
              src={"/casestudy.svg"}
              alt=""
              width={1400}
              height={200}
              className="w-full h-full object-cover object-left-bottom"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
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
