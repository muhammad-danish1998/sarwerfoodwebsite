import axios from "axios";
import { contentType, axiosUrl } from "../../../apiUrl";

export const register = (state) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    for (var key in state) {
      formData.append(key, state[key]);
    }
    const endpoint = axiosUrl("/_api_ajax_signup.php");
    axios
      .post(endpoint, formData, contentType)
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


export const login = (state) => {
  return new Promise((resolve, reject) => {
    const endpoint = axiosUrl("/_api_ajax_login.php");

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



export function getAccessToken() {
  return window.localStorage.getItem("jwt_token");
}

export const logout = () => {
  setSession(null);
  localStorage.clear();
};
