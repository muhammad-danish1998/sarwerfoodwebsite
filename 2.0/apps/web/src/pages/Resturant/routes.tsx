import About from '@/pages/Resturant/About';
import { Checkout } from '@/pages/Resturant/Checkout';
import Contact from '@/pages/Resturant/Contact';
import { Delivery } from '@/pages/Resturant/Delivery';
import Details from '@/pages/Resturant/Details';
import Main from '@/pages/Resturant/Main';
import { orderRoutes } from '@/pages/Resturant/Order/routes';
import { Pickup } from '@/pages/Resturant/Pickup';
import Privacy from '@/pages/Resturant/Privacy';
import { reviewRoutes } from '@/pages/Resturant/Review/routes';
import Terms from '@/pages/Resturant/Terms';
import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const resturanRoutes: RouteObject[] = [
	{
		path: 'singlerestaurant',
		element: <Details />,
	},
	{
		path: 'delivery',
		element: <Delivery />,
	},
	{
		path: 'pickup',
		element: <Pickup />,
	},
	{
		path: 'privacy',
		element: <Privacy />,
	},
	{
		path: 'about',
		element: <About />,
	},
	{
		path: 'contact',
		element: <Contact />,
	},
	{
		path: 'terms',
		element: <Terms />,
	},
	{
		path: 'checkout',
		element: <Checkout />,
	},
	{
		path: 'review',
		children: [...reviewRoutes],
	},
	{
		path: 'order',
		children: [...orderRoutes],
	},
	{
		path: '',
		element: <Main />,
	},
	{
		path: '*',
		element: <Navigate to={''} />,
	},
];
