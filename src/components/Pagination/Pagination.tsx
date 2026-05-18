import "./Pagination.css"

type Props = {
    currentPage: number;
    itemsPerPage: number;
    setCurrentPage: ()=> void
}

const UsersPagination = ({currentPage, itemsPerPage, setCurrentPage}: Props) => {

    const pageNumbers: number[] = [1,2,3,4,5,6,7,8,9,10];

    const totalPages = currentPage * itemsPerPage;

    function onMoveToFirstPage(){

    }

    function onMoveToPreviousPage(){

    }
    
    function onMoveToNextPage(){
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