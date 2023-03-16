import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Header from '@/components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Switch from '@/components/Resturant/Switch';
import Rating from '@/components/Resturant/Rating';
import { modal } from '@/components/Dialog';
// import HeaderTextSlider from './HeaderTextSlider';
// import Modalminimumorder from './Modalminimumorder';
// import OpenResturant from './OpenResturant';
// import RatiingHeader from './RatiingHeader';
// import RestaurantsGrid from './RestaurantsGrid';
import { Dialog as ReactDialog } from '@headlessui/react';
import { useAxios } from '@/hooks';
import RestaurantsGrid from '@/components/Resturant/ResturantGrid';
import Modalminimumorder from '@/components/Resturant/ModalminimumOrder';
const user = {
	name: 'Tom Cook',
	email: 'tom@Restaurants.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
	{ name: 'Dashboard', href: '#', current: true },
	{ name: 'Team', href: '#', current: false },
	{ name: 'Projects', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Restaurants() {
	const minimumOrderRef = useRef<any>();
	const params = new URLSearchParams(window.location.search);
	const [restaurantItems, setRestaurantItems] = useState([]);
	const [filterRating, setFilterRating] = useState<any>({});
	const [freeDelivery, setFreeDelivery] = useState(false);
	const [openResturant, setOpenResturant] = useState(false);
	const [minimumOrderValue, setMinimumOrderValue] = useState(0);
	const [catArray, setCatArray] = useState([]);
	const location = useLocation();
	const handleChangeDelivery = () => {
		setFreeDelivery((prev) => !prev);
	};
	const handleChangeOpenResturant = () => {
		setOpenResturant((prev) => !prev);
	};
	const [state, request] = useAxios({
		url: `ajax/resturents_api_ajax.php?city=${params.get('city')}&zip=${params.get(
			'zipCode'
		)}&page=1&minimumAmount=${minimumOrderValue}&freedelivery=${freeDelivery}&openNow=${openResturant}&rating=${
			filterRating?.value || null
		}`,
	});

	useEffect(() => {
		console.log('run');
		const city = params.get('city');
		const zip = params.get('zipCode');
		if (!city || !zip) return;
		request().then((res) => {
			console.log(res);
			setRestaurantItems(res.data);
			setCatArray(res.cat);
		});
	}, [window.location.search, openResturant, filterRating, minimumOrderValue, freeDelivery]);

	const [showModal, setShowModal] = useState(false);
	const [showModalMinimum, setShowModalMinimum] = useState(false);
	const [checkMinimumOrderValue, setCheckMinimumOrderValue] = useState(false);
	const handleMinimumOrderChange = (eValue) => {
		setShowModalMinimum(false);
		setMinimumOrderValue(eValue);
		setCheckMinimumOrderValue(true);
	};
	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<>
			<div className='min-h-full'>
				<Outlet />
			</div>
		</>
	);
}
