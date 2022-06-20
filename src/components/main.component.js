import React from "react"
import { nanoid } from 'nanoid'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import CountrySnapshot from "./country-snapshot.component"
import SearchBar from "../sub-components/search"
import DropDown from "../sub-components/dropdown"

const Section = styled.section`
  min-height: 300px;
  background-color: ${props => props.mode === true ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
  padding: 40px 60px 0px 60px;
  
  .form-elements {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 40px;
  }
`

const CountryInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-auto-rows: repeat(2, fit-content);
  grid-gap: 50px;

  @media (max-width: 689px) {
    justify-items: center;
  }
`

function MainComponent (props) {

  const [countryData, setCountryData] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const trackSearchQuery = function (event) {
    setSearchQuery(event.target.value.toLowerCase());
  } 

  const filteredCountries = countryData.filter((elem) => {
    return elem.name.toLowerCase().includes(searchQuery)
  })
  
  React.useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => 
      setCountryData(data)
    )
  }, [])


  const countryElements = filteredCountries.map((country) => {
    return <CountrySnapshot 
      key = {nanoid()}
      population = {country.population}
      image = {country.flags.png}
      name = {country.name}
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
        handleClick = {trackSearchQuery}
        />
        <DropDown mode = {props.mode}  />
      </div>

      <CountryInfo >
        {countryElements}
      </CountryInfo>
       
    </Section>
  )
}

export default MainComponent