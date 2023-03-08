
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSectionThree from "./components/HeaderSectionThree";
import HeaderSectiontwo from "./components/HeaderSectiontwo";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { ToastContainer } from "react-toastify";
// import SnackbarProvider from 'react-simple-snackbar'
import "react-toastify/dist/ReactToastify.css";

function App() {
  

  return (
    // <Provider store={store}>
          <div className="bg-pink-100">
            {/* <ToastContainer position="top-center" /> */}
            <Header  />
            
            <HeaderSectiontwo/>
            <HeaderSectionThree />
            <Footer />
         </div>
    //  </Provider>
  );
}

export default App;
