import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Footer = ({ noDesign }) => {
  return (
    <>
      <footer
        className={`relative p-4 ${noDesign ? "bg-white" : "bg-sitePrimary-100"} md:p-8 lg:p-10 dark:bg-gray-800`}
      >
        {!noDesign && (
          <div className="absolute w-full h-full -m-4 md:-m-8 lg:-m-10">
            <Image src={"/Footer_Design.svg"} alt="" width={1400} height={200} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="mx-auto max-w-screen-xl text-center relative z-10">
          <a href="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900 pb-5">
            <Logo wordmark fix />
          </a>
          <div className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
            <Link href={"/"} className="mr-4 text-gray-500 hover:text-sitePrimary-700 transition md:mr-6">
              Home
            </Link>
            <Link href={"/services"} className="mr-4 text-gray-500 hover:text-sitePrimary-700 transition md:mr-6">
              Services
            </Link>
            <Link href={"/casestudy"} className="mr-4 text-gray-500 hover:text-sitePrimary-700 transition md:mr-6">
              Case Study
            </Link>
            <Link href={"/about"} className="mr-4 text-gray-500 hover:text-sitePrimary-700 transition md:mr-6">
              About us
            </Link>
            <Link href={"/contact"} className="mr-4 text-gray-500 hover:text-sitePrimary-700 transition md:mr-6">
              Contact us
            </Link>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
              <Link href={"/policy"} className="mr-4 text-gray-500 hover:text-sitePrimary-700 transition md:mr-6">
                Privacy Policy
              </Link>
              <Link href={"/terms"} className="mr-4 text-gray-500 hover:text-sitePrimary-700 transition md:mr-6">
                Terms of use
              </Link>
            </div>
            <span className="text-sm text-gray-500 mb-6 sm:text-center dark:text-gray-400">
              © 2019 Noble Aspect LLC, All rights reserved.
            </span>
            <div className="flex mt-6 space-x-6 justify-center md:mt-0">
              <a href="https://x.com" className="text-gray-500 hover:text-sitePrimary-700">
                <Icon icon="akar-icons:twitter-fill" width={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-sitePrimary-700">
                <Icon icon="akar-icons:linkedin-box-fill" width={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-500 hover:text-sitePrimary-700">
                <Icon icon="akar-icons:facebook-fill" width={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-500 hover:text-sitePrimary-700">
                <Icon icon="akar-icons:instagram-fill" width={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-500 hover:text-sitePrimary-700">
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
