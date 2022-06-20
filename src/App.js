import React from "react"
import Header from "./components/header.component"
import MainComponent from "./components/main.component"

const App = function () {

  const [isDarkMode, setIsDarkMode] = React.useState(true)

  function toggleMode () {
    setIsDarkMode(currMode => !currMode);
  }

  return (
    <main>
      <Header 
        mode = {isDarkMode}
        handleClick = {toggleMode}      
      />
      <MainComponent mode = {isDarkMode} />
    </main>
  )
}

export default App 
