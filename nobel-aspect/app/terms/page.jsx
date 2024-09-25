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
          <div className="mb-8 lg:mb-16 flex flex-col gap-4 mx-auto w-full">
            <h2 className="mt-5 header1 text-2xl md:text-3xl lg:text-4xl tracking-tight font-medium text-siteTextIcon-secondary">
              Terms of Use
            </h2>
            <div className="flex flex-col gap-3">
              <h2 className="mt-5 header2 text-base md:text-lg lg:text-xl tracking-tight font-medium text-siteTextIcon-secondary">
                1. Acceptance of Terms
              </h2>
              <p className="header3 text-base lg:text-lg font-normal text-siteTextIcon-disabled">
                By accessing and using the Noble Aspect, LLC website, you agree to be bound by these Terms of Use. If
                you do not agree with any part of these terms, please refrain from using our services.
              </p>
              <h2 className="mt-5 header2 text-base md:text-lg lg:text-xl font-medium text-siteTextIcon-secondary">
                2. Intellectual Property
              </h2>
              <div className="header3 text-base lg:text-lg font-normal text-siteTextIcon-disabled">
                <ul>
                  <li>
                    All content on our website, including text, images, graphics, logos, and software, is protected by
                    intellectual property laws.
                  </li>
                  <li>You may not reproduce, distribute, or modify any content without our explicit consent.</li>
                </ul>
              </div>
              <h2 className="mt-5 header2 text-base md:text-lg lg:text-xl font-medium text-siteTextIcon-secondary">
                3. User Conduct
              </h2>
              <div className="header3 text-base lg:text-lg font-normal text-siteTextIcon-disabled">
                <ul>
                  <li>
                    You agree not to engage in any unlawful, harmful, or abusive behavior while using our website.
                  </li>
                  <li>Respect other users and refrain from posting offensive or inappropriate content.</li>
                </ul>
              </div>
              <h2 className="mt-5 header2 text-base md:text-lg lg:text-xl font-medium text-siteTextIcon-secondary">
                4. Disclaimer of Warranties
              </h2>
              <div className="header3 text-base lg:text-lg font-normal text-siteTextIcon-disabled">
                <ul>
                  <li>We provide our services “as is” without any warranties or guarantees.</li>
                  <li>
                    Noble Aspect, LLC does not guarantee the accuracy, completeness, or reliability of any information
                    on the website.
                  </li>
                </ul>
              </div>
              <h2 className="mt-5 header2 text-base md:text-lg lg:text-xl font-medium text-siteTextIcon-secondary">
                5. Limitation of Liability
              </h2>
              <div className="header3 text-base lg:text-lg font-normal text-siteTextIcon-disabled">
                <ul>
                  <li>
                    We are not liable for any direct, indirect, incidental, or consequential damages arising from your
                    use of our website.
                  </li>
                  <li>Your use of the website is at your own risk.</li>
                </ul>
              </div>
              <h2 className="mt-5 header2 text-base md:text-lg lg:text-xl font-medium text-siteTextIcon-secondary">
                6. Governing Law and Jurisdiction
              </h2>
              <div className="header3 text-base lg:text-lg font-normal text-siteTextIcon-disabled">
                <ul>
                  <li>These terms are governed by the laws of the State of New York.</li>
                  <li>Any disputes will be resolved in the federal or state courts located within New York.</li>
                </ul>
              </div>
              <h2 className="mt-5 header2 text-base md:text-lg lg:text-xl font-medium text-siteTextIcon-secondary">
                7. Remote Services
              </h2>
              <div className="header3 text-base lg:text-lg font-normal text-siteTextIcon-disabled">
                <ul>
                  <li>Our services are accessible to users across the entire United States.</li>
                  <li>Users may interact with our services electronically, regardless of their physical location.</li>
                </ul>
              </div>
              <h2 className="mt-5 header2 text-base md:text-lg lg:text-xl font-medium text-siteTextIcon-secondary">
                8. Changes to Terms
              </h2>
              <div className="header3 text-base lg:text-lg font-normal text-siteTextIcon-disabled">
                <ul>
                  <li>Noble Aspect, LLC reserves the right to modify these terms at any time.</li>
                  <li>We will notify users of any significant changes.</li>
                </ul>
              </div>
            </div>
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
