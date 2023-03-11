import { Fragment, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HeaderSlider from './HeaderSlider';
import PlacesAutoComplete from './PlacesAutoComplete';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Drawer from './Drawer';
import { Menu } from '@headlessui/react';
import HomeNavbar from './HomeNavbar';
import { useGeolocated } from 'react-geolocated';
import { useTranslation } from 'react-i18next';
import Geocode from 'react-geocode';
const user = {
	name: 'Chelsea Hagon',
	email: 'chelsea.hagon@SingleResOverview.com',
	imageUrl:
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' },
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];
export default function Header() {
	const navigate = useNavigate();
	const handlePlaceSelect = (data) => {
		console.log('🚀 ~ file: Header.jsx:20 ~ handlePlaceSelect ~ data', data);
		localStorage.setItem('your_zip', data.zipCode);
		localStorage.setItem('zipCode', data.zipCode);
		localStorage.setItem('your_street_name', data.city);

		if (data) {
			navigate(`/restaurant?city=${data.city}&zip=${data.zipCode}`);
		} else {
			navigate(
				`/restaurant?city=${localStorage.getItem('your_street_name')}&zip=${localStorage.getItem('your_zip')}`
			);
		}
	};

	//   useEffect(()=> {
	//     if(localStorage.getItem("your_street_name") == null){
	//       console.log("your xio");
	//         localStorage.setItem("your_zip", '');
	//         localStorage.setItem("your_street_name", '')
	//     }

	// },[])
	const [location, setLocation] = useState({
		latitude: null,
		longitude: null,
		error: null,
	});
	const [address, setAddress] = useState(null);
	const [zipCode, setZipCode] = useState('');

	const api_key = `AIzaSyCZ44yB_6Zqh9VSYqB6zhfPyxtK5hOwsL0`;

	useEffect(() => {
		// navigator.geolocation.getCurrentPosition(GetCurrentLocation);
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLocation({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					error: null,
				});
			},
			(error) => {
				setLocation({
					latitude: null,
					longitude: null,
					error: error.message,
				});
			}
		);
	}, []);

	useEffect(() => {
		if (localStorage.getItem('language')) {
		} else {
			localStorage.setItem('language', 'en');
		}
	}, []);
	useEffect(() => {
		if (!location.latitude || !location.longitude) {
			return;
		}

		fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${api_key}`
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.status === 'OK') {
					setAddress(data.results[0].formatted_address);
					localStorage.setItem('your_street_name', data.results[0].formatted_address);
				}
			});
	}, [location]);

	const load = function () {
		var geoSuccess = function (position) {
			$.cookie('position_latitude', position.coords.latitude);
			$.cookie('position_longitude', position.coords.longitude);
			document.location.reload(true);
		};
		if ($.cookie('position_longitude', undefined)) navigator.geolocation.getCurrentPosition(geoSuccess);
	};

	useEffect(() => {
		if (!navigator.geolocation) {
			console.error('Geolocation is not supported by your browser');
			return;
		}

		navigator.geolocation.getCurrentPosition(async (position) => {
			load();
			const { latitude, longitude } = position.coords;

			const response = await axios.get(
				`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
			);

			const postalCode = response.data.address.postcode;
			setZipCode(postalCode);
			localStorage.setItem('your_zip', postalCode);
		});
	}, []);

	const postlivelocationresturant = () => {
		navigate(`/restaurant?&zip=${zipCode}`);
	};

	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className='relative overflow-hidden bg-pink-100'>
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

			<div className='relative pt-6 pb-16  sm:pb-24 lg:pb-32'>
				{/* ----------------- navbar ------------------  */}
				<HomeNavbar />

				<main className='mx-auto  max-w-9xl   px-4 '>
					<div className='lg:grid lg:grid-cols-12 lg:gap-8  lg:mt-4'>
						<div className='sm:text-center md:mx-auto md:max-w-2xl lg:mt-32 lg:col-span-6 lg:text-left'>
							<h1>
								<span className='mainHeadingHeader mt-1 block lg:text-4xl text-2xl font-bold  xl:text-6xl'>
									<span className='block '>{t('homebannertxt')}</span>
									{/* <span className="block "> Online Essen Bestellplatform</span> */}
								</span>
							</h1>

							{/* <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua ad ad non deserunt sunt.
              </p> */}
							<div className='mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left'>
								<form onSubmit={(e) => e.preventDefault()} action='#' method='POST' className='mt-3 sm:flex '>
									<div className=' rounded-2xl shadow-sm p-2 flex justify-center items-center w-full   bg-white border-orange-500 '>
										<label htmlFor='email' className='sr-only'>
											Email
										</label>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-8 h-8 font-bold lg:mr-2'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
											/>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
											/>
										</svg>

										{/* <input
                      ref={placesRef}
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full border-0 outline-none   py-3 text-base   sm:flex-1"
                    /> */}
										<PlacesAutoComplete
											address={address}
											zipCode={zipCode}
											onPlaceSelect={handlePlaceSelect}
										/>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-10 h-10 text-orange-400 '
											onClick={() => handlePlaceSelect()}>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
											/>
										</svg>
									</div>
								</form>
							</div>
						</div>
						<div className='relative mt-12    sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0  lg:mt-0 lg:p-2 lg:flex lg:max-w-none  lg:items-center '>
							<div className='relative   mx-auto w-full rounded-lg  lg:max-w-full  '>
								<HeaderSlider />
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
