const Persons = ({listPerson}) => {

    return (
        <div>{listPerson.map(person => (
            <p key={person.id}>{person.name} <strong>{person.number}</strong></p>
          ))}</div>
    )
}
export default Persons