import React, {useState} from 'react'
import { getZipCode, getGeocode, getDetails } from 'use-places-autocomplete'
import AutoComplete from 'react-google-autocomplete';


function PlacesAutoComplete2({ onPlaceSelect , zipCode, address }) {

    
    const handlePlaceSelected = (data) => {
       
        if (data.place_id) {
            getGeocode({
                placeId: data.place_id,
            }).then((result) => {
                const city = getCity(result[0]?.address_components);
                console.log("result------->", result[0].formatted_address)
                const zipCode = getZipCode(result[0], false);
                onPlaceSelect({
                    ...data,
                    zipCode,
                    city,
                })
            }).catch((e) => console.log(e))
        }
    }
    const getCity = (address_components = []) =>{
        const city = address_components.find((component) => component.types.includes('locality'));
        return city?.long_name || '';
    }
    
    return (
        <AutoComplete
            // placeholder={`${address && zipCode}  ${zipCode,address} : "Add Location" `}
            // value = {address ? `${zipCode},${address}}` : ""}
           placeholder={`${zipCode, address}`}
           defaultValue={`${localStorage.getItem('your_zip')} ${localStorage.getItem('your_street_name')}`}
           inputAutocompleteValue={`${zipCode}, ${address}`}
            className="block ml-12   w-full border-0 outline-none   py-2 text-base   sm:flex-1 bg-transparent"
            apiKey='AIzaSyCZ44yB_6Zqh9VSYqB6zhfPyxtK5hOwsL0'
            options={{
                types: [],
            }}
            onPlaceSelected={handlePlaceSelected}
        />
    )
}

export default PlacesAutoComplete2