import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
  color: white;
  width: 200px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${props => props.mode === true? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  border-radius: 10px;
  cursor: pointer;

  h5 {
    font-weight: 300;
    color: ${props => props.mode === true? "white": "hsl(207, 26%, 17%)"};
    padding: 0px 20px;
    cursor: pointer;
    width: 100%;

    @media (max-width: 729px) {
       padding: 10px 20px; 
    }
  }
`

const OptionsContainer = styled.div `
  position: absolute;
  top: 40px;
  width: 100%;
  padding: 10px 0px;
  background-color: ${props => props.mode === true? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  border-radius: 10px;
  transform-origin: top;
  transition: all 0.3s linear;
`

const Options = styled.div`
   width: 100%;
   padding: 5px 20px;
   cursor: pointer;

  .radio {
    display: none;
  }
`

const Label = styled.label`
    font-weight: 300;
    cursor: pointer;
    color: ${props => props.mode === true? "white": "hsl(207, 26%, 17%)"};
`

export default function DropDown (props) {
    
    const [dislayDropDown, setDisplayDropDown] = React.useState(false);

    const toggleDropDown = function () {
        setDisplayDropDown(currentValue => !currentValue)
    }

    return (
        <Container mode = {props.mode}>
           <h5 onClick = {toggleDropDown} >Filter by Region</h5>
           <OptionsContainer 
              mode = {props.mode} 
              style = {{
                transform: !dislayDropDown? "scale(0)": "scale(1)"
              }}
            >

              <Options mode = {props.mode} >
                <input type = "radio" name= "filter-query" id = "africa" className = 'radio'/>
                <Label htmlfor= "africa" mode = {props.mode} onClick = {toggleDropDown} >Africa</Label>
              </Options>

              <Options mode = {props.mode} >
                <input type = "radio" name= "filter-query" id = "america" className = 'radio' />
                <Label htmlfor= "america" mode = {props.mode} onClick = {toggleDropDown} >America</Label>
              </Options>

              <Options mode = {props.mode} >
                <input type = "radio" name= "filter-query" id = "asia" className = 'radio' />
                <Label htmlfor= "asia" mode = {props.mode} onClick = {toggleDropDown} >Asia</Label>
              </Options>

              <Options mode = {props.mode} >
                <input type = "radio" name= "filter-query" id = "europe" className = 'radio' />
                <Label htmlfor= "europe" mode = {props.mode} onClick = {toggleDropDown} >Europe</Label>
              </Options>

              <Options mode = {props.mode} >
                <input type = "radio" name= "filter-query" id = "oceania" className = 'radio' />
                <Label htmlfor= "oceania" mode = {props.mode} onClick = {toggleDropDown} >Oceania</Label>
              </Options>

            </OptionsContainer>
        </Container>
    )
}