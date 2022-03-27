import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function CountryDetails({countries}) {
    const {alpha3Code} = useParams()
    const country = countries.find((element) => {
        return element.alpha3Code === alpha3Code;
    })
    function getBorderName(code) {
        const country = countries.find(
          (currentCountry) => currentCountry.alpha3Code === code
        );
    
        if (country) {
          return country.name.common;
        }
      }

    return (
        <div className="col-7">
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country flag" style={{width:"300px"}}/>
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
              <ul>
                {country.borders.map((borderCode) => (
                  <li>
                    <Link to={`/${borderCode}`}>
                      {getBorderName(borderCode)}
                    </Link>
                  </li>
                ))}
              </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )

}