const EditmyAddress = () => {
	return (
		<>
			<div className='flex min-h-full bg-white flex-col m-8 justify-center max-w-8xl   sm:px-6 lg:px-1'>
				<section className='text-gray-600 body-font relative'>
					<div className='container  py-2 mx-auto'>
						<div className='lg:w-5/6 md:w-2/3 '>
							<p className=' text-4xl font-bold text-black mb-8'>Edit my Address</p>

							<div className='flex flex-wrap -m-2'>
								<div className='p-2 w-1/2'>
									<div className='relative'>
										<label htmlFor='name' className='leading-7 text-sm text-gray-600'>
											Street
										</label>
										<input
											placeholder='Street'
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
											House Number
										</label>
										<input
											placeholder='1234'
											type='text'
											id='email'
											name='email'
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
											placeholder='Apartment or suite'
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
											placeholder='Ludwigshafenam Rhein'
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
											Zip
										</label>
										<input
											placeholder='67065'
											type='text'
											id='email'
											name='email'
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
											placeholder=''
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
											placeholder=''
											type='text'
											id='email'
											name='email'
											className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default EditmyAddress;
