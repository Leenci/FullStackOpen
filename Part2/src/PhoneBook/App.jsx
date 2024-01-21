import React, { useEffect, useState } from 'react'

//import components
import ContactForm  from './Components/ContactForm'
import ListContact from  './Components/ListContact'
import Filter      from   './Components/filterContact'

//import services (backend)
import ContactServices from './Services/contactServices'
import Notification from './Components/Notification'

const App = () => {
    const [ listContact, setContact ] = useState([]) 
    const [contactName, setContactName] = useState("")
    const [ContactPhone, setContactPhone] = useState("")
    const [message, setMessage] = useState({})


    useEffect(()=>{
      ContactServices
      .getAll()
      .then(response =>{
        setContact(response)
      })  
    }, [])

    const addContact = (event) => {
        event.preventDefault()
        if (contactName !== "" || ContactPhone !== ""){
            if(listContact.some(e => e.number === ContactPhone)){
                alert(`${ContactPhone} is already added to phonebook`)
            }
            else{
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
                        ContactServices
                        .update(uId, reemplaceContact)
                        .then(response => { setContact(listContact.map(Contact => Contact.id !== uId ? Contact : response))
                            setContactName("")
                            setContactPhone("")
                        })
                        .catch(error =>{
                            setMessage({
                                status: "error",
                                content:`the contact '${reemplaceContact.name}' was already deleted from server`
                            })
                            setTimeout(()=>{
                                setMessage(null)
                            }, 5000)
                            setContact(listContact.filter(n => n.id !== reemplaceContact.id))
                        })
                    } })}
                } else {
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
                            setMessage({
                                status: "success",
                                content:`added '${newContact.name}'`
                                
                            })
                            setContact(listContact.concat(response))
                            setContactName("")
                            setContactPhone("")
                            setTimeout(()=>{
                                setMessage(null)
                            }, 5000)}
                            )   
                }
            }
        }
        else{
            alert("Fill in all fields")
        }
    }
   
    return(
    <div>
      <h1>Phonebook</h1>
        <Filter       setContact={setContact}  listContact={listContact}/>
        <ContactForm  setContactName={setContactName} setContactPhone={setContactPhone} contactName={contactName} ContactPhone={ContactPhone} addContact={addContact} />
        <Notification message={message}/>
        <ListContact  setContact={setContact}  listContact={listContact}/>
        
    </div>
    )
}
export default App