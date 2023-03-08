import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import CartInc from "./CartInc";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCartMenu,
  getCartMenuListItem,
  getLoadMoreMenuList,
  setCartList,
  setPaymentValue,
} from "../redux/store/actions/menuAction";

let amount;
let valTotalAmount;

// let data01 = [];
// let data02 = [];
// let multi01 = [];

export default function ModalRating({
  visible,
  onClose,
  currentRestaurantImg,
  response,
  menuresName,
  menuresdes,
  menuresimg,
}) {
  if (!visible) return null;
  const [open, setOpen] = useState(true);
  const {
    menuList0,
    totalAmount,
    loadMenuList,
    loading,
    cartlist,
    selectValue,
    menu_id,
  } = useSelector((state) => state?.menu);

  const [count, setCount] = useState(1);
  const [menuList, setMenuList] = useState(menuList0);
  const [updatedAmount, setUpdatedAmount] = useState();
  const [loadUpdatedMenuList, setLoadUpdatedMenuList] = useState({});
  const [data01, setData01] = useState();
  const [data02, setData02] = useState("");
  const [multi01, setMulti01] = useState([]);
  // const [addons01, setAddons01] = useState([]); /
  let addons01 = [];

  let addons_id = [];
  // let addons = [];

  let addons = {};

  const dispatch = useDispatch();

  useEffect(() => {
    // if(data02 != "test"){

    setMenuList(menuList0);
    console.log("menuList data inside useEffect", menuList0);
    // }
  }, [menuList0]);

  useEffect(() => {
    setLoadUpdatedMenuList({});
  }, [menuList0]);

  useEffect(() => {
    setLoadUpdatedMenuList(loadMenuList);
  }, [loadMenuList]);

  // useEffect(() => {
  //   setMenuList(loadMenuList);
  // },[loadMenuList])

  console.log(
    "menulist ===>",
    Object.values(loadUpdatedMenuList).length,
    loadUpdatedMenuList
  );
  useEffect(() => {
    amount = totalAmount;
    setUpdatedAmount(totalAmount);
    console.log(response);
    valTotalAmount = 0;
  }, []);

  const handleAddons = (e) => {
    let data = e.split(",");
    addons01.push(data[0]);
    addons_id.push(data[1]);
    console.log("addons", addons_id);
    addons = {
      ...addons,
      [data[0]]: data[1],
    };
  };

  const handleMultiaddon = (id) => {
    // console.log(id);
    let data = id.split(",");
    // multi01.push(data[0]);

    //   console.log("multi ===>", multi01);
    let valData = multi01?.filter((e) => {
      console.log("e", e, data[0]);
      return e == data[0];
    });

    let valData01 = multi01?.filter((e) => {
      console.log("e", e, data[0]);
      return e != data[0];
    });

    console.log("valData =============>", valData);

    if (valData.length < 1) {
      setUpdatedAmount(Number(updatedAmount) + Number(data[1]));
      setMulti01([...multi01, data[0]]);
    } else {
      setUpdatedAmount(Number(updatedAmount) - Number(data[1]));
      setMulti01([]);
      setMulti01(valData01);
    }
    console.log("mutli01 ====>", multi01);

    //   let valData01 =  multi01?.filter((e) => {
    //     console.log("e", e, data[0]);
    //       return e != data[0]
    //     })
    //   console.log("valdata", valData01, valData);

    // if(valData.length > 1){
    //   setUpdatedAmount(Number(updatedAmount) - Number(data[1]));
    //   setMulti01([]);
    //   setMulti01(valData01)
    // }

    //   if(valData.length > 1){
    //     setUpdatedAmount(Number(updatedAmount) - Number(data[1]));
    //     setMulti01([]);
    //     setMulti01(valData01)
    //   }else{
    //     setMulti01([...multi01, data[0]])
    //     setUpdatedAmount(Number(updatedAmount) + Number(data[1]));
    //   }
    // amount = amount + data[1];

    //  amount +=  ;
    // console.log("amount", Number(amount) + Number(data[1]));
  };

  const handleSeeMore = () => {
    setShowCount(70);
  };

  console.log(
    "menulist, totalAmount",
    totalAmount == Number(localStorage.getItem("amount")).toFixed(2)
      ? 0
      : Number(localStorage.getItem("amount")).toFixed(2)
  );

  const cancelButtonRef = useRef(null);

  const [showCount, setShowCount] = useState(2);

  const decrementValue = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
    // amount = totalAmount;
    amount = (Number(totalAmount) * count).toFixed(2);
    // dispatch(setPaymentValue(val))
  };
  const incrementValue = () => {
    setCount((count) => count + 1);
    // amount = totalAmount
    amount = (Number(totalAmount) * count).toFixed(2);
    console.log("amount", amount);
    // console.log("val", val);
    // dispatch(setPaymentValue(val))
  };

  const handleOnClose = (val) => {
    // dispatch(setCartList(amount));
    onClose();
  };

  const handleSubmit = () => {
    dispatch(setPaymentValue(amount));
    debugger;
    // console.log(addons01,addons_id)
    // console.log("addons",addons)
    // let data =  addons[10];
    // let addons = {
    //   [addons_id]: addons01,
    //   // "id": addons01[0]
    // }
    // console.log("addons", addons);
    dispatch(
      addToCartMenu({
        hidden_price: totalAmount,
        menu: menu_id,
        quantity: count,
        sessid: localStorage.getItem("uuid"),
        // addons_id: [`${addons_id}_${addons01}`],
        addons,
        option: data01,
        multiaddons: multi01,
      })
    ).then((res) => {
      if (res === 200) {
        dispatch(
          getCartMenuListItem(selectValue, localStorage.getItem("uuid"))
        );
        onClose();
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("amount", 0);
  }, []);

  const handleOptions = (e) => {
    let data = e.split(",");
    localStorage.setItem("data01", data[0]);
    localStorage.setItem("data02", data[1]);
    localStorage.setItem("amount", data[2]);
    console.log(data[2]);
    setData02(e);
    setData01(data[1]);
    setMulti01([]);
    setUpdatedAmount(Number(data[2]));

    valTotalAmount =
      totalAmount == Number(localStorage.getItem("amount")).toFixed(2)
        ? 0
        : Number(localStorage.getItem("amount")).toFixed(2);
  };

  // useEffect(() => {
  //   console.log("menuList.options", menuList0?.options?.optionarr[0])
  //   dispatch(
  //     getLoadMoreMenuList(
  //       menuList0?.options?.optionarr[0]?.menu_id,
  //       menuList0?.options?.optionarr[0]?.id
  //     )
  //   );
    
  // },[])

  useEffect(() => {
    // if(localStorage.getItem("data01") == null){
    //   dispatch(
    //     getLoadMoreMenuList(
    //       menuList0?.options?.optionarr[0]?.menu_id,
    //       menuList0?.options?.optionarr[0]?.id
    //     )
    //   );
    // }else{
      dispatch(
        getLoadMoreMenuList(
          localStorage.getItem("data01"),
          localStorage.getItem("data02")
        )
      );
    // }
    
  }, [data01, data02]);

  return (
    // <Transition.Root show={open} as={Fragment} onClick={handleOnClose}>
    <Dialog
      // as="div"
      className="relative z-10 "
      // initialFocus={cancelButtonRef}
      onClose={handleOnClose}
      open={open}
    >
   

      <div className="fixed border-2  inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      {/* </Transition.Child> */}
      {loading ? null : (
        <div className="fixed  inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  p-4 text-center sm:items-center sm:p-0">
        
            <Dialog.Panel className="relative border-2 w-full  transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
               
                <div className="mt-3  sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="lg:text-2xl text-xl font-medium leading-6 text-gray-900"
                  >
                    {menuresName}
                  </Dialog.Title>
                  <Dialog.Title
                    as="h3"
                    className="text-sm  font-normal leading-6 text-gray-900"
                  >
                    {menuresdes}
                  </Dialog.Title>
                  <div className="mt-2   flex flex-col">
                    <p className="text-sm  text-gray-500 justify-center items-center flex">
                      {menuresimg ? (
                        <img src={menuresimg} className="h-36 w-36" />
                      ) : (
                        ""
                      )}
                    </p>
                    {/* <p> */}
                    {menuList?.options && (
                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-700"
                        >
                          {menuList?.options?.optionname}
                        </label>

                        <select
                          id="location"
                          name="location"
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          value={data02}
                          onChange={(e) => handleOptions(e.target.value)}
                        >
                          {menuList.options?.optionarr?.map((val) => (
                            <>
                              <option
                                value={`${val.menu_id} , ${val.id}, ${val.price}`}
                              >
                                {val.name + " €" + val.price}
                              </option>
                            </>
                          ))}
                        </select>
                      </div>
                    )}

                    {Object.values(loadUpdatedMenuList).length < 1 &&
                      menuList?.addons?.map(
                        (addVal) => (
                          console.log("add val", addVal.addons),
                          (
                            <div>
                              <label
                                htmlFor="location"
                                className="block text-sm font-medium text-gray-700"
                              >
                                {addVal.addons.name}
                              </label>

                              {addVal.addons?.type == "single" && (
                                <select
                                  id="location"
                                  name="location"
                                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                  defaultValue="Canada"
                                  onChange={(e) => handleAddons(e.target.value)}
                                >
                                  {addVal.addons?.type == "single" &&
                                    addVal.addons?.opt?.map((val) => (
                                      // console.log("val",val),
                                      <>
                                        <option
                                          value={`${val.addon_id} , ${val.id}`}
                                        >
                                          {val.title + " €" + val.price}
                                        </option>
                                        {/* <option>Canada</option>
                                <option>Mexico</option> */}
                                      </>
                                    ))}
                                </select>
                              )}
                              {/* </p> */}
                              <p>
                                {addVal.addons?.type == "multi" &&
                                  addVal.addons?.opt?.map((val0, i) => (
                                    <>
                                      <p>
                                        {i <= showCount && (
                                          <label class="relative inline-flex items-center cursor-pointer mt-3">
                                            <input
                                              type="checkbox"
                                              value={`${val0.id} , ${val0.price}`}
                                              class="sr-only peer"
                                              onChange={(e) =>
                                                handleMultiaddon(e.target.value)
                                              }
                                            />
                                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                              {val0.title + " €" + val0.price}
                                            </span>
                                          </label>
                                        )}
                                      </p>
                                    </>
                                  ))}
                              </p>
                              {showCount == 2 && (
                                <button
                                  class="t-blue"
                                  onClick={() => handleSeeMore()}
                                >
                                  See more
                                </button>
                              )}
                            </div>
                          )
                        )
                      )}
                    {Object.values(loadUpdatedMenuList).length >= 1 &&
                      loadUpdatedMenuList?.addons?.map(
                        (addVal) => (
                          console.log("add val -000", addVal.addons),
                          (
                            <div>
                              <label
                                htmlFor="location"
                                className="block text-sm font-medium text-gray-700"
                              >
                                {addVal.name}
                              </label>

                              {addVal?.type == "single" && (
                                <select
                                  id="location"
                                  name="location"
                                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                  defaultValue="Canada"
                                  onChange={(e) => handleAddons(e.target.value)}
                                >
                                  {addVal?.type == "single" &&
                                    addVal?.opt?.map((val) => (
                                      // console.log("val",val),
                                      <>
                                        <option
                                          value={`${val.addon_id} , ${val.id}`}
                                        >
                                          {val.title + " €" + val.price}
                                        </option>
                                        {/* <option>Canada</option>
                                <option>Mexico</option> */}
                                      </>
                                    ))}
                                </select>
                              )}
                              {/* </p> */}
                              <p>
                                {addVal?.type == "multi" &&
                                  addVal?.opt?.map((val0, i) => (
                                    <>
                                      <p>
                                        {i <= showCount && (
                                          <label class="relative inline-flex items-center cursor-pointer mt-3">
                                            <input
                                              type="checkbox"
                                              // value={val0?.id}
                                              value={`${val0.id} , ${val0.price}`}
                                              class="sr-only peer"
                                              onChange={(e) =>
                                                handleMultiaddon(e.target.value)
                                              }
                                            />
                                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                              {val0.title + " €" + val0.price}
                                            </span>
                                          </label>
                                        )}
                                      </p>
                                    </>
                                  ))}
                              </p>
                              {showCount == 2 && (
                                <button
                                  class="t-blue"
                                  onClick={() => handleSeeMore()}
                                >
                                  See more
                                </button>
                              )}
                            </div>
                          )
                        )
                      )}

                   
                  </div>
                </div>
              </div>
              <div className="mt-5  border-black sm:mt-6 sm:flex lg:justify-between sm:gap-3">
                <div className="card-list-uper">
                  <p className="flex justify-center items-center">
                    <i
                      class="fa-solid fa-minus cursor-pointer border-2 p-2 rounded-full border-black"
                      onClick={() => decrementValue()}
                    ></i>

                    
                    <span className="m-2">{count}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      onClick={() => incrementValue()}
                      className="w-8 h-8 p-1 cursor-pointer  border-2 border-black rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </p>
                </div>
                <button
                  // to="/checkout"
                  type="button"
                  className="mt-3 bg-red-500 text-white inline-flex lg:w-2/3 w-full justify-center rounded-md border border-gray-300  px-4 py-2 text-base font-medium  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 lg:text-lg sm:text-sm"
                  // onClick={() => setOpen(false)}
                  onClick={() => handleSubmit()}
                  ref={cancelButtonRef}
                >
                  Add to cart €
                  {(Number(updatedAmount) * Number(count)).toFixed(2)}
                </button>
              </div>
            </Dialog.Panel>
            {/* </Transition.Child> */}
          </div>
        </div>
      )}
    </Dialog>

    // </Transition.Root>
  );
}
