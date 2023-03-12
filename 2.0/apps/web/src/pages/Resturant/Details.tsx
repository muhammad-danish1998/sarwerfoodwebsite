import { useEffect, useState } from 'react';

import axios from 'axios';

export default function Details() {
	const [menuArray, setMenuArray] = useState([]);
	const [menures, setMenuRes] = useState([]);
	const [menuresdes, setMenuResDes] = useState('');
	const [menuresimg, setMenuResImg] = useState('');

	const [menuresName, setMenuResName] = useState('');

	const [catArray, setCatArray] = useState([]);
	const [name, setName] = useState();
	const [currentRestaurantImg, setCurrentRestaurantImg] = useState();

	const params = new URLSearchParams(window.location.search);
	useEffect(() => {
		const restaurantSlug = params.get('resturent_slug');
		const restuarantCode = params.get('resturent_code');
		axios
			.get(
				`https://liefermars.de/_api_ajax_menu.php?resturent_slug=${restaurantSlug}&resturent_code=${restuarantCode}&sessid=${localStorage.getItem(
					'uuid'
				)}`
			)
			.then((response) => {
				setName(response?.data?.restname);
				setMenuArray(response.data.menuarr);
				setCatArray(response?.data?.catarr);

				setCurrentRestaurantImg(response?.data?.restlogo);

				setMenuRes(response.data.menuarr);
			});
	}, [window.location.search]);
	const [showModal, setShowModal] = useState(false);
	//  ============ check out popup state ========
	const [checkOutModal, setCheckOutModal] = useState(false);

	const handleClose = () => {
		setShowModal(false);
		setCheckOutModal(false);
	};

	const handleClick = (id, price, name, description, image) => {
		setShowModal(true);
		setMenuResImg(image);
		setMenuResDes(description);
		setMenuResName(name);
	};
	// ============= checkout modal function ==============
	const checkoutModalFun = () => {
		setCheckOutModal(true);
	};
	// };
	return (
		<div className=''>
			<div className='lg:py-0 py-1  '>
				<div className='mx-auto max-w-9xl   sm:px-6 lg:grid  lg:grid-cols-12 lg:gap-0 lg:px-8'>
					<main className='lg:col-span-9  xl:col-span-8 tablet-xl:col-span-8   '>
						{/* -------------- card ----------------  */}
						<section className='text-gray-600  mt-6'>
							<div className='w-5/6 lg:container lg:px-5  mx-auto'>
								<div className='flex flex-wrap -m-4'>
									<div className=' w-full'>
										<div className='h-full   border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
											<img
												className='lg:h-48 md:h-36 h-24 object-cover w-full  '
												// src={currentRestaurantImg}
												src='https://www.trgplc.com/wp-content/uploads/2022/03/Pubs_our_brand.jpg'
												alt='blog'
											/>
											<div className='p-0  lg:p-0'>
												<div className='flex lg:items-center  justify-between border-2'>
													<div className=' justify-center lg:ml-2 items-center'>
														<h1 className='title-font lg:text-2xl text-xl p-1 lg:p-0 font-medium text-gray-900 mb-3'>
															{name}
														</h1>

														{/* -------- review ------------  */}
														<span className='flex items-center p-1 lg:p-0 '>
															<svg
																fill='currentColor'
																stroke='currentColor'
																strokeLinecap='round'
																strokeLinejoin='round'
																strokeWidth='2'
																className='w-4 h-4 '
																viewBox='0 0 24 24'
																style={{ color: '#FF8A00' }}>
																<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
															</svg>
															<svg
																fill='currentColor'
																stroke='currentColor'
																strokeLinecap='round'
																strokeLinejoin='round'
																strokeWidth='2'
																className='w-4 h-4  lg:ml-2'
																viewBox='0 0 24 24'
																style={{ color: '#FF8A00' }}>
																<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
															</svg>
															<svg
																fill='currentColor'
																stroke='currentColor'
																strokeLinecap='round'
																strokeLinejoin='round'
																strokeWidth='2'
																className='w-4 h-4  lg:ml-2'
																viewBox='0 0 24 24'
																style={{ color: '#FF8A00' }}>
																<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
															</svg>
															<svg
																fill='currentColor'
																stroke='currentColor'
																strokeLinecap='round'
																strokeLinejoin='round'
																strokeWidth='2'
																className='w-4 h-4  lg:ml-2'
																viewBox='0 0 24 24'
																style={{ color: '#FF8A00' }}>
																<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
															</svg>
															<svg
																fill='currentColor'
																stroke='currentColor'
																strokeLinecap='round'
																strokeLinejoin='round'
																strokeWidth='2'
																className='w-4 h-4  lg:ml-2'
																viewBox='0 0 24 24'
																style={{ color: '#FF8A00' }}>
																<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
															</svg>
														</span>
														<p className='leading-relaxed mb-3'>
															{/* <HeaderToggle
                                value1={"Delivery"}
                                value2="Pickup"
                              /> */}
														</p>
													</div>
													<div>
														{/* --------------- logo -------------  */}
														<div className='mt-0 p-2 '>
															<img
																className='inline-block lg:h-24 lg:w-24 h-12 w-12 rounded-full'
																src={currentRestaurantImg}
																alt=''
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</main>
					{/* mobile it will hidden  */}
					<aside className=' xl:col-span-4 xl:block hidden  tablet-xl:col-span-4   p-4  lg:mt-0 mt-8  '>
						<div className='sticky top-8 space-y-4  lg:p-4 '>
							<h1 className=' lg:text-2xl text-xl  tablet-xl:mt-8  font-bold'>Shopping Cart</h1>
						</div>
					</aside>
				</div>
			</div>
		</div>
	);
}
