// import Snackbar from 'react-native-snackbar';
// import {COLORS, FONTS, STRINGS} from './index';
// import moment from 'moment';
// import { useSnackbar } from 'react-simple-snackbar'
import { toast } from "react-toastify";
// import { createClub } from '../redux/store/actions/tableActions';
import { loginUser, registerUser } from '../redux/store/actions/userAction';
import Strings from './Strings';


const Utility = {
  // let [openSnackbar, closeSnackbar] = useSnackbar(),
  // validate email regex
  validateEmail: function (email) {
    let re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  // validate password regex
  validatePassword: function (password) {
    let re = /^(?=.*\d).{8,}$/;
    return re.test(password);
  },
  // validate name (alpha only) regex
  validateName: function (name) {
    let re = /^[aA-zZ\s]+$/i;
    return re.test(name);
  },
  // validate number only regex
  validateNumber: function (name) {
    let re = /^[0-9]+$/i;
    return re.test(name);
  },
  // validate mobile number only regex
  validatePhoneNumber: function (name) {
    let re =
      /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
    return re.test(name);
  },
  validateUrl: function (url) {
    let re =
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return re.test(url);
  },
  validateAccountNumber: function (account) {
    let re = /^[0-9]{7,14}$/g;
    return re.test(account);
  },
  validateIbanNumber: function (number) {
    let re =
      /\b[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?!(?:[ ]?[0-9]){3})(?:[ ]?[0-9]{1,2})?\b/gm;
    return re.test(number);
  },

  register: function (params, navigation,dispatch) {
    console.log(" ====>", params)
    let validation = `${
      !params.your_name
        ? Strings.validation.validationFirstName
        : !this.validateName(params.your_name)
        ? Strings.validation.invalidName
        : !params.last_name
        ? Strings.validation.validationSecondName
        : !this.validateName(params.last_name)
        ? Strings.validation.invalidName
        : !params.email
        ? Strings.validation.validationEmail
        : !this.validateEmail(params.email)
        ? Strings.validation.validEmail
        : !params.password
        ? Strings.validation.validationPassword
        : !this.validatePassword(params.password)
        ? Strings.validation.validPassword
        : !params.repeat_password
        ? Strings.validation.validationConfirmPassword
        : params.repeat_password !== params.password
        ? Strings.validation.validSamePassword
        : true
    }`;
    if (validation === 'true') {
      console.log('params', params);
      dispatch(registerUser(params, navigation));
    } else {
      // openSnackbar(validation);
      toast.error(validation);
    //  console.log("validation", validation)

    }
  },

  login: function (params, navigation,dispatch) {
    let validation = `${
      !params.email
        ? Strings.validation.validationEmail
        : !this.validateEmail(params.email)
        ? Strings.validation.invalidName
        : !params.password
        ? Strings.validation.validationPassword
        : true
    }`;
    if (validation === 'true') {
      // console.log('params', params);
      dispatch(loginUser(params, navigation));
    } else {
      toast.error(validation);
    }
  },

 
};

export default Utility;
