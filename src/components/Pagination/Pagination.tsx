import "./Pagination.css"

type Props = {
    currentPage: number;
    itemsPerPage: number;
    moveToNextPage: () => void;
    moveToPreviousPage: () => void;
    moveToFirstPage: () => void;
    moveToLastPage: () => void;
    totalPages: number;
}

const UsersPagination = ({currentPage, itemsPerPage, totalPages, moveToNextPage, moveToPreviousPage, moveToFirstPage, moveToLastPage}: Props) => {

    const pageNumbers: number[] = [];

    let firstPage: number = 1;

    const lastPage: number = totalPages;

    while(firstPage <= lastPage){
        pageNumbers.push(firstPage)
        firstPage = firstPage + 1
    }

    console.log(pageNumbers)

    function onMoveToFirstPage(){
        moveToFirstPage();
    }

    function onMoveToPreviousPage(){
        moveToPreviousPage();

    }
    
    function onMoveToNextPage(){
        moveToNextPage();
    }

    function onMoveToNextPageLastPage(){
        moveToLastPage()
    }
    
    return (
    <section className="pagination-container">
        <button onClick={onMoveToFirstPage} className='prev-btn'>Primeira</button>
        <button onClick={onMoveToPreviousPage} className='prev-btn'>Anterior</button>
        
        {/* no meio vai a quantidade de paginas de acordo com a quantidade de usuários */}
        <div
         className="pagination-number"
         >
        {pageNumbers.map((item, index)=> {
            return(<span className={item === currentPage ? 'currentPage' : 'otherPages'} key={index}>{item}</span>)
        })}
        </div>
        
        <button onClick={onMoveToNextPage} className='next-btn'>Próxima</button>
        <button onClick={onMoveToNextPageLastPage} className='next-btn'>Última</button>
    </section>
  )
}


export default UsersPagination;