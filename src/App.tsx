import { useEffect, useState } from 'react';
import './App.css'
import { UserForm } from './components/userForm/UserForm';
import { UserList } from './components/UserList/UserList';
import type {User} from './types/User'

function App() {
   const [users, setUsers] = useState<User[]>([]);
    const [editUser, setEditUser] = useState<User | null>(null)
    
    //carregando os dados do localStorage na lista de usuarios
    useEffect(()=> {
      const parsedUsers = JSON.parse(localStorage.getItem('newUser') || '[]')
      setUsers(parsedUsers)
    }, [])

  return (
    <>

     <section>
      <UserForm setUsers={setUsers} editUser={editUser}/>
      <UserList users={users} setEditUser={setEditUser}/>
     </section>

    </>
  )
}

export default App
