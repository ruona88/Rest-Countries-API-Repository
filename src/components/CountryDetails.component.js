import React, {useContext} from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons"
import {useParams, useNavigate} from "react-router-dom"
import {CountryData} from "../Context/CountryDataContext"

export default function CountryDetails (props) {
 
  const history = useNavigate();

  const countryName = useParams();

  const contextObject = useContext(CountryData);
  
  const clickedCountry = 
    contextObject.countryData.find((country) => 
    country.name.common.split(" ").join("").toLowerCase() 
    === countryName.name.split(" ").join("").toLowerCase()); 


    console.log(clickedCountry.borders )
  let currency = []; //Array to hold the list of currency used by a country

  for(let i = 0; i < Object.values(clickedCountry.currencies).length; i++) {//Alogrithm to loop through currencies and push to currency arr
    let value = Object.values(clickedCountry.currencies);
    currency.push(value[i].name);
  }

  return (
      <Section mode = {props.mode}>
        <p className = "btn-back" role = "button" onClick = {() => history(-1)} >
          <FontAwesomeIcon icon = {faArrowLeftLong} /><span>Back</span>
        </p>
        <CountryInfo mode = {props.mode} >
          <div className = "country-flag" >
            <img src = {clickedCountry.flags.png} style = {{width: "100%", height: "100%"}} />
          </div>

          <div className = "country-info">
            <h1 mode = {props.mode} >{clickedCountry.name.common}</h1>
            <OrderedListContainer mode = {props.mode} >
              <ol>
                <ListItem mode = {props.mode} >Native Name: <span>{Object.values(clickedCountry.name.nativeName)[0].official}</span></ListItem>
                <ListItem mode = {props.mode} >Population: <span>{clickedCountry.population.toLocaleString()}</span></ListItem>
                <ListItem mode = {props.mode} >Region: <span>{clickedCountry.region}</span></ListItem>
                <ListItem mode = {props.mode} >Sub-Region: <span>{clickedCountry.subregion}</span></ListItem>
                <ListItem mode = {props.mode} >Capital: <span>{clickedCountry.capital}</span></ListItem>
              </ol>

              <ol>
                <ListItem mode = {props.mode} >Top Level Domain: <span>{clickedCountry.tld}</span></ListItem>
                <ListItem mode = {props.mode} >Currencies: <span>{currency.join(", ")}</span></ListItem>
                <ListItem mode = {props.mode} >Languages: <span>{Object.values(clickedCountry.languages).join(", ")}</span></ListItem>
              </ol>
            </OrderedListContainer>
            <BorderCountries mode = {props.mode} >
              <p>Border Countries:</p>
              <div className = "list-border-countries">{}</div>
            </BorderCountries>
          </div>
        </CountryInfo>
      </Section>
  )
}


const Section = styled.section`
  padding: 0px 60px 60px 60px;
  color: ${props => props.mode === true? "hsl(0, 0%, 98%)": "hsl(209, 23%, 22%)"};
  background-color: ${props => props.mode === true ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};   

  .btn-back {
    display: inline-block;
    margin: 60px 0px;
    background-color: ${props => props.mode === true? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    padding: 10px 25px;
    border-radius: 5px;
    cursor: pointer;
    border: ${props => props.mode === true ? "none": "thin solid hsl(209, 23%, 22%)" };

    span {
      margin-left: 10px;
    }
  }
`

const CountryInfo = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  gap: 10vw;

  @media (max-width: 785px) {
    flex-direction: column;
  }
  
  .country-flag {
    width: 60vw;
    min-width: 200px;
    height: 300px;
  }

  .country-info {
    width: 100%;
  }

  h1 {
    font-weight: 800;
    font-size: 2em;
  }
`

const ListItem = styled.li`
  list-style-type: none;
  font-weight: 800;
  font-size: 1em;

  span {
    font-weight: 300;
  }
`

const OrderedListContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;

  ol {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
`

const BorderCountries = styled.div`
  font-weight: 800;
`