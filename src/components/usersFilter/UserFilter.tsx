import type { ChangeEvent } from "react";
import "./UserFilter.css"

type Props = {
    setSearchUser: React.Dispatch<React.SetStateAction<string>>
}

function UserFilter({setSearchUser}: Props){

    function onFilterUsers(event:ChangeEvent<HTMLInputElement>){
        console.log('filtrando usuarios:', event.target.value)

        const inputValue = event.target.value;

        setSearchUser(inputValue);
    }


    return(
        <>
        <div className="filter-container">
        <span>filtro de usuarios: </span>
        <div className="filter-input-and-btn">
        <input onChange={onFilterUsers} type="text" name="" id="" />
        {/* <button onClick={onFilterUsers}>fltrar</button> */}
        </div>
        </div>
        </>
    )
}

export default UserFilter;