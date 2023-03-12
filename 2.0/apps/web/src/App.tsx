import { useAppDispatch, usePosition, UserContextProvider } from '@/hooks';
import router from '@/router';
import { Suspense, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Spinner } from 'ui';
import 'react-toastify/dist/ReactToastify.css';
import { Dialog, modalRef } from '@/components/Dialog';
import { initConfig } from '@/redux/slice/app-config.slice';

function App() {
	const { address, position, zipCode } = usePosition();
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (!address || !position || !zipCode) return;
		console.log({ address, position, zipCode });
		dispatch(initConfig({ address, position, zipCode }));
	}, [position]);
	return (
		<Suspense fallback={<Spinner />}>
			<UserContextProvider>
				<RouterProvider router={createBrowserRouter(router)} />
			</UserContextProvider>
			<Dialog ref={modalRef} />
			<ToastContainer limit={1} />
		</Suspense>
	);
}

export default App;
