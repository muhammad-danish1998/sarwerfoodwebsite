import { Fragment, useEffect, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import HeaderToggle from "./Header-Toggle";
import HeaderTextSlider from "./HeaderTextSlider";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CartInc from "./CartInc";

import { Link } from "react-router-dom";
import axios from "axios";
import PopupCard from "./PopupCard";
import HeaderNavbar from "./HeaderNavbar";
import { getAddonsMenu } from "../redux/services/menuServices/menuServices";
import {
  setCartList,
  getMenuList,
  setPaymentValue,
  setMenuId,
  getCartMenuListItem,
} from "../redux/store/actions/menuAction";
import HeaderNavbarMenu from "./HeaderNavbarMenu";
import Checkoutpopup from "./Checkputpopup";

// import {
//   getMenuList,
//   setPaymentValue,
// } from "../redux/store/actions/menuAction";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SingleResOverview() {
  const dispatch = useDispatch();

  const [menuArray, setMenuArray] = useState([]);
  const [menures, setMenuRes] = useState([]);
  const [menuresdes, setMenuResDes] = useState("");
  const [menuresimg, setMenuResImg] = useState("");

  const [menuresName, setMenuResName] = useState("");

  const [catArray, setCatArray] = useState([]);
  const [name, setName] = useState();
  const [currentRestaurantImg, setCurrentRestaurantImg] = useState();
  const {
    menuList,
    totalAmount,
    itemAmount,
    selectValue,
    cartlist,
    cartlistItem,
    max_rest_val,
  } = useSelector((state) => state?.menu);

 

  const params = new URLSearchParams(window.location.search);
  useEffect(() => {
    const restaurantSlug = params.get("resturent_slug");
    const restuarantCode = params.get("resturent_code");
    axios
      .get(
        `https://liefermars.de/_api_ajax_menu.php?resturent_slug=${restaurantSlug}&resturent_code=${restuarantCode}&sessid=${localStorage.getItem(
          "uuid"
        )}`
      )
      .then((response) => {
     
        setName(response?.data?.restname);
        setMenuArray(response.data.menuarr);
        setCatArray(response?.data?.catarr);

        setCurrentRestaurantImg(response?.data?.restlogo);
      
        setMenuRes(response.data.menuarr);
      });
  }, [window.location.search]);
   const [showModal, setShowModal] = useState(false);
  //  ============ check out popup state ======== 
   const [checkOutModal, setCheckOutModal] = useState(false);


  useEffect(() => {
    dispatch(getCartMenuListItem(selectValue, localStorage.getItem("uuid")));
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setCheckOutModal(false)
  };

  

  const handleClick = (id, price, name, description, image) => {
    setShowModal(true);
    dispatch(getMenuList(id));
    dispatch(setPaymentValue(price));
    dispatch(setMenuId(id));
    let val = cartlist?.filter((e) => {
      return e.description == name;
    });
    // console.log("omggggggggg",image)
    setMenuResImg(image);

    setMenuResDes(description);
    setMenuResName(name);
   

    if (val.length == 0) {
      dispatch(
        setCartList({
          description: name,
          price: price,
          menuId: id,
          count: 1,
        })
      );
    }
  };
  // ============= checkout modal function ==============  
  const checkoutModalFun = () =>{
    setCheckOutModal(true)
  }
  // };
  return (
    <div className="">
      {/* ------------- navbar here ---------  */}
      {/* <HeaderNavbar /> */}
      <HeaderNavbarMenu />
      <div className="sticky-thc  ">
        <HeaderTextSlider catArray={catArray} />
      </div>
      <div className="lg:py-0 py-1  ">
        <div className="mx-auto max-w-9xl   sm:px-6 lg:grid  lg:grid-cols-12 lg:gap-0 lg:px-8">
          <main className="lg:col-span-9  xl:col-span-8 tablet-xl:col-span-8   ">
            {/* -------------- card ----------------  */}
            <section className="text-gray-600  mt-6">
              <div className="w-5/6 lg:container lg:px-5  mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className=" w-full">
                    <div className="h-full   border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 h-24 object-cover w-full  "
                        // src={currentRestaurantImg}
                        src="https://www.trgplc.com/wp-content/uploads/2022/03/Pubs_our_brand.jpg"
                        alt="blog"
                      />
                      <div className="p-0  lg:p-0">
                        <div className="flex lg:items-center  justify-between border-2">
                          <div className=" justify-center lg:ml-2 items-center">
                            <h1 className="title-font lg:text-2xl text-xl p-1 lg:p-0 font-medium text-gray-900 mb-3">
                              {name}
                            </h1>

                            {/* -------- review ------------  */}
                            <span className="flex items-center p-1 lg:p-0 ">
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 "
                                viewBox="0 0 24 24"
                                style={{ color: "#FF8A00" }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4  lg:ml-2"
                                viewBox="0 0 24 24"
                                style={{ color: "#FF8A00" }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4  lg:ml-2"
                                viewBox="0 0 24 24"
                                style={{ color: "#FF8A00" }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4  lg:ml-2"
                                viewBox="0 0 24 24"
                                style={{ color: "#FF8A00" }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4  lg:ml-2"
                                viewBox="0 0 24 24"
                                style={{ color: "#FF8A00" }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                            </span>
                            <p className="leading-relaxed mb-3">
                              {/* <HeaderToggle
                                value1={"Delivery"}
                                value2="Pickup"
                              /> */}
                            </p>
                          </div>
                          <div>
                            {/* --------------- logo -------------  */}
                            <div className="mt-0 p-2 ">
                              <img
                                className="inline-block lg:h-24 lg:w-24 h-12 w-12 rounded-full"
                                src={currentRestaurantImg}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap ">
                          {menuArray?.map(
                            (eachMenuCatergory) => (
                            
                              (
                                <>
                                  <div
                                    className="border-2 border-gray-400 p-4 rounded-lg mt-4 w-full"
                                    id={eachMenuCatergory?.catname}
                                  >
                                    <h1 className="lg:text-4xl text-xl font-bold text-black">
                                      {eachMenuCatergory.catname}
                                    </h1>
                                    <p>{eachMenuCatergory.catedesc}</p>
                                  </div>
                                  {eachMenuCatergory?.menuarr?.map(
                                    (eachMenuItem) => (
                                      <div
                                        className="border-2 p-4  mt-4 w-full cursor-pointer"
                                        onClick={() => {
                                          handleClick(
                                            eachMenuItem.id,
                                            eachMenuItem.price,
                                            eachMenuItem?.name,
                                            eachMenuItem?.description,
                                            eachMenuItem?.image
                                          );
                                        }}
                                      >
                                        <div>
                                          <h1 className="lg:text-2xl text-xl">
                                            {eachMenuItem.name}
                                          </h1>
                                        </div>
                                        <p className="text-green-500 font-semibold">
                                          {" "}
                                          € {eachMenuItem.price}
                                        </p>

                                        <p
                                          dangerouslySetInnerHTML={{
                                            __html: eachMenuItem.description,
                                          }}
                                        />
                                        <p className="mt-2 flex justify-between">
                                          <div className="font-bold">
                                            <Link>Product info</Link>
                                          </div>
                                          <div className="">
                                            <i
                                              class="fa-solid fa-plus cursor-pointer
                                     shadow-sm hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                                     "
                                              // onClick={() => {
                                              //   handleClick(
                                              //     eachMenuItem.id,
                                              //     eachMenuItem.price,
                                              //     eachMenuItem?.name,
                                              //     eachMenuItem?.description,
                                              //     eachMenuItem?.image
                                              //   );
                                              // }}
                                              style={{ fontSize: "30px" }}
                                            ></i>
                                          </div>

                                          {/* <button
                                        onClick={() => {
                                          handleClick(
                                            eachMenuItem.id,
                                            eachMenuItem.price,
                                            eachMenuItem?.name
                                          );
                                        }}
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-2xl font-bold text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                      >
                                       +
                                      </button> */}
                                        </p>
                                      </div>
                                    )
                                  )}
                                </>
                              )
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <PopupCard
                currentRestaurantImg={currentRestaurantImg}
                onClose={handleClose}
                visible={showModal}
                response={menures}
                menuresName={menuresName}
                menuresdes={menuresdes}
                menuresimg={menuresimg}
                setShowModal={setShowModal}
              />
            </section>
          </main>
          {/* mobile it will hidden  */}
          <aside className=" xl:col-span-4 xl:block hidden  tablet-xl:col-span-4   p-4  lg:mt-0 mt-8  ">
            <div className="sticky top-8 space-y-4  lg:p-4 ">
              <h1 className=" lg:text-2xl text-xl  tablet-xl:mt-8  font-bold">
                Shopping Cart
              </h1>
              {cartlistItem?.carttotalamount >= max_rest_val && (
                <Link
                  className="checkout flex text-white  justify-between font-bold bg-redColor p-4 rounded-2xl"
                  to="/checkout"
                >
                  <p>Checkout</p>
                  <p>€{Number(cartlistItem?.carttotalamount).toFixed(2)}</p>
                </Link>
              )}
              
              <CartInc />
            </div>
          </aside>
        </div>

        {/* ----------  fix bottom for mobile ----------- */}
        {cartlistItem?.carttotalamount >= max_rest_val && (
          <div className="checkout  text-white  justify-between font-bold bg-redColor p-0 rounded-2xl">
            <div className="mobile-fixed-nav-top lg:hidden block ">
              <ul className="mobile-fixed-nav">
                <li>
                  <p
                    className="checkout flex text-white  justify-between font-bold bg-redColor p-4 "
                    onClick={() => {
                      checkoutModalFun();
                    }}
                    
                  >
                    <p>Go to Basket</p>
                    <p>€{Number(cartlistItem?.carttotalamount).toFixed(2)}</p>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
        )}
        <Checkoutpopup
        visible={checkOutModal}
        setCheckOutModal={setCheckOutModal}
        onClose={handleClose}
        response={menures}
        menuresName={menuresName}
        menuresdes={menuresdes}
        />
      </div>
    </div>
  );
}
