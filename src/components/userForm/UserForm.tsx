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

  console.log("editUser:", editUser);

  useEffect(() => {
    if (editUser) {
      setName(editUser.name || "");
      setAge(editUser.age || "");
      setOccupation(editUser.occupation || "");
    }
  }, [editUser]);

  function SubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form: FormData = new FormData(event.currentTarget);

    const id: number = Math.floor(Math.random() * 1000);
    const name: string = form.get("name") as string;
    const age: string = form.get("age") as string;
    const occupation: string = form.get("occupation") as string;

    console.log({ name, age, occupation });

    //salvando os dados informados para serem exibidos na tabela
    const newUser = { id, name, age, occupation };

    setUsers((prev) => {
      if (editUser) {
        return prev.map((user) => (user.id === editUser.id ? newUser : user));
      }
      return [...prev, newUser];
    });

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
