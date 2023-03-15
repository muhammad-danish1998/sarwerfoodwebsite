import { useAppSelector } from '@/hooks';
import {
	decrementQuantity,
	incrementQuantity,
	removeFromCart,
	updateCartItem,
} from '@/redux/slice/cart.slice';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

const CartInv = () => {
	const dispatch = useDispatch();
	const carts = useAppSelector((state) => state.cart.item);
	const updateRef = useRef<any>();
	return (
		<div>
			<div>
				{carts?.map((cart) => (
					<>
						<div className='card-list-uper flex justify-between p-6'>
							<ol className='list-decimal'>
								<li>{cart.name}</li>
							</ol>

							<p className='font-bold'>€{Number(cart.price).toFixed(2)}</p>
						</div>
						<div className='card-list-uper flex  justify-between p-2'>
							<div className=' ipadAir:pr-4 galxyFold:pr-4 '>
								<label htmlFor='small-input' className=' lg:p-2 block  lg:text-md  font-bold text-gray-500 '>
									Note
								</label>
								<input
									ref={updateRef}
									type='text'
									id='small-input'
									value={cart?.note}
									className='block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-300 sm:text-xs   '
								/>
								<button
									className='lg:p-2 block  lg:text-md  font-bold text-gray-500'
									onClick={() => {
										dispatch(updateCartItem({ id: cart.id, note: updateRef.current?.value }));
									}}>
									Update
								</button>
							</div>
							<p className='flex lg:justify-center lg:mt-0 mt-2 items-center'>
								{cart.quantity > 1 ? (
									<svg
										onClick={() => {
											dispatch(decrementQuantity(cart.id));
										}}
										className='w-8 h-8 p-1 cursor-pointer  border-2 border-black rounded-full'
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'>
										<path fill='currentColor' d='M19 12.998H5v-2h14z' />
									</svg>
								) : (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										onClick={() => {
											dispatch(removeFromCart(cart.id));
										}}
										stroke='currentColor'
										className='w-8 h-8 p-1 border-2 cursor-pointer rounded-full border-red-600 text-red-600 '>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
										/>
									</svg>
								)}

								<span className='m-2'>{cart.quantity}</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									onClick={() => {
										dispatch(incrementQuantity(cart.id));
									}}
									className='w-8 h-8 p-1 cursor-pointer  border-2 border-black rounded-full'>
									<path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
								</svg>
							</p>
						</div>
					</>
				))}

				<hr />
			</div>
		</div>
	);
};

export default CartInv;
