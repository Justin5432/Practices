import React from 'react'
import WeatherData from './WeatherData'
const CountryData = ({countryData}) => {
  return (
    <>
      <h1>{countryData.name.common}</h1>
      <p>capital {countryData.capital}</p>
      <p>area {countryData.area}</p>
      <h2>languages:</h2>
      <ul>
        {Object.values(countryData.languages).map( language => <li key={language}> {language} </li>)}
      </ul>
      <img src={countryData.flags.png} title={`${countryData.name.common} flag`}/>
      <WeatherData city={countryData.capital} />
    </>
  )
}

export default CountryData