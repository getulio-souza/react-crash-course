import { useEffect } from "react";
import "./Pagination.css"
import type { User } from "../../types/User";

type Props = {
    currentPage: number;
    itemsPerPage: number;
    totalUsers: number;
}

const UsersPagination = ({currentPage, itemsPerPage, totalUsers}: Props) => {

    const pageNumbers: number[] = [1,2,3,4,5,6,7,8,9,10];

    function onMoveToFirstPage(){

    }

    function onMoveToPreviousPage(){

    }
    
    function onMoveToNextPage(){
     currentPage
     itemsPerPage
     totalUsers
    }

    function onMoveToNextPageLastPage(){

    }
    
    return (
    <section className="pagination-container">
        <button onClick={onMoveToFirstPage} className='prev-btn'>Primeira</button>
        <button onClick={onMoveToPreviousPage} className='prev-btn'>Anterior</button>
        
        {/* no meio vai a quantidade de paginas de acordo com a quantidade de usuários */}
        <div className="pagination-number">
        {pageNumbers.map((item)=> {
            return(<span>{item}</span>)
        })}
        </div>
        
        <button onClick={onMoveToNextPage} className='next-btn'>Próxima</button>
        <button onClick={onMoveToNextPageLastPage} className='next-btn'>Última</button>
    </section>
  )
}

export default UsersPagination