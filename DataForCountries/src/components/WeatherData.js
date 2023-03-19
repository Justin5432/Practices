import { useEffect, useState } from "react";
import axios from "axios";

const WeatherData = ({ city }) => {

  const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  // const [location, setLocation] = useState([])
  const [weather, setWeather] = useState([]);

  useEffect( () => {
    axios
    .get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${OPENWEATHER_API_KEY}`)
    .then(response => {
      console.log(response)
      // setLocation(response.data)
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${OPENWEATHER_API_KEY}&units=metric`)
        .then(response => {
          console.log(response)
          setWeather(response.data)
        })
    })
  },[])

  // useEffect( () => {
  //   axios
  //   .get(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0].lat}&lon=${location[0].lon}&appid=${OPENWEATHER_API_KEY}`)
  //   .then(response => {
  //     console.log(response)
  //     setWeather(response.data)
  //   })
  // },[])

  return (
    weather == 0 
    ? null
    : (<div>
        <h2>Weather in {city}</h2>
        <p>tmperature {weather.main.temp} Celcius</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" title="weather icon" />
        <p>wind {weather.wind.speed} m/s</p>
      </div>)
  )

};

export default WeatherData;
