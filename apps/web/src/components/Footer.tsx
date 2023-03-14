import { Link } from 'react-router-dom';

import { faqs, navigation } from '@/const/footer';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

export default function Footer() {
	return (
		<>
			<footer className='p-6 border-2 border-gray-300 hidden lg:block  ' aria-labelledby='footer-heading'>
				<div className='mx-auto  max-w-8xl px-6 pb-4 pt-20 sm:pt-6 lg:px-24 '>
					<div className='xl:grid xl:grid-cols-3 xl:gap-8'>
						<div className='grid lg:grid-cols-2 gap-6 xl:col-span-2'>
							<div className='md:grid md:grid-cols-2 md:gap-8'>
								<div>
									<h3 className='text-lg font-semibold leading-6 text-gray-900'>Get to Know Us</h3>
									<ul role='list' className='mt-6 space-y-2'>
										{navigation.solutions.map((item) => (
											<li key={item.name}>
												<Link to={item.href} className='text-lg leading-6 text-gray-600 hover:text-gray-900'>
													{item.name}
												</Link>
											</li>
										))}
									</ul>
								</div>
								<div className='mt-10 md:mt-0'>
									<h3 className='text-lg font-semibold leading-6 text-gray-900'>Let Us Help You</h3>
									<ul role='list' className='mt-6 space-y-2'>
										{navigation.support.map((item) => (
											<li key={item.name}>
												<a href={item.href} className='text-lg leading-6 text-gray-600 hover:text-gray-900'>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className='md:grid md:grid-cols-2 md:gap-8'>
								<div>
									<h3 className='text-lg font-semibold leading-6 text-gray-900'>Doing Business</h3>
									<ul role='list' className='mt-6 space-y-2'>
										{navigation.company.map((item) => (
											<li key={item.name}>
												<a href={item.href} className='text-lg leading-6 text-gray-600 hover:text-gray-900'>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className='mt-10 xl:mt-0  '>
							<img src='/png/yeldoz 1.png' />
						</div>
					</div>
					<div className='mt-16 border-t border-gray-900/10 pt-4 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-6'>
						<div className='flex space-x-6 md:order-2'>
							{navigation.social.map((item) => (
								<a key={item.name} href={item.href} className='text-gray-400 hover:text-gray-500'>
									<span className='sr-only text-lg'>{item.name}</span>
									<item.icon className='h-6 w-6' aria-hidden='true' />
								</a>
							))}
						</div>
						<div className='mt-8 text-lg  leading-5 text-gray-500 md:order-1 md:mt-0'>
							<div className='mt-2 space-y-2 '>
								<div className='lg:flex lg:items-center lg:justify-center'>
									<Link to={'/'} className='text-lg  leading-6 text-gray-600 hover:text-gray-900'>
										<img src='/png/logo.png' />
									</Link>
									<Link
										to={'/terms'}
										className='text-lg  lg:ml-4 leading-6 text-gray-600 hover:text-gray-900'>
										Terms of Service
									</Link>
									<Link
										to={'/dataprivacy'}
										className='text-lg ml-4 leading-6 text-gray-600 hover:text-gray-900'>
										Privacy
									</Link>
									<Link to={'/'} className='text-lg ml-4 leading-6 text-gray-600 hover:text-gray-900'>
										Delivery Lacations
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* -------------- mobile footer ---------------  */}
			<footer className=' lg:hidden'>
				<div className='mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8'>
					<div className=''>
						<div className='mx-auto max-w-7xl px-6  lg:px-8'>
							<div className='mx-auto max-w-7xl divide-y divide-gray-900/10'>
								<dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
									{faqs.map((faq) => (
										<Disclosure as='div' key={faq.question} className='pt-0'>
											{({ open }) => (
												<>
													<dt>
														<Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-900'>
															<span className='text-base font-semibold leading-7'>{faq.question}</span>
															<span className='ml-6 flex h-7 items-center'>
																{open ? (
																	<MinusSmallIcon className='h-6 w-6' aria-hidden='true' />
																) : (
																	<PlusSmallIcon className='h-6 w-6' aria-hidden='true' />
																)}
															</span>
														</Disclosure.Button>
													</dt>
													<Disclosure.Panel as='dd' className='mt-2 pr-12'>
														<p className='text-base leading-7 text-gray-600'>{faq.answer1}</p>
														<p className='text-base leading-7 text-gray-600'>{faq.answer2}</p>
														<p className='text-base leading-7 text-gray-600'>{faq.answer3}</p>
														<p className='text-base leading-7 text-gray-600'>{faq.answer4}</p>
														<p className='text-base leading-7 text-gray-600'>{faq.answer5}</p>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									))}
								</dl>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
