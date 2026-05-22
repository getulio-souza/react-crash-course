import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView"
import DescriptionIcon from "@mui/icons-material/Description"
import type { User } from "../../types/User";

type Props = {
    setEditUser: React.Dispatch<React.SetStateAction<User | null>>
    
}

function Header({setEditUser}: Props){

    const navigate = useNavigate();

    function navigateToUsersTable(){}

    function createUserForm(){
        setEditUser(null)
        navigate("/userForm")
    }

    return(
        <>
        <section className="users-header-container">
            
            <Link style={{textDecoration: 'none', color: '#fff'}} to={{pathname: "/"}}>
            <div className="users-category" onClick={navigateToUsersTable}>
                <GridViewIcon/>
                <span>Lista de Usuários</span>
            </div>
            </Link>

            <Link style={{textDecoration: 'none', color: '#fff'}} to={{pathname: "/userForm"}}>
            <div className="users-category" onClick={createUserForm}>
                <DescriptionIcon/>
                <span>Criar Novo Usuário</span>
            </div>
            </Link>
        </section>
        </>
    )
}

export default Header;