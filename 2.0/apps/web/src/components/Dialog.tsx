import { Dialog as ReactDialog, Transition } from '@headlessui/react';
import {
	ForwardedRef,
	Fragment,
	ReactNode,
	createRef,
	forwardRef,
	useImperativeHandle,
	useState,
} from 'react';
type TModalRef = { show: (_child: ReactNode) => void; hide: () => void };
export const modalRef = createRef<TModalRef>();
export const modal = () => {
	if (!modalRef.current) return;
	return modalRef.current;
};
export const Dialog = forwardRef((props, ref: ForwardedRef<TModalRef>) => {
	const [modal, setModal] = useState(false);
	const [child, setChild] = useState<ReactNode>();
	const show = (_child: ReactNode) => {
		setChild(_child);
		setModal(true);
	};
	const hide = () => {
		setModal(false);
		setTimeout(() => {
			setChild(undefined);
		}, 300);
	};
	const value = {
		show,
		hide,
	};
	useImperativeHandle(ref, () => value);
	return (
		<>
			<Transition appear show={modal} as={Fragment}>
				<ReactDialog as='div' className='relative z-10' onClose={hide}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'>
								<ReactDialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
									{child}
								</ReactDialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</ReactDialog>
			</Transition>
		</>
	);
});
