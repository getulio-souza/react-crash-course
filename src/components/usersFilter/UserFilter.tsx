import type { ChangeEvent } from "react";
import "./UserFilter.css"

type Props = {
    setSearchUser: React.Dispatch<React.SetStateAction<string>>;
    userInputText: string;
}

function UserFilter({setSearchUser, userInputText}: Props){

    function onFilterUsers(event:ChangeEvent<HTMLInputElement>){
        const inputValue = event.target.value;
        setSearchUser(inputValue);
    }


    return(
        <>
        <div className="filter-container">
        <span>filtro de usuarios: </span>
        <div className="filter-input-and-btn">
        <input 
        placeholder="digite o nome do usuario"
            value={userInputText}
            onChange={onFilterUsers} 
            type="text" 
            name="" 
            id="" 
        />
        </div>
        </div>
        </>
    )
}

export default UserFilter;