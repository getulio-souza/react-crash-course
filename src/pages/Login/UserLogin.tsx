import { useContext, useState } from "react"
import { UserContext } from "../../layouts/MainLayout";
import "./UserLogin.css"

const UserLogin = () => {

    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");

    const userContext = useContext(UserContext);

    if(!userContext) return null;

    const {isLoggedIn, setIsLoggedIn} = userContext;

    const onSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(userEmail)
        console.log(userPassword)

        if(userEmail === ""){
            return 'the email field could not be empty'
        }

        if(userPassword === ""){
            return 'the password field could not by empty'
        }


    }

    return(
        <>
        <section>
             <h1>Welcome Back</h1>
            <form onSubmit={onSubmitLogin}>

                {/* email */}
                <div className="input-container">
                    <label htmlFor="">Email</label>
                    <input value={userEmail} onChange={(e)=> setUserEmail(e.target.value)} type="text" name="" id="" placeholder="type your email" />
                </div>

                {/* password */}
                <div className="input-container">
                    <label htmlFor="">Password</label>
                    <input value={userPassword} onChange={(e)=> setUserPassword(e.target.value)} type="text" name="" id="" placeholder="type your password" />
                </div>

                <button type="submit">{isLoggedIn === true ? 'Login' : 'Subscribe'}</button>
            </form>
        </section>
        </>
    )
}

export default UserLogin