import { modal } from '@/components/Dialog';
import { Dialog } from '@headlessui/react';
import { Button } from 'ui';

const DeliveryDetails = () => {
	return (
		<>
			<div>
				<div className='mt-3  sm:mt-5'>
					<Dialog.Title as='h3' className='text-2xl font-medium leading-6 text-gray-900'>
						Dlivery Address
					</Dialog.Title>
					<Dialog.Title as='h3' className=' leading-6 text-xl font-semibold text-gray-400'>
						Personal InhtmlFormation
					</Dialog.Title>
					<div className='mt-2   flex flex-col'>
						<div className='flex flex-wrap -m-2'>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label htmlFor='name' className='leading-7 text-sm text-gray-600'>
										Street
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={''}
										onChange={(e) => {
											console.log(e);
										}}
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
										House Number
									</label>
									<input
										type='text'
										id='email'
										name='email'
										value={''}
										onChange={(e) => {
											console.log(e);
										}}
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-full'>
								<div className='relative'>
									<label htmlFor='message' className='leading-7 text-sm text-gray-600'>
										Apartment(Optional)
									</label>
									<input
										type='email'
										id='email'
										name='email'
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label htmlFor='name' className='leading-7 text-sm text-gray-600'>
										City
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={''}
										onChange={(e) => {
											console.log(e);
										}}
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
										Zip
									</label>
									<input
										type='text'
										id='email'
										name='email'
										value={''}
										onChange={(e) => {
											console.log(e);
										}}
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label htmlFor='name' className='leading-7 text-sm text-gray-600'>
										Floor (Optional)
									</label>
									<input
										type='text'
										id='name'
										name='name'
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
										Company (Optional)
									</label>
									<input
										type='text'
										id='email'
										name='email'
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>

							<div className='p-2 w-full '>
								<div className='relative mt-6'>
									<div className='absolute inset-0 flex items-center'>
										<div className='w-full border-t border-gray-300' />
									</div>
								</div>

								<p className='mt-12 text-2xl font-semibold text-gray-400'>Personal InhtmlFormation</p>
							</div>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label htmlFor='name' className='leading-7 text-sm text-gray-600'>
										Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={''}
										onChange={(e) => {
											console.log(e);
										}}
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
										Phone
									</label>
									<input
										type='number'
										id='email'
										name='email'
										value={''}
										onChange={(e) => {
											console.log(e);
										}}
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
							<div className='p-2 w-full'>
								<div className='relative'>
									<label htmlFor='message' className='leading-7 text-sm text-gray-600'>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={''}
										onChange={(e) => {
											console.log(e);
										}}
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3'>
				<Button
					className='mt-3 bg-red-500 text-white inline-flex w-full justify-center rounded-md border border-gray-300  px-4 py-2 text-base font-medium  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 lg:text-lg sm:text-sm'
					onClick={() => {
						modal()?.hide();
					}}>
					Submit
				</Button>
			</div>
		</>
	);
};

export default DeliveryDetails;
