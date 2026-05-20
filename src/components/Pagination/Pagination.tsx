import "./Pagination.css"

type Props = {
    currentPage: number;
    itemsPerPage: number;
    moveToNextPage: () => void
    totalPages: number;
}

const UsersPagination = ({currentPage, itemsPerPage, moveToNextPage, totalPages}: Props) => {

    const pageNumbers: number[] = [totalPages];

    //para pegar o total de paginas preciso dividir o totalitems / itemperpage

    function onMoveToFirstPage(){

    }

    function onMoveToPreviousPage(){

    }
    
    function onMoveToNextPage(){
        moveToNextPage();
    }

    function onMoveToNextPageLastPage(){

    }
    
    return (
    <section className="pagination-container">
        <button onClick={onMoveToFirstPage} className='prev-btn'>Primeira</button>
        <button onClick={onMoveToPreviousPage} className='prev-btn'>Anterior</button>
        
        {/* no meio vai a quantidade de paginas de acordo com a quantidade de usuários */}
        <div className="pagination-number">
        {pageNumbers.map((item, index)=> {
            return(<span key={index}>{item}</span>)
        })}
        </div>
        
        <button onClick={onMoveToNextPage} className='next-btn'>Próxima</button>
        <button onClick={onMoveToNextPageLastPage} className='next-btn'>Última</button>
    </section>
  )
}


export default UsersPagination;