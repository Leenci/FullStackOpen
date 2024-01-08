import React, { useState } from 'react'
import PersonForm from './PersonForm'
import Persons from './Persons'
import {listPerson} from './ListPersons'
const App = () => {
      
    const [ persons, setPerson ] = useState(listPerson) 
    const [ newName, setName ] = useState('')
    const [ newNumber, setNumber ] = useState('')

    return(
    <div>
      <h2>Phonebook</h2>
        <PersonForm newName={newName} setName={setName} newNumber={newNumber} setNumber={setNumber} setPerson={setPerson} listPerson={persons} />
      <h2>Numbers</h2>
        <Persons listPerson={persons}/>
    </div>
    )
}
export default App