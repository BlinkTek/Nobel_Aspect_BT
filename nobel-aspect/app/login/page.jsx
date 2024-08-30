"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Logo from "../components/Logo";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}user/login`,
        {
          email,
          password,
        }
      );
      console.log("Login successful:", response.data);

      localStorage.setItem("token", JSON.stringify(response.data.data));
      router.push("/admin");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-white">
        <div className="flex h-full min-h-full">
          <div className="hidden md:flex md:w-1/2 items-center justify-center">
            {/* <Image
              src="/login-image.png" // Replace with the actual path of the image
              alt="Man holding green arrow"
              width={1000}
              height={1000}
              priority
              className="w-full h-full object-top object-cover"
            /> */}
            <div className="scale-100">
              <Logo wordmark />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 items-center justify-between md:w-1/2 pt-5 pb-5">
            {/* <Logo wordmark /> */}
            <div></div>
            <div className="border-2 rounded-large shadow-md p-4 md:p-8 w-full max-w-md">
              <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
                WELCOME BACK!
              </h1>
              <p className="text-gray-500 text-center mb-8">
                Fill the below fields to log in
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    className="block text-gray-600 text-sm font-medium mb-3"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none border-b border-gray-500 bg-transparent w-full py-1 px-3 text-gray-800 leading-tight"
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-600 text-sm font-medium mb-3"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none border-b border-gray-500 bg-transparent w-full py-1 px-3 text-gray-800 leading-tight"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && (
                  <div className="text-red-500 text-sm text-center">
                    {error}
                  </div>
                )}
                <div className="mb-2">
                  <button
                    className="w-full bg-emerald-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-blue-300"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
            <p className="text-siteTextIcon-disabled">
              © 2019 Noble Aspect LLC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
