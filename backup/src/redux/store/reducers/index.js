import { combineReducers } from "redux";
import menuReducer from "./menuReducer";

import userRducer from "./userReducer";


export default combineReducers({
  user: userRducer,
  menu:  menuReducer
});
