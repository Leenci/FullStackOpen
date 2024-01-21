
const ContactForm = ({addContact, contactName, ContactPhone, setContactName, setContactPhone}) => {
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