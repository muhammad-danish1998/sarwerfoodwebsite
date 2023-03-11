import { RouteObject } from 'react-router-dom';
import Order from './';
import OrderDetails from './Details';

export const orderRoutes: RouteObject[] = [
	{
		path: '',
		element: <Order />,
	},
	{
		path: 'details',
		element: <OrderDetails />,
	},
];
