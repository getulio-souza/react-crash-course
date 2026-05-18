import React from 'react'
import "./Pagination.css"

const UsersPagination = () => {

    const pageNumbers: number[] = [2,3,4,5,6,7,8,9,10];
    
    return (
    <section className="pagination-container">
        <button className='prev-btn'>Anterior</button>
        
        {/* no meio vai a quantidade de paginas de acordo com a quantidade de usuários */}
        <div className="pagination-number">
        {pageNumbers.map((item)=> {
            return(<span>{item}</span>)
        })}
        </div>
        
        <button className='next-btn'>Próxima</button>
    </section>
  )
}

export default UsersPagination