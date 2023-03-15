import { Swiper } from '@/components/Swiper';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Navigation, Pagination } from 'swiper';

import { SwiperSlide } from 'swiper/react';
import './resturant.scss';
export default function HeaderTextSlider({ catArray, res }) {
  const [scrollHeight, setScrolHeight] = useState(0);
  const [currentSelctedMenu, setCurrentselectedMenu] = useState('');
  const handleScroll = (event) => {
    let scrollTop = window.pageYOffset;
    setScrolHeight(scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div
        className={`swiper-nave ${scrollHeight > 100 ? 'fixed top-0 left-0 w-full z-10 bg-[#FAF9FB]' : ''}`}
      >
        <Swiper
          slides={catArray?.map((arr) => (
            <SwiperSlide
              onClick={() => setCurrentselectedMenu(arr.title)}
              className={`p-4  text-sm lg:text-md text-center  text-gray-700 cursor-pointer `}
            >
              <Link to={arr.title} spy={true} smooth={true} onClick={() => setCurrentselectedMenu(arr.title)}>
                <span className={`${currentSelctedMenu == arr.title ? 'text-primary' : ''}`}>
                  {arr.title}
                </span>
              </Link>
            </SwiperSlide>
          ))}
          swiperProps={{
            slidesPerView: 7,
            spaceBetween: 5,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: true,
            pagination: {
              clickable: true,
            },
            navigation: true,
            modules: [Navigation, Pagination],
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1180: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            },
          }}
        />
      </div>
    </>
  );
}
