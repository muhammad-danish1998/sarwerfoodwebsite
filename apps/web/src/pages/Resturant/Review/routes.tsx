import { RouteObject } from 'react-router-dom';
import Review from './';
import SubmitReview from './SubmitReview';
import ResturantReview from './ResturantReview';

export const reviewRoutes: RouteObject[] = [
	{
		path: '',
		element: <Review />,
	},
	{
		path: 'resturant-review',
		element: <ResturantReview />,
	},
	{
		path: 'submit-review',
		element: <SubmitReview />,
	},
];
