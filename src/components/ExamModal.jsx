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

export default function ExamModal() {
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
                  <img
                    className="block h-5 lg:h-8 w-auto lg:hidden"
                    src="./images/logo.png"
                    alt="Your Company"
                  />
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
                      <Menu.Button className="flex   text-sm text-gray-700 focus:outline-none ">
                        <span className="sr-only">Open user menu</span>
                        {/* <img
                          className="h-9 w-9 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        /> */}
                        <Bars3Icon
                          className="block h-8 w-8"
                          aria-hidden="true"
                        />
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
                      <Menu.Items className="absolute right-0 navbarlist   mt-2 w-64 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                        <div className="border-2 p-4">
                          <h1 className="block px-4 py-2  text-gray-700 text-2xl">
                            Welcome
                          </h1>
                        </div>
                        <div className="p-4">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 font-bold"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                  </svg>
                                </span>{" "}
                                <span className="ml-4">Profile</span>
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                  </svg>
                                </span>{" "}
                                <span className="ml-4">Inbox</span>
                              </Link>
                            )}
                          </Menu.Item>
                          {/* add navbar  */}
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                    />
                                  </svg>
                                </span>{" "}
                                <span className="ml-4">Order</span>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                  </svg>
                                </span>{" "}
                                <span className="ml-4">My Reviews</span>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                    />
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                </span>{" "}
                                <span className="ml-4">Account Settings</span>
                              </Link>
                            )}
                          </Menu.Item>
                          <div className="mt-8 border-t-2">

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                    />
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                </span>{" "}
                                <span className="ml-4">Account Settings</span>
                              </Link>
                            )}
                          </Menu.Item>

                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------- second search bar ----------------  */}
          <div className="max-w-7xl lg:hidden  md:hidden m-2">
            <div className="flex border-2 flex-1 justify-center px-2 lg:ml-6 lg:justify-start">
              <div className="w-full max-w-lg lg:max-w-xs">
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
                  {/* <input
                    id="search"
                    name="search"
                    className="block ml-2 w-full rounded-md border border-transparent bg-transparent py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                    placeholder="Search"
                    type="search"
                  /> */}
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
                  Home
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
