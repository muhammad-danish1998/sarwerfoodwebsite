import { Swiper } from '@/components/Swiper';

export const HeroSlider = () => {
	return (
		<div className=' border-green-900 '>
			<Swiper
				slides={new Array(3).fill('').map((_, key) => (
					<img className='lg:w-5/6 mx-auto h-full ' src='/png/img1.png' />
				))}
			/>
		</div>
	);
};
