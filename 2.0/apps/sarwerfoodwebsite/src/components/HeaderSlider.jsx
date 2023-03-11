import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const HeaderSlider = () => {
  return (
    <div className=" border-green-900 ">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full ">
        <SwiperSlide className="">
          {/* <img className="w-5/6 h-4/5 lg:mt-4 border-2 mx-auto " src="./images/img1.png" /> */}
          <img className="lg:w-5/6 mx-auto h-full " src="./images/img1.png" />

        </SwiperSlide>

        <SwiperSlide>
          {/* <img className="w-full lg:mt-4 h-4/5 mx-auto border-2 " src="./images/img1.png" /> */}
          <img className="lg:w-5/6 mx-auto h-full " src="./images/img1.png" />

        </SwiperSlide>
        <SwiperSlide>
          <img className="lg:w-5/6 mx-auto h-full " src="./images/img1.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
