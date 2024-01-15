import React, { useEffect, useState } from 'react'

const Countrie = ({countrie}) => {
    
    return (
            <div key={countrie.ccn3}>
                <h1>{countrie.name.official}</h1>
                <p>Capital: <strong>{countrie.capital}</strong></p>
                <p>Popilation: <strong>{countrie.population}</strong></p>
                <h2>Spoken languages</h2>
                    {Object.keys(countrie.languages).map(key => (<li key={key}>{countrie.languages[key]}</li>))}
                <img src={countrie.flags.png} alt={countrie.flags.alt} />
            </div>
    )
}

const Countries = ({countries}) => {
const [infoCountrie, setCountrieInfo ] = useState([])
const [showInfo, setShowInfo] = useState(false)
   
const showCountrieInfo = (countrie) => {
    console.log(countrie)
    setCountrieInfo(countrie)
    setShowInfo(true)
}



return (
    <div>
        <table>
                <thead>
                <tr><td><h2>Countries:</h2></td></tr>
                </thead>
                <tbody>
                {countries.map(countrie => (
                    <tr key={countrie.name.official}>
                        <td><p>{countrie.name.official}</p></td>
                        <td><button onClick={() => {
                            showCountrieInfo(countrie)
                        }} >Show Info</button></td> 
                    </tr>
                    ))}
                </tbody>
        </table>
        {
            showInfo ? <Countrie countrie={infoCountrie}/>
                    : <p></p>
        }
    </div>
    
)
}
export default Countries
        