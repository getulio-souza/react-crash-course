import { useEffect, useState } from "react";
import "./App.css";
import { UserForm } from "./components/userForm/UserForm";
import { UserList } from "./components/UserList/UserList";
import type { User } from "./types/User";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [removeUser, setRemoveUser] = useState<User | null>(null);

  //carregando os dados do localStorage na lista de usuarios
  useEffect(() => {
    const parsedUsers = JSON.parse(localStorage.getItem("newUser") || "[]");
    setUsers(parsedUsers);
  }, []);

  //logica para remover um usuario selecionado
  function removeSelectedUser(user: User) {
    //original list
    console.log("lista de usuarios:", users);

    //usuario selecionado para remover
    console.log("usuario para remover:", user);
    const selectedUserToRemove = user;

    //criar uma nova lista sem o usuario selecionado para remover (nao pode alterar a lista original)
    const updatedList: User[] = users.filter(
      (item) => item.id !== selectedUserToRemove?.id,
    );
    console.log("lista atualizada apos remoção:", updatedList);

    //atualizando a lista com o usuario removido
    setUsers(updatedList);

    //percorrendo o localStorage
    const usersFromLocal = JSON.parse(localStorage.getItem("newUser") || "[]");
    console.log(usersFromLocal)

    for(let i = 0; i < usersFromLocal.length; i++){
      console.log(usersFromLocal[i])

      const userIndex = usersFromLocal[i];

      if(userIndex.id === selectedUserToRemove.id){
        console.log('usuarios batem!')

        //removendo o usuario da lista do localStorage
        


        break
      } 
    }
  }

  return (
    <>
      <section>
        <UserForm setUsers={setUsers} editUser={editUser} />
        <UserList
          users={users}
          setEditUser={setEditUser}
          setRemoveUser={removeSelectedUser}
        />
      </section>
    </>
  );
}

export default App;
