import { useEffect, useState } from "react";
import "./userForm.css";
import type { User } from "../../types/User";

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  editUser: User | null;
};

export function UserForm({ setUsers, editUser }: Props) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");

  //para mostrar o usuario editado no formulario
  useEffect(() => {
    if (editUser) {
      console.log("edit user existe:", editUser);
      setName(editUser.name || "");
      setAge(editUser.age || "");
      setOccupation(editUser.occupation || "");
    }
  }, [editUser]);

  //use effect para os usuarios do localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("newUser") || "[]");

    if (!storedUsers) return;

    if (Array.isArray(storedUsers)) {
      setUsers(storedUsers);
    }
  }, []);
  //se o array de dependencias estiver vazio, ele vai rodar apenas uma vez
  //nesse caso queremos que ele rode sempre que editUser mudar (o usuario selecionar um usuario diferente na tabela)

  
    function SubmitForm(event: React.FormEvent<HTMLFormElement> ){

      event.preventDefault();
  
      const form: FormData = new FormData(event.currentTarget);
  
      const newUser = getFormData(form);
  
      const previousUsers = getUsersFromLocalStorage();
  
      const updatedUsers = editUser ? updateUser(previousUsers, newUser) : createUser(previousUsers, newUser)
      
      localStorage.setItem('newUser', JSON.stringify(updatedUsers))
  
      saveUsers(updatedUsers)
  
      clearForm();
    }
  


  //pegando dados do formulario
  function getFormData(form: FormData){
    const id = editUser?.id || Math.floor(Math.random() * 1000);

    return {
      id,
      name: form.get("name") as string,
      age: form.get("age") as string,
      occupation: form.get("occupation") as string
    }
  }


  //pegando os usuarios do localStorage
  function getUsersFromLocalStorage(){
    const users = localStorage.getItem('newUser');

    if(!users) return [];

    const parsedUsers = JSON.parse(users)

    return Array.isArray(parsedUsers) ? parsedUsers : [parsedUsers];
  }


  //atualizando users ao clicar no botao edit
  function updateUser(users: any[], newUser: any){
    return users.map((user)=> {
      if(user.id === newUser.id){
        return newUser;
      }
      return user;
    })
  }


  //criando novo usuario
  function createUser(users: any[], newUser: any){
    return [newUser, ...users]
  }

  //salvando so dados no localStorage
  function saveUsers(users: any[]){

    localStorage.setItem('newUser', JSON.stringify(users));
    
    setUsers(users)
  }

  
  //limpando os dados do formulario
  function clearForm(){
    setName("");
    setAge("");
    setOccupation("");
  }

  return (
    <>
      <h1>user Form</h1>

      <form onSubmit={SubmitForm}>
        <div>
          <label htmlFor="">nome</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="digite seu nome"
            name="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">idade</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="digite sua idade"
            name="age"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">ocupacao</label>
          <input
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            placeholder="digite sua profissão"
            name="occupation"
            type="text"
          />
        </div>

        <button type="submit">salvar dados</button>
      </form>
    </>
  );
}
