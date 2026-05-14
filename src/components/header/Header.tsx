import "./Header.css";

import tableIcon from "../../assets/table-icon.png"
import formIcon from "../../assets/form-icon.png"

function Header(){

    function navigateToUsersTable(){}

    function navigateToUsersForm(){}

    return(
        <>
        <section className="users-header-container">
            <div className="users-category" onClick={navigateToUsersTable}>
                <img src={tableIcon} alt="" width={"30px"} />
                <span>Users Table</span>
            </div>
            <div className="users-category" onClick={navigateToUsersForm}>
                <img src={formIcon} alt="" width={"30px"} />
                <span>Users Form</span>
            </div>
        </section>
        </>
    )
}

export default Header;