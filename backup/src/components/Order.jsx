import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";

const Order = () => {
  const people = [
    {
      name: "Amadeus Pizza",
      email: "Date: 01.01.2023",
      role: "Adress: Brandenburger Str. 11, 67065 Ludwigshafen",
      orderNum: "Order #: 99uz76j",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      email: "Date: 01.01.2023",
      role: "Co-Founder / CEO",
      orderNum: "Order #: 99uz76j",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      email: "Date: 01.01.2023",
      role: "Co-Founder / CEO",
      orderNum: "Order #: 99uz76j",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
  ];
  return (
    <div>
      <HeaderNavbar />
      <div className="bg-white flex-col m-8 justify-center max-w-8xl   sm:px-6 lg:px-1">
      <h1 className="text-4xl font-bold mb-8">Orders</h1>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-1">
          {people.map((person) => (
            <div
              key={person.email}
              className="relative flex items-center space-x-3  border border-gray-300 bg-white px-6 py-5 shadow-sm "
            >
              <div className="flex-shrink-0">
                <img
                  className="h-24 w-24 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
              </div>
              <div className="min-w-0 flex-1">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                  <p className="truncate text-sm text-gray-500">
                    {person.role}
                  </p>
                  <p className="truncate text-sm text-gray-500">
                    {person.email}{" "}
                    <span className="font-bold"> {person.orderNum}</span>
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
