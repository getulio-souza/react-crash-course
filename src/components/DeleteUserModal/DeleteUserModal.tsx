import CloseIcon from '@mui/icons-material/Close';
import "./DeleteUserModal.css"
import type { User } from '../../types/User';

type Props = {
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    setRemoveUser: React.Dispatch<React.SetStateAction<User>>
}

function DeleteUserModal({setShowDeleteModal, setRemoveUser}: Props){

    function onCancelDeleteUser(){
        console.log('chamou o cancelar no modal')
        setShowDeleteModal(false);
    }

    function onDeleteUser(){
        setRemoveUser()
    }



    return(
        <>
        <article className='delete-modal-container'>
            <div className='close-modal-icon' onClick={onCancelDeleteUser}><CloseIcon/></div>
            <h3 className="delete-user-message">
                Tem certeza que deseja excluir o usuario: 
            </h3>
            <span style={{color: 'red', marginBottom: '10px'}}>nome do usuario aqui</span>
            <div className="btn-container">
                <button onClick={onCancelDeleteUser} className="btn-cancel">Cancelar</button>
                <button onClick={onDeleteUser} className="btn-save">Confirmar</button>
            </div>
        </article>
        </>
    )
}

export default DeleteUserModal;