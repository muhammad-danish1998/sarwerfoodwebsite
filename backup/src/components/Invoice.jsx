import React from "react";
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Invoice = () => {
  const { msg } = useSelector((state) => state?.menu);
  return (
    <>
      <HeaderNavbar />
      <div className="flex flex-col justify-center h-96 items-center">
        <h1 className="text-4xl font-bold">You Are Awesome</h1>
        <p className="">Thank you so much For Deine Brstellung!</p>
        <h1 className="text-2xl lg:mt-14 mt-2 font-bold">Order # {msg.order_number}</h1>
        <Link
        to={"/"}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-lg bg-orange-600 text-white font-bold mt-4 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Invoice;
