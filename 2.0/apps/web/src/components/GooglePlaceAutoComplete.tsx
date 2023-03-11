import { usePosition } from '@/hooks';
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { memo, useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';
import { Input } from 'ui';
import './home.scss';
declare const google: any;
type TGooglePlaceAutoCompleteProps = {
	onSelected: (args) => void;
	hideSearchButton?: boolean;
};
const GooglePlaceAutoComplete = ({ onSelected, hideSearchButton = true }: TGooglePlaceAutoCompleteProps) => {
	const inputRef = useRef<any>();
	const { address, zipCode } = usePosition();
	const [state, setState] = useState<string>();
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	useEffect(() => {
		const c = params.get('city') || address;
		const z = params.get('zipCode') || zipCode;
		if (!c || !z) return;
		setState(`${z}, ${c}`);
	}, [zipCode, address]);
	const handlePlaceChanged = () => {
		if (!inputRef.current) return;
		const [place] = inputRef.current.getPlaces();
		const city =
			place?.address_components?.find((component) => component.types.includes('locality'))?.long_name || '';
		onSelected({ city, address, zipCode });
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
				{hideSearchButton && (
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
