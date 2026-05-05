import './userList.css'

type Props = {
    users: any[];
    setEditUser: React.Dispatch<React.SetStateAction<any>>;
}


export function UserList({users, setEditUser}: Props){

    function onDeleteUser(){
        console.log('usuario deletado!')
    }

    function onEditUser(selectedUser: any){
        ///quando eu clicar em editar, eu preciso enviar os dados do usuario selecionado para o formulario
        console.log('usuario selecionado:',selectedUser)

        setEditUser(selectedUser)
    }

    return(
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
                {users.length === 0 && (<div style={{color: 'red', fontWeight: 'bold', padding: '10px'}}>sem usuarios para exibir</div>)}
                {users.map((user, index)=> (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.occupation}</td>
                        <td>
                            <button style={{marginBottom: '10px'}} onClick={()=> onEditUser(user)}>Editar</button>
                            <button onClick={onDeleteUser}>Deletar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}