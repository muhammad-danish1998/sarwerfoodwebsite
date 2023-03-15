
import cartSlice from '@/redux/slice/cart.slice';
import { combineReducers } from '@reduxjs/toolkit';
import appConfigSlice from './slice/app-config.slice';

const rootReducer = combineReducers({
  appConfig: appConfigSlice,
  cart: cartSlice
});
export default rootReducer; 