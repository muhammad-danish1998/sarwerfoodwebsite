import React from "react";
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";

const Contact = () => {
  return (
    <>
    <HeaderNavbar />
      <div className="max-w-7xl lg:h-96 p-1 mt-4 mx-auto">
        <h1 className="text-center text-4xl font-bold">Contact</h1>
        <p className="font-bold">Contact us:</p>
        <p>
          Form: this contact form will be used for general inquiries such as
          sharing customer experience and will be on the page interface.
        </p>
        <p>The form should contain the following fields.</p>
        <ul className="">
          <li>o Name</li>
          <li>o Surname</li>
          <li>o Subject</li>
          <li>o Phone Number</li>
          <li>o Email Address</li>
          <li>o Message</li>
        </ul>
        <p className="mt-4">
          Need Help! In this section, there should be email address, phone
          number and name of responsible person dealing with following areas
        </p>
        <ol className="">
            <li>1 Payment</li>
            <li>2 Complain</li>
            <li>3 Feedback</li>
            

        </ol>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
