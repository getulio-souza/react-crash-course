import { useEffect, useState } from 'react';
import type { User } from '../../types/User';
import UserFilter from '../usersFilter/UserFilter';
import './userList.css'

type Props = {
    users: User[];
    setEditUser: React.Dispatch<React.SetStateAction<User>>;
    setRemoveUser: React.Dispatch<React.SetStateAction<User>>;
}

export function UserList({users, setEditUser, setRemoveUser}: Props){    

    const [filterList, setfilterList] = useState<User[]>(users);

    function onDeleteUser(selectedUser: User){
        console.log('usuario selecionado para deletar:', selectedUser)
        setRemoveUser(selectedUser)
    }

    function onEditUser(selectedUser: User){
        ///quando eu clicar em editar, eu preciso enviar os dados do usuario selecionado para o formulario
        console.log('usuario selecionado:',selectedUser);
        console.log('tipo do usuario selecionado:', typeof selectedUser);

        setEditUser(selectedUser);
    }

    function onFilterUsers(userInput: string){
      console.log('filtrando usuarios no componente de tabela:', userInput)
      console.log('array de users:', users)
      
      //logica para mostrar os items filtrados na tabela
      const newUserList = users.filter((user)=> user.name.startsWith(userInput))
      console.log('novo usuario filtrado:', newUserList)

      //com o usuario filtrado retornado, atualizar a tabela 
      setfilterList(newUserList)
    }

    useEffect(()=> {
      setfilterList(users)
    }, [users])

    return (
      <>
        <h2>lista de usuarios</h2>

        <UserFilter setFilterUsers={onFilterUsers}/>

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
            {users?.length === 0 && (
              <tr style={{ color: "red", fontWeight: "bold", padding: "10px" }}>
                <td>sem usuarios para exibir</td>
              </tr>
            )}
            {filterList.map((user: User, index: any) => (
              <tr key={index}>
                <td data-label="id: ">{user?.id}</td>
                <td data-label="nome: ">{user?.name}</td>
                <td data-label="idade: ">{user?.age}</td>
                <td data-label="ocupação: ">{user?.occupation}</td>
                <td>
                  <button
                    style={{ marginBottom: "10px" }}
                    onClick={() => onEditUser(user)}
                  >
                    Editar
                  </button>
                  <button onClick={()=> onDeleteUser(user)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}