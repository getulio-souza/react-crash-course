import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import type { User } from "../types/User"
import Footer from "../components/Footer/Footer";
import "./MainLayout.css"
import UserLogin from "../pages/Login/UserLogin";
import { createContext, useState } from "react";

type Props = {
    setEditUser: React.Dispatch<React.SetStateAction<User | null>>;
}

type UserContext = {
    isUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext<UserContext | false>(false);

function MainLayout({setEditUser}: Props){

    const [isLoggedIn, setIsLoggedIn] = useState<UserContext | false>(false);

    return(
        <>
        
        <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <UserLogin/>
        </UserContext.Provider>

       {/* isLoggedIn = false
       !isLoggedIn = true */}
        {isLoggedIn ? <section className="main-container">
            <Header
                setEditUser={setEditUser}
            />
            <main>
            <Outlet/>
            </main>
            <Footer/>
        </section> : ''}
        
        </>
    )
}

export default MainLayout