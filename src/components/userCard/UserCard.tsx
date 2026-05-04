import './userCard.css'

export function UserForm(){
    return(
        <>
        <h1>user Form</h1>

        <form action="">
          <div>
            <label htmlFor="">nome</label>
            <input type="text" />
          </div>
           <div>
            <label htmlFor="">idade</label>
            <input type="text" />
          </div>
           <div>
            <label htmlFor="">ocupacao</label>
            <input type="text" />
          </div>

          <button type='submit'>salvar dados</button>
          
        </form>
        </>
    )
}

