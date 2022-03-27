import { useState, useEffect } from 'react';
import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { CountriesList } from './components/CountriesList/CountriesList';
import { Routes, Route } from 'react-router-dom';
import {CountryDetails} from './components/CountryDetails/CountryDetails'


function App() {
  const [countries, setCountries] = useState([])

  const fetchData = async() => {
    const response = await fetch('https://ih-countries-api.herokuapp.com/countries')
    const ctData = await response.json()
    setCountries(ctData)
  }
useEffect(() => {
  fetchData();
}, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
        <CountriesList countries={countries}/>
        <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={countries} />} />
          </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
