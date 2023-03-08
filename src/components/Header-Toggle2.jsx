import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupDeliver from "./PopupDeliver";

import { useDispatch, useSelector } from "react-redux";
import { setSelectValue } from "../redux/store/actions/menuAction";

const HeaderToggle2 = (props) => {
  //  const [toggleValue , setToggleValue] =  useState(0);

  const { selectValue } = useSelector((state) => state?.menu);
  const initalValue =
    window.location.pathname === "/signup" ? props.value2 : props.value1;
  const [selectedValue, setSelectedValue] = useState(selectValue);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  console.log(
    "initial value --------->",
    initalValue == "Sign in" ? `/signin` : "signup"
  );
  const dispatch = useDispatch();

  const handleToggleChange = () => {
    if (selectValue == "Sign in") {
      navigate("/signup");
    } else {
      navigate("/signin");
    }
    if (selectedValue === props.value1) {
      setSelectedValue(props.value2);
      dispatch(setSelectValue(props.value2));
      
      // navigate("/delivery");
    } else {
      // navigate("/pickup");
      setSelectedValue(props.value1);
      dispatch(setSelectValue(props.value1));
    }
  };

  console.log("selectValue", selectValue);

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
        <span className="px-4 py-2 flex items-center justify-center  mt-2 rounded-l-md text-lg bg-black h-8 text-white peer-checked:bg-gray-300">
          {props.value1}
        </span>
        <span className="px-4 py-2 flex items-center justify-center mt-2 rounded-r-md text-lg bg-gray-300 h-8 peer-checked:text-white peer-checked:bg-black">
          {props.value2}
        </span>
      </label>
    </div>
  );
};

export default HeaderToggle2;
