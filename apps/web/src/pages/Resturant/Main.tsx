import Modalminimumorder from '@/components/Resturant/ModalminimumOrder';
import RestaurantsGrid from '@/components/Resturant/ResturantGrid';
import { useAxios } from '@/hooks';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
	const params = new URLSearchParams(window.location.search);
	const [restaurantItems, setRestaurantItems] = useState([]);
	const [filterRating, setFilterRating] = useState({});
	const [freeDelivery, setFreeDelivery] = useState(false);
	const [openResturant, setOpenResturant] = useState(false);
	const [catArray, setCatArray] = useState([]);

	const handleChangeDelivery = () => {
		setFreeDelivery((prev) => !prev);
	};
	const handleChangeOpenResturant = () => {
		setOpenResturant((prev) => !prev);
	};
	const [state, request] = useAxios({
		url: `ajax/resturents_api_ajax.php?city=${params.get('city')}&zip=${params.get('zipCode')}&page=1`,
	});

	useEffect(() => {
		const city = params.get('city');
		const zip = params.get('zipCode');
		if (!city || !zip) return;
		request().then((res) => {
			console.log(res);
			setRestaurantItems(res.data);
			setCatArray(res.cat);
		});
	}, [window.location.search]);

	const [showModal, setShowModal] = useState(false);
	const [showModalMinimum, setShowModalMinimum] = useState(false);
	const [minimumOrderValue, setMinimumOrderValue] = useState(0);
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
			{/* ----------------------------------- Grid card -----------------------  */}
			<div className='py-0'>
				<header>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'></div>
				</header>
				{/* ----------------- menu categray -----------------  */}

				<main>
					<div className='mx-auto lg:max-w-12xl sm:px-6 lg:px-8'>
						{/* Replace with your content */}
						<div className='px-4 py-1 sm:px-0 -z-10'>
							<RestaurantsGrid
								items={restaurantItems}
								filterRating={filterRating}
								freeDelivery={freeDelivery}
								openResturant={openResturant}
								minimumOrderValue={minimumOrderValue}
								checkMinimumOrderValue={checkMinimumOrderValue}
							/>
						</div>
						{/* <ModalRating onClose={() => setShowModal(false)} visible={showModal} /> */}
						<Modalminimumorder
							onClose={() => setShowModalMinimum(false)}
							visible={showModalMinimum}
							setMinimumOrderValue={handleMinimumOrderChange}
							minimumOrderValue={minimumOrderValue}
						/>

						{/* /End replace */}
					</div>
				</main>
			</div>
		</>
	);
};

export default Main;
