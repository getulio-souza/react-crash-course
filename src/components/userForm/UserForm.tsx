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
      setName(editUser.name || "");
      setAge(editUser.age || "");
      setOccupation(editUser.occupation || "");
    }
  }, [editUser]);


  //use effect para os usuarios do localStorage
  useEffect(()=> {
    const storedUsers = JSON.parse(localStorage.getItem('newUser') || '')
    
    if(!storedUsers) return;

    if(Array.isArray(storedUsers)){
      setUsers(storedUsers)
    } 
  },[])

  //se o array de dependencias estiver vazio, ele vai rodar apenas uma vez
  //nesse caso queremos que ele rode sempre que editUser mudar (o usuario selecionar um usuario diferente na tabela)

  function SubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form: FormData = new FormData(event.currentTarget);

    const id: number = Math.floor(Math.random() * 1000);
    const name: string = form.get("name") as string;
    const age: string = form.get("age") as string;
    const occupation: string = form.get("occupation") as string;

    //criando o objeto newUser
    const newUser = { id, name, age, occupation };
    console.log('new user:', newUser)

    let newUsersList: any[] = [];

    //obtendo os usuarios já guardados no localStorage
    let previousUsers = localStorage.getItem('newUser');
    console.log('previousUsers:', previousUsers)

    if(previousUsers){
      console.log('Existe usuarios no localStorage!')

      //se houver dados no localStorage, converta para o formato com JSON.parse
      previousUsers = JSON.parse(previousUsers);

      //verifica se é um array
      if(Array.isArray(previousUsers)){
        newUsersList = [newUser, ...previousUsers];
      }

      //SE NAO FOR UM ARRAY
      else{
        console.log('NAO É ARRAY')
        //TRANSFORMAR O OBJETO EM UMA LISTA E INCLUIR O NOVO USUARIO
        newUsersList = [previousUsers, newUser];

      }
    } else{
      console.log('NAO Existe usuarios no localStorage! Gravando o primeiro usuário...')
      //se nao existir nada no localStorage, começa com o primeiro cadastro
      newUsersList = [newUser]
    }

    console.log(newUsersList)  

    //salvando os dados novos e antigos no localStorage
    localStorage.setItem('newUser', JSON.stringify(newUsersList))

    //atualizando o state
    setUsers(newUsersList)

    //limpa os campos do formulário depois de gravar os dados
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
