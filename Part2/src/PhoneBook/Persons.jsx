import personServices from "./personServices"

const Persons = ({listPerson, setPerson}) => {
    const handleDelete = (id) =>{
        console.log(id)
        let name = ""
        listPerson.filter(person => {
            if(person.id === id){
                name = person.name
            }
        })
        
        if (window.confirm(` delete ${name} ?`)) {
            personServices
            .deleteId(id)
            const newPersons = listPerson.filter((person) => person.id != id)
            setPerson(newPersons)
    }}
    return (
            <table>
                <thead>
                <tr><td><h2>Numbers:</h2></td></tr>
                </thead>
                <tbody>
                {listPerson.map(person => (
                    <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{">>>>>"}</td>
                        <td><strong>{person.number}</strong></td>
                        <td><button onClick={() => handleDelete(person.id)}>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
    )
}
export default Persons