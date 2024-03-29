import { modal } from '@/components/Dialog';
import Header from '@/components/Header';
import Modalminimumorder from '@/components/Resturant/ModalminimumOrder';
import Rating from '@/components/Resturant/Rating';
import RestaurantsGrid from '@/components/Resturant/ResturantGrid';
import Switch from '@/components/Resturant/Switch';
import { useAxios } from '@/hooks';
import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Dialog as ReactDialog } from '@headlessui/react';
const navigation = [
	{ name: 'Dashboard', href: '#', current: true },
	{ name: 'Team', href: '#', current: false },
	{ name: 'Projects', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
];
import { encodeQueryData } from '@/utils/helpers';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}
const user = {
	name: 'Tom Cook',
	email: 'tom@Restaurants.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];
const Main = () => {
	const params = new URLSearchParams(window.location.search);
	const [restaurantItems, setRestaurantItems] = useState([]);
	const [filterRating, setFilterRating] = useState<any>(null);
	const [freeDelivery, setFreeDelivery] = useState<any>(null);
	const [openResturant, setOpenResturant] = useState<any>(null);
	const [catArray, setCatArray] = useState([]);
	const [minimumOrderValue, setMinimumOrderValue] = useState(0);
	const location = useLocation();
	const handleChangeDelivery = () => {
		setFreeDelivery((prev) => !prev);
	};
	const handleChangeOpenResturant = () => {
		setOpenResturant((prev) => !prev);
	};
	const [state, request] = useAxios({
		url: `ajax/resturents_api_ajax.php?city=${params.get('city')}&zip=${params.get(
			'zipCode'
		)}&page=1&${encodeQueryData({
			minimumAmount: minimumOrderValue,
			freedelivery: freeDelivery,
			openNow: openResturant,
			rating: filterRating,
		})}`,
	});

	useEffect(() => {
		console.log('run');
		const city = params.get('city');
		const zip = params.get('zipCode');
		if (!city || !zip) return;
		request().then((res) => {
			console.log(res);
			setRestaurantItems(res.data);
			setCatArray(res.cat);
		});
	}, [window.location.search, openResturant, filterRating, minimumOrderValue, freeDelivery]);

	const [showModal, setShowModal] = useState(false);
	const [showModalMinimum, setShowModalMinimum] = useState(false);
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
	const clearFilter = () => {
		setFilterRating(null);
		setFreeDelivery(false);
		setOpenResturant(false);
		setMinimumOrderValue(0);
	};
	const minimumOrderRef = useRef<any>();
	return (
		<>
			<Disclosure as='nav' className='bg-white shadow-sm'>
				{({ open }) => (
					<div className=''>
						{!location.pathname.includes('singlerestaurant') && (
							<div className=' lg:visible hidden max-w-8xl  lg:ml-12   lg:mt-2 m-auto lg:flex md:flex md:flex-row items-center  p-1 '>
								<div className='lg:flex md:flex  lg:justify-between   '>
									{/* ================= open resturant ================  */}
									<p className=' bg-gray-100 rounded-full p-2 flex items-center border-2  '>
										<span className='mr-2'>Open Resturant</span>
										<Switch handleChange={handleChangeOpenResturant} value={openResturant} />
									</p>
									{/* ===================== free delivery =================  */}
									<p className=' bg-gray-100 lg:ml-4 md:ml-1 mt-1  rounded-full p-2 flex items-center'>
										<span className='mr-4'>{t('freedelivery')}</span>
										<Switch handleChange={handleChangeDelivery} value={freeDelivery} />
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
																<div className='mt-2'>
																	<p className='text-sm text-gray-500'>
																		<div className=''>
																			<input
																				type='range'
																				list='tickmarks'
																				min={0}
																				max={100}
																				onChange={(e) => {}}
																				ref={minimumOrderRef}
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
																onClick={() => {
																	setMinimumOrderValue(Number(minimumOrderRef.current?.value || 0));
																	modal()?.hide();
																}}>
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
									<p className='ml-4  mt-1'>
										<button
											onClick={() => {
												clearFilter();
											}}
											className='border-2 p-2 rounded-full bg-gray-100'>
											{t('clear')}
										</button>
									</p>
								</div>
							</div>
						)}

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

			<div className='py-0'>
				<header>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'></div>
				</header>
				{/* ----------------- menu categray -----------------  */}

				<main>
					<div className='mx-auto lg:max-w-12xl sm:px-6 lg:px-8'>
						{/* Replace with your content */}
						<div className='px-4 py-1 sm:px-0 -z-10'>
							<RestaurantsGrid
								items={restaurantItems}
								filterRating={filterRating}
								freeDelivery={freeDelivery}
								openResturant={openResturant}
								minimumOrderValue={minimumOrderValue}
								checkMinimumOrderValue={checkMinimumOrderValue}
							/>
						</div>
						{/* <ModalRating onClose={() => setShowModal(false)} visible={showModal} /> */}
						<Modalminimumorder
							onClose={() => setShowModalMinimum(false)}
							visible={showModalMinimum}
							setMinimumOrderValue={handleMinimumOrderChange}
							minimumOrderValue={minimumOrderValue}
						/>

						{/* /End replace */}
					</div>
				</main>
			</div>
		</>
	);
};

export default Main;
