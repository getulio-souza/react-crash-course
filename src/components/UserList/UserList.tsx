import './userList.css'

type Props = {
    users: any[];
    setEditUser: React.Dispatch<React.SetStateAction<any>>;
}


export function UserList({users, setEditUser}: Props){    
    // console.log('users no user list:', users)

    function onDeleteUser(){
        console.log('usuario deletado!')
    }

    function onEditUser(selectedUser: any){
        ///quando eu clicar em editar, eu preciso enviar os dados do usuario selecionado para o formulario
        console.log('usuario selecionado:',selectedUser)
        console.log('tipo do usuario selecionado:', typeof selectedUser)

        setEditUser(selectedUser)
    }

    return (
      <>
        <h2>lista de usuarios</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>age</th>
              <th>Ocupation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr style={{ color: "red", fontWeight: "bold", padding: "10px" }}>
                <td>sem usuarios para exibir</td>
              </tr>
            )}
            {users.map((user: any, index: any) => (
              <tr key={index}>
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>{user?.age}</td>
                <td>{user?.occupation}</td>
                <td>
                  <button
                    style={{ marginBottom: "10px" }}
                    onClick={() => onEditUser(user)}
                  >
                    Editar
                  </button>
                  <button onClick={onDeleteUser}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}