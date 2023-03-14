import axios from "axios";
import { contentType, axiosUrl } from "../../../apiUrl";

import uuid from 'react-uuid';


if(localStorage.getItem('uuid')){

}else{
  localStorage.setItem("uuid", uuid());
  localStorage.setItem("your_zip", '');
  localStorage.setItem("your_street_name", 'Please select your location')
}


export const getAddonsMenu = (menu_id) => {
  const token = localStorage.getItem("jwt_token");

  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(`/ajax/_api_ajax_get_menu.php?menu_id=${menu_id}`);

    axios
      .get(endpoint, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => {
       
        ressolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const getLoadMoreMenu = (menu_id,option) => {
  const token = localStorage.getItem("jwt_token");

  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(`/ajax/_api_ajax_load_addons.php?menu=${menu_id}&option=${option}`);

    axios
      .get(endpoint, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => {
       
        ressolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};



export const addToCart = (state) => {
  
  return new Promise((resolve, reject) => {
    const endpoint = axiosUrl("/ajax/add_to_cart.php");

    axios
      .post(endpoint, state, contentType)
      .then((res) => {
        // setSession(res.data.token);
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};



export const getCartItemList = (mode, sessionid) => {
  const token = localStorage.getItem("jwt_token");

  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(`/ajax/_api_ajax_get_cart.php?action=checkout&shipping=${mode}&sessid=${sessionid}`);

    axios
      .get(endpoint, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => {
       
        ressolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};


export const removeCartMenuList = (state) => {
  return new Promise((resolve, reject) => {
    const endpoint = axiosUrl("/ajax/remove_cart.php");

    axios
      .post(endpoint, state, contentType)
      .then((res) => {
        // setSession(res.data.token);
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};


export const updateCartMenuList = (state) => {
  return new Promise((resolve, reject) => {
    const endpoint = axiosUrl("/ajax/update_cart_info.php");

    axios
      .post(endpoint, state, contentType)
      .then((res) => {
        // setSession(res.data.token);
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};


export const checkoutDelivery = (state) => {
  return new Promise((resolve, reject) => {
    // const formData = new FormData();
    // for (var key in state) {
    //   formData.append(key, state[key]);
    // }
    const endpoint = axiosUrl("/ajax/_api_ajax_checkout.php");
    axios
      .post(endpoint, state, contentType)
      .then((res) => {
       
        // setSession(res.data.token);
        console.log("res ===>", res)
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};



export const getDeleiveryTime = (sessionid) => {
  const token = localStorage.getItem("jwt_token");

  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(`/ajax/__other_apis.php?action=getasaplist&sessid=${sessionid}`);

    axios
      .get(endpoint, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => {
       
        ressolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};



