import { useEffect, useState } from 'react';

import { modal } from '@/components/Dialog';
import Cart from '@/components/Resturant/Cart';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addToCart, removeFromCart } from '@/redux/slice/cart.slice';
import axios from 'axios';
import HeaderTextSlider from './HeaderTextSlider';
import CartInv from '@/components/Resturant/CartInv';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Details = () => {
	const cartItem = useAppSelector((state) => state.cart.item);
	const dispatch = useAppDispatch();
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
	const getTotalAmount = () => {
		return cartItem
			.reduce((p, c) => {
				const price = Number(c.price);
				if (!isNaN(price)) p += price * c.quantity;
				return p;
			}, 0)
			.toFixed(2);
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
																		modal()?.show(<Cart menu={eachMenuItem} />);
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
																			<span
																				className='cursor-pointer
		                                 shadow-sm hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
		                                 '
																				style={{ fontSize: '30px' }}>
																				<BsPlus />
																			</span>
																		</div>
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
					<aside className=' xl:col-span-4 xl:block   tablet-xl:col-span-4   p-4  lg:mt-0 mt-8  '>
						<div className='sticky top-8 space-y-4  lg:p-4 '>
							<h1 className=' lg:text-2xl text-xl  tablet-xl:mt-8  font-bold'>Shopping Cart</h1>
							{cartItem.length && (
								<Link
									className='checkout flex text-white  justify-between font-bold bg-red-600 p-4 rounded-2xl'
									to='/resturant/checkout'>
									<p>Checkout</p>
									<p>€{getTotalAmount()}</p>
								</Link>
							)}

							<CartInv />
						</div>
					</aside>
				</div>
			</div>
		</div>
	);
};

export default Details;
