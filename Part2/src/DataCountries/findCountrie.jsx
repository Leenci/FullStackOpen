const Filter = ({HanldeFilter}) =>{
return(
    <table>
        <tbody>
            <tr>
                <td>Filter countrie for name:</td>
                <td><input type="text" onChange={HanldeFilter}/></td>
            </tr>
        </tbody>
    </table>
)
}
export default Filter