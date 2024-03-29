import Weather from './Weather'
const InfoCountrie = ({countries}) => {

    return (
        <div>  
            {countries.map(countrie => (
            <div key={countrie.ccn3}>
                <h1>{countrie.name.official}</h1>
                <p>Capital: <strong>{countrie.capital}</strong></p>
                <p>Popilation: <strong>{countrie.population}</strong></p>
                <h2>Spoken languages</h2>
                    {Object.keys(countrie.languages).map(key => (<li key={key}>{countrie.languages[key]}</li>))}
                <img src={countrie.flags.png} alt={countrie.flags.alt} />
                <Weather capital={countrie.capital} lat={countrie.capitalInfo.latlng[0]} long={countrie.capitalInfo.latlng[1]}/>
            </div>
            )
        )
    }
        </div>         
    )
}
export default InfoCountrie