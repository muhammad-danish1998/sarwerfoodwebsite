import { Swiper } from '@/components/Swiper';
import { useTranslation } from 'react-i18next';

const slidesData = [
  {
    img: '/png/sli1.jpg',
    title: 'Amerikanisch',
  },
  {
    img: '/png/turkish.jpg',
    title: 'Amerikanisch',
  },
  {
    img: '/png/indian.jpg',
    title: 'Griechisch',
  },
  {
    img: '/png/greek.jpg',
    title: 'Lebanesisch',
  },
  {
    img: '/png/chinees.jpg',
    title: 'Indisch',
  },
];
const HotItem = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className=" max-w-8xl mx-auto mt-12    mb-4  text-center lg:col-span-6 hot-items">
        <Swiper
          swiperProps={{
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: true,
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
          slides={slidesData.map((_, key) => (
            <div className="flex flex-col items-center justify-center" key={key}>
              <img src={_.img} className="h-48 w-48  rounded-full border-[3px] border-[#CBE337]" />
              <p className="mt-4 text-orange-600 text-lg font-semibold">{_.title}</p>
            </div>
          ))}
        />
      </div>
    </div>
  );
};

export default HotItem;
