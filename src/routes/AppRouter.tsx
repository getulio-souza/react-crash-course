import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserList } from "../pages/UserList/UserList";
import { UserForm } from "../pages/userForm/UserForm";
import { useState } from "react";
import type { User } from "../types/User";
import { removeSelectedUser } from "../services/CrudUsers";
import Header from "../components/header/Header";

function AppRouter() {
  const [users, setUsers] = useState<User[]>([]);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [removeUser, setRemoveUser] = useState<User | null>(null);

  
  //função intermediaria para pegar o retorno de removeSelectedUser = updatedList
  function handleRemoveUser(user: User){
    console.log('retorno de user no handle remover user:', user)
    const updatedList = removeSelectedUser(user, users)
    setUsers(updatedList)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserList setEditUser={setEditUser} setRemoveUser={handleRemoveUser} users={users} />,
    },
    {
      path: "/userForm",
      element: <UserForm setUsers={setUsers} editUser={editUser} />,
    },
    {
      path: "*",
      element: <h3>route not found!</h3>,
    },
  ]);

  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
  
}

export default AppRouter;
