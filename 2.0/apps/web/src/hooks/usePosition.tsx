import { useAxios } from '@/hooks/useFetch';
import { useCallback, useEffect, useState } from 'react';
import { usePosition as useReactPosition } from 'use-position';
export const usePosition = () => {
	const { latitude, longitude } = useReactPosition(false);
	const [address, setAddress] = useState<any>();
	const [zipCode, setZipCode] = useState<number | undefined>();
	const [, fetchAddress] = useAxios(
		{
			url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${
				import.meta.env.VITE_GOOGLE_API_KEY
			}`,
		},
		true
	);
	const [, fetchZipCode] = useAxios(
		{
			url: `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
		},
		true
	);

	useEffect(() => {
		if (!latitude || !longitude) return;
		fetchAddress().then((_address) => {
			setAddress(_address?.results?.[0]?.formatted_address);
		});
		fetchZipCode().then(({ address }) => {
			setZipCode(address.postcode);
		});
	}, [latitude, longitude]);

	return { position: { latitude, longitude }, address, zipCode };
};
