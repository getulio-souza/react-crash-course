import { useEffect } from 'react';
import './userList.css'

type Props = {
    users: any[];
    setEditUser: React.Dispatch<React.SetStateAction<any>>;
}


export function UserList({users, setEditUser}: Props){    
    const usersFromLocal: any = localStorage.getItem('newUser')

    const usersParsed = JSON.parse(usersFromLocal)
    console.log(usersParsed)

    const updatedUsers = [];

    updatedUsers.push(usersParsed)

    function onDeleteUser(){
        console.log('usuario deletado!')
    }

    function onEditUser(selectedUser: any){
        ///quando eu clicar em editar, eu preciso enviar os dados do usuario selecionado para o formulario
        console.log('usuario selecionado:',selectedUser)

        setEditUser(selectedUser)
    }

    useEffect(()=> {
       console.log('chamou o useEffect!')
    }, [])

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
                {updatedUsers.length === 0 && (<div style={{color: 'red', fontWeight: 'bold', padding: '10px'}}>sem usuarios para exibir</div>)}
                {updatedUsers.map((user: any, index: any)=> (
                    <tr key={index}>
                        <td>{user?.id}</td>
                        <td>{user?.name}</td>
                        <td>{user?.age}</td>
                        <td>{user?.occupation}</td>
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