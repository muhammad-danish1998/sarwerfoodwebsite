import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupDeliver from "./PopupDeliver";

import { useDispatch, useSelector } from "react-redux";
import { setSelectValue } from "../redux/store/actions/menuAction";

const HeaderToggle = (props) => {
  //  const [toggleValue , setToggleValue] =  useState(0);

  const { selectValue, deliveryVal, pickupVal } = useSelector((state) => state?.menu);
  const initalValue =
    window.location.pathname === "/signup" ? props.value2 : props.value1;
  const [selectedValue, setSelectedValue] = useState(selectValue);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
 
  const dispatch = useDispatch();

  const handleToggleChange = () => {
    console.log("deliveryVal, pickupVal ===>", deliveryVal, pickupVal)
    if(pickupVal == 1){
      if (selectedValue === props.value1) {
        setSelectedValue(props.value2);
        dispatch(setSelectValue(props.value2));
        
        // navigate("/delivery");
      } else {
        // navigate("/pickup");
        setSelectedValue(props.value1);
        dispatch(setSelectValue(props.value1));
      }
    }
  
  };



  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <label
        htmlFor="Toggle3"
        className="inline-flex items-center p-2 rounded-md cursor-pointer text-black  "
      >
        <input
          checked={selectedValue === props.value2}
          onChange={() => handleToggleChange()}
          id="Toggle3"
          type="checkbox"
          className="hidden peer "
        />
        <span className=" lg:px-4 px-2 py-2 flex items-center justify-center  mt-2 rounded-l-md lg:text-lg text-sm bg-black lg:h-8 h-6 text-white peer-checked:bg-gray-300">
          {props.value1}
        </span>
        <span className="lg:px-4 px-2 py-2 flex items-center justify-center mt-2 rounded-r-md lg:text-lg text-sm bg-gray-300 lg:h-8 h-6 peer-checked:text-white peer-checked:bg-black">
          {props.value2}
        </span>
      </label>
    </div>
  );
};

export default HeaderToggle;
