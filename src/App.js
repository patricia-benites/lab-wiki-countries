import { useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { CountriesList } from './components/CountriesList/CountriesList';
import jsonCountries from './countries.json'
import { Routes, Route } from 'react-router-dom';
import {CountryDetails} from './components/CountryDetails/CountryDetails'


function App() {
  const [countries, setCountries] = useState([...jsonCountries])
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
