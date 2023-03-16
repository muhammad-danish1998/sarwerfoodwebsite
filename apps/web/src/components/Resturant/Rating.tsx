import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

const publishingOptions = [
	{ title: 'Rating 0.0', value: '0.0', current: true },
	{ title: 'Rating 2.0', value: '2.0', current: false },
	{ title: 'Rating 2.5', value: '2.5', current: false },
	{ title: 'Rating 3.0', value: '3.0', current: false },
	{ title: 'Rating 4.0', value: '4.0', current: false },
	{ title: 'Rating 4.5', value: '4.5', current: false },
	{ title: 'Rating 5.0', value: '5.0', current: false },
];

function classNames(...classNamees) {
	return classNamees.filter(Boolean).join(' ');
}
export default function Rating({ setFilterRating, setShowModal }) {
	const [selected, setSelected] = useState(publishingOptions[0]);

	const handleSelect = (e) => {
		setSelected(e);
		setFilterRating(e.value);
	};

	return (
		<Listbox value={selected} onChange={(e) => handleSelect(e)}>
			{({ open }) => (
				<>
					<Listbox.Label className='sr-only'> Change published status </Listbox.Label>
					<div className='relative'>
						<div className='inline-flex divide-x  rounded-md shadow-sm'>
							<div className='inline-flex divide-x  rounded-md shadow-sm'>
								<div
									onClick={() => {
										setShowModal(true);
									}}
									className='inline-flex items-center rounded-l-md border border-transparent bg-black py-2 pl-3 pr-4 text-white shadow-sm'>
									{/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
									<i className='fa-solid fa-star'></i>
									<p className='ml-2.5 text-sm font-medium'>{selected.title}</p>
								</div>
								<Listbox.Button className='inline-flex items-center rounded-l-none rounded-r-md bg-black p-2 text-sm font-medium text-white  focus:outline-none focus:ring-2  focus:ring-offset-gray-50'>
									<span className='sr-only'>Change published status</span>
									<ChevronDownIcon className='h-5 w-5 text-white' aria-hidden='true' />
								</Listbox.Button>
							</div>
						</div>

						<Transition
							show={open}
							as={Fragment}
							leave='transition ease-in duration-100'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'>
							<Listbox.Options className='absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
								{publishingOptions.map((option) => (
									<Listbox.Option
										key={option.title}
										className={({ active }) =>
											classNames(
												active ? 'text-white bg-black' : 'text-gray-900',
												'cursor-default select-none p-4 text-sm'
											)
										}
										value={option}>
										{({ selected, active }) => (
											<div className='flex flex-col'>
												<div className='flex justify-between'>
													<p className={selected ? 'font-semibold' : 'font-normal'}>{option.title}</p>
													{selected ? (
														<span className={active ? 'text-white' : 'text-indigo-500'}>
															<CheckIcon className='h-5 w-5' aria-hidden='true' />
														</span>
													) : null}
												</div>
											</div>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
}
