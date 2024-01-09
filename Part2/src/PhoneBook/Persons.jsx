const Persons = ({listPerson}) => {
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
                    </tr>
                    ))}
                </tbody>
            </table>
    )
}
export default Persons