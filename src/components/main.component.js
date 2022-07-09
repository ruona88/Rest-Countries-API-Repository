import React from "react"
import styled from 'styled-components'
import CountrySnapshot from "./country-snapshot.component"
import SearchBar from "../sub-components/search"
import DropDown from "../sub-components/dropdown"
import Loading from "../sub-components/Loading.component"


const Section = styled.article`
  background-color: ${props => props.mode === true ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
  

  .form-elements {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    padding: 40px 60px;
  }
`

const CountryInfo = styled.div`
  padding: 0px 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-auto-rows: repeat(2, fit-content);
  grid-gap: 50px;

  @media (max-width: 689px) {
    justify-items: center;
  }
`

function MainComponent (props) {

  const [searchQuery, setSearchQuery] = React.useState(''); 
  const [isLoading, setISLoading] = React.useState(true)

  const getDataAllCountries = async() => { 
    let response = await fetch("https://restcountries.com/v3.1/all");
    let result = await response.json();
    props.handleClick(result); 
    setISLoading(false); 
  }
  

  React.useEffect(() => { 
    getDataAllCountries();
  }, [])
  
  const trackSearchQuery = function (e) { 
    setSearchQuery(e.target.value.toLowerCase());
  }

  const changeLoadingState = (bool) => {
    setISLoading(bool);
  }

  const filteredCountries = props.countryData.filter((country) => {
    return country.name.common.toLowerCase().includes(searchQuery);
  })

  const filteredCountriesData = filteredCountries.map((country) => { 
    return <CountrySnapshot 
      key = {country.name.common}
      population = {country.population}
      image = {country.flags.png}
      name = {country.name.common}
      capital = {country.capital}
      region = {country.region}
      mode = {props.mode}
    />
  })
  
  return (
    <Section mode = {props.mode} >

      <div className = "form-elements">
        <SearchBar 
          mode = {props.mode}
          handleChange = {trackSearchQuery} 
        />
        <DropDown 
          mode = {props.mode} 
          changeLoadingState = {changeLoadingState}
          updateCountryData = {props.handleClick}
        />
      </div>

      <CountryInfo >
         {
          isLoading? (
            <Loading mode = {props.mode} />
          ) : (
            filteredCountriesData
          )
         }
      </CountryInfo>
       
    </Section>
  )
}

export default MainComponent