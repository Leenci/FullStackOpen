import React, { useEffect, useState } from 'react'

//import components
import ContactForm  from './Components/ContactForm'
import ListContact from  './Components/ListContact'
import Filter      from   './Components/filterContact'

//import services (backend)
import ContactServices from './Services/contactServices'

const App = () => {
    const [ listContact, setContact ] = useState([]) 
    useEffect(()=>{
      ContactServices
      .getAll()
      .then(response =>{
        setContact(response)
      })  
    }, [])

    return(
    <div>
      <h1>Phonebook</h1>
        <Filter       setContact={setContact}  listContact={listContact}/>
        <ContactForm  />
        <ListContact  setContact={setContact}  listContact={listContact}/>
        
    </div>
    )
}
export default App