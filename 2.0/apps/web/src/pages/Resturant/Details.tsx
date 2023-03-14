import { useEffect, useState } from 'react';

import { modal } from '@/components/Dialog';
import { useMap } from 'ahooks';
import axios from 'axios';
import HeaderTextSlider from './HeaderTextSlider';
const Details = () => {
	const [map, { set, setAll, remove, reset, get }] = useMap<string, any>([
		['msg', 'hello world'],
		['123', 'number type'],
	]);
	const [menuArray, setMenuArray] = useState<any>([]);
	const [menures, setMenuRes] = useState([]);
	const [menuresdes, setMenuResDes] = useState('');
	const [menuresimg, setMenuResImg] = useState('');
	const [menuresName, setMenuResName] = useState('');
	const [state, setState] = useState(1);
	const [catArray, setCatArray] = useState([]);
	const [name, setName] = useState();
	const [currentRestaurantImg, setCurrentRestaurantImg] = useState();

	const params = new URLSearchParams(window.location.search);
	useEffect(() => {
		const restaurantSlug = params.get('resturent_slug');
		const restuarantCode = params.get('resturent_code');
		axios
			.get(
				`https://liefermars.de/_api_ajax_menu.php?resturent_slug=${restaurantSlug}&resturent_code=${restuarantCode}`
			)
			.then((response) => {
				setName(response?.data?.restname);
				setMenuArray(response.data.menuarr);
				setCatArray(response?.data?.catarr);

				setCurrentRestaurantImg(response?.data?.restlogo);

				setMenuRes(response.data.menuarr);
			});
	}, [window.location.search]);

	const handleClick = (id, price, name, description, image) => {
		setMenuResImg(image);
		setMenuResDes(description);
		setMenuResName(name);
	};

	const addItem = (menuItems) => {
		setState((s) => s + 1);
		const current = get(menuItems.id);
		if (current) {
			set(menuItems.id, { ...menuItems, count: current.count + 1 });
			return;
		}
		set(menuItems.id, { ...menuItems, count: 1 });
	};
	const removeItem = (menuItems) => {
		const current = get(menuItems.id);
		if (current) {
			if (current.count == 0) {
				remove(menuItems.id);
				return;
			}
			set(menuItems.id, { ...menuItems, count: current.count - 1 });
		}
	};
	return (
		<div className=''>
			<div className='sticky-thc  '>
				<HeaderTextSlider catArray={catArray} res={false} />
			</div>
			<div className='lg:py-0 py-1  '>
				<div className='mx-auto max-w-9xl   sm:px-6 lg:grid  lg:grid-cols-12 lg:gap-0 lg:px-8'>
					<main className='lg:col-span-9  xl:col-span-8 tablet-xl:col-span-8   '>
						<section className='text-gray-600  mt-6'>
							<div className='w-5/6 lg:container lg:px-5  mx-auto'>
								<div className='flex flex-wrap -m-4'>
									<div className=' w-full'>
										<div className='h-full   border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
											<img
												className='lg:h-48 md:h-36 h-24 object-cover w-full  '
												src='https://www.trgplc.com/wp-content/uploads/2022/03/Pubs_our_brand.jpg'
												alt='blog'
											/>
											<div className='p-0  lg:p-0'>
												<div className='flex lg:items-center  justify-between border-2'>
													<div className=' justify-center lg:ml-2 items-center'>
														<h1 className='title-font lg:text-2xl text-xl p-1 lg:p-0 font-medium text-gray-900 mb-3'>
															{name}
														</h1>
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
												<div className='flex items-center flex-wrap '>
													{menuArray?.map((eachMenuCatergory) => (
														<>
															<div
																className='border-2 border-gray-400 p-4 rounded-lg mt-4 w-full'
																id={eachMenuCatergory?.['catname']}>
																<h1 className='lg:text-4xl text-xl font-bold text-black'>
																	{eachMenuCatergory?.['catname']}
																</h1>
																<p>{eachMenuCatergory?.['catedesc']}</p>
															</div>
															{eachMenuCatergory?.menuarr.map((eachMenuItem) => (
																<div
																	className='border-2 p-4  mt-4 w-full cursor-pointer'
																	onClick={() => {
																		handleClick(
																			eachMenuItem.id,
																			eachMenuItem.price,
																			eachMenuItem?.name,
																			eachMenuItem?.description,
																			eachMenuItem?.image
																		);
																	}}>
																	<div>
																		<h1 className='lg:text-2xl text-xl'>{eachMenuItem.name}</h1>
																	</div>
																	<p className='text-green-500 font-semibold'> € {eachMenuItem.price}</p>

																	<p
																		dangerouslySetInnerHTML={{
																			__html: eachMenuItem.description,
																		}}
																	/>
																	<p className='mt-2 flex justify-between'>
																		<div className='font-bold'>{/* <Link>Product info</Link> */}</div>
																		<div className=''>
																			<i
																				className='fa-solid fa-plus cursor-pointer
		                                 shadow-sm hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
		                                 '
																				style={{ fontSize: '30px' }}></i>
																		</div>

																		<button
																			onClick={() => {
																				modal()?.show(
																					<>
																						<div>
																							<span className='flex justify-end '>
																								<svg
																									xmlns='http://www.w3.org/2000/svg'
																									fill='none'
																									viewBox='0 0 24 24'
																									stroke-width='1.5'
																									stroke='currentColor'
																									className='w-8 h-8 hover:text-red-600 cursor-pointer '>
																									<path
																										stroke-linecap='round'
																										stroke-linejoin='round'
																										d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
																								</svg>
																							</span>
																							<div className='mt-3  sm:mt-2'>
																								<div className='  flex flex-col'>
																									<p className='w-full mb-4 '></p>
																									<h3
																										className='lg:text-2xl  text-xl font-medium leading-6 text-gray-900'
																										id='headlessui-dialog-title-:rc:'
																										data-headlessui-state='open'>
																										{eachMenuItem?.name}
																									</h3>
																									<h3
																										className='text-sm  font-normal leading-6 text-gray-900'
																										id='headlessui-dialog-title-:rd:'
																										data-headlessui-state='open'></h3>
																									<div className='scroll '></div>
																								</div>
																							</div>
																						</div>
																						<div className='mt-5  border-black sm:mt-6 sm:flex lg:justify-between sm:gap-3'>
																							<div className='card-list-uper'>
																								<p className='flex justify-center items-center'>
																									<svg
																										onClick={() => {
																											removeItem(eachMenuItem);
																										}}
																										className='w-8 h-8 p-1 cursor-pointer  border-2 border-black rounded-full'
																										xmlns='http://www.w3.org/2000/svg'
																										width='24'
																										height='24'
																										viewBox='0 0 24 24'>
																										<path fill='currentColor' d='M19 12.998H5v-2h14z' />
																									</svg>
																									<span className='m-2'>{get(eachMenuItem)?.count || 1}</span>
																									<svg
																										onClick={() => {
																											console.log(map);
																											addItem(eachMenuItem);
																										}}
																										xmlns='http://www.w3.org/2000/svg'
																										fill='none'
																										viewBox='0 0 24 24'
																										stroke-width='1.5'
																										stroke='currentColor'
																										className='w-8 h-8 p-1 cursor-pointer  border-2 border-black rounded-full'>
																										<path
																											stroke-linecap='round'
																											stroke-linejoin='round'
																											d='M12 4.5v15m7.5-7.5h-15'></path>
																									</svg>
																								</p>
																							</div>
																							<button
																								type='button'
																								className='mt-3 bg-red-500 text-white inline-flex lg:w-2/3 w-full justify-center rounded-md border border-gray-300  px-4 py-2 text-base font-medium  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 lg:text-lg sm:text-sm'>
																								In den warenkorb legen €5.90
																							</button>
																						</div>
																					</>,
																					[map]
																				);
																				//   handleClick(
																				//     eachMenuItem.id,
																				//     eachMenuItem.price,
																				//     eachMenuItem?.name
																				//   );
																			}}
																			type='button'
																			className='inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-2xl font-bold text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
																			+
																		</button>
																	</p>
																</div>
															))}
														</>
													))}
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
							<h1 className=' lg:text-2xl text-xl  tablet-xl:mt-8  font-bold'>
								Shopping Cart {get('186')?.count || 1}
							</h1>
						</div>
					</aside>
				</div>
			</div>
		</div>
	);
};

export default Details;
