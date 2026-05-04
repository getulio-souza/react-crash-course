import './userList.css'

export function UserList(){
    return(
      <>
        <h2>lista de usuarios</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>age</th>
                <th>Ocupation</th>
                <th>Action</th>
            </tr>
            <tbody>
                <tr>
                    <td>getulio</td>
                    <td>34</td>
                    <td>developer</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}