"use client";

import React, { useState } from "react";

export default function Home() {
  const [user, setUser] = useState({
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info:", user);
  };

  return (
    // <div className="w-full min-h-screen">
    //   <h1 className="text-2xl font-semibold">Dashboard</h1>
    // </div>
    <div className="flex-1 min-h-full flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-center">User Profile</h2>
        {/* <form onSubmit={handleSubmit}> */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            // onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            // onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            value={user.password}
            // onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            placeholder="your Password"
            required
          />
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
