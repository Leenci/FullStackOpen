import ContactServices from "../Services/contactServices"

const ListContact = ({listContact, setContact}) => {

    const handleDelete = (id) =>{
        console.log(id)
        let name = ""
        listContact.filter(Contact => {
            if(Contact.id === id){name = Contact.name}
        })
        if (window.confirm(` delete ${name} ?`)) {
            ContactServices
            .deleteId(id)
            setContact(listContact.filter((Contact) => Contact.id !== id))
        }
    }

    return (
            <table>
                <thead>
                <tr><td><h2>Numbers:</h2></td></tr>
                </thead>
                <tbody>
                {listContact.map(Contact => (
                    <tr key={Contact.id}>
                        <td>{Contact.name}</td>
                        <td><p>{" <======> "}</p></td>
                        <td><strong>{Contact.number}</strong></td>
                        <td><button onClick={() => handleDelete(Contact.id)}>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
    )
}
export default ListContact