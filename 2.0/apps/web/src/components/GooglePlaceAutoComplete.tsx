import { useAppSelector } from '@/hooks';
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { memo, useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { Input } from 'ui';
import './home.scss';
import { localStorage } from '@/utils/storage';
declare const google: any;
type TGooglePlaceAutoCompleteProps = {
	onSelected: (args) => void;
	hideSearchButton?: boolean;
};
const GooglePlaceAutoComplete = ({ onSelected, hideSearchButton = false }: TGooglePlaceAutoCompleteProps) => {
	const inputRef = useRef<any>();
	const { address, zipCode } = useAppSelector((state) => state.appConfig.config);
	const [state, setState] = useState<string>();
	useEffect(() => {
		const area = localStorage.get('area');
		if (area) {
			setState(area);
			return;
		}
		if (!address || !zipCode) return;
		setState(`${zipCode}, ${address}`);
	}, [zipCode, address]);
	const handlePlaceChanged = () => {
		if (!inputRef.current) return;
		const [place] = inputRef.current.getPlaces();
		const city =
			place?.address_components?.find((component) => component.types.includes('locality'))?.long_name || '';
		onSelected({ city, address, zipCode });
		localStorage.set('area', `${zipCode}, ${city}`);
		setState(`${zipCode}, ${city}`);
	};

	return (
		<LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY} libraries={['places']}>
			<div className='w-full auto-complete-container items-center justify-between flex'>
				<CiLocationOn className='text-[30px]' />
				<StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
					<Input
						type='text'
						placeholder='Enter Location'
						value={state}
						onChange={(e) => setState(e.target.value)}
						className='w-[calc(100%-40px)] d-block border-0 '
					/>
				</StandaloneSearchBox>
				{!hideSearchButton && (
					<BsSearch
						className='text-[25px] text-primary mr-5 cursor-pointer active:scale-95'
						onClick={(e) => {
							onSelected({ city: address, zipCode });
						}}
					/>
				)}
			</div>
		</LoadScript>
	);
};

export default memo(GooglePlaceAutoComplete);
