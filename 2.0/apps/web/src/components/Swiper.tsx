import { Swiper as ReactSwiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export type TSwiperProps = {
  slides: JSX.Element[];
  swiperProps?: SwiperProps;
};
export const Swiper = ({ slides, swiperProps }: TSwiperProps) => {
  return (
    <div className=" border-green-900 ">
      <ReactSwiper
        navigation={true}
        modules={[Navigation].concat(swiperProps?.modules || [])}
        className="mySwiper w-full "
        {...swiperProps}
      >
        {slides.map((s, key) => (
          <SwiperSlide key={key}>{s}</SwiperSlide>
        ))}
      </ReactSwiper>
    </div>
  );
};
