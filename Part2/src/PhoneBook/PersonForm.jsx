const PersonForm = ({newName, newNumber, setName, setNumber, setPerson, listPerson}) => {
    const addPerson = (event) => {
        event.preventDefault()
        if (newName === "" || newNumber === ""){
            alert("Fill in all fields")
        }
        else{
               if (listPerson.some(e => e.name === newName)){
                    alert(`${newName} is already added to phonebook`)
                    
                }else{
                    if(listPerson.some(e => e.number === newNumber)){
                        alert(`${newNumber} is already added to phonebook`)
                        
                    }
                    else {
                        const personObject = {
                            name: newName,
                            number: newNumber,
                            id: listPerson.length + 1
                        }
                        setPerson(listPerson.concat(personObject))
                        setName('')
                        setNumber('')
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