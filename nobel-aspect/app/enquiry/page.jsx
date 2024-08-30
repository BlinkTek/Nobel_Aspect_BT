"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";
import Contact from "../components/Contact";
import axios from "axios";

const Page = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    field: "Select Industry",
    services: "Select Services",
    message: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "${process.env.NEXT_PUBLIC_API_URL}inquiry/inquiries",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSuccessMessage("Inquiry sent successfully!");
      setError(null);
      // Clear form after successful submission
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        field: "Select Industry",
        service: "Select Services",
        message: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to send inquiry. Please try again later."
      );
      setSuccessMessage(null);
    }
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/** Enquiry section */}
      {/** Enquiry section */}
      <section className="bg-siteNeutral-0 dark:bg-gray-900 flex gap-12 py-8 px-4 sm:py-16 lg:px-28">
        <div className="mx-auto max-w-screen-md w-full md:w-1/2">
          <h2 className="mb-4 text-3xl tracking-tight font-medium text-siteTextIcon-primary dark:text-white">
            Enquiry Menu
          </h2>
          {/* <p className="mb-8 lg:mb-16 font-light text-base text-siteTextIcon-disabled dark:text-gray-400 sm:text-xl"></p> */}

          {/* Display success or error messages */}
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
          {successMessage && (
            <p className="mb-4 text-sm text-green-500">{successMessage}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="field"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                Select Industry
              </label>
              <select
                name="field"
                id="field"
                value={formData.field}
                onChange={handleChange}
                className="block w-full p-3 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="Select Field">Select Industry</option>
                <option value="Person">Person</option>
                <option value="Company">Company</option>
                <option value="Both">Both</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="service"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                Select Services
              </label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="block w-full p-3 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="Select Services">Select Services</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Branding">Branding</option>
                <option value="Design">Design</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-white resize-none rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sitePrimary-800 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mx-auto max-w-screen-md hidden md:block md:w-1/2">
          <div className="rounded-2xl h-full overflow-hidden bg-[url('/enquiry-banner.png')] bg-cover bg-top"></div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer noDesign />
    </main>
  );
};

export default Page;
