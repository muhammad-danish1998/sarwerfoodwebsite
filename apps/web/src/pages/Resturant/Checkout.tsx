import CartInv from '@/components/Resturant/CartInv';
import { useAppSelector } from '@/hooks';
import { useState } from 'react';

const plans = [
	{
		id: 'small',
		name: 'Cash On Delivery',
		description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage',
	},
	{
		id: 'medium',
		name: 'Paypal',
		description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}
export const Checkout = () => {
	const cart = useAppSelector((state) => state.cart);
	const [deliveryOption, setDeliveryOption] = useState('pickup');

	const [showDetail, setShowDetail] = useState(false);
	const [menuArray, setMenuArray] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [showModal1, setShowModal1] = useState(false);
	const [deliveryTimeList, setDeliveryTimeList] = useState([]);
	const handleClose = () => {};

	const [timeValue, setTimeValue] = useState(null);

	const handleChangeSelectValue = (e) => {
		setTimeValue(e);
	};

	const [currentRestaurantImg, setCurrentRestaurantImg] = useState();
	const params = new URLSearchParams(window.location.search);

	let handleSubmit = () => {
		let data = {
			your_street_name: localStorage.getItem('address'),
			your_house_number: localStorage.getItem('your_house_number'),
			your_city: localStorage.getItem('your_city'),
			your_zip: localStorage.getItem('your_zip'),
			floor: localStorage.getItem('floor'),
			company: localStorage.getItem('company'),
			your_name: localStorage.getItem('your_name'),
			your_phone: localStorage.getItem('your_phone'),
			your_email: localStorage.getItem('your_email'),
			// shipping: selectValue,
			// delivery_time: timeValue,
			PaymentType: 'cod',
			sessid: localStorage.getItem('uuid'),
		};
	};

	return (
		<div className='min-h-screen'>
			<div className='py-6'>
				<div className='mx-auto max-w-8xl sm:px-6 lg:grid lg:max-w-9xl lg:grid-cols-12 lg:gap-8 lg:px-8'>
					<main className='lg:col-span-9 xl:col-span-8'>
						{/* -------------- card ----------------  */}
						<section className='text-gray-600 body-font mt-4'>
							<div className='container px-5  mx-auto'>
								<div className='flex flex-wrap -m-4'>
									<div className=' md:w-full'>
										<div className='h-full  border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
											<div className='p-6'>
												<div className='flex items-center flex-wrap '>
													<div className=' rounded-lg px-1  lg:mt-16 mb-4  w-5/6'>
														<h1 className='text-4xl font-bold text-black mb-2'>Checkout</h1>
													</div>
													<div>
														{/* {
                             
                          showDetail  &&  <Delivery />   
                            } */}
													</div>
													<div className='border-2 border-gray-400 rounded-lg p-8   mt-4 mb-4 bg-white  lg:w-5/6 w-full'>
														<div className='cursor-pointer'>
															<label
																onClick={() => {}}
																htmlFor='comment '
																className='block text-xl cursor-pointer font-medium text-gray-700'>
																Personal detail and adress
															</label>
															{/* <div className="mt-1">
                                <input className="p-4  w-full" type={"text "} />
                              </div> */}
														</div>
													</div>
													<div className='border-2 border-gray-400 rounded-lg p-8   mt-4 mb-4 bg-white  lg:w-5/6 w-full'>
														<div>
															<label
																htmlFor='comment '
																className='block text-xl cursor-pointer  font-medium text-gray-700'>
																Payment method
															</label>
															<div>
																<div className='mt-1 '>
																	<fieldset className='mt-4'>
																		<div className='space-y-5'>
																			{plans.map((plan) => (
																				<div key={plan.id} className='relative flex items-start'>
																					<div className='flex h-5 items-center'>
																						<input
																							id={plan.id}
																							aria-describedby={`${plan.id}-description`}
																							name='plan'
																							type='radio'
																							defaultChecked={plan.id === 'small'}
																							className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
																						/>
																					</div>
																					<div className='ml-3 text-sm'>
																						<label htmlFor={plan.id} className='font-medium text-gray-700'>
																							{plan.name}
																						</label>
																					</div>
																				</div>
																			))}
																		</div>
																	</fieldset>
																</div>
															</div>
														</div>
													</div>
													<div className=' border-gray-400  p-1   mt-4 mb-4 bg-white  lg:w-5/6 w-full'>
														<div className='p-4'>
															<label htmlFor='comment ' className='block text-xl  font-medium text-gray-700'>
																Delivery Time
															</label>
															<select
																id='location'
																name='location'
																className='mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
																defaultValue='ASAP'
																onChange={(e) => handleChangeSelectValue(e.target.value)}>
																{/* {addVal?.type == "single" &&
                                addVal?.opt?.map((val) => (
                                  // console.log("val",val), */}
																<option value='ASAP'>ASAP</option>
																{deliveryTimeList?.map((e: any) => (
																	<option value={e.time}>{e.time}</option>
																))}
																<>
																	{/* <option>Canada</option>
                                <option>Mexico</option> */}
																</>
																{/* ))} */}
															</select>
															{/* <div className="mt-1">
                                <input
                                  placeholder="ASAP"
                                  className="p-2  w-full bg-gray-200"
                                  type={"text "}
                                />
                              </div> */}
														</div>
													</div>
													<div className=' border-gray-400  p-1   mt-4 mb-4 bg-white lg:w-5/6 w-full'>
														<div className='p-4'>
															<label htmlFor='comment ' className='block text-xl  font-medium text-gray-700'>
																AddNote (Optional)
															</label>
															<div className='mt-1'>
																<input
																	placeholder='Please don’t ring the bell baby is sleeping.'
																	className='p-4  w-full bg-gray-200'
																	type={'text '}
																/>
															</div>
														</div>
													</div>

													{/* ------------------------ button ---------------------  */}
													<div className=' border-gray-400  p-1   mt-4 mb-4 bg-transparent  w-5/6'>
														<div className=''>
															<div className='mt-1'>
																{/* <Link
                                to="/invoice" */}

																<button
																	onClick={() => handleSubmit()}
																	className=' inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-4 lg:text-lg text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
																	Order And Pay
																</button>
															</div>
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
					<aside className=' xl:col-span-4 xl:block border-2 p-4 lg:p-0'>
						<div className='sticky top-6 space-y-4 lg:p-4'>
							<h1 className='text-2xl font-bold'>Basket</h1>

							<div className='checkout flex text-white justify-between bg-red-500 p-4 rounded-2xl'>
								<p>Checkout</p>
								<p>€{Number(cart.totalAmount)}</p>
							</div>
							<CartInv />
							<div className='flex justify-between font-semibold'>
								<p>Subtotal</p>
								<p>€{cart.totalAmount}</p>
							</div>
							<div className='flex justify-between font-semibold'>
								<p>Delivery Costs</p>
								<p>€{Number(cart.totalAmount)}</p>
							</div>
							<div className='flex justify-between font-semibold'>
								<p>Total</p>
								<p>{cart.totalAmount}</p>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</div>
	);
};
