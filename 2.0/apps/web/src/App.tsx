import { UserContextProvider } from '@/hooks';
import router from '@/router';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Spinner } from 'ui';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<UserContextProvider>
				<RouterProvider router={createBrowserRouter(router)} />
			</UserContextProvider>
			<ToastContainer limit={1} />
		</Suspense>
	);
}

export default App;
