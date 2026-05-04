import './userList.css'

export function UserList(){
    return(
      <>
        <h2>lista de usuarios</h2>
        <table>
          <thead>
            <tr>
                <th>Name</th>
                <th>age</th>
                <th>Ocupation</th>
                <th>Action</th>
            </tr>
          </thead>
            <tbody>
                <tr>
                    <td>getulio</td>
                    <td>34</td>
                    <td>developer</td>
                    <td><button>deletar</button></td>
                </tr>
            </tbody>
        </table>
        </>
    )
}