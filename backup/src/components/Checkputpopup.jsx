import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import CartInc from "./CartInc";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";






export default function Checkoutpopup({
  visible,
  onClose,
  currentRestaurantImg,
  response,
  menuresName,
  menuresdes,
  menuresimg,
  setCheckOutModal,
}) {
  if (!visible) return null;
  const [open, setOpen] = useState(true);

  






 

 


  



  const handleOnClose = (val) => {
   
    onClose();
  };











  return (
   
    <Dialog
    
      className="relative z-10 lg:hidden "
    
      onClose={handleOnClose}
      open={open}
    >
      <div className="fixed border-2  inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    
  
        <div className="fixed  inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel className="relative border-2 w-full  transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <span className="flex justify-end ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 hover:text-red-600 cursor-pointer "
                    onClick={() => setCheckOutModal(false)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
       
              </div>
              <div className="mt-5 p-2  scroll border-black   lg:justify-between ">
                <div className="card-list-uper">
               
                 <CartInc />
                </div>
              
              </div>
              <div className="flex mt-4 justify-between">
                <button  onClick={() => setCheckOutModal(false)}  className="bg-red-600 p-2 mt-2 text-white">Go to Menu</button>
                <Link to={"/checkout"} className="bg-red-600 p-2 mt-2 text-white">Checkout</Link>

              </div>
            </Dialog.Panel>
           
          </div>
        </div>
  
    </Dialog>

   
  );
}
