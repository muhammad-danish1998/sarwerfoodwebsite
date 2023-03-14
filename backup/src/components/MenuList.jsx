import React, {useEffect, useState} from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getLoadMoreMenuList } from "../redux/store/actions/menuAction";

const MenuList = (props) => {
  const { menuList0, totalAmount, loadMenuList, loading, cartlist, selectValue, menu_id } = useSelector(
    (state) => state?.menu
  );
  const [menuList, setMenuList] = useState(menuList0);
  // const [data01, setData01] = useState();

  //   useEffect(() => {
  //   // if(data02 != "test"){
      
  //     setMenuList(menuList0);
  //     console.log("menuList data inside useEffect", menuList0)
  //   // }
  
  
  // },[])

  const dispatch = useDispatch();

  const handleOptions = (e) => {
    let data = e.split(',');
    localStorage.setItem("data01", data[0]);
    localStorage.setItem("data02", data[1]);
    localStorage.setItem("amount", data[2])
    console.log(data[2]);
    // setData02("test");
    // props.setData(data[1])    
    // setUpdatedAmount(Number(data[2]));
    
  //  valTotalAmount =  totalAmount == Number(localStorage.getItem('amount')).toFixed(2) ? 0 : Number(localStorage.getItem('amount')).toFixed(2)
}

  useEffect(() => {
    console.log('hello')
    // dispatch(getLoadMoreMenuList(localStorage.getItem("data01"), localStorage.getItem("data02")));
  },[])


  
  return (
    <>
    {menuList0?.options && (
      <div>
        <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700"
        >
        {menuList0?.options?.optionname}
      </label>
     
          <select
          id="location"
          name="location"
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          onChange={(e) => handleOptions(e.target.value)}
        >
        {
              menuList0.options?.optionarr?.map((val) => (
          
                <>
                  <option  value={`${val.menu_id} , ${val.id}, ${val.price}`}>
                     {val.name +" €"+ val.price}
                  </option>
             
                </>
              ))}
          
      </select>
      </div>
    )
    }
    </>
  );
};

export default MenuList;
