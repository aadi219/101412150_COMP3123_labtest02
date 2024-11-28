import React from 'react'

const WeatherDetails = ({weather}) => {

    let tempCelsius = Math.round((weather.main.temp - 273.15) * 100) / 100;
    let tempFeelsLike = Math.round((weather.main.feels_like - 273.15) * 100) / 100; 
  return (
    <div className='flex flex-col gap-4 h-96 justify-center border rounded-lg border-slate-400 p-8'>
        <div className='my-4'>
            <p className='text-xl'>Weather for - {weather.name}</p>
        </div>
        <div className='flex w-full justify-center gap-3'>
            <p className='text-8xl text-center text-amber-500'>{tempCelsius}°C</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        </div>
        <p className='text-2xl text-center text-cyan-500'>Feels like: {tempFeelsLike}°C</p>
        <div className=''>
            <p className='text-2xl text-cyan-500'>Weather: <b>{weather.weather[0].main}</b></p>
            <p>Description: {weather.weather[0].description}</p>
        </div>
    </div>
  )
}

export default WeatherDetails