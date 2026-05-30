import { useContext } from "react"
import { UserContext } from "../../layouts/MainLayout";
import "./UserLogin.css"

const UserLogin = () => {

    const userContext = useContext(UserContext);

    if(!userContext) return null;

    const {isLoggedIn, setIsLoggedIn} = userContext;

    console.log('valor que chegou no user login:', isLoggedIn)

    const onSubmitLogin = () => {
        console.log('fez login')
        setIsLoggedIn(true);
    }

    return(
        <>
        <section>
             <h1>Welcome Back</h1>
            <form onSubmit={onSubmitLogin}>

                {/* email */}
                <div className="input-container">
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" placeholder="type your email" />
                </div>

                {/* password */}
                <div className="input-container">
                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" placeholder="type your password" />
                </div>

                <button type="submit">{isLoggedIn === true ? 'Login' : 'Subscribe'}</button>
            </form>
        </section>
        </>
    )
}

export default UserLogin