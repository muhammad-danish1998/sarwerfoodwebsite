import React from "react";
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";

const ChangePassword = () => {
  return (
    <div>
      <HeaderNavbar />
      <div className=" bg-white flex-col m-8 h-96 justify-center max-w-8xl   sm:px-6 lg:px-1">
        <h1 className="text-4xl font-bold ">Change Password</h1>
        <div className="mt-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
          Old Password
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full bg-gray-200  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
          New Password
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full bg-gray-200  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
          Repeat New Password
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full bg-gray-200  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="lg:w-3/4 mt-8 w-full">
          <button className="inline-flex items-center px-8  border border-transparent bg-orange-500  py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
           Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
