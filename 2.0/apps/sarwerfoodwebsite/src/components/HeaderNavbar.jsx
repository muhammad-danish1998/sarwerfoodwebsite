import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import HeaderToggle from "./Header-Toggle";
import { Link, useNavigate } from "react-router-dom";
import PlacesAutoComplete2 from "./PlacesAutoComplete2";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchValue } from "../redux/store/actions/menuAction";
// import { , useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderNavbar() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
    // window.location.reload();
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlaceSelect = (data) => {
    // console.log("🚀 ~ file: Header.jsx:20 ~ handlePlaceSelect ~ data", data);
    localStorage.setItem("your_zip", data.zipCode);
    localStorage.setItem("zipCode", data.zipCode);
    localStorage.setItem("your_street_name", data.city);

    

    if (data) {
      navigate(`/restaurant?city=${data.city}&zip=${data.zipCode}`);
    } else {
      navigate(
        `/restaurant?city=${localStorage.getItem(
          "your_street_name"
        )}&zip=${localStorage.getItem("your_zip")}`
      );
    }
    dispatch(updateSearchValue(data.city));
  };

  const [address, setAddress] = useState(null);
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    setAddress(localStorage.getItem("your_street_name"));
    // setZipCode(localStorage.getItem("your_zip"));
  }, []);

  return (
    <Disclosure as="nav" className="bg-">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2   sm:px-4 border-2 border-gray-400 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                <Link to={"/"}>
                  <img
                    className="block h-5 lg:h-8 w-auto lg:hidden"
                    src="./images/logo.png"
                    alt="Your Company"
                  />
                  </Link>
                  <Link to={"/"}>
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="./images/logo.png"
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className=" lg:ml-6 lg:block">
                  <div className="flex  space-x-4 ">
                    <HeaderToggle value1="delivery" value2="pickup" />
                  </div>
                </div>
              </div>
              <div className="flex invisible lg:visible md:visible xl:visible    flex-1 justify-center px-2 lg:ml-6 lg:justify-start">
                <div className="w-full  max-w-lg  lg:max-w-lg border-2 rounded-full p-1 ">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 font-bold lg:mr-2 text-gray-600 outline-none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <PlacesAutoComplete2
                      address={address}
                      zipCode={zipCode}
                      onPlaceSelect={handlePlaceSelect}
                    />
                    {/* <input
                      id="search"
                      name="search"
                      value={`${localStorage.getItem('your_street_name')}, ${localStorage.getItem('zipCode')}`}
                      className="block w-full ml-2 outline-none  border border-transparent bg-transparent py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400   focus:text-gray-900 focus:outline-none  sm:text-sm"
                      placeholder="67065 Ludwigshafen, Germany"
                      type="search"
                    /> */}
                  </div>
                </div>
              </div>

              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  {localStorage?.getItem("language") == "en" ? (
                    <img
                      className="h-11 w-11 rounded-full border-2 border-white "
                      src="./images/uk-circle.png "
                      onClick={() => changeLanguage("de")}
                    />
                  ) : (
                    <img
                      className="h-10 w-10 rounded-full border-2 border-white "
                      src="./images/germany.jpeg"
                      onClick={() => changeLanguage("en")}
                    />
                  )}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        {/* <img
                          className="h-9 w-9 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        /> */}
                        <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 navbarlist   mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Home
                            </Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/signin"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign in
                            </Link>
                          )}
                        </Menu.Item>
                        {/* add navbar  */}
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/signin"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign up
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/about"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              about
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------- second search bar ----------------  */}
          <div className="max-w-7xl lg:hidden  md:hidden m-2">
            <div className="flex border-2 flex-1  px-2 lg:ml-6 lg:justify-start">
              <div className="lg:w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 font-bold lg:mr-2 text-gray-600 outline-none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                
                  <PlacesAutoComplete2
                    address={address}
                    zipCode={zipCode}
                    onPlaceSelect={handlePlaceSelect}
                  />
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden drop-nav   ">
            <div className="space-y-1 px-2 pt-2 pb-3  ">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Link to="/">
                <Disclosure.Button
                  as="a"
                  // href="/"
                  className=" block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                >
                  Home1
                </Disclosure.Button>
              </Link>
              <Link to="/signin">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Sign in
                </Disclosure.Button>
              </Link>
              <Link to="/signup">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Sign up
                </Disclosure.Button>
              </Link>
              <Link to="/about">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  About
                </Disclosure.Button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
