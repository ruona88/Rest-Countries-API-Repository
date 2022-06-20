import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons"

const Section = styled.section`
    background-color: ${props => props.mode === true? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    padding: 20px 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;

    @media (max-width: 560px) {
        font-size: 15px;
    }

    @media (max-width: 440px) {
        font-size: 13px;
    }

    @media (max-width: 400px) {
        font-size: 11px;
    }

    .logo {
        font-size: 1.3em;
        font-weight: 800;
        color: ${props => props.mode === true? "hsl(0, 0%, 98%)": "hsl(209, 23%, 22%)"}
    }

    .icon {
        margin-left: auto;
        margin-right: 10px;
        color: ${props => props.mode === true? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)"};
        cursor: pointer;
    }

    .mode {
        color: ${props => props.mode === true? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)"};
        font-weight: 800;
        font-size: 1em;
    }
`

export default function Header (props) {
    
    return (
        <Section mode = {props.mode}>
            <span className = "logo">Where in the world?</span>
            <FontAwesomeIcon 
              icon= {props.mode? faMoon: faLightbulb} 
              className = "icon"
              onClick = {props.handleClick}
            />
            <span className = "mode"  >{props.mode? "Light Mode": "Dark Mode"}</span>
        </Section>
    )
}