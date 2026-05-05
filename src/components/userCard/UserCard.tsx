import './userCard.css'


type Props = {
  setUsers: React.Dispatch<React.SetStateAction<any[]>>
}


export function UserForm({setUsers}: Props){
  function submitForm(event: React.FormEvent<HTMLFormElement> ){

  event.preventDefault();

  const form = new FormData(event.currentTarget);

  const name = form.get('name');
  const age = form.get('age');
  const occupation = form.get('occupation');

  console.log({name, age, occupation})

  //salvando os dados informados para serem exibidos na tabela
  const newUser = {name, age, occupation};

  setUsers((prev)=> [...prev, newUser])

  //limpa os campos do formulário depois de gravar os dados
  event.currentTarget.reset();


}

    return(
        <>
        <h1>user Form</h1>

        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="">nome</label>
            <input name="name" type="text" />
          </div>
           <div>
            <label htmlFor="">idade</label>
            <input name="age" type="text" />
          </div>
           <div>
            <label htmlFor="">ocupacao</label>
            <input name="occupation" type="text" />
          </div>

          <button type='submit'>salvar dados</button>
          
        </form>
        </>
    )
}

