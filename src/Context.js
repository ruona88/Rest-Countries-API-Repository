import React from "react"

// const allCountryContext = React.createContext();

// const AllCountriesDataProvider = function (props) {

//     const [countryData, setCountryData] = React.useState([]);
//     const [isLoading, setISLoading] = React.useState(true);

//     const getDataAllCountries = async() => { 
//         let response = await fetch("https://restcountries.com/v3.1/all");
//         let result = await response.json();
//         setCountryData(result); 
//         setISLoading(false); 
//       }
    
//       React.useEffect(() => { 
//         getDataAllCountries();
//       }, [])

//     function changeCountryData (newData) {
//         setCountryData(newData)
//     }

//     return (
//         <Provider value = {{
//             countryData : countryData,
//             isLoading: isLoading
//         }}>
//           {props.children}
//         </Provider>
//     )
// }

// export {AllCountriesDataProvider, Consumer as AllCountriesDataConsumer}