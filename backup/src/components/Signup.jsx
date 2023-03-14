import HeaderToggle2 from "./Header-Toggle2";
import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Utility from "../config/Utility";

/*
  This Signin requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/htmlForms'),
    ],
  }
  ```
*/
export default function Signup() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    your_name: "",
    last_name:"",
    email: "",
    password: "",
    repeat_password: "",
  });

  const handleChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    
    Utility.register(state,navigate,dispatch)
    // dispatch(loginUser(state, navigate, dispatch, openSnackbar));
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign In or Sign Up
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <HeaderToggle2 value1={"Sign in"} value2="Sign Up" />
          </p>
        </div>
       
        <section className="text-gray-600 body-font relative">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="container px-5 py-10 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                     First Name
                    </label>
                    <input
                      type="text"
                      id="your_name"
                      name="your_name"
                      value={state.your_name}
                      onChange={(e) => handleChange("your_name", e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={state.last_name}
                      onChange={(e) => handleChange("last_name", e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                    Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={state.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                     Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={state.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      confirm password
                    </label>
                    <input
                      type="password"
                      id="repeat_password"
                      name="repeat_password"
                      value={state.repeat_password}
                      onChange={(e) => handleChange("repeat_password", e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full ">
                 <div className="relative ">
                    <button
                      type="submit"
                      className="w-full  rounded-2xl border   text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-red-700 text-white"
                    >Sign Up</button>
                  </div>
                 
                  <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">or </span>
                    </div>
                  </div>
                  <div className="flex bg-blue-500 mt-4 text-white justify-center p-2 rounded-2xl items-center border-2">
                    <p>
                      <img src="./images/goo 1.png" height={30} width={30} />
                    </p>
                    <p className="ml-2">Continue With Google</p>
                  </div>
                  <div
                    style={{ background: "#001E6D" }}
                    className="flex mt-4 mb-4 text-white justify-center p-2 rounded-2xl items-center border-2"
                  >
                    <p>
                      <img src="./images/fb.png" height={30} width={30} />
                    </p>
                    <p className="ml-2">Continue With Google</p>
                  </div>
                  <div className="flex bg-black text-white justify-center p-2 rounded-2xl items-center border-2">
                    <p>
                      <img src="./images/apple.png" height={30} width={30} />
                    </p>
                    <p className="ml-2">Continue With Google</p>
                  </div>
                  <p className="mt-8 text-lg font-semibold text-black">
                    By tapping ”Sign Up”or”Continue with Google, Facebook, or
                    Apple,”you agree to Liefermars.de <span className="text-blue-700"> Terms and Conditions </span> and
                    Privacy. Police.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
        </section>
      </div>
    </>
  );
}
