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
      const response = await axios.post(`http://localhost:8000/user/login`, {
        email,
        password,
      });
      console.log("Login successful:", response.data);

      localStorage.setItem('token', response.data.token)
      router.push('/admin');
      
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
            <Image
              src="/login-image.png" // Replace with the actual path of the image
              alt="Man holding green arrow"
              width={1000}
              height={1000}
              priority
              className="w-full h-full object-top object-cover"
            />
          </div>
          <div className="w-full flex flex-col gap-1 items-center justify-between md:w-1/2 pt-5 pb-5">
            <Logo wordmark />
            <div className="border-2 rounded-large shadow-md p-4 md:p-8 w-full max-w-md">
              <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">WELCOME BACK!</h1>
              <p className="text-gray-500 text-center mb-8">Fill the below fields to log in</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
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
                  <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">
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
                {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                <div className="mb-2">
                  <button
                    className="w-full bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <span className="h-px bg-gray-300 w-full"></span>
                  <span className="px-4 text-sm text-gray-500">OR</span>
                  <span className="h-px bg-gray-300 w-full"></span>
                </div>
                <div>
                  <button
                    className="w-full flex gap-2 items-center justify-center bg-white border border-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-300"
                    type="button"
                  >
                    <Google classes={"h-5"} />
                    Continue with Google
                  </button>
                </div>
              </form>
            </div>
            <p className="text-siteTextIcon-disabled">@ copy right 2024, noble aspect</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

const Google = ({ classes }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 262" className={classes}>
    <path
      fill="#4285f4"
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
    />
    <path
      fill="#34a853"
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
    />
    <path
      fill="#fbbc05"
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
    />
    <path
      fill="#eb4335"
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
    />
  </svg>
);
