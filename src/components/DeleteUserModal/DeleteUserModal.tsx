import CloseIcon from '@mui/icons-material/Close';

function DeleteUserModal(){
    return(
        <>
        <article>
            <CloseIcon/>
            <h3 className="delete-user-message">
                Tem certeza que deseja excluir o usuario: <strong>nome do usuario aqui</strong>
            </h3>
            <div className="btn-container">
                <button className="btn-cancel"></button>
                <button className="btn-save"></button>
            </div>
        </article>
        </>
    )
}

export default DeleteUserModal;