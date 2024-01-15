import React, { useEffect, useState } from 'react'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Filter from './filterPerson'
// import {listPerson} from './ListPersons'
import personServices from './personServices'
const App = () => {
    
    const [ persons, setPerson ] = useState([]) 
    const [ newName, setName ] = useState('')
    const [ newNumber, setNumber ] = useState('')
    const [ showAll, setShow ] = useState(false)

    useEffect(()=>{
      personServices
      .getAll()
      .then(response =>{
        setPerson(response)
      })  
    }, [])

    

    const personsShows = showAll
    ? persons.filter( person => person.name.toLowerCase().includes(showAll))
    : persons


    return(
    <div>
      <h1>Phonebook</h1>
        <Filter setShow={setShow}/>
        <PersonForm newName={newName} setName={setName} newNumber={newNumber} setNumber={setNumber} setPerson={setPerson} listPerson={persons} />
        <Persons listPerson={personsShows} setPerson={setPerson}/>
    </div>
    )
}
export default App