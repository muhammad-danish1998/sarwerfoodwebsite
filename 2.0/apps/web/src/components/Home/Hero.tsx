import GooglePlaceAutoComplete from '@/components/GooglePlaceAutoComplete';
import Header from './Header';
import { HeroSlider } from '@/components/Home/HeroSlider';
import { useTranslation } from 'react-i18next';
import { BsSearch } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { encodeQueryData } from '@/utils/helpers';
const Hero = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	return (
		<>
			<div className=' overflow-hidden bg-pink-100'>
				<div className='relative overflow-hidden pt-6 pb-16  sm:pb-24 lg:pb-32'>
					<div className='hidden lg:absolute lg:inset-0 lg:block' aria-hidden='true'>
						<svg
							style={{ background: '#FF2E00' }}
							className='absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform '
							width={640}
							height={850}
							fill='none'
							viewBox='0 0 640 784'>
							<rect y={72} width={640} height={640} className='text-gray-50 ' />
							<rect x={118} width={404} height={784} fill='url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)' />
						</svg>
					</div>
					<Header />
					<main className='mx-auto  max-w-9xl   px-4 relative z-10'>
						<div className='lg:grid lg:grid-cols-12 lg:gap-8  lg:mt-4'>
							<div className='sm:text-center md:mx-auto md:max-w-2xl lg:mt-32 lg:col-span-6 lg:text-left'>
								<h1>
									<span className='mainHeadingHeader mt-1 block lg:text-4xl text-2xl font-bold  xl:text-6xl'>
										<span className='block '>{t('HERO.TITLE')}</span>
									</span>
								</h1>
								<div className='mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left'>
									<div className=' rounded-2xl shadow-sm p-2 flex justify-center items-center w-full   bg-white border-orange-500 '>
										<GooglePlaceAutoComplete
											onSelected={({ city, zipCode }) => {
												if (!city) return;
												navigate(`/resturant`);
											}}
										/>
									</div>
								</div>
							</div>
							<div className='relative mt-12    sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0  lg:mt-0 lg:p-2 lg:flex lg:max-w-none  lg:items-center '>
								<div className='relative   mx-auto w-full rounded-lg  lg:max-w-full  '>
									<HeroSlider />
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default Hero;
