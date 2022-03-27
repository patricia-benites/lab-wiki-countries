import { Link } from 'react-router-dom';

export function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((ct) => (

            <Link key={ct.alpha3Code} className="list-group-item list-group-item-action text-center"  to={`/${ct.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${ct.alpha2Code.toLowerCase()}.png`} alt={`Flag of ${ct.name.common}`}/>
             <p>{ct.name.common}</p>
            </Link>
        ))}
      </div>
    </div>
  );
}
