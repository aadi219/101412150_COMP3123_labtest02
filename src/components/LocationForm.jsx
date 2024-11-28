import React, { useState } from 'react'
import InputControl from './InputControl'
import axios from 'axios';
import { geoClient } from '../client/Client';



const LocationForm = ({apiKey}) => {

    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [country, setCountry] = useState('');
    let [location, setLocation] = useState();

    const handleInputChange = (e, setState) => {
        e.preventDefault();
        setState(e.target.value);
    }

    const getLocationData = async (city, state, country) => {
        try {
            const response = await geoClient.get('/direct', {
                params: {
                    q: `${city},${state},${country}`,
                    limit: 1,
                    appid: apiKey
                }
            });
            setLocation(response.data);
        } catch(error) {
            console.error(error);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getLocationData(city, state, country).then(() => {
            console.log(location);
        })
    }

  return (
    <form onSubmit={handleSubmit} className='flex justify-around bg-slate-500 w-full py-2'>
        <InputControl placeholder={'City'} handleChange={(e) => {handleInputChange(e, setCity)}} />
        <InputControl placeholder={'State'} handleChange={(e) => {handleInputChange(e, setState)}} />
        <InputControl placeholder={'Country Code'} handleChange={(e) => {handleInputChange(e, setCountry)}} />
        <button type="submit" className='btn btn-primary'>Get Weather Report</button>
    </form>
  )
}

export default LocationForm