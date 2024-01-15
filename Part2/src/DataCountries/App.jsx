import React, { useEffect, useState } from 'react'

import { getAllCountries } from './countries'
import Countries from './listCountries'
import Filter from './findCountrie'
import InfoCountrie from './countrieInfo'
const App = () => {
    const [countries, setCountries] = useState([])
    const [countriesShow, setCountriesToShow] = useState(countries)
    const [showAll, setShow] = useState(false)


    useEffect(
        () => {
            getAllCountries()
            .then(countries => {
                setCountries(countries)
            })
        }, []
    )
    const HanldeFilter = (event) => {
        const valueFilter = event.target.value
        const countriesFilters = countries.filter( countrie => countrie.name.official.toLowerCase().includes(valueFilter))
        if(countriesFilters.length > 10){
            setShow(false)
            console.log(countriesFilters.length)
            
        }else if (countriesFilters.length === 0){
            setShow(false)
            console.log(countriesFilters.length)
        }else {
            setShow(true)
            setCountriesToShow(countriesFilters)
            console.log(countriesFilters.length)
        }
    }

    const countriesShows = 
    showAll
    ? countriesShow
    : (<h3>Too many matches, specify another filter</h3>)
    
    return (
        <div>
        <h1>Data of Countries</h1>
        <Filter HanldeFilter={HanldeFilter}/>
        {
            showAll ? ( countriesShows.length === 1 ? (<InfoCountrie countries={countriesShows}/>)
                                                : (<Countries countries={countriesShows} />))
            : countriesShows
        }
        
        </div>
    )
}
export default App