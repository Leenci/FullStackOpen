import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getAllCountries } from './countries'
const App = () => {
    const [countries, setCountries] = useState([])
    useEffect(
        () => {
            getAllCountries()
            .then(countries => {
                setCountries(countries)
            })
        }, []
    )
    return (
        <table>
                <thead>
                <tr><td><h2>Countries:</h2></td></tr>
                </thead>
                <tbody>
                {countries.map(countrie => (
                    <tr key={countrie.ccn3}>
                        <td>{countrie.translations.spa.official}</td>
                        <td>{">>>>>"}</td>
                        <td><strong>{countrie.capital}</strong></td>
                    </tr>
                    ))}
                </tbody>
            </table>
    )
}
export default App