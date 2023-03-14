import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';
import Switch from '@/components/Resturant/Switch';
import Rating from '@/components/Resturant/Rating';
import { modal } from '@/components/Dialog';
// import HeaderTextSlider from './HeaderTextSlider';
// import Modalminimumorder from './Modalminimumorder';
// import OpenResturant from './OpenResturant';
// import RatiingHeader from './RatiingHeader';
// import RestaurantsGrid from './RestaurantsGrid';
import { Dialog as ReactDialog } from '@headlessui/react';
import { useAxios } from '@/hooks';
import RestaurantsGrid from '@/components/Resturant/ResturantGrid';
import Modalminimumorder from '@/components/Resturant/ModalminimumOrder';
const user = {
	name: 'Tom Cook',
	email: 'tom@Restaurants.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
	{ name: 'Dashboard', href: '#', current: true },
	{ name: 'Team', href: '#', current: false },
	{ name: 'Projects', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Restaurants() {
	const params = new URLSearchParams(window.location.search);
	const [restaurantItems, setRestaurantItems] = useState([]);
	const [filterRating, setFilterRating] = useState({});
	const [freeDelivery, setFreeDelivery] = useState(false);
	const [openResturant, setOpenResturant] = useState(false);
	const [catArray, setCatArray] = useState([]);

	const handleChangeDelivery = () => {
		setFreeDelivery((prev) => !prev);
	};
	const handleChangeOpenResturant = () => {
		setOpenResturant((prev) => !prev);
	};
	const [state, request] = useAxios({
		url: `ajax/resturents_api_ajax.php?city=${params.get('city')}&zip=${params.get('zipCode')}&page=1`,
	});

	useEffect(() => {
		const city = params.get('city');
		const zip = params.get('zipCode');
		if (!city || !zip) return;
		request().then((res) => {
			console.log(res);
			setRestaurantItems(res.data);
			setCatArray(res.cat);
		});
	}, [window.location.search]);

	const [showModal, setShowModal] = useState(false);
	const [showModalMinimum, setShowModalMinimum] = useState(false);
	const [minimumOrderValue, setMinimumOrderValue] = useState(0);
	const [checkMinimumOrderValue, setCheckMinimumOrderValue] = useState(false);
	const handleMinimumOrderChange = (eValue) => {
		setShowModalMinimum(false);
		setMinimumOrderValue(eValue);
		setCheckMinimumOrderValue(true);
	};
	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<>
			{/*
        This Restaurants requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
			<div className='min-h-full'>
				<Disclosure as='nav' className='bg-white shadow-sm'>
					{({ open }) => (
						<div className=''>
							<Header />
							<div className=' lg:visible hidden max-w-8xl  lg:ml-12   lg:mt-2 m-auto lg:flex md:flex md:flex-row items-center  p-1 '>
								<div className='lg:flex md:flex  lg:justify-between   '>
									{/* ================= open resturant ================  */}
									<p className=' bg-gray-100 rounded-full p-2 flex items-center border-2  '>
										<span className='mr-2'>Open Resturant</span>
										<Switch handleChange={handleChangeOpenResturant} />
									</p>
									{/* ===================== free delivery =================  */}
									<p className=' bg-gray-100 lg:ml-4 md:ml-1 mt-1  rounded-full p-2 flex items-center'>
										<span className='mr-4'>{t('freedelivery')}</span>
										<Switch handleChange={handleChangeDelivery} />
									</p>
								</div>
								{/* ---------------- rating ------------  */}
								<div className='flex lg:justify-around   mt-2 '>
									<p className='lg:ml-4  mt-1'>
										<Rating setShowModal={setShowModal} setFilterRating={setFilterRating} />
									</p>
									{/* -------------- minimum order ---------------  */}
									<p className='ml-4  mt-1'>
										<button
											onClick={() => {
												modal()?.show(
													<>
														<div>
															<div className='mt-3  sm:mt-5'>
																<ReactDialog.Title
																	as='h3'
																	className='text-2xl font-medium leading-6 text-gray-900'>
																	Mininum Order
																</ReactDialog.Title>
																<ReactDialog.Title
																	as='h3'
																	className='text-sm font-normal leading-6 text-gray-900'>
																	€ {0}
																</ReactDialog.Title>
																<div className='mt-2'>
																	<p className='text-sm text-gray-500'>
																		<div className=''>
																			<input
																				type='range'
																				list='tickmarks'
																				min='0'
																				max='100'
																				value={0}
																				onChange={(e) => {}}
																				className='w-full'
																			/>
																			<datalist id='tickmarks'>
																				<option value='3'></option>
																				<option value='3.5'></option>
																				<option value='4'></option>
																				<option value='4.5'></option>
																				<option value='5'></option>
																			</datalist>
																		</div>
																	</p>
																</div>
															</div>
														</div>
														<div className='mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3'>
															<button
																type='button'
																className='inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm'
																onClick={() => {}}>
																View Results
															</button>
															<button
																type='button'
																className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm'
																onClick={() => {
																	modal()?.hide();
																}}>
																Cancel
															</button>
														</div>
													</>
												);
											}}
											className='border-2 p-2 rounded-full bg-gray-100'>
											{t('minimumorder')}
										</button>
									</p>
								</div>
							</div>

							<Disclosure.Panel className='sm:hidden'>
								<div className='space-y-1 pt-2 pb-3'>
									{navigation.map((item) => (
										<Disclosure.Button
											key={item.name}
											as='a'
											href={item.href}
											className={classNames(
												item.current
													? 'bg-indigo-50 border-indigo-500 text-indigo-700'
													: 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
												'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
											)}
											aria-current={item.current ? 'page' : undefined}>
											{item.name}
										</Disclosure.Button>
									))}
								</div>

								<div className='border-t border-gray-200 pt-4 pb-3'>
									<div className='flex items-center px-4'>
										<div className='flex-shrink-0'>
											<img className='h-10 w-10 rounded-full' src={user.imageUrl} alt='' />
										</div>
										<div className='ml-3'>
											<div className='text-base font-medium text-gray-800'>{user.name}</div>
											<div className='text-sm font-medium text-gray-500'>{user.email}</div>
										</div>
										<button
											type='button'
											className='ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
											<span className='sr-only'>View notifications</span>
											<BellIcon className='h-6 w-6' aria-hidden='true' />
										</button>
									</div>
									<div className='mt-3 space-y-1'>
										{userNavigation.map((item) => (
											<Disclosure.Button
												key={item.name}
												as='a'
												href={item.href}
												className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'>
												{item.name}
											</Disclosure.Button>
										))}
									</div>
								</div>
							</Disclosure.Panel>
						</div>
					)}
				</Disclosure>

				<Outlet />
			</div>
		</>
	);
}
