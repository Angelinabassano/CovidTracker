import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


// Componente CountryData
const CountryData = ({ country }) => {
  if (!country) return <div>Loading...</div>;

  return (
    <div className="country-data">
      <img src={country.countryInfo.flag} alt={`Flag of ${country.country}`} className="flag" />
      <div className="data">
        <h1 className="cases">{country.cases}</h1>
        <div className="stats">
          <div className="stat">
            <span className="stat-number">{country.deaths}</span>
          </div>
          <div className="stat">
            <span className="stat-number">{country.recovered}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente principal App (cambiarlo cuando se lleve a la carpeta del componente)
function App() {
  const [countries, setCountries] = useState([]);
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCountriesData();
        setCountries(result);
      } catch (error) {
        console.error('Error fetching countries data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCountryIndex((prevIndex) => (prevIndex + 1) % countries.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [countries]);

  const currentCountry = countries[currentCountryIndex];

  return (
    <div className="App">
      <CountryData country={currentCountry} />
    </div>
  );
}

export default App;
