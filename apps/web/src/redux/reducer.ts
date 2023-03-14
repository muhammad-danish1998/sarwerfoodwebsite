
import { combineReducers } from '@reduxjs/toolkit';
import appConfigReducer from './slice/app-config.slice';

const rootReducer = combineReducers({
  appConfig: appConfigReducer,
});
export default rootReducer; 