import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItemList,
  updateCartMenuList,
} from "../redux/services/menuServices/menuServices";
import {
  deleteAddToCartMenu,
  getCartMenuListItem,
  setItemValue,
  UpdateAddToCartMenu,
} from "../redux/store/actions/menuAction";

let amount;

const CartInc = () => {
  const dispatch = useDispatch();
  const {
    menuList,
    totalAmount,
    cartlist,
    itemAmount,
    selectValue,
    cartlistItem,
  } = useSelector((state) => state?.menu);
  const [val, setVal] = useState();
  console.log("cartlist ==>", cartlist);

  const [count, setCount] = useState(0);
  const [cartlistItemm, setCartListItemm] = useState();
  const [noteVal, setNoteVal] = useState();
  const [state, setState] = useState({

  });

  useEffect(() => {
    let priceVal = 0;
    cartlist?.map((es) => {
      console.log("----", Number(es.price));
      priceVal += Number(es.price);
    });
    dispatch(setItemValue(priceVal.toFixed(2)));
  }, [cartlist]);

  useEffect(() => {   
    dispatch(getCartMenuListItem(selectValue, localStorage.getItem("uuid")));
  }, []);



  useEffect(() => {
    setCartListItemm(cartlistItem);
  }, [cartlistItem]);

  console.log("cartlistItemm ===>", cartlistItemm);

  const decrementValue = (quan, code) => {
    console.log("quan ", quan, code);
    if (Number(quan) > 1) {
      // setCount((count) => count - 1);
      let val = Number(quan) - 1;
      dispatch(
        UpdateAddToCartMenu({
          sessid: localStorage.getItem("uuid"),
          cartTempID: code,
          quantity: val,
        })
      ).then((res) => {
        console.log("delete item", res);
        if (res === 200) {
          console.log("delete item", res);
          dispatch(
            getCartMenuListItem(selectValue, localStorage.getItem("uuid"))
          );
        }
      });
    }
    if (quan == "1" && code == code) {
      
      dispatch(
        deleteAddToCartMenu({
          sessid: localStorage.getItem("uuid"),
          code: code,
        })
      ).then((res) => {
        if (res === 200) {
          dispatch(
            getCartMenuListItem(selectValue, localStorage.getItem("uuid"))
          );
        }
        console.log("delete item", res);
      });
    }
    // amount = totalAmount;
    amount = (Number(itemAmount) * count).toFixed(2);
    // dispatch(setPaymentValue(val))
    // dispatch(setItemValue(amount))
  };
  const incrementValue = (quan, code) => {
    // setCount((count) => count + 1);

    let val = Number(quan) + 1;
    dispatch(
      UpdateAddToCartMenu({
        sessid: localStorage.getItem("uuid"),
        cartTempID: code,
        quantity: val,
      })
    ).then((res) => {
      
      if (res === 200) {
        
        dispatch(
          getCartMenuListItem(selectValue, localStorage.getItem("uuid"))
        );
      }
    });
    // amount = totalAmount
    amount = (Number(itemAmount) * count).toFixed(2);
    // console.log("amount", amount)
    // console.log("val", val);
    // dispatch(setItemValue(amount))
    // dispatch(setPaymentValue(val))
  };

  const handleUpdateNote = (code, quan) => {
 
    dispatch(
      UpdateAddToCartMenu({
        sessid: localStorage.getItem("uuid"),
        cartTempID: code,
        note: state[code],
        quantity: quan
      })
    ).then((res) => {
      console.log("delete item", res);
      if (res === 200) {
      
        dispatch(
          getCartMenuListItem(selectValue, localStorage.getItem("uuid"))
        );
      }
    });
  }

  const handleOnChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  }
 
  useEffect(() => {
    cartlistItem?.items?.map((car) => {
       setState((state) => ({ ...state, [car?.temp]: car?.note }));
    })
  },[cartlistItem])



  return (
    <div>
      <div>
        {cartlistItemm?.items?.map((cart) => (
          
          //  setVal(cart?.price),
          <>
            <div className="card-list-uper flex justify-between p-6">
              <ol className="list-decimal">
                <li>{cart.name}</li>
              </ol>

              <p className="font-bold">€{Number(cart.itemprice).toFixed(2)}</p>
            </div>
            {/* <div className="flex justify-between  p-4 font-ligh font-thin">
                <p>Mit Geberatene Nudeln</p>
                <p>€21.90</p>
              </div> */}
            <div className="card-list-uper lg:flex justify-between p-2">
              
                <div className="lg:flex lg:w-3/5 w-full ">
                  <label
                    for="small-input"
                    class=" lg:p-2 block  lg:text-md  font-bold text-gray-500 "
                  >
                    Note
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    name={cart?.temp}
                    value={state[cart?.temp]}
                    onChange={(e) => handleOnChange(cart?.temp , e.target.value)}
                    class="block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-300 sm:text-xs   "
                  />
                  <button className="ml-2" onClick={() => handleUpdateNote(cart?.temp, cart?.quantity)}>Update</button>
               
              </div>
              <p className="flex lg:justify-center lg:mt-0 mt-2 items-center">
                {cart.quantity > 1 ? (
                  <i
                    class="fa-solid fa-minus cursor-pointer border-2 p-2 rounded-full border-black"
                    onClick={() => decrementValue(cart?.quantity, cart?.temp)}
                  ></i>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    onClick={() => decrementValue(cart?.quantity, cart?.temp)}
                    stroke="currentColor"
                    className="w-8 h-8 p-1 border-2 cursor-pointer rounded-full border-red-600 text-red-600 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                )}

                <span className="m-2">{cart.quantity}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => incrementValue(cart?.quantity, cart?.temp)}
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
          </>
        ))}

       
        <hr />
      </div>
      
    </div>
  );
};

export default CartInc;
