"use client";

import Header from "./components/Header";
import { useState } from "react";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredDiv(index);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  const [featuresSection, setFeaturesSection] = useState([
    {
      id: 0,
      icon: "",
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Du is facilisis blandit erat in suscipi    Maecenas",
    },
    {
      id: 1,
      icon: "",
      title: "Branding",
      description:
        "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Du is facilisis blandit erat in suscipi    Maecenas",
    },
    {
      id: 2,
      icon: "",
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit. Du is facilisis blandit erat in suscipi    Maecenas",
    },
  ]);

  const [serviceData, setServiceData] = useState([
    {
      title: "Growth-marketing app for business",
      subtitle: "Mobile App Redesign",
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit molestie id. Praesent tincidunt venenatis tortor, a ornare orci maximus maximus. ",
    },
    {
      title: "Growth-marketing app for business",
      subtitle: "Mobile App Redesign",
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit molestie id. Praesent tincidunt venenatis tortor, a ornare orci maximus maximus. ",
    },
    {
      title: "Growth-marketing app for business",
      subtitle: "Mobile App Redesign",
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit molestie id. Praesent tincidunt venenatis tortor, a ornare orci maximus maximus. ",
    },
    {
      title: "Growth-marketing app for business",
      subtitle: "Mobile App Redesign",
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit molestie id. Praesent tincidunt venenatis tortor, a ornare orci maximus maximus. ",
    },
    {
      title: "Growth-marketing app for business",
      subtitle: "Mobile App Redesign",
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit molestie id. Praesent tincidunt venenatis tortor, a ornare orci maximus maximus. ",
    },
    {
      title: "Growth-marketing app for business",
      subtitle: "Mobile App Redesign",
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tincidunt metus, quis imperdiet elit molestie id. Praesent tincidunt venenatis tortor, a ornare orci maximus maximus. ",
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
        <div className="max-w-fit min-h-screen px-10 flex gap-10 lg:gap-24 items-center z-10">
          <div className="w-full md:w-[55%] lg:w-[65%] flex flex-col gap-5 order-2 md:order-none pb-48 sm:pb-32">
            <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sitePrimary-800 md:leading-10 lg:leading-[60px]">
              Unleash your brand&apos;s potential with our{" "}
              <span className="text-siteRubinRed-800">cutting-edge marketing!</span>
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-siteTextIcon-disabled font-semibold"></p>
            <a
              href="/"
              className="w-fit flex justify-center items-center gap-3 py-3 px-5 text-sm md:text-base font-medium text-center text-white rounded-xl bg-sitePrimary-700 hover:bg-sitePrimary-800 focus:ring-4 focus:ring-sitePrimary-900"
            >
              See How We Work
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 font-bold" viewBox="0 0 48 48">
                <path
                  fill="currentColor"
                  d="M41.45 6.34c.336.275.55.692.55 1.16v12a1.5 1.5 0 0 1-3 0v-8.379l-9.44 9.44a1.5 1.5 0 1 1-2.12-2.122L36.877 9H28.5a1.5 1.5 0 0 1 0-3h11.981a1.5 1.5 0 0 1 .97.34M12.5 9A3.5 3.5 0 0 0 9 12.5v23a3.5 3.5 0 0 0 3.5 3.5h23a3.5 3.5 0 0 0 3.5-3.5v-8a1.5 1.5 0 1 1 3 0v8a6.5 6.5 0 0 1-6.5 6.5h-23A6.5 6.5 0 0 1 6 35.5v-23A6.5 6.5 0 0 1 12.5 6h8a1.5 1.5 0 0 1 0 3z"
                />
              </svg>
            </a>
          </div>
          <div className="absolute right-0 bottom-0 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] flex items-center justify-center order-1 md:order-none z-10">
            <Image src={"/home_banner.svg"} className="w-[90%] h-full object-cover" alt="" width={1000} height={1000} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto w-full">
            <h2 className="mb-4 text-3xl tracking-tight font-medium text-siteTextIcon-primary">
              Designed for business teams like yours
            </h2>
            <p className="text-gray-500 sm:text-xl text-base font-light text-siteTextIcon-disabled">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu accumsan quam. Nam imperdiet varius urna
              sed ullamcorper. Aenean varius molestie arcu,
            </p>
          </div>
          <div className="space-y-8 grid md:grid-cols-3 md:gap-12 md:space-y-0">
            {featuresSection.map((item, index) => {
              return (
                <div key={index} className="border-l border-siteNeutral-300 pl-6">
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-lg bg-sitePrimary-700/25 lg:h-12 lg:w-12 p-2">
                    <div className="flex justify-center items-center rounded-md bg-white w-full h-full">
                      <svg
                        className="w-5 h-5 text-sitePrimary-700 lg:w-6 lg:h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold -ml-6 pl-6 border-l-2 border-sitePrimary-700 text-siteTextIcon-primary">
                    {item.title}
                  </h3>
                  <p className="text-siteTextIcon-secondary">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto w-full">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-siteTextIcon-primary">
              Case Studies{" "}
            </h2>
            <p className="text-gray-500 text-base lg:text-xl font-light text-siteTextIcon-disabled">
              Our battle-tested developers specialize in a wide range of designing. Here are some of the solutions that
              we can deliver for you.
            </p>
          </div>
          <div className="flex flex-wrap justify-evenly gap-y-5">
            {serviceData.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`w-full sm:w-[48%] lg:w-[30%] bg-sitePrimary-100 border flex flex-col gap-3 group transition-all duration-300 ${
                  hoveredDiv === index ? "h-fit z-20" : "h-80"
                } border-siteNeutral-300 p-5 rounded-2xl text-gray-500 dark:text-gray-400 overflow-hidden ${
                  hoveredDiv === index && index + 3 < serviceData.length ? "-mb-[520px]" : ""
                }`}
              >
                <h2 className="mb-4 text-2xl tracking-tight font-medium text-siteTextIcon-primary">{item.title}</h2>
                <div className="w-full h-full">
                  <Image
                    src={"/mobile_app.png"}
                    alt=""
                    width={500}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg tracking-tight font-medium text-sitePrimary-800">{item.subtitle}</span>
                <h2 className="text-2xl tracking-tight font-medium text-siteTextIcon-primary">{item.heading}</h2>
                {hoveredDiv === index && (
                  <p className="text-base tracking-tight font-medium text-siteTextIcon-disabled transition-opacity duration-300 ease-in-out opacity-100">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/** Newsletter Section */}
      <section className="bg-white pb-20 px-4">
        <div className="py-8 px-4 h-60 md:h-[400px] mx-auto max-w-screen-xl sm:py-16 lg:px-6 bg-[url('/newsletter-banner.jpg')] bg-cover bg-center rounded-3xl flex flex-col gap-10 items-center justify-center">
          <h1 className="mx-auto font-medium text-sitePrimary-700 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-screen-md">
            Let&apos;s make some great Digital products together
          </h1>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-sm md:text-base font-medium text-center text-white rounded-xl bg-sitePrimary-700 hover:bg-sitePrimary-800 focus:ring-4 focus:ring-sitePrimary-900"
          >
            Contact us
          </a>
        </div>
      </section>

      {/** Enquiry section */}
      <section className="bg-siteNeutral-100 w-full flex justify-center">
        <div className="max-w-screen-xl w-full flex gap-12 py-8 px-4 sm:py-16 xl:px-0">
          <div className="mx-auto w-full md:w-1/2">
            <h2 className="mb-4 text-3xl tracking-tight font-medium text-siteTextIcon-primary dark:text-white">
              Enquiry
            </h2>
            {/* <p className="mb-8 lg:mb-16 font-light text-base text-siteTextIcon-disabled dark:text-gray-400 sm:text-xl"></p> */}
            <form action="#" className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                  >
                    First Name<span className="text-siteRubinRed-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                  >
                    Last Name<span className="text-siteRubinRed-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">
                    Email<span className="text-siteRubinRed-700">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">
                    Phone<span className="text-siteRubinRed-700">*</span>
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="select" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">
                  Service you are looking for
                  <span className="text-siteRubinRed-700">*</span>
                </label>
                <select
                  name="select"
                  id="select"
                  className="block w-full p-3 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Branding">Branding</option>
                  <option value="Design">Design</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Message<span className="text-siteRubinRed-700">*</span>
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white resize-none rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sitePrimary-700 sm:w-fit hover:bg-sitePrimary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="mx-auto hidden md:block md:w-1/2">
            <div className="rounded-2xl h-full overflow-hidden bg-[url('/contact-banner.png')] bg-cover bg-top"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
