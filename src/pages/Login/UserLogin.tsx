import { useState } from "react"

const UserLogin = () => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const onSubmitLogin = () => {
        console.log('fez login')
        setIsLoggedIn(true)
    }

    return(
        <>
        <section>
            <form onSubmit={onSubmitLogin} action="">

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