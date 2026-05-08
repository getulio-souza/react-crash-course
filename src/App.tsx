import { useEffect, useState } from 'react';
import './App.css'
import { UserForm } from './components/userForm/UserForm';
import { UserList } from './components/UserList/UserList';
import type {User} from './types/User'

function App() {
   const [users, setUsers] = useState<User[]>([]);
    const [editUser, setEditUser] = useState<User | null>(null)
    const [removeUser, setRemoveUser] = useState<User | null>(null)
    
    //carregando os dados do localStorage na lista de usuarios
    useEffect(()=> {
      const parsedUsers = JSON.parse(localStorage.getItem('newUser') || '[]')
      setUsers(parsedUsers)
    }, [])

    //logica para remover um usuario selecionado
    function removeSelectedUser(){
      //original list
      console.log(users)
  
      //usuario selecionado para remover
      console.log(removeUser)
      const selectedUserToRemove = removeUser;
  
      //criar uma nova lista sem o usuario selecionado para remover (nao pode alterar a lista original)
      const updatedList: any[] = users.filter((item) => item.id !== selectedUserToRemove?.id);
      console.log(updatedList);
  
      //atualizando a lista com o usuario removido
      setUsers(updatedList)
  
      //atualizando o localStorage
      localStorage.removeItem('selectedUserToRemove')
    }

  return (
    <>

     <section>
      <UserForm setUsers={setUsers} editUser={editUser}/>
      <UserList users={users} setEditUser={setEditUser} setRemoveUser={removeSelectedUser}/>
     </section>

    </>
  )
}

export default App
