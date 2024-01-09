const PersonForm = ({newName, newNumber, setName, setNumber, setPerson, listPerson}) => {
    const addPerson = (event) => {
        event.preventDefault()
        if (newNumber === "" || newNumber === ""){
            alert("Fill in all fields")
        }
        else{
            for (const person of listPerson){
                if (person.name != newName){
                    if(person.number != newNumber){
                        const personObject = {
                            name: newName,
                            number: newNumber,
                            id: listPerson.length + 1
                        }
                    setPerson(listPerson.concat(personObject))
                    setName('')
                    setNumber('')
                    console.log("ok")
                    break }
                    else {
                        alert(`${newNumber} is already added to phonebook`)
                        break
                    }
                }else{
                    alert(`${newName} is already added to phonebook`)
                    break
                }
        }
    }
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