import "./Header.css";
import tableIcon from "../../assets/table-icon.png"
import formIcon from "../../assets/form-icon.png"
import { Link } from "react-router";


function Header(){

    function navigateToUsersTable(){}

    function navigateToUsersForm(){}

    return(
        <>
        <section className="users-header-container">
            
            <Link to={{pathname: "/"}}>
            <div className="users-category" onClick={navigateToUsersTable}>
                <img src={tableIcon} alt="" width={"30px"} />
                <span>Users Table</span>
            </div>
            </Link>

            <Link to={{pathname: "/userForm"}}>
            <div className="users-category" onClick={navigateToUsersForm}>
                <img src={formIcon} alt="" width={"30px"} />
                <span>Users Form</span>
            </div>
            </Link>
        </section>
        </>
    )
}

export default Header;