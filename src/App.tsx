import './App.css'
import {UserForm } from "./components/userCard/userCard";
import { UserList } from "./components/UserList/userList";

function App() {
  return (
    <>
     <section>
      <UserList/>
      <UserForm/>
     </section>
    </>
  )
}

export default App
