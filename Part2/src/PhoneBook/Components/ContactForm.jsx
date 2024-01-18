import { useState, useEffect } from "react"
import ContactServices from "../Services/contactServices"

const ContactForm = () => {
    const [ listContact, setContact ] = useState([]) 

    useEffect(()=>{
      ContactServices
      .getAll()
      .then(response =>{
        setContact(response)
      })  
    }, [])

    const [contactName, setContactName] = useState("")
    const [ContactPhone, setContactPhone] = useState("")

    const addContact = (event) => {
        event.preventDefault()
        if (contactName !== "" || ContactPhone !== ""){
            if (listContact.some(e => e.name === contactName)){
                if (window.confirm(`${contactName} is already added to phonebook, replace the old number with a new one?`)){
                    listContact.some(e => {
                        if(e.name === contactName){
                            const uId = e.id
                            const reemplaceContact = {
                                id: uId,
                                name: contactName,
                                number: ContactPhone
                            } 
                            console.log(reemplaceContact)
                            ContactServices
                                .update(uId, reemplaceContact)
                                .then(response => { setContact(listContact.map(Contact => Contact.id !== uId ? Contact : response))
                                    setContactName("")
                                    setContactPhone("")
                                })
                                
                        }
                    })
                }
            } else {
                if(listContact.some(e => e.number !== ContactPhone)){
                    alert(`${ContactPhone} is already added to phonebook`)
                }
                else{
                    const newId = (listContact.length + 1).toString()
                    const newContact = {
                        id: newId,
                        name: contactName,
                        number: ContactPhone
                    } 
                    console.log(newContact)
                    ContactServices
                        .create(newContact)
                        .then(response => {
                            setContact(listContact.concat(response))
                            setContactName("")
                            setContactPhone("")})   
                }
            }
        }
        else{
            alert("Fill in all fields")
        }
    }
    const handleNameChange   = (event) => { 
        const name = event.target.value
        setContactName(name)
        }
    const handleNumberChange = (event) => {
        const phone = event.target.value
        setContactPhone(phone)
    }

    return (
        <form onSubmit={addContact}>
            <table>
                <thead>
                <tr><td><h2>Add a new:</h2></td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>Name:</p></td>  
                        <td><input value={contactName} onChange={handleNameChange}/></td>
                    </tr> 
                    <tr>
                        <td><p>Number:</p></td>
                        <td><input value={ContactPhone} onChange={handleNumberChange}/></td>
                    </tr>
                    <tr className="add">
                        <td><button type="submit">add</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}
export default ContactForm