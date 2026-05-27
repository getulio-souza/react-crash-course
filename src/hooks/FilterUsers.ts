import { useState } from "react";
import type { User } from "../types/User";

type Props = {
    users: User[],
}

export function FilterUsers({users}: Props){

    const [selectedSortOption, setSelectedSortOption] = useState<string>("");
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    const usersSorted = [...users];

    //metodo para filtar o select de opcoes
      function onSortUsers(selectedOption: string) {
        //se for idade crescente
        if (selectedOption === "idadeCrescente") {
          const sortHigherAge = usersSorted.sort(
            (a, b) => Number(a.age) - Number(b.age),
          );
          console.log(sortHigherAge);
          setSelectedSortOption(selectedOption);
          setFilteredUsers(usersSorted)
        }
    
        //se for idade decrescente
        if (selectedOption === "idadeDecrescente") {
          const sortLowerAge = usersSorted.sort(
            (a, b) => Number(b.age) - Number(a.age),
          );
          console.log(sortLowerAge);
          setSelectedSortOption(selectedOption);
          setFilteredUsers(usersSorted)
        }
    
        //se for a-Z
        if (selectedOption === "a-z") {
          const sortAz = usersSorted.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return -1;
          });
          console.log(sortAz);
          setSelectedSortOption(selectedOption);
          setFilteredUsers(usersSorted)
        }
    
        //se for z-A
        if (selectedOption === "z-a") {
          const sortZA = usersSorted.sort((a, b) => {
            if (a.name.toLocaleLowerCase() > b.name.toLowerCase()) return -1;
            return 1;
          });
          console.log(sortZA);
          setSelectedSortOption(selectedOption);
          setFilteredUsers(usersSorted)
        }
    }
    
    return{
        filteredUsers,
        selectedSortOption, //opção selecionada no select
        onSortUsers
    }
      
}

