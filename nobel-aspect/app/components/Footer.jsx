import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import axios from "axios";
import { usePathname } from "next/navigation"; // Import usePathname hook

const Footer = ({ noDesign }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const pathname = usePathname(); // Get the current path

  // Function to check if the link is active
  const isActive = (path) => {
    if (path === "/") {
      // Home should only be active when the exact path is "/"
      return pathname === "/";
    }
    // For other paths, use startsWith to match parent and child routes
    return pathname.startsWith(decodeURIComponent(path));
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.nobleaspect.com/api/service/list`);
      setServices(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <footer
        className={`relative p-4 ${noDesign ? "bg-white" : "bg-sitePrimary-100"} md:p-8 lg:p-10 lg:pb-1 dark:bg-gray-800`}
      >
        {!noDesign && (
          <div className="absolute w-full h-full -m-4 md:-m-8 lg:-m-10">
            <Image src={"/Footer_Design.svg"} alt="" width={1400} height={200} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="mx-auto max-w-screen-xl text-center relative z-10">
          <a href="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900 pb-5">
            <Logo wordmark isFooter />
          </a>
          <div className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
            <Link
              href={"/"}
              className={`mr-4 transition md:mr-6 ${
                isActive("/") ? "text-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
              }`}
            >
              Home
            </Link>
            {/* Map services dynamically */}
            {services.map((service, index) => (
              <Link
                key={service.serviceTitle}
                href={`/services/${service.serviceTitle}`}
                className={`mr-4 transition md:mr-6 ${
                  isActive(`/services/${service.serviceTitle}`)
                    ? "text-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
                }`}
              >
                {service.serviceTitle}
              </Link>
            ))}
            <Link
              href={"/casestudy"}
              className={`mr-4 transition md:mr-6 ${
                isActive("/casestudy") ? "text-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
              }`}
            >
              Case Studies
            </Link>
            <Link
              href={"/about"}
              className={`mr-4 transition md:mr-6 ${
                isActive("/about") ? "text-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
              }`}
            >
              About Us
            </Link>
            <Link
              href={"/contact"}
              className={`mr-4 transition md:mr-6 ${
                isActive("/contact") ? "text-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
              }`}
            >
              Contact Us
            </Link>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className=" md:flex md:items-center lg:pt-16 md:justify-between">
            <div className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
              <Link
                href={"/policy"}
                className={`mr-4 transition md:mr-6 ${
                  isActive("/policy") ? "text-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
                }`}
              >
                Privacy Policy
              </Link>
              <Link
                href={"/terms"}
                className={`mr-4 transition md:mr-6 ${
                  isActive("/terms") ? "text-EffectRed font-bold" : "text-TextPrimary hover:text-EffectRed"
                }`}
              >
                Terms of Use
              </Link>
            </div>
            <span className="text-sm text-TextPrimary hover:text-EffectRed mb-6 sm:text-center">
              © 2019 Noble Aspect, LLC. All rights reserved.
            </span>
            <div className="flex my-6 space-x-6 justify-center md:mt-0">
              <a href="https://x.com" className="text-TextPrimary hover:text-EffectRed">
                <Icon icon="hugeicons:new-twitter" width={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/noble-aspect-llc/"
                className="text-TextPrimary hover:text-EffectRed"
              >
                <Icon icon="akar-icons:linkedin-box-fill" width={20} />
              </a>
              <a href="https://facebook.com" className="text-TextPrimary hover:text-EffectRed">
                <Icon icon="akar-icons:facebook-fill" width={20} />
              </a>
              <a href="https://instagram.com" className="text-TextPrimary hover:text-EffectRed">
                <Icon icon="akar-icons:instagram-fill" width={20} />
              </a>
              <a href="https://youtube.com" className="text-TextPrimary hover:text-EffectRed">
                <Icon icon="akar-icons:youtube-fill" width={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
