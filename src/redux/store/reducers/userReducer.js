import { REGISTRATION, REGISTER_SUCCESS, REGISTRATION_FAIL, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,  } from "../types/actionTypes";

const initialState = {
  user: {},
  users: [],
  loading:null,
  token:null,
  msg:null,
  friendList: {},
  notifications: []
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTRATION:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload?.data,
        token: action.payload?.token,
        msg: action.payload.message,
        loading: false,
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        msg: action.payload,
        loading: false,
      };
      case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload?.data,
        token: action.payload?.token,
        msg: action.payload.message,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        msg: action.payload,
        loading: false,
      };
    
    default:
      return state;
  }
};

export default userReducer;
