import React, { useContext, useEffect, useState } from 'react'
import LocationForm from './LocationForm'
import { weatherClient } from '../client/Client';
import ApiContext from '../client/ApiContext';
import WeatherDetails from './WeatherDetails';


/*
    This is the main component encapsulating functionalities of the application.
    If weather report is set, renders the WeatherDetails component
    Renders the LocationForm component to allow user to dynamically fetch weather details.
*/
const WeatherReport = () => {

    let [weatherReport, setWeatherReport] = useState(null);
    const apiKey = useContext(ApiContext);
    useEffect(() => {

    }, [weatherReport])

  return (
        <div className='w-1/2'>
        {
            weatherReport == null ? 
                <div className='w-full h-96 flex justify-center items-center'>
                    <p className='text-7xl'>Enter a location</p>
                </div> :
                <div className='w-full mb-4'>
                    <WeatherDetails weather={weatherReport} />
                </div> 
        }
        <LocationForm setWeather={setWeatherReport} />
        </div>
  )
}

export default WeatherReport