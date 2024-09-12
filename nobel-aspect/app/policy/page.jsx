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
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-siteTextIcon-secondary">
              Privacy Policy
            </h2>
            <div className="flex flex-col gap-3">
              <h2 className="mt-5 text-lg md:text-xl lg:text-3xl tracking-tight font-medium text-siteTextIcon-secondary">
                1. Introduction
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                Welcome to Noble Aspect, LLC’s Privacy Policy. This document outlines how we collect, use, and protect
                your personal information when you visit our website or use our services. By accessing our site, you
                agree to the terms outlined below.
              </p>
              <h2 className="mt-5 text-lg md:text-xl lg:text-3xl font-medium text-siteTextIcon-secondary">
                2. Information We Collect
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                <ul>
                  <li>
                    <b>Personal Information:</b> When you interact with our website, we may collect personal data such
                    as your name, email address, and any other information you voluntarily provide.
                  </li>
                  <li>
                    <b>Usage Data:</b> We automatically collect information about your interactions with our site,
                    including IP addresses, browser type, and pages visited.
                  </li>
                </ul>
              </p>
              <h2 className="mt-5 text-lg md:text-xl lg:text-3xl font-medium text-siteTextIcon-secondary">
                3. How We Use Your Information
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                We use the collected information for the following purposes:
                <ul>
                  <li>To improve our website and services.</li>
                  <li>To communicate with you regarding inquiries, orders, or updates.</li>
                  <li>To personalize your experience on our site.</li>
                  <li>To comply with legal obligations.</li>
                </ul>
              </p>
              <h2 className="mt-5 text-lg md:text-xl lg:text-3xl font-medium text-siteTextIcon-secondary">
                4. Cookies and Tracking Technologies
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                We use cookies and similar technologies to enhance your browsing experience. You can manage cookie
                preferences through your browser settings.
              </p>
              <h2 className="mt-5 text-lg md:text-xl lg:text-3xl font-medium text-siteTextIcon-secondary">
                5. Data Security
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                We take reasonable measures to protect your data from unauthorized access, loss, or misuse. However, no
                method of transmission over the internet is entirely secure.
              </p>
              <h2 className="mt-5 text-lg md:text-xl lg:text-3xl font-medium text-siteTextIcon-secondary">
                6. Third-Party Services
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                We may use third-party services (e.g., analytics tools, payment gateways) that collect and process data.
                Please review their privacy policies for more information.
              </p>
              <h2 className="mt-5 text-lg md:text-xl lg:text-3xl font-medium text-siteTextIcon-secondary">
                7. Your Rights
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                You have the right to:
                <ul>
                  <li>Access, correct, or delete your personal information.</li>
                  <li>Opt out of marketing communications.</li>
                  <li>Request information about data processing.</li>
                </ul>
              </p>
              <h2 className="mt-5 text-lg md:text-xl lg:text-3xl font-medium text-siteTextIcon-secondary">
                8. Updates to this Policy
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                We may update this Privacy Policy periodically. Check back for any changes.
              </p>
              <h2 className="mt-5 text-lg md:text-xl lg:text-3xl font-medium text-siteTextIcon-secondary">
                9. Contact Us
              </h2>
              <p className="text-base lg:text-xl font-normal text-siteTextIcon-disabled">
                If you have any questions or concerns about our Privacy Policy, please contact us at{" "}
                <a href="mail:info@nobleaspect.com" className="underline">info@nobleaspect.com</a>.
              </p>
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
