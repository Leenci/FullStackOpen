import personServices from "./personServices"

const PersonForm = ({newName, newNumber, setName, setNumber, setPerson, listPerson}) => {
    const addPerson = (event) => {
        event.preventDefault()
        if (newName === "" || newNumber === ""){
            alert("Fill in all fields")
        }
        else{
               if (listPerson.some(e => e.name === newName)){
                    if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                        listPerson.some(e => {
                            if(e.name === newName){
                                const id = e.id
                                const person = listPerson.find(n => n.id === id)
                                const changedPerson = { ...person, number: newNumber }
                                personServices
                                .update(id, changedPerson)
                                .then(response => {
                                    setPerson(listPerson.map(person => person.id !== id ? person : response))
                                    setName('')
                                    setNumber('')
                                })
                            }
                        })
                      }
                }else{
                    if(listPerson.some(e => e.number === newNumber)){
                        alert(`${newNumber} is already added to phonebook`)  
                    }
                    else {
                        const newID = listPerson.length + 1
                        const newId = newID.toString()
                        const personObject = {
                            "id": newId,
                            "name": newName,
                            "number": newNumber
                            
                        }
                        personServices
                        .create(personObject)
                        .then(response => {
                            setPerson(listPerson.concat(response))
                            setName('')
                            setNumber('')
                        })
                        
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
            <table>
                <thead>
                <tr><td><h2>Add a new:</h2></td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>Name:</p></td>  
                        <td><input value={newName} onChange={handleNameChange}/></td>
                    </tr> 
                    <tr>
                        <td>Number:</td>
                        <td><input value={newNumber} onChange={handleNumberChange}/></td>
                    </tr>
                    <tr>
                        <td><button type="submit" >add</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
    }
export default PersonForm