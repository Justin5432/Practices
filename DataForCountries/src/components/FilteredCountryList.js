const FilteredCountryList = ({countryList, setCountriesToShow}) => {
  return (
    countryList.map( (country) =>
      {
        return(
          <div key={country.name.official}>
            <p> {country.name.common} </p>
            <button onClick={() => setCountriesToShow([country])}> show </button>
          </div>
        ) 
      }
    )
  )
}

export default FilteredCountryList