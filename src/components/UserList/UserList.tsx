import './userList.css'

type Props = {
    users: any[];
}

export function UserList({users}: Props){
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
                {users.map((user, index)=> (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.occupation}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}