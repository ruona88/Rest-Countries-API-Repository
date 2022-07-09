import React from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons"
import {useParams, useNavigate} from "react-router-dom"

export default function CountryDetails (props) {
 
  const history = useNavigate();

  const countryName = useParams();
  
  const clickedCountry = props.countryData.find((country) => country.name.common.split(" ").join("").toLowerCase() === countryName.name.split(" ").join("").toLowerCase());

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
            <h1 mode = {props.mode} >{props.name}</h1>
            <OrderedListContainer mode = {props.mode} >
              <ol>
                <ListItem mode = {props.mode} >Native Name: <span></span></ListItem>
                <ListItem mode = {props.mode} >Population: <span>{clickedCountry.population.toLocaleString()}</span></ListItem>
                <ListItem mode = {props.mode} >Region: <span>{clickedCountry.region}</span></ListItem>
                <ListItem mode = {props.mode} >Sub-Region: <span>{clickedCountry.subregion}</span></ListItem>
                <ListItem mode = {props.mode} >Capital: <span>{clickedCountry.capital[0]}</span></ListItem>
              </ol>

              <ol>
                <ListItem mode = {props.mode} >Top Level Domain: <span>{clickedCountry.tld}</span></ListItem>
                <ListItem mode = {props.mode} >Currencies: <span></span></ListItem>
                <ListItem mode = {props.mode} >Languages: <span>{Object.values(clickedCountry.languages).join(", ")}</span></ListItem>
              </ol>
            </OrderedListContainer>
            <BorderCountries mode = {props.mode} >
              <p>Border Countries</p>
              <div className = "list-border-countries"></div>
            </BorderCountries>
          </div>
        </CountryInfo>
      </Section>
  )
}


const Section = styled.section`
   padding: 60px 60px 0px 60px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   color: ${props => props.mode === true? "hsl(0, 0%, 98%)": "hsl(209, 23%, 22%)"};
   background-color: ${props => props.mode === true? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
   min-height: 89vh;
    

   .btn-back {
      margin-bottom: 60px;
      padding: 10px 25px;
      border: thin solid black;
      border-radius: 5px;
      cursor: pointer;

      span {
        margin-left: 10px;
      }
   }
`

const CountryInfo = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  

  h1 {
    font-weight: 800;
    font-size: 2em;
  }
  

  .country-flag {
    width: 350px;
    height: 300px;
    border: thin solid blue;
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
  display: flex;
  margin: 30px 0px 60px 0px;
  gap: 25vw;
`

const BorderCountries = styled.div`
  font-weight: 800;
`