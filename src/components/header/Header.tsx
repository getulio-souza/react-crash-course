import "./Header.css";
import tableIcon from "../../assets/table-icon.png"
import formIcon from "../../assets/form-icon.png"
import { Link } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView"
import DescriptionIcon from "@mui/icons-material/Description"
function Header(){

    function navigateToUsersTable(){}

    function navigateToUsersForm(){}

    return(
        <>
        <section className="users-header-container">
            
            <Link style={{textDecoration: 'none', color: '#fff'}} to={{pathname: "/"}}>
            <div className="users-category" onClick={navigateToUsersTable}>
                <GridViewIcon/>
                <span>USERS TABLE</span>
            </div>
            </Link>

            <Link style={{textDecoration: 'none', color: '#fff'}} to={{pathname: "/userForm"}}>
            <div className="users-category" onClick={navigateToUsersForm}>
                <DescriptionIcon/>
                <span>USERS FORM</span>
            </div>
            </Link>
        </section>
        </>
    )
}

export default Header;