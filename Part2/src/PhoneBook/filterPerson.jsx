const Filter = ({filter, setShow}) =>{
    const HanldeFilter = (event) => {
        setShow(event.target.value)
    }
return(
    <table>
        <tbody>
            <tr>
                <td>Filter person for name:</td>
                <td><input type="text" onChange={HanldeFilter}/></td>
            </tr>
        </tbody>
    </table>
)
}
export default Filter