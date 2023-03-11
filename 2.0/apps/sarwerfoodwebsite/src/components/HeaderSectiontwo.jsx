import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

// import required modules
import { Pagination, Navigation } from 'swiper';

const HeaderSectiontwo = () => {
	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<div>
			<div className=' max-w-8xl mx-auto mt-12 lg:hidden    mb-4  text-center lg:col-span-6'>
				<Swiper
					slidesPerView={1}
					spaceBetween={5}
					slidesPerGroup={1}
					loop={true}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className={`mySwiper   `}>
					<SwiperSlide className='flex flex-col items-center justify-center '>
						<img src='./images/sli1.jpg' className='h-60 w-60 md:h-96 md:w-96' />
						<p className='mt-4 text-orange-600 text-lg font-semibold'>Amerikanisch</p>
					</SwiperSlide>
					<SwiperSlide className=' flex flex-col items-center justify-center '>
						<img className='h-60 w-60' src='./images/turkish.jpg' />
						<p className='mt-4 text-orange-600 text-lg font-semibold'>Turkisch</p>
					</SwiperSlide>
					<SwiperSlide className='flex flex-col items-center justify-center  '>
						<img className='h-60 w-60' src='./images/indian.jpg' />
						<p className='mt-4 text-orange-600 text-lg font-semibold'>Griechisch</p>
					</SwiperSlide>
					<SwiperSlide className='flex flex-col items-center justify-center  '>
						<img className='h-60 w-60' src='./images/greek.jpg' />
						<p className='mt-4 text-orange-600 text-lg font-semibold'>Lebanesisch</p>
					</SwiperSlide>
					<SwiperSlide className='flex flex-col items-center justify-center  '>
						<img className='h-60 w-60' src='./images/chinees.jpg' />
						<p className='mt-4 text-orange-600 text-lg font-semibold'>Indisch</p>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className=' max-w-8xl mx-auto mt-12  hidden lg:block    mb-4  text-center lg:col-span-6'>
				<Swiper
					slidesPerView={4}
					spaceBetween={5}
					slidesPerGroup={1}
					loop={true}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className={`mySwiper   `}>
					<SwiperSlide className='flex flex-col items-center justify-center '>
						<img src='./images/sli1.jpg' className='h-48 w-48' />
						<p className='mt-4 text-orange-600 text-lg font-semibold'>{t('american')}</p>
					</SwiperSlide>
					<SwiperSlide className=' flex flex-col items-center justify-center '>
						<img className='h-48 w-48' src='./images/turkish.jpg' />
						<p className='mt-4 text-orange-600 text-lg font-semibold'>{t('turkish')}</p>
					</SwiperSlide>
					<SwiperSlide className='flex flex-col items-center justify-center  '>
						<img className='h-48 w-48' src='./images/indian.jpg' />
						<p className='mt-4 text-orange-600 text-lg font-semibold'>{t('grecian')}</p>
					</SwiperSlide>
					<SwiperSlide className='flex flex-col items-center justify-center  '>
						<img className='h-48 w-48' src='./images/greek.jpg' />
						<p className='mt-4 text-orange-600 text-lg font-semibold'>{t('lebanese')}</p>
					</SwiperSlide>
					<SwiperSlide className='flex flex-col items-center justify-center  '>
						<img className='h-48 w-48' src='./images/chinees.jpg' />
						<p className='mt-4 text-orange-600 text-lg font-semibold'>{t('indian')}</p>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default HeaderSectiontwo;
