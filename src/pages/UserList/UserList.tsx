import { useEffect, useState } from 'react';
import type { User } from '../../types/User';
import UserFilter from '../../components/usersFilter/UserFilter';
import './userList.css'
import OrderList from '../../components/OrderList/OrderList';
import { useNavigate } from 'react-router-dom';
import DeleteUserModal from '../../components/DeleteUserModal/DeleteUserModal';

type Props = {
    users: User[];
    setEditUser: React.Dispatch<React.SetStateAction<User>>;
    setRemoveUser: React.Dispatch<React.SetStateAction<User>>;
}

export function UserList({users, setEditUser, setRemoveUser}: Props){    
  const navigate = useNavigate()

  //filtros
  const [searchUser, setSearchUser] = useState<User[]>(users);
  const [sortUsers, setSortUsers] = useState('');

  const [selectedUser, setSelectedUser] = useState<User>();


  //state para o modal de deleção
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //metodo para abrir o modal de deleção
    function onOpenDeleteUserModal(selectedUser: User){
      console.log('usuario selecionado para deletar no modal:', selectedUser)

      setSelectedUser(selectedUser)

      setShowDeleteModal(true)
    }

    //funcao para deletar o usuario de vez (botão deletar no modal)
  function onConfirmDeleteUser(selectedUser: User) {
      console.log('usuario no on confirme delete user:', selectedUser)
       setRemoveUser(selectedUser)
    }


    function onEditUser(selectedUser: User){
      ///quando eu clicar em editar, eu preciso enviar os dados do usuario selecionado para o formulario
      console.log('usuario selecionado:',selectedUser);
      console.log('tipo do usuario selecionado:', typeof selectedUser);

      setEditUser(selectedUser);
      navigate("/userForm")

    }

  //metodo para filtrar o input de texto
    function onSearchUsers(userInput: string){
      console.log('filtrando usuarios no componente de tabela:', userInput)
      console.log('array de users:', users)
      
      //logica para mostrar os items filtrados na tabela
      const newUserList = users.filter((user)=> user.name.toLowerCase().startsWith(userInput.toLowerCase()))
      console.log('novo usuario filtrado:', newUserList)

      //com o usuario filtrado retornado, atualizar a tabela 
      setSearchUser(newUserList)
  }
  

  //metodo para filtar o select de opcoes
  function onSortUsers(selectedOption: string) {
    console.log("opcao selecionada:", selectedOption)

    console.log('users apos selecionar uma opcao no select:', users)

    //se for idade crescente
    if(selectedOption === 'idadeCrescente'){
      const sortHigherAge = users.sort((a, b)=> Number(a.age) - Number(b.age))
      console.log(sortHigherAge)
      setSortUsers(selectedOption)
    }

    //se for idade decrescente 
    if(selectedOption === 'idadeDecrescente'){
      const sortLowerAge = users.sort((a, b)=> Number(b.age) - Number(a.age))
      console.log(sortLowerAge)
      setSortUsers(selectedOption)
    }

    //se for a-Z
    if(selectedOption === 'a-z'){
      const sortAz = users.sort((a,b)=> {
        if(a.name > b.name) return 1
        return -1
      })
      console.log(sortAz)
      setSortUsers(selectedOption)
    }

    //se for z-A
    if(selectedOption === 'z-a'){
      const sortZA = users.sort((a,b)=> {
        if(a.name > b.name) return -1
        return 1
      }) 
      console.log(sortZA)
      setSortUsers(selectedOption)
    }
  }

  function onCleanFilters(){
    console.log('chamou o limpar filtros!')

    //essa funcao tem que retornar a lista original 
    //limpar tambem a opção selecionada no select
    setSortUsers('');
    setSearchUser([])

  }


    useEffect(()=> {
      setSearchUser(users)
    }, [users])

    useEffect(()=> {
    }, [])

    return (
      <>
        <section className="list-container">
          {/* modal de deleção */}
          {showDeleteModal && (
            <DeleteUserModal
              setShowDeleteModal={setShowDeleteModal}
              selectedUser={selectedUser}
              onConfirmDeleteUser={onConfirmDeleteUser}
            />
          )}

          <h2>lista de usuarios</h2>

          {/* filtros */}
          <div className="filters-container">
            <UserFilter setSearchUser={onSearchUsers} />
            <OrderList setSortUsers={onSortUsers} />
            <button onClick={onCleanFilters}>clear Filters</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>age</th>
                <th>Ocupation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.length === 0 && (
                <tr
                  style={{ color: "red", fontWeight: "bold", padding: "10px" }}
                >
                  <td>sem usuarios para exibir</td>
                </tr>
              )}
              {searchUser.map((user: User, index: any) => (
                <tr key={index}>
                  <td data-label="id: ">{user?.id}</td>
                  <td data-label="nome: ">{user?.name}</td>
                  <td data-label="idade: ">{user?.age}</td>
                  <td data-label="ocupação: ">{user?.occupation}</td>
                  <td className="actions-list">
                    <button
                      className="edit-btn"
                      onClick={() => onEditUser(user)}
                    >
                      Editar
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => onOpenDeleteUserModal(user)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </>
    );
}