import Restaurants from '@/components/Resturant';
import Auth from '@/pages/Auth';
import { authRoutes } from '@/pages/Auth/routes';
import Home from '@/pages/Home';
import Resturant from '@/pages/Resturant';
import { resturanRoutes } from '@/pages/Resturant/routes';
import { Navigate, RouteObject } from 'react-router-dom';

const router: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'auth',
		element: <Auth />,
		children: [...authRoutes],
	},
	{
		path: 'resturant',
		element: <Resturant />,
		children: [...resturanRoutes],
	},
	{
		path: '*',
		element: <Navigate to={'/'} />,
	},
];
export default router;
