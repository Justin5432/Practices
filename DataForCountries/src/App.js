import {useState, useEffect} from 'react'
import CountryData from './components/CountryData'
import FilteredCountryList from './components/FilteredCountryList'

import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')
  const [countriesToShow, setCountriesToShow] = useState([])

  useEffect( () => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log(response)
      setCountries(response.data)
    }
    )
  }, [])

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value)
    event.target.value == 0
      ? setCountriesToShow( [] )
      : setCountriesToShow( countries.filter( country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()) ) )
  }

  return (
    <div>
      <div>
        find countries <input value={countryFilter} onChange={handleCountryFilterChange}/>
      </div>
      <div>
        {countriesToShow.length === 0
          ? null
          : countriesToShow.length === 1
            ? <CountryData countryData={countriesToShow[0]}/>
            : countriesToShow.length > 10
              ? <p> Too many matches, specify another filter</p>
              : <FilteredCountryList countryList={countriesToShow} setCountriesToShow={setCountriesToShow}/>
        }
      </div>
    </div>
  )
}

export default App