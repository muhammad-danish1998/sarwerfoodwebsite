import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
const SignIn = lazy(() => import('@/pages/Auth/SignIn'));
const Register = lazy(() => import('@/pages/Auth/Register'));
const ForgetPassword = lazy(() => import('@/pages/Auth/ForgetPassword'));

export const authRoutes: RouteObject[] = [
	{
		path: 'sign-in',
		element: <SignIn />,
	},
	{
		path: 'register',
		element: <Register />,
	},
	{
		path: 'forget-password',
		element: <ForgetPassword />,
	},
	{
		path: '',
		element: <Navigate to={'/sign-in'} />,
	},
];
