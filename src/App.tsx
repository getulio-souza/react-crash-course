import './App.css'
import { UserCard } from "./components/userCard/userCard";
import { UserList } from "./components/UserList/userList";

function App() {
  return (
    <>
     <section>
      <UserList/>
      <UserCard/>
     </section>
    </>
  )
}

export default App
