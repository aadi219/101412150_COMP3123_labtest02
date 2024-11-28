import React, { useContext, useState } from 'react'
import InputControl from './InputControl'
import axios from 'axios';
import { geoClient, weatherClient } from '../client/Client';
import ApiContext from '../client/ApiContext';



const LocationForm = ({setWeather}) => {

    const apiKey = useContext(ApiContext);

    let [city, setCity] = useState('Toronto');
    let [country, setCountry] = useState('ca');

    const handleInputChange = (e, setState) => {
        e.preventDefault();
        setState(e.target.value);
    }

    const getLocationData = async (city, country) => {
        try {
            const response = await weatherClient.get('', {
                params: {
                    q: `${city},${country}`,
                    appid: apiKey
                }
            });
            return response.data;
        } catch(error) {
            console.error(error);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getLocationData(city, country.toLowerCase()).then((report) => {
            setWeather(report);
        })
    }

  return (
    <form onSubmit={handleSubmit} className='flex justify-around bg-slate-500 w-full gap-2 p-5 rounded'>
        <InputControl placeholder={'City'} handleChange={(e) => {handleInputChange(e, setCity)}} />
        <InputControl placeholder={'Country Code'} handleChange={(e) => {handleInputChange(e, setCountry)}} />
        <button type="submit" className='btn btn-primary'>Get Weather Report</button>
    </form>
  )
}

export default LocationForm