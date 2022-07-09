import React from "react"
import {Routes, Route} from "react-router-dom"
import CountryDetails from "./components/CountryDetails.component"
import Header from "./components/header.component"
import MainComponent from "./components/main.component"

const App = () => {
  const [countryData, setCountryData] = React.useState([]); 
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  function updateCountryData (newArray) {
    setCountryData(newArray);
  }
  
  function toggleMode () {
    setIsDarkMode(currentMode => !currentMode);
  }
  
  return (
    <div >
      <Routes>
        <Route path = "/" element = {<Header mode = {isDarkMode}  handleClick = {toggleMode}/>}>
          <Route index element = {<MainComponent mode = {isDarkMode} countryData = {countryData} handleClick = {updateCountryData}/>} />
          <Route path = ":name" element = {<CountryDetails mode = {isDarkMode} countryData = {countryData} />} />
        </Route>
      </Routes>
    </div>
  )
}



export default App 