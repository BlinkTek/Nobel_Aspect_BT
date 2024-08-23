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
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mb-8 lg:mb-16 mx-auto w-full">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-siteTextIcon-primary">
              Growth-marketing app for business
            </h2>
            <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              ligula, elementum sit amet viverra eu, viverra eu magna.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Quisque blandit ipsum eu ligula
              ornare fringilla. Etiam ac ligula erat. Ut eu nisi tincidunt,
              consequat lorem sed, feugiat tellus. Duis eget mauris diam.
              Phasellus eu nibh fringilla, auctor nulla a, vulputate mauris.
              Aenean consequat lacus in ligula iaculis, ac mollis odio
              convallis. Aenean non placerat nunc, vitae semper urna. Ut sit
              amet convallis tellus. Nunc mollis convallis tellus, vel interdum
              libero consectetur in. Vivamus aliquam posuere risus, vel iaculis
              dolor mollis ac. Ut nisi dui, laoreet nec ultricies nec, ultrices
              varius odio.
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
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mb-8 lg:mb-16 flex flex-col gap-3 mx-auto w-full">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-siteTextIcon-primary">
              Marketing Solution
            </h2>
            <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              ligula, elementum sit amet viverra eu, viverra eu magna.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Quisque blandit ipsum eu ligula
              ornare fringilla. Etiam ac ligula erat. Ut eu nisi tincidunt,
              consequat lorem sed, feugiat tellus.
            </p>
            <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              ligula, elementum :
            </p>
            <ul className="pt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 list-disc list-inside text-siteTextIcon-disabled font-semibold marker:text-siteRubinRed-700">
              <li>Lorem ipsum dolor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lorem ipsum dolor sit</li>
            </ul>
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
