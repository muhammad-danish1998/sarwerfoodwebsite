import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restaurants from "./components/Restaurants";
import SingleResOverview from "./components/SingleResOverview";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Invoice from "./components/Invoice";
import About from "./components/About";
import Contact from "./components/Contact";
import Term from "./components/Term";
import Dataprivacy from "./components/Dataprivacy";
import Addtocardpage from "./components/Addtocardpage";
import Delivery from "./components/Delivery";
import Pickup from "./components/Pickup";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./i18n";
import PageNot from "./components/PageNot";
import EditmyAddress from "./components/EditmyAddress";
import SubmitReview from "./components/SubmitReview";
import Myreview from "./components/Myreview";
import ForgetPassword from "./components/ForgetPassword";
import ChangePassword from "./components/ChangePassword";
import OrderDetail from "./components/OrderDetail";
import Order from "./components/Order";
import Profile from "./components/Profile";
import ExamModal from "./components/ExamModal";
import ResturantReview from "./components/ResturantReview";
import Inbox from "./components/Inbox";


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <Provider store={store}>
    <ToastContainer position="top-center" />
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
   
      <Route exact path="/restaurant" element={<Restaurants />} />
     
      <Route exact path="/singlerestaurant" element={<SingleResOverview />} />
      <Route exact path="/signin" element={<Signin  />} />
      <Route exact path="/signup" element={<Signup  />} />
      <Route exact path="/checkout" element={<Checkout  />} />
      <Route exact path="/invoice" element={<Invoice  />} />
      <Route exact path="/about" element={<About  />} />
      <Route exact path="/contact" element={<Contact  />} />
      <Route exact path="/terms" element={<Term  />} />
      <Route exact path="/dataprivacy" element={<Dataprivacy  />} />
      <Route exact path="/addtocart" element={<Addtocardpage  />} />
      <Route exact path="/delivery" element={<Delivery  />} />
      <Route exact path="/pickup" element={<Pickup  />} />
      <Route exact path="/editmyaddress" element={<EditmyAddress  />} />
      <Route exact path="/submitreview" element={<SubmitReview  />} />
      <Route exact path="/myreview" element={<Myreview  />} />
      <Route exact path="/forgotpassword" element={<ForgetPassword  />} />
      <Route exact path="/changepassword" element={<ChangePassword  />} />
      <Route exact path="/orderdetail" element={<OrderDetail  />} />
      <Route exact path="/order" element={<Order  />} />
      <Route exact path="/profile" element={<Profile  />} />
      <Route exact path="/resturantReview" element={<ResturantReview  />} />
      <Route exact path="/inbox" element={<Inbox  />} />
      

      

  




        



      <Route path="*"  element={<PageNot  />} />


    </Routes>
  </BrowserRouter>
  </Provider>
  
);
