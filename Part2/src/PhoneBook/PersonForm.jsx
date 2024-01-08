const PersonForm = ({newName, newNumber, setName, setNumber, setPerson, listPerson}) => {
    const addPerson = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const personObject = {
            name: newName,
            number: newNumber,
            id: listPerson.length + 1
        }
        console.log(personObject)
        setPerson(listPerson.concat(personObject))
        setName('')
        setNumber('')
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNumber(event.target.value)
    }
    return (
                <form onSubmit={addPerson}>
                    <div>Name:  <input value={newName} onChange={handleNameChange}/></div> 
                    <div>Number:<input value={newNumber} onChange={handleNumberChange}/></div>
                    <div><button type="submit" >add</button></div>
                </form>
    )
}

export default PersonForm