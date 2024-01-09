import React, { useState } from 'react'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Filter from './filterPerson'
import {listPerson} from './ListPersons'
const App = () => {
      
    const [ persons, setPerson ] = useState(listPerson) 
    const [ newName, setName ] = useState('')
    const [ newNumber, setNumber ] = useState('')
    const [ showAll, setShow ] = useState(false)

    const personsShows = showAll
    ? persons.filter( person => person.name === showAll)
    : persons


    return(
    <div>
      <h1>Phonebook</h1>
        <Filter setShow={setShow}/>
        <PersonForm newName={newName} setName={setName} newNumber={newNumber} setNumber={setNumber} setPerson={setPerson} listPerson={persons} />
        <Persons listPerson={personsShows}/>
    </div>
    )
}
export default App