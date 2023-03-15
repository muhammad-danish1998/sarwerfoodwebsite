import { Swiper } from '@/components/Swiper';
import { Link } from 'react-scroll';
import { Navigation, Pagination } from 'swiper';

import { SwiperSlide } from 'swiper/react';

export default function HeaderTextSlider({ catArray, res }) {
	return (
		<>
			<Swiper
				slides={catArray?.map((arr) => (
					<SwiperSlide className='p-4 text-sm lg:text-md  text-gray-700 cursor-pointer  '>
						<Link to={arr.title} spy={true} smooth={true}>
							{arr.title}
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
				}}
			/>
		</>
	);
}
