import { useState } from "react"

const Filter = ({setContact, listContact}) =>{
    //If the user set a filter, returns the filtered array; otherwise the entire array
    const [filter, setFilter] = useState(false);

    const HanldeFilter = (event) => {
        const valueFilter = event.target.value
        setFilter(valueFilter)

        const contactFilters = filter
        ? listContact.filter( contact => contact.name.toLowerCase().includes(filter))
        : listContact
        setContact(contactFilters)
    }
    
return(
    <table>
        <tbody>
            <tr>
                <td>Filter contact for name:</td>
                <td><input type="text" onChange={HanldeFilter}/></td>
            </tr>
        </tbody>
    </table>
)
}
export default Filter