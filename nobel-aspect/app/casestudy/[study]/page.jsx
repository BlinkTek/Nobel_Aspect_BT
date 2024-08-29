"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import axios from "axios";

const Page = ({ params }) => {
  const [serviceData, setServiceData] = useState([
    {
      icon: "",
      content:
        "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Du is facilisis blandit erat in suscipi    Maecenas at dolor lacinia, int erdum risus elementum, frin gilla sapien.Nullam a sapien vulputate",
    },
    {
      icon: "",
      content:
        "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Du is facilisis blandit erat in suscipi    Maecenas at dolor lacinia, int erdum risus elementum, frin gilla sapien.Nullam a sapien vulputate",
    },
    {
      icon: "",
      content:
        "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Du is facilisis blandit erat in suscipi    Maecenas at dolor lacinia, int erdum risus elementum, frin gilla sapien.Nullam a sapien vulputate",
    },
    {
      icon: "",
      content:
        "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Du is facilisis blandit erat in suscipi    Maecenas at dolor lacinia, int erdum risus elementum, frin gilla sapien.Nullam a sapien vulputate",
    },
  ]);

  const study = decodeURIComponent(params.study);
  const [myService, setMyService] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.post(`http://localhost:8000/caseStudy/case-study`, {
        casestudyTitle: study,
      });
      setMyService(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, [study]);

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
              {myService?.casestudyTitle}
            </h2>
            <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">{myService?.information}</p>
          </div>
          <div className="w-full h-full">
            <img
              src={myService?.image}
              alt=""
              width={1400}
              height={200}
              className="w-full h-full object-cover object-left-bottom"
            />
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
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mb-8 lg:mb-16 flex flex-col gap-3 mx-auto w-full">{myService?.content}</div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer noDesign />
    </main>
  );
};

export default Page;
