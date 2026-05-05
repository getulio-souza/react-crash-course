import { useState } from 'react';
import './App.css'
import { UserForm } from './components/userCard/UserCard';
import { UserList } from './components/UserList/UserList';


function App() {
   const [users, setUsers] = useState<any[]>([]);


  return (
    <>
     <section>
      <UserForm setUsers={setUsers}/>
      <UserList users={users}/>
     </section>
    </>
  )
}

export default App
