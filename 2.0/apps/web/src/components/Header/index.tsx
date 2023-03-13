import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GooglePlaceAutoComplete from '@/components/GooglePlaceAutoComplete';
import Toggle from '@/components/Header/Toggle';
import Language from '@/components/Language';
import { encodeQueryData } from '@/utils/helpers';
import { useTranslation } from 'react-i18next';

export default function HeaderNavbar() {
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	return (
		<Disclosure as='nav' className='bg-'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-8xl px-2   sm:px-4 border-2 border-gray-400 lg:px-8 '>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='flex items-center px-2 lg:px-0'>
								<div className='flex-shrink-0'>
									<Link to={'/'}>
										<img className='w-[120px] lg:w-auto mr-2' src='/png/logo.png' alt='Your Company' />
									</Link>
								</div>
								<div className=' lg:ml-6 lg:block'>
									<div className='flex  space-x-4 '>
										<Toggle />
									</div>
								</div>
							</div>
							<div className='flex invisible lg:visible md:visible xl:visible    flex-1 justify-center px-2 lg:ml-6 lg:justify-start'>
								<div className='w-full  max-w-lg  lg:max-w-lg border-2  p-1 '>
									<GooglePlaceAutoComplete
										city={params.get('city')!}
										zipCode={Number(params.get('zipCode'))!}
										hideSearchButton={true}
										onSelected={({ city, zipCode }) => {
											if (!city) return;
											navigate(`/resturant?city=${city}&zipCode=${zipCode}`);
										}}
									/>
								</div>
							</div>

							<div className='flex lg:hidden'>
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='hidden lg:ml-4 lg:block'>
								<div className='flex items-center'>
									<Language />
									<Menu as='div' className='relative ml-4 flex-shrink-0'>
										<div>
											<Menu.Button className='flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
												<span className='sr-only'>Open user menu</span>
												<span className='inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100'>
													<svg
														className='h-full w-full text-gray-300'
														fill='currentColor'
														viewBox='0 0 24 24'>
														<path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
													</svg>
												</span>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter='transition ease-out duration-100'
											enterFrom='transform opacity-0 scale-95'
											enterTo='transform opacity-100 scale-100'
											leave='transition ease-in duration-75'
											leaveFrom='transform opacity-100 scale-100'
											leaveTo='transform opacity-0 scale-95'>
											<Menu.Items className='absolute right-0 navbarlist   mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none '>
												<Menu.Item>
													{({ active }) => (
														<Link
															to='/'
															className={`
                              block px-4 py-2 text-sm text-gray-700 
                                ${active ? ' bg-gray-100' : ''}
                              `}>
															Home
														</Link>
													)}
												</Menu.Item>

												<Menu.Item>
													{({ active }) => (
														<Link
															to='/auth/sign-in'
															className={`
                              block px-4 py-2 text-sm text-gray-700 
                                ${active ? ' bg-gray-100' : ''}
                              `}>
															Sign in
														</Link>
													)}
												</Menu.Item>
												{/* add navbar  */}
												<Menu.Item>
													{({ active }) => (
														<Link
															to='/auth/register'
															className={`
                              block px-4 py-2 text-sm text-gray-700 
                                ${active ? ' bg-gray-100' : ''}
                              `}>
															Sign up
														</Link>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<Link
															to='/about'
															className={`
                              block px-4 py-2 text-sm text-gray-700 
                                ${active ? ' bg-gray-100' : ''}
                              `}>
															about
														</Link>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>
					</div>
					<div className='md:hidden py-2 flex  flex-1 justify-center px-2 lg:ml-6 lg:justify-start'>
						<div className='w-full  max-w-lg  lg:max-w-lg border-2 rounded-full p-1 '>
							<GooglePlaceAutoComplete
								hideSearchButton={true}
								city={params.get('city')!}
								zipCode={Number(params.get('zipCode'))!}
								onSelected={({ city, zipCode }) => {
									if (!city) return;
									navigate(`/resturant`);
								}}
							/>
						</div>
					</div>
					<Disclosure.Panel className='lg:hidden drop-nav   '>
						<div className='space-y-1 px-2 pt-2 pb-3  '>
							{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
							<Link to='/'>
								<Disclosure.Button
									as='a'
									// href="/"
									className=' block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'>
									Home
								</Disclosure.Button>
							</Link>
							<Link to='/signin'>
								<Disclosure.Button
									as='a'
									href='#'
									className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
									Sign in
								</Disclosure.Button>
							</Link>
							<Link to='/signup'>
								<Disclosure.Button
									as='a'
									href='#'
									className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
									Sign up
								</Disclosure.Button>
							</Link>
							<Link to='/about'>
								<Disclosure.Button
									as='a'
									href='#'
									className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
									About
								</Disclosure.Button>
							</Link>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
