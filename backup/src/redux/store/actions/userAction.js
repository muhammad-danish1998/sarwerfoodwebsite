import { toast } from "react-toastify";

import {
  login,
  register,
} from "../../services/authServices/authServices";
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTRATION, REGISTRATION_FAIL } from "../types/actionTypes";

export const registerUser =
  (state, navigate) => async dispatch => {
  
    dispatch({type: REGISTRATION});
    try {
    
      const response = await register(state);
      console.log("response", response);

      if (response.type == "success") {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response,
        });
        toast.success(response?.msg);
        navigate('/signin')

      }
      else{
        dispatch({
          type: REGISTRATION_FAIL,
          payload: 'Failed to fetch data',
        });
        console.log("hh", response)
        toast.error(response?.errorarr);
      }
    } catch (e) {
      console.log(e);
      toast.error(e);
    }
  };

export const loginUser = (state, navigate) => async dispatch => {
  dispatch({type: LOGIN});

  try {
    const response = await login(state);

    if (response.type == "success") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
      toast.success("Login successfully");
      localStorage.setItem("login","success");
      navigate('/')
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: 'Failed to fetch data',
      });
      toast.error(response?.errorarr);
    }
  } catch (error) {
    toast.error(error);
  }
};
