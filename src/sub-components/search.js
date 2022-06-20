import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"



const Input = styled.input`
  width: 400px;
  padding: 10px 10px 10px 50px;
  border: none;
  background-color: ${props => props.mode === true? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  color: ${props => props.mode === true? "white": "hsl(207, 26%, 17%)"};

  @media (max-width: 729px) {
    width: 100vw;
  }
  

  &:focus {
    outline: none;
  }
`

export default function SearchBar (props) {

    return (
        <Input
          mode = {props.mode}
          type = "text"
          placeholder = "Search for a Country"
          name = "search-query"
          onChange = {props.handleClick}
        >
        </Input>
    )
}