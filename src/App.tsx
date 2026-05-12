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
    const updatedList: User[] = users.filter((item) => item.id !== selectedUserToRemove?.id);
    console.log("lista atualizada apos remoção:", updatedList);

    //atualizando a lista com o usuario removido
    setUsers(updatedList);

    //percorrendo o localStorage
    const usersFromLocal = JSON.parse(localStorage.getItem("newUser") || "[]");
    console.log('usurios do localStorage:',usersFromLocal)

    const updatedListOnLocalStorage = usersFromLocal.filter((user: User)=> user.id !== selectedUserToRemove.id)
    console.log('updatedListOnLocalStorage:', updatedListOnLocalStorage)

    localStorage.setItem('newUser', JSON.stringify(updatedListOnLocalStorage))
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
